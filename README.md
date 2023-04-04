[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/fmDo8ROl)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101333588/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101333588/actions/workflows/node.js.yml)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101333588/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101333588?branch=main)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101333588&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101333588)

###### Desarrollo de Sistemas Informáticos | Práctica 09 | Andrés Hernández Ortega

## Práctica 9 - Aplicación de registro de Funko Pops

# Introducción

En esta práctica continuaremos con las herramientas de GitHub Actions y Sonar Cloud. Además, introduciremos funcionalidades con los paquetes `yards` y `chalk` que nos posibilitarán introducir parametros durante la llamada a la ejecucción del programa y modificar el color y resaltado al imprimir por pantalla texto.

# Desarrollo

Para la realización de la práctica se ha requerido emplear paquetes que permitan trabajar con archivos JSON de manera síncrona, por ello, empleamos una serie de paquetes con el sufijo `Sync`:

- `existsSync`
- `mkdirSync`
- `readFileSync`
- `readdirSync`
- `writeFileSync`
- `rmSync`

Para que, entre otras cosas, se pueda saber si un fichero o directorio existe, poder crearlo, leerlo o escribir contenido en él, también eliminarlo.

Hemos desarrollado las siguientes funcionalidades:

### Funko
Interfaz `Funko` que contiene los atributos necesarios para describir un funko:

- `_ID: number`: Identificador único del funko
- `_nombre: string`: Nombre del funko
- `_descripcion: string`: Descripción del funko
- `_tipo: tipoPop`: Tipo de funko
- `_genero: genero`: Género del funko
- `_franquicia: string`: Franquicia a la que pertenece el funko
- `_numero: number`: Número identificativo del funko dentro de la franquicia correspondiente
- `_exclusivo: boolean`: Si es exclusivo o no
- `_caracteristicasEspeciales: string`: Indica las características especiales del funko
- `_valorMercado: number`: Cuál es el valor de mercado del funko

### Colección Funkos
Clase `ColeccionFunkos` que contiene los siguientes atributos privados:

- `_funkos` es un array de la clase `Funko` que contiene los distintos funkos de la colección
- `_nombreUsuario` es un `string` que alberga el nombre del usuario

A su vez, contiene las siguientes funciones:

#### Constructor
En el que se le introduce el nombre de usuario y, si existe un directorio del usuario, introduce los datos en el array de la clase. En caso contrario, únicamente crea un directorio con el nombre del usuario para albergar sus ficheros con información acerca de los distintos funkos.

#### anadir
La función `añadir` recibe como parámetro un objeto de la clase Funko y, en caso de que no exista, lo introduce en el array de la clase e introduce en un fichero JSON dentro del directorio del usuario. En caso de que ya exista el funko retorna un error.

#### modificar
La función `modificar` recibe como parámetro un objeto de la clase Funko y, en caso de que exista el funko, sustituye los valores actuales del funko en cuestión por los nuevos introducidos. En caso de que no exista el funko, se retorna un error.

#### eliminar
La función `eliminar` recibe como parámetro la ID de un funko y, en caso de que exista dicho funko, se procede a su eliminación del array de la clase y de su fichero. En caso de que no exista el funko, se retorna un error.

#### listar
La función `listar` recorre el array `_funkos` de la clase, donde se encuentra la información de los distintos funkos de la colección, imprimiendo sus valores correspondientes. 

#### mostrar
La función `mostrar` recibe como parámetro la ID de un funko y, en caso de que exista dicho funko, muestra sus distintas características. En caso de no existir, se retorna un mensaje de error.

#### rangoValoresMercado
La función `rangoValoresMercado` recibe como parámetro un número que sería el valor de mercado de un funko y retorna por pantalla directamente un `console.log()` con el valor y un color específico de texto, en función del rango en el que se encuentre, habiendo establecido previamente lo siguiente:

- Entre 0 - 250: color rojo
- Entre 251 - 500: color azul
- Entre 501 - 2500: color blanco
- Mayor a 2500: color verde

#### existeFunko
La función `existeFunko` retorna un valor booleano en función de si la ID introducida como parámetro existe en el array que alberga la colección de funkos o no.

#### ubicacionFunko
La función `ubicacionFunko` recorre el array que alberga la colección de funkos y busca la posición en la que se encuentra, retornandola.

# Conclusiones
Como hemos comentado en esta práctica nos hemos podido introducir en nuevos conceptos y herramientas para que los usuarios interactúen con los programas de distintas formas y mostrar por consola los textos con distintas tonalidades y manera de resaltar.


# Referencias
Para el desarrollo de la práctica se ha requerido la consulta de los siguientes recursos:

- https://frikily.com/cuanto-vale-mi-funko-pop/
- https://www.npmjs.com/package/yargs
- https://www.npmjs.com/package/chalk 
- https://www.npmjs.com/package/jsonfile 
- https://www.npmjs.com/package/@types/node 
- https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/fs/promises.d.ts 
- https://nodejs.org/docs/latest-v19.x/api/fs.html#synchronous-api