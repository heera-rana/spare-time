 * Assignment 1 - Spare Time Application *

The frontend of this application was developed using React version 18.2.0.

The backend of this application was built with: 
1.	nodejs (https://nodejs.org/en/) v14.20.1
2.	express (https://expressjs.com/) 
3.	MongoDB (https://www.mongodb.com/).

Dev team 
-	Maria Diome Pena
-	Heera Rana 
-	Rachael Lawlor
-	Ryan Sutcliffe

The code to execute below is within <<>> brackets, do not include the brackets when executing the commands

** Windows Install **
*** Install node.js for windows ***

Ensure you have the latest LTS version of NodeJS installed from here: https://nodejs.org/en/download/

To install node download the windows installer, from the link above and follow below:

1.	Run the node installer
    a.	Go to the directory where you downloaded the node installer (.msi file). By default, this is your Downloads directory
    b.	Double-click the .msi file
2.	The installer will then run
    a.	Once open, click next on all the setup screens, until the cmd automatically opens. 
    b.	You may need to run further node tools in PowerShell, if never installed before, these should run automatically

To check that you have node installed: 
-	Open the command prompt and run:
        <<npm -v>>

If node is installed, it will return the version number that is installed.

*** Install Mongodb on windows***
1. Download the MongoDB Community installer from https://www.mongodb.com/try/download/community
within the 'MongoDB Community Server Download'
   - select the version of MongoDB to download
   - select Windows
   - select msi
   - Click Download
2. Run the MongoDB installer
   - Go to the directory where you downloaded the MongoDB installer (.msi file). By default, this is your Downloads directory
   - Double-click the .msi file
3. Follow the MongoDB Community Edition installation wizard.
   - Choose Setup Type - Complete - Click "Next >"
   - Check the "Install MongoD as a service" checkbox and accept the defaults - Click "Next >"
   -  MongoDB Compass the installation is optional, Click "Next
4. Click "Install"

To import the json files into Mongodb, the Mongo tools need to be intalled
1. Download MongoDB Command Line Database Tools from https://www.mongodb.com/try/download/database-tools
    a. Make sure the file is the .zip package type
2. Go to the downloads directory where you downloaded .zip file.
3. Right click the .zip file and click "Extract All" keep to the default e.g 'C:\Users\Ryan\Downloads\mongodb-database-tools-windows-x86_64-100.6.1'
4. Then click "Extract".
    a. this will create a new folder in downloads, and then place the extacted folder inside. 
    
** Instruction for the data import **
1. clone the repository from https://github.com/hra03/spare-time/
2. Navigate to the root of the cloned repo for example <<cd '/Users/Ryan.Sutcliffe/Desktop/spare-time'>>
3. Run the below commands to import both the events and user databases, 


you must replace the username with your own name....this can be found in your file directory

<<C:\Users\username\Downloads\mongodb-database-tools-windows-x86_64-100.6.1\mongodb-database-tools-windows-x86_64-100.6.1\bin\mongoimport.exe --db spare-time --collection events --jsonArray "backend\mongodbdata\eventsData.json">>
    
<<C:\Users\username\Downloads\mongodb-database-tools-windows-x86_64-100.6.1\mongodb-database-tools-windows-x86_64-100.6.1\bin\mongoimport.exe --db spare-time --collection users --jsonArray "backend\mongodbdata\userData.json">>

4. Potential errors..
    a. If the import fails, it will normally be down to the file path. A way to check is to navigate to the mongoimport.exe manually, and copy and pasting the location in the above command.
    b. If the json files are not found, make sure you are in the root of the folder cloned from github. if you perform an <<dir>> command in CMD you should see the frontend and backend folders listed
    
    
**Running the application on windows**
From the root of the spare time folder, which would look something like '/Users/Ryan.Sutcliffe/Desktop/spare-time', run the following commands:

    1. <<npm install>> 
    2. <<cd frontend>>
    3. <<npm install>> 
    4. <<cd ../>>
    5. <<npm install nodemon>>
    6. <<npm run dev>>
    
 There is a standard user with the email 'admin@gmail.com'. Please ask a member of the team for the password.
    
 **potential errors**
 If the error message 'ECONNREFUSED ::1:27017, is recieved in the terminal, then a potenial fix is to: open the spare-time folder, then navigate '/backend/config/', then open the dbconnetion.js file in notepad, and replace <<"mongodb://localhost:27017/spare-time">> with <<"mongodb://0.0.0.0:27017/spare-time">> If the change has solved to issue, in the terminal where the app is running, it will say 'mongoDB connected: 0.0.0.0'

** Mac Install **
*** Install node.js ***

Ensure you have the latest LTS version of NodeJS installed from here: https://nodejs.org/en/download/

To install node download the windows installer, from the link above and follow below:

1.	Run the node installer
    a.	Go to the directory where you downloaded the node installer (.msi file). By default, this is your Downloads directory
    b.	Double-click the .msi file
2.	The installer will then run
    a.	Once open, click next on all the setup screens, until the cmd automatically opens. 
    b.	You may need to run further node tools in PowerShell, if never installed before, these should run automatically

To check that you have node installed: 
-	Open the command prompt and run:
        <<npm -v>>

If node is installed, it will return the version number that is installed.

*** Install Mongodb ***
 ///// the below need finishing





//any other pre-requisties? // need instructions for mac and windows

Clone repo from 'https://github.com/hra03/spare-time'

1. open new terminal(Mac) or command prompt (windows)

2. Configure the base data in Mongodb
    1. in the terminal, now back in the spare-time folder, run the following
        1. mongoimport --db 'spare-time' --collection 'events' --jsonArray './backend/mongodbdata/eventsData.json'
        2. mongoimport --db 'spare-time' --collection 'users' --jsonArray './backend/mongodbdata/userData.json'

2. In the terminal 
    1. navigate to the folder where you cloned the repo (e.g cd '/Users/Ryan.Sutcliffe/Desktop/spare-time' )
    2. type the following command in the spare-time folder
        1. npm install 
        2. cd frontend/
        3. npm install
        4. cd ../
    3. you should now have all the node modules and dependecies installed. 

3. run the application 
    1. npm run dev



