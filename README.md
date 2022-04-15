# BOOTCAMP
Full Stack -> API NODE MONGO TYPESCRIPT 
# DEPENDENCIAS INSTALADAS
-dotenv : Sirve para manejar las variables de entorno señaladas en el archivo .env <br>
-express : framework de NodeJs <br>
-@types/express: posee el tipado necesario para TypeScript referente a express <br>
-@types/jest : posee el tipado necesario para Jest <br>
-@typescript/node : Posee el tipado para la aplicación de Node  <br>
@typescript-eslint/eslint-plugin , @typescript-eslint/parser: tipado para configuración de eslint <br>
concurrently : permite ejecutar comandos de manera concurrente dos o más comandos <br>
eslint : permite configurar reglas de codificación para adecuarse a las mejores practicas posibles <br>
jest : sirve para realizar pruebas unitarias del código escrito así como también pruebas a peticiones <br>
nodemon : permite observar los cambios mientras se desarrolla la aplicación , reinicia el servidor al observar cambios en los archivos señalados <br>
supertest : permite testear las peticiones al API <br>
ts-jest : permite usar jest en archivos escritos con typescript y no ejecutarlo en el código compilado <br>
ts-node : permite correr archivos typescript de manera directa <br>
typescript : lenguaje de programación fuertemente tipado , basado en JavaScript , sirve para tener un código tipado y permite detectar errores al momento de desarrollo <br>
webpack : permite empaquetar nuestra aplicación y reducir su tamaño , siendo más ligera para su alojamiento <br>
webpack-cli : permite ejecutar comandos de webpack desde la consola <br>
webpack-node-externals : permite excluir módulos de manera sencilla <br>
webpack-shell-plugin : permite ejecutar comandos de consola antes o después de las compilaciones del webpack <br>
serve : sirve contenido estático <br>
helmet : protege el back configurando las cabeceras http <br>
cors : permite activar el cors según varias configuraciones ( white list and black list) <br> 
mongoose : permite escribir consultas para una BD Mongo
# NPM SCRIPTS 
-build : realiza la transformación del código en ts hacía javascript<br>
-start : ejecuta el codigo transformado en js<br>
-dev : permite ejecutar el servidor atendiendo a los cambios que se estén realizando , tiene el uso de la dependencia concurrently , la cual permite en este caso la ejecución de 
tsc watch (observa los cambios) . y nodemonn , que reinicia el servidor ante los mismos.<br>
-test: ejecuta las pruebas señaladas en nuestra carpeta __tests__ <br>
-serve : coverage : permite ejecutar el test y a través de npx serve servir el contenido estático ubicado en la carpeta coverage <br>


# ENV VARIABLES
-PORT : indica el puerto en donde correrá tu aplicación<br>
