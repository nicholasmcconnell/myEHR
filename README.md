# MyEHR
MERN Stack Web Application used for keeping track of personal health records. 

## Description
This full-stack web application follows the MVC design pattern for users to input and save their personal medical health records in a database (MongoDB). In addition to general information, users can add/update medications, conditions, and contact information (doctor, pharmacy, emergency contact) for themself and others. The application utilizes several APIs to allow the user to search for their prescription and/or condition and view their descriptions. 

The user, also known as the caregiver, might not be professionally trained and may not know all of the caree's information in order to effectively communicate with medical professionals. The value of this application is that it allows the user to have all necessary information on hand to be able to provide the utmost care for their caree/dependent, and even for themself. 

Users will only have access to profiles that are associated with their account and will not have access to other users' data. This application utilizes protected routes so that the information cannot be access unless an authorized user is logged in. Sensitive information, including API keys and passwords are protected using NPM packages Dotenv and Bcrypt, respectively, to prevent the data from being compromised. 

## User Story
•	AS A patient, I WANT to keep track of my information, SO THAT I can access and update it when necessary, and can find more information on medications and conditions

•	AS A caregiver, I WANT to have their information readily available, SO THAT it can be accessed during appointments or medical emergencies

## Navigating the Application 
- Visit the deployed app on Heroku: [Here](https://myehr-app.herokuapp.com/ "Here")
- View the repository: [Here](https://github.com/nicholasmcconnell/myEHR "Here")
- User is taken to the home/landing page. To get started, click "Get Started" to be redirected to Sign Up or click on the Log In or Sign Up buttons in the navigation bar. 
- Once an account is created, the credentials are saved to the database and the user may log in. If the user already has an existing account, the user may log in. If the credentials entered match an existing account, the user will be logged in an redirected to the Profiles page.
- For existing accounts, the Profiles page will list all patient profiles available that are associated with that account. For new accounts, the user may select the option to add a patient profile.
- Once a name card is selected, the user will be redirected to that particular patient's electronic health record (EHR) page. This page is separated by general information, health information, conditions, medications, and contacts. 
    - If the user selects the option to add patient, the user will also see a similar EHR page with blank fields to enter and save to the database. 
    - The user may update and save the various fields (new insurance information, notes, medications, etc)
    - The user can search for conditions and add them. The condition searches will include a short description. 
    - Additionally, the user can add medications and dosage. 
- The user can only access the private information associated with their account once logged in, and may log out at any point. 

## Images

https://user-images.githubusercontent.com/48693333/81631559-1b635300-93d6-11ea-9de1-5181f3211ffd.gif

## Tools Used
* Merriam Webster Medical Dictionary API 
* Clinical Table Search Service API 
* RxNav National Library of Medication API
* React.js
* Node.js
* Express
* MongoDB
* Mongoose ORM
* Passport.js
* Bootstrap 
* Photoshop
* MLab

## Contributors 
- **Alicia Burn** - _Full-Stack Development_ - [Alicia Burn](https://github.com/AliciaBurn "Alicia Burn")
- **Dana Chen** - _Full-Stack Development_ - [Dana Chen](https://github.com/danachen99 "Dana Chen")
- **Nick McConnell** - _Full-Stack Development_ - [Nick McConnell](https://github.com/nicholasmcconnell "Nick McConnell")
- **Page Tyler** - _Full-Stack Development_ - [Page Tyler](https://github.com/drthisguy "Page Tyler")
