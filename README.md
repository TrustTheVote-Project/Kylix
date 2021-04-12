# Kylix

A web application front end and API backend for provisioning digital ballots and voter records, and enabling voters to download ballots to mark online, print, and mail back like any other absentee ballot.

## Environment

**Node version**: built/tested using Node v12.16.3. Untested on lower versions.

## Getting started

1. Install packages: `npm install`
2. Compile and bundle assets: `npm run start`
3. Open `http://localhost:9000` in a browser.
4. Browse api schema at `http://localhost:3000/api-browser.html`

## Demo

In the demo, enter the following to trigger a successful response:
Driver's License: W888444111666
Eye Color: Blue

## Architecture

**UI component library:** CMS design system
npm package: @cmsgov/design-system
githup repo: https://github.com/CMSgov/design-system
documentation: https://design.cms.gov/
From the website: "The CMS Design System currently meets or exceeds WCAG 2.0 AA and Section 508 standards"
https://github.com/CMSgov/design-system/tree/master/examples/react-app

## Deployments
The Elastic Beanstalk service is used to deploy the application to AWS. We don't have continuous deployment set up (yet), so for now you must deploy changes from your local machine.

### Elastic Beanstalk Setup
Before you deploy, you must first install the EB CLI. Links: 
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-getting-started.html

Do the following from the repo root to setup:
- Run `eb init`
- Select 1) us-east-1
- Select application `kylix`
- Select "no" for the CodeCommit option
- Run `eb use kylix-prod-env` to select the prod environment

### Elastic Beanstalk Deployment

To deploy a new version to kylix-demo-prod from the root of the application:
- Run `eb deploy` (sends code up to S3 & deploys application)
- Your changes should appear at kylix-demo.us-east-1.elasticbeanstalk.com

### Other
For the record, this was the command to create the environment: `eb create --sample --cname kylix-prod-env kylix-prod-env`
