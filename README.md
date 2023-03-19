

https://user-images.githubusercontent.com/91627576/226187748-3d64a6ef-9e27-4485-8c22-d3ecc650935e.mp4






## Integration with Google Calendar Application
This app demonstrates integration with Google Calendar using the Google API Client Library for JavaScript and OAuth2 for authentication.


Getting Started

Clone/download the repository.

Run npm install to install dependencies

Rename .env.example to .env and fill in client ID, client secret, and redirect URI.

Start the app with npm start.

Go to http://localhost:3000/rest/v1/calendar/init to start OAuth2.

Allow access to your Google Calendar.

The app redirects to http://localhost:3000/rest/v1/calendar/redirect with an authorization code.

Use the authorization code to retrieve the access token and event list.

View the list of events in your browser.

Here are the views and their functions in brief:

/rest/v1/calendar/init: Initiates OAuth2 flow by redirecting the user to the authorization URL.

/rest/v1/calendar/redirect: Handles redirect from Google with authorization code. Retrieves access token and list of events from user's Google Calendar.




