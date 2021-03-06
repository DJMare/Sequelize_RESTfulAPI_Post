# Sequelize_RESTfulAPI_Post
An express app connecting to mySQL database and implementing RESTful API to POST to the database in Postman that returns JSON data. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RESTfulAPI_Post: 

    express --view=hbs express_Sequelize_RESTfulAPI_Post

(6) Once the process is complete, navigate into the express_Sequelize_RESTfulAPI_Post directory: 

    cd express_Sequelize_RESTfulAPI_Post
    
(7) Now in the express_Sequelize_RESTfulAPI_Post directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RESTfulAPI_Post directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file and require mysql2 and models in routes/index.js file.: ![Require mysql2 in routes-index js file (Sequelized_RESTfulAPI_Post)](https://user-images.githubusercontent.com/35668707/70858318-fb367300-1ecd-11ea-8c6b-92f7b493ba95.JPG)

COMMAND PROMPT

(14) Create necessary sequelize folders and files in project.:

    sequelize init

(15)  Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t film,actor,film_actor
    
VS CODE

(16) Create a new folder in your "models" folder called rel. Create a file in your rel folder called associations.js and define the relationships between the "film" and "actor" models in this file.: ![In models folder create rel folder and an associations js file in the rel folder (Sequelized_RESTfulAPI_Post)](https://user-images.githubusercontent.com/35668707/70858332-2620c700-1ece-11ea-8e40-f99453ebb8e2.JPG)

(17) In the models/index.js file add associations constant and at the bottom of the models/index.js file add the call to associations function.: ![Call associations function in models-index js file (Sequelized_RESTfulAPI_Post)](https://user-images.githubusercontent.com/35668707/70858339-56686580-1ece-11ea-9292-c022c3e8fa47.JPG)

(18) Open config/config.json file and change settings to connect to the database.: ![Update database connection info in config-config json file (Sequelized_RESTfulAPI_Post)](https://user-images.githubusercontent.com/35668707/70858345-7f88f600-1ece-11ea-962d-d34b48cefeb9.JPG)

(19) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application.: ![Require models in apps js file (Sequelized_RESTfulAPI_Post)](https://user-images.githubusercontent.com/35668707/70858349-a6dfc300-1ece-11ea-99d6-7b67ab1aaebc.JPG)

(20) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: Add models sequelize sync in app js file (Sequelized_RESTfulAPI_Post)

(21) In the routes/index.js file require the models.: ![Require models in routes-indexs js file (Sequelized_RESTfulAPI_Post)](https://user-images.githubusercontent.com/35668707/70858364-e8706e00-1ece-11ea-9736-883cff7ab754.JPG)

(22) In the routes/index.js file add post() route for /actors that will use the findAll() method.: ![Add post() route for actors id in index js file (Sequelized_RESTfulAPI_Post)](https://user-images.githubusercontent.com/35668707/70858372-063dd300-1ecf-11ea-9d60-b8bc150047e7.JPG)

COMMAND PROMPT

(23) Run nodemon in terminal to see DB sync'd up: 

    nodemon

POSTMAN

(24) Navigate to localhost3000/actors/[insert specific id #] in Postman and perform a GET request to view data.: ![Perform a POST request for localhost3000 - actors in POSTMAN and add data (Sequelize_RESTfulAPI_Post)](https://user-images.githubusercontent.com/35668707/70858381-279ebf00-1ecf-11ea-92be-72c1e53b44fc.JPG)

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
