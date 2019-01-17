# SeinfeldFriendFinder
FriendFinder 

Purpose:
    This application is to allow a user to answer 10 survey questions and based on the answers to those questions, the application will match the user to the most compatable friend.

How:
    The application uses Express as a server to send data from the client to the server. There is a pre-set list of friends (some Seinfeld fans may recognize a few).  Once the user answers the questions, the logic goes through a loop to compare scores of the user to each friend in the API.  The closest match is then shown on a modal with a picture.  The user is then added to the friends API, so this API will continue to grow as more users search for a friend. 

    Express is critial in running this application.  It is able to use GET and POST routes to allow data to be transferred from the front end of the application to the back end of the application. 

This application uses HTML, CSS, Bootstrap, FontAwesome, JQuery, Javascript, Express and Path.