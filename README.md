install Mongodb //more here

install node //more here

//any other pre-requisties? // need instructions for mac and windows

Clone repo from 'https://github.com/hra03/spare-time'

1. open new terminal, 

2. Configure the base data in Mongodb
    1. in the terminal, now back in the spare-time folder, run the following
        1. mongoimport --db 'spare-time' --collection 'events' --jsonArray './backend/mongodbdata/eventsData.json'
        2. mongoimport --db 'spare-time' --collection 'users' --jsonArray './backend/mongodbdata/userData.json'

2. In the terminal 
    1. navigate to the folder where you cloned the repo (e.g cd '/Users/Ryan.Sutcliffe/Desktop/shu-ass-1' )
    2. type the following command in the spare-time folder
        1. npm install 
        2. cd frontend/
        3. npm install
        4. cd ../
    3. you should now have all the node modules and dependecies installed. 

3. run the application 
    1. npm run dev



