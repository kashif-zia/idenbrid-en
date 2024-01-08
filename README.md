# IDENBDI INC.

Welcome to the official repository for the IDENBDI INC. This project is built using Next.js and utilizes various AWS services to deliver a scalable and performant web experience.

## Technologies Used

- **Next.js**: The website is built on the Next.js framework, which enables server-side rendering and efficient client-side navigation.

- **Sass for Styling**: Styling is done using Sass, a powerful and widely used CSS preprocessor, to maintain a modular and maintainable codebase.

- **AWS Amplify**: Amplify is used for continuous deployment, hosting, and serverless functions. It simplifies the deployment process and provides a seamless workflow.

- **AWS Lambda**: Lambda functions are utilized for serverless computing, allowing for scalable and cost-effective execution of backend logic.

- **AWS S3 Bucket**: S3 is used for storing and retrieving static assets, such as images, stylesheets, and client-side scripts.

- **AWS DynamoDB**: DynamoDB is employed as a NoSQL database for storing and retrieving dynamic data efficiently.

- **AWS GraphQL**: GraphQL is used as a query language for APIs, providing a flexible and efficient way to interact with backend services.

- **AWS API Gateway**: API Gateway is used to create, publish, and manage APIs securely at any scale. It acts as a front-door for applications to access data, business logic, or functionality from your backend services.


## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Idenbrid/idenbridjp-v1
   cd idenbridjp-v1
2. **Install dependencies::**

   ```bash
   npm install
3. **Configure AWS Amplify::**

   ```bash
   amplify pull --appId d38e7oa0jxzgi5 --envName dev
4. **Run the development server::**

   ```bash
   npm run dev

## Directory Structure

- **Pages**: All websites are inside App Directory
- **Components**: All website's components are inside UI Directory which is inside the App Directory
- **Assets**: All website's Assests including images, videos, fonts, css are inside Public Directory
