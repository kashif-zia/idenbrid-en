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
let tableName = "idenbridjpcareer";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}
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

app.get('/career', async (request, response) => {
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

app.get('/career/:id', async (request, response) => {
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

app.post('/career', async (request, response) => {
  const timestamp = new Date().toISOString();
  try {
    if (!request.body.applicationType) {
      throw new Error('Application Type is required');
    }
    if(!request.body.username){
      throw new Error('User Name is required');
    }
    if(!request.body.email){
      throw new Error('Email is required');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.body.email)) {
      throw new Error('Email Address is invalid.');
		}
    if(!request.body.phoneNo) {
      throw new Error('Phone Number Iis required.');
    }
    
    let params = {
      TableName: tableName,
      Item: {
        ...request.body,
        id: uuidv4(),
        createdAt: timestamp,
      }
    }
    await dynamodb.put(params).promise();
    let emailBody = {
      from: process.env.SOURCE_EMAIL,
      to: process.env.SOURCE_EMAIL,
      body: `
      Dear Admin,
      
      A new Recruitment Application Form has been submitted with the following details:

      Application Type: ${request.body.applicationType}
      Name: ${request.body.username}
      Email: ${request.body.email}
      Phone Number: ${request.body.phoneNo}

      Please review the application and take appropriate action.

      Thank you for your attention.
      `,
      subject: 'New Recruitment Application Submission'
    }
    await sendEmail(emailBody)
    let adminEmailBody;
    if (request.body.jp) {
      adminEmailBody = {
        from: process.env.SOURCE_EMAIL,
        to: request.body.email,
        body: `
        ${request.body.username} 様,
        
        この度はアイデンブリッド / IDENBRIDの求人へのご応募誠にありがとうございます。
  
        ご応募いただいた件につきまして、詳細を精査し、適切な回答をご提供できるよう努めています。
        担当者より2-3日以内に返答を差し上げる予定ですので、今しばらくお待ちいただけますと幸いです。
  
        ご質問やご不明点がございましたら、いつでもお気軽にご連絡ください。
        引き続きまして何卒よろしくお願いします。
  
        【ご応募内容】
  
        応募職種：${request.body.applicationType} 
        名前：${request.body.username}
        メール：${request.body.email}
        電話番号：${request.body.phoneNo}
  
        
        合同会社アイデンブリッド / IDENBRID INC.
        `,
        subject: '弊社へのご連絡誠にありがとうございます。'
      }
    } else {
      adminEmailBody = {
        from: process.env.SOURCE_EMAIL,
        to: request.body.email,
        body: `
        ${request.body.username} 様,
        
        Thank you for your interest in working at IDENBRID.
  
        We will examine the details of your application and make every effort to provide you with an appropriate response.
        Our staff will get back to you within 2-3 days.
  
        If you have any questions or concerns, please feel free to contact us at any time.
        Thank you for your continued support.
  
        Application Details
  
        Position applied for:${request.body.applicationType} 
        Name:${request.body.username}
        Mail:${request.body.email}
        Phone:${request.body.phoneNo}
  
        
        IDENBRID INC.
        `,
        subject: 'Thank you for contacting us.'
      }
    }
    await sendEmail(adminEmailBody)
    response.status(200).json({ message: 'Your application has been successfully submitted. Thank you for applying!'});
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});

app.delete("/career/:id", async function (request, response) {
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

app.listen(3000, function() {
  console.log("App started")
});

module.exports = app
