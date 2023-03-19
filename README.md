## Integration with Google Calendar Application
This application showcases how to integrate with Google Calendar by utilizing the Google API Client Library for JavaScript (googleapis) and OAuth2 for authentication.

## Requirements
Node.js
A Google API Console project with the Google Calendar API enabled
A client ID and client secret for your project
A redirect URI for your application
Getting Started
To get started with the application, please follow these steps:

Clone or download the repository.
Run npm install to install the required dependencies.
Rename .env.example to .env and fill in your own client ID, client secret, and redirect URI.
Start the application with npm start.
Open your web browser and navigate to http://localhost:3000/rest/v1/calendar/init to initiate the OAuth2 flow.
Follow the prompts to grant the application access to your Google Calendar.
The application will redirect to http://localhost:3000/rest/v1/calendar/redirect with an authorization code. The application will then use the authorization code to get the access token and retrieve a list of events from your Google Calendar.
The list of events will be displayed in the browser.
# Views
/rest/v1/calendar/init: This view starts the OAuth2 flow by redirecting the user to the authorization URL.
/rest/v1/calendar/redirect: This view handles the redirect from Google with the authorization code. The view uses the authorization code to get the access token and retrieve a list of events from the user's Google Calendar.
# Conclusion
By utilizing this application as a starting point, you can build your own application that securely and reliably integrates with Google Calendar using the googleapis library and OAuth2 for authentication.



