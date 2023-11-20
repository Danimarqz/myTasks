# myTasks
Django rest framework to make a tasks crud connected to MSSQL
Used react for the frontend, auth working, each user can only get their tasks. Can't use the app without credentials. You can register only using username and password.

Only dark mode for now :)

You can use it yourself!

Create your .env with the next data:
  DB_ENGINE= 
  DB_NAME= 
  DB_USER= 
  DB_PASSWORD= 
  DB_HOST= 
  DB_PORT= 

Then run (requirements installed):
  py manager.py migrate
  py manager.py createsuperuser
  py manager.py runserver

In other terminal:
  cd client
  npm i
  npm run dev
