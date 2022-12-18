# Calendar App


## Project summary
Calendar app to put all your events to organize your life and to organise if your meetings are confirmed or cancelled. You can write the event title, set your time and put the specific meeting room. 

## Project details
This calendar app has full CRUD capabilities to create your meetings/events and you have the ability to filter your meetings. In addition, your confirmed meetings and cancelled meetings will appear at the side bar of your calendar.

## Technical details
As I did not use a NOSQL or SQL database to store the events data, I utilized local storage to store the data. From there, I can pull the data from there to display it which requires understanding manipulation and handling of JSON data. This is mainly a front end application built using React JS and CSS Tailwind for UI. To update the displays for certain calendar events, I had to utilise useContext and Global context to have proper state management. 
