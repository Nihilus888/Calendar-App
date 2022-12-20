# Calendar App


## Project summary
This is a calendar app to put all your events to organize your life and to organise if your meetings are confirmed or cancelled. You can write the event title, set your time and put the specific meeting room. 

## Project details
This calendar app has full CRUD capabilities to create your meetings/events and you have the ability to filter your meetings. In addition, your confirmed meetings and cancelled meetings will appear at the side bar of your calendar. I had to import and learn a few modules like day.js and tailwind css on React JS as I normally use Material UI with React JS.

## Technical details
This is mainly a front end application built using React JS and CSS Tailwind for UI. As I did not use a NOSQL or SQL database to store the events data, I had to utilize local storage to store the data. From there, I can pull the data from there to display it which requires understanding of manipulating and handling of JSON data. To update the displays for certain calendar events, I had to utilise useContext and Global context to have proper state management though some of them did not turn as I expected which I will talk about it in the technical challenges. 

I had to properly separate the different components into its various parts like the header, sidebar, the small calendar, the large calendar, the event description modal and the labels to filter the meeting rooms and to display the confirmed and cancelled meetings.

To display the proper labels, I had to implement a hash table to properly map the colours to the corresponding meeting rooms as looping through with an index will display the wrong meeting rooms with the colour. It took quite a while to debug this as creating the hash table class and using JSX to display it was not easy as most of the time it displayed undefined for some weird reason. 


## Technical Challenges
I had to utilise a few youtube tutorials, stack overflow and other online resourses and documentation to create the design for the grid calendar and for other necessary functions such as useContext, useEffect and other state management. I still have issues updating the confirmed meeting and cancelled meeting as I need to force refresh the page by using a setTimeout function for it to appear as trying to use Global Context to update it does not seem to work.

I do admit that I'm not able to filter through based on the status, meeting rooms and room types due to time and space constraint on the UI and to include all of the data would make the calendar look too cluttered. 

Deploying the application was a problem initially as there were a lot of npm modules and dependencies that were crashing the deployment so I had to clear up my dependencies and fix them manually as ```npm audit fix ``` and ```npm audit fix --force ``` did not fix the problem. 

## Future Improvements

If I have more time as I was swarmed with finals, projects and assignments for me to give enough time to focus on this project, I would have fixed the technical challenges that I have listed above and potentially used a database to store all the information that I needed instead of using local storage as it is not a very secure way of storing data. 

The calendar is mobile responsive but if it is too small like on an IPhone SE, the grids will mash together and it will look horrendous. 

## Sample photos
![Sample Calendar](public/Sample.jpg)

![Sample Event Modal](public/Event-Modal.jpg)


## Navigation and tutorial

Use the small calendar to choose your day and press the create button to your event on that particular day. You can type the time it takes for the meeting to last in the description box. Before you save the event, you can click on meeting confirmed or cancelled and you can come and update the status later if there are any changes. There is a trash button that displays when there are events data in the event modal and a close button if you want to exit it. 

## How to use on local machine

Type this command into your command line:

``` 
git clone git@github.com:Nihilus888/Calendar-App.git
```

When you are in that folder, type 

```
npm start 
```

and enjoy!

Would love to hear your feedback or additonal thoughts!

## Deployment site

Hosted on the cloud using netlify.

https://calendar-application.netlify.app/

