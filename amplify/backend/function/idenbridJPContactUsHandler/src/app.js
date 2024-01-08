const AWS = require('aws-sdk')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var bodyParser = require('body-parser')
var express = require('express')
const { v4: uuidv4 } = require('uuid')
AWS.config.update({ region: process.env.REGION });
const ses = new AWS.SES({
  region: process.env.REGION,
});
const dynamodb = new AWS.DynamoDB.DocumentClient();
let tableName = "IdenbridContact-ucuhjib64bcctl6oyhcizmdanu-dev";

var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});
const sendEmail = async (emailData) => {
  let emailParams = {
    Destination: {
      ToAddresses: [
        emailData.to,
      ]
    },
    Message: {
      Body: {
        Text: {
          Data: emailData.body
        }
      },
      Subject: {
        Data: emailData.subject
      }
    },
    Source: emailData.from,
  };
  try {
    await ses.sendEmail(emailParams).promise();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
app.get('/contactus', async (request, response) => {
  try {
    const params = {
      TableName: tableName,
      Limit: 100,
    };
    const result = await dynamodb.scan(params).promise();
    response.status(200).json({ data: result.Items });
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});
app.get('/contactus/:id', async (request, response) => {
  try {
    const params = {
      TableName: tableName,
      Key: {
        id: request.params.id
      }
    };
    const result = await dynamodb.get(params).promise();
    response.status(200).json({ data: result.Item });
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});
app.post('/contactus', async (request, response) => {
  const timestamp = new Date().toISOString();
  try {
    if (!request.body.inquiryMatter) {
      throw new Error('Enquiry Matter is required');
    }
    if(!request.body.companyName){
      throw new Error('Company Name is required');
    }
    if(!request.body.email){
      throw new Error('Email is required');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.body.email)) {
      throw new Error('Email Address is invalid.');
		}
    if(!request.body.inchargePerson) {
      throw new Error('Incharge Person Iis required.');
    }
    if(!request.body.description){
      throw new Error('Content Of Inquiry is required');
    }

    let params = {
      TableName: tableName,
      Item: {
        ...request.body,
        id: uuidv4(),
        createdAt: timestamp,
        updatedAt: timestamp,
      }
    }
    await dynamodb.put(params).promise();
    let emailBody = {
      from: process.env.SOURCE_EMAIL,
      to: process.env.SOURCE_EMAIL,
      body: `
      Dear Admin,

      You have received a new contact form submission with the following details:

      Inquiry Matters: ${request.body.inquiryMatter}
      Company Name: ${request.body.companyName}
      Name Of Person InCharge: ${request.body.inchargePerson}
      Email: ${request.body.email}
      Phone Number: ${request.body.phoneNo}
      Content Of Inquiry: ${request.body.description}

      Please review the application and take appropriate action.

      Thank you for your attention.
      `,
      subject: 'New Contact Form Submission'
    }
    await sendEmail(emailBody)
    let adminEmailBody;
    if (request.body.jp) {
      adminEmailBody = {
        from: process.env.SOURCE_EMAIL,
        to: request.body.email,
        body: `
        ${request.body.inchargePerson} 様,
  
        この度はアイデンブリッド / IDENBRIDへのお問い合わせいただき、誠にありがとうございます。
  
        お問い合わせいただいた件につきまして、詳細を精査し、適切な回答をご提供できるよう努めています。
        担当者より2-3日以内に返答を差し上げる予定ですので、今しばらくお待ちいただけますと幸いです。
  
        ご質問やご不明点がございましたら、いつでもお気軽にご連絡ください。
        引き続きまして何卒よろしくお願いします。
  
        【お問い合わせ内容】
  
        お問い合わせ用件：${request.body.inquiryMatter}
        企業名：${request.body.companyName}
        ご担当者名：${request.body.inchargePerson}
        メール：${request.body.email}
        電話番号：${request.body.phoneNo}
        問い合わせ内容：${request.body.description}
  
        
        合同会社アイデンブリッド / IDENBRID INC.
        `,
        subject: '弊社へのご連絡誠にありがとうございます。'
      }
    } else {
      adminEmailBody = {
        from: process.env.SOURCE_EMAIL,
        to: request.body.email,
        body: `
        Dear ${request.body.inchargePerson},
  
        Thank you for your interest in IDENBRID.
  
        We are committed to examining the details of your inquiry and providing you with an appropriate response.
        Our staff will get back to you within 2-3 days.
  
        If you have any questions or concerns, please feel free to contact us at any time.
        Thank you for your continued support.
  
        Inquiry details
  
        Contact Information:${request.body.inquiryMatter}
        Company Name:${request.body.companyName}
        Name of person in charge:${request.body.inchargePerson}
        Mail:${request.body.email}
        Phone:${request.body.phoneNo}
        Inquiry Details:${request.body.description}
  
        
        IDENBRID INC.
        `,
        subject: 'Thank you for contacting us.'
      }
    }
    await sendEmail(adminEmailBody)
    response.status(200).json({ message: 'Your contact form has been successfully submitted. We will get back to you soon.'});
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});
app.delete("/contactus/:id", async function (request, response) {
  try {
    let params = {
      TableName: tableName,
      Key: {
        id: request.params.id
      }
    }
    const result = await dynamodb.delete(params).promise();
    response.status(200).json({ data: result });
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});

app.listen(3000, function () {
  console.log("App started")
});

module.exports = app
