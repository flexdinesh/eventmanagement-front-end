# Event Management Front
An Angular.js based Front-End for Event Registration Management

## Stack and Frameworks
1. Node.js with Express.js serves the html views to the user
2. Angular MVC controlled pages
3. Bootstrap 4 components and styles
4. Highcharts framework for registration pie chart
5. Deploy ready

## Key Takeaways

### Page Flows
1. Home page shows a list of events on the left and a registration form on the right
2. First event is selected by default for registration
3. Each registration is bound to the selected event
4. Admin page prompts for authentication if the admin is not logged in
5. Admin can swtich between the views once logged in without losing the session details
6. Once admin logs in login form disappears and registration pie chart and a list of all registrations are shown
7. When the user logs out registration pie chart and list are hidden and login form appears again

#### Admin Credentials - admin/adminpass

### Caveats
1. Registration preview is yet to be implemented
2. Form validations are yet to be implemented
3. Admin login fail - right error message need to be shown


## Instructions to run the app in local
To run the app, navigate to the project directory in terminal/shell and run the following commands
1. npm install (first time)
2. npm start (start script included)
3. App will be started in localhost(127.0.0.1) in port 8080
