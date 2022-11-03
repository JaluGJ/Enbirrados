
# Enbirrados

App creada para la gestion de reuniones entre colegas el cual calcula la cantidad de cerveza consumida y la cantidad de sixpacks necesarios para comprar para el día del evento. El calculo está basado en la temperatura del momento de la reunion, cuyas relaciones refieren a que en promedio se consumen 2 cervezas por persona si la temperatura supera los 24°C, 1 cerveza si la temperatura se encuentra entre 20°C y 24°C y 0.75 cervezas si es menor a 20°C.

## Tipos de usuario

La app tiene dos niveles de usuarios. 

> ## Admin
>> - Puede ver todas las reuniones que haya organizado
>> - Puede cambiar el estado de las mismas, por si estas se cancelan
>> - Puede crear una reunion enviando, automaticamente, un mail a todos aquellos que haya invitado
>> - Puede ver los usuarios que aceptaron la invitacion
>> - Puede, tambien, ver sus propias invitacones
>> - Tiene el control sobre los distintos usuarios pudiendo convertirlos en administradores o bannearlos de la applicación.
>> - Puede ver su perfil de usuario

> ## Regular User
>> - Puede aceptar o rechazar una invitación  
>> - Puede ver todas las invitaciones que ha tenido 
>> - Puede ver todas las meetups a las que ha confirmado asistencia
>> - Puede ver su perfil de usuario
>> - Recibe mails informando las invitaciones recibidas.

## Desplegado en la web

> El proyecto no fue desplegado por falta de tiempo.  
> Las plataformas a usar son __Qoddi__ para base de datos y backend y __Vercel__ para el frontend.

## Usuarios que se crean automaticamente al levantar el backend
Podra utilizar estos usuarios para prueba, o podrá crearse el suyo
```JSON
{
  "name": "admin",
  "surname": "admin",
  "email": "admin@admin.com",
  "password": "1234ABcd",
  "isAdmin": true
},
{
  "name": "Matias",
  "surname": "Cunnington",
  "email": "mati@abc.com",
  "password": "1234ABcd",
},
{
  "name": "Laura",
  "surname": "Azabache",
  "email": "lau@abc.com",
  "password": "1234ABcd",
},
{
  "name": "Darío",
  "surname": "Durango",
  "email": "dario@abc.com",
  "password": "1234ABcd",
},
  ```

# Correr el proyecto de manera local

## Backend

1. En la carpeta /api, crear un archivo .env como el siguiente
>_Sugiero agregar los parametros faltantes, creando unos propios, por temas de seguirdad_ 

### .env Necesario para el correcto funcionamiento del back
```JS
PG_DBNAME="nombre de la base de datos en posgres"
PG_DIALECT=postgres
PG_HOST=localhost
PG_HOST_PORT="puerto postgres"
PG_PASSWORD= "clave usuario postgres"
PG_USER="usuario postgres"

PORT=3001

AUTH_EXPIRES=7d
AUTH_ROUNDS=10
AUTH_SECRET=santander

configuraciones de oAuth0 (`sugiero investigar`)
REFRESH_TOKEN=
ACCESS_TOKEN=
CLIENT_SECRET=
CLIENT_ID=
REDIRECT_URI=https://developers.google.com/oauthplayground

APP_MAIL=embirrados@gmail.com
```
2. ejecutar los siguientes comandos dentro de /api
```
npm install
npm run dev
```

## Frontend

1. En la carpeta /client, crear un archivo .env como el siguiente
> _Sugiero ingresar a la pagina https://api.weatherapi.com/v1 para obtener una key_ 

### .env Necesario para el correcto funcionamiento del frontend

```JS
REACT_APP_API_CONECTION=http://localhost:3001
REACT_APP_WEATHER_API=https://api.weatherapi.com/v1
REACT_APP_WEATHER_API_KEY='Api key gratuita, recomiendo ir a la pagina a buscar una'
```

2. Dentro de la carpeta /client, ejecutar los siguientes comandos 
```
npm install
npm start
```
# Tecnologías utilizadas

### Frontend: React v18.2, Redux, Material UI v5.10
### Backend: Node, Express, Sequelize, NodeMailer, JWT, Bycrypt, 
### Database: PostgreSQL


  ## Rutas backend  
  >_Todas las rutas estan protegidas con la necesidad de un token enviado por cabecera._  
  >_Todas las rutas responden con un message y data, En data se encuentra el resultado_  

  >/user
  >>/sign-up <!-- Post --> (data={email, name, surname, password, isAdmin/optional})  
  >>/login <!-- Post -->( data={email, password})  
  >>/allUsers <!-- Get --> (token)  
  >>/ <!-- Get --> (token)  
  >>/:id <!-- Get --> (token, userid)  
  >>/password <!-- Put --> (token, data={oldpass, newpass})  
  >>/info <!-- Put --> (token, data={profilePic/name/surname})  
  >>/statusUpdate/:id <!-- Put --> (token, userId, data={banned/isAdmin}) 
  
  >/meeting  
  >>/ <!-- Get --> (token)  
  >>/:id <!-- Get --> (token, meetId )  
  >>/update <!-- Put --> (token, data={meetingId, name, date, beer, temperature, status, invited, detail}) <!-- invited must be an array of Id -->  
  >>/newMeeting <!-- Post --> (token, data={name, date, beer, temperature, status, detail, invitedList})  
  
  >/invitation  
  >>/ <!-- Get --> (token)  
  >>/:id <!-- Get --> (token, invitationId)  
  >>/updateInv <!-- Put --> (token, data={id, status})  
  >>/updAllInv <!-- Put --> (token, data={info, status, date, name, is_deleted})  
  <!-- >>/createInv  Post  (token, data={}) -->  
  