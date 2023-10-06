# search-orders-api
API Rest creada con [NodeJs](https://nodejs.org/es) y [ExpressJs](https://expressjs.com/), con el objetivo de buscar y devolver una orden. Las ordenes se encuentran guardadas en un objeto JSON dentro de la carpeta `db-data`

## Instrucciones
1. Clonar este repositorio
2. Instalar las dependencias con:
```
npm install
```
3. Ejecutar el proyecto con el comando:
```
npm start
```

El servidor va estar corriendo en el puerto http://localhost:8080, puedes utilizar alguna herramienta como Postman o Thunder Client de VSCode para probar los endpoints. También se puede probar instalando este [cliente](https://github.com/EdinsonGomez/search-orders-client)

## Modelos

**Client**

| Propiedad       | Tipo de Datos         | Descripción                                   |
| --------------- | --------------------- | -------------------------------------------- |
| `id`            | Number     | Identificador único para cada cliente.      |
| `name`          | String | Nombre del cliente.                        |
| `last_name`     | String | Apellido del cliente.                      |
| `document_type` | String | Tipo de documento del cliente. Puede ser "CEDULA CIUDADANIA", "CEDULA EXTRANGERA" o "PASAPORTE". |
| `document`      | Number      | Número de documento de identificación del cliente, con un mínimo de 4 dígitos. |

**Product**

| Propiedad       | Tipo de Datos         | Descripción                                   |
| --------------- | --------------------- | -------------------------------------------- |
| `id`            | Number      | Identificador único para cada producto.     |
| `name`          | String | Nombre del producto.                        |
| `reference`     | String | Referencia del producto.                    |

**Orders**

| Propiedad         | Tipo de Datos         | Descripción                                         |
| ----------------- | --------------------- | -------------------------------------------------- |
| `id`              | Number      | Identificador único para cada orden.              |
| `order`           | Number      | Número de la orden.                                 |
| `client`          | Number      | Referencia al cliente que realizó la orden.        |
| `delivery_address`| String | Dirección de entrega de la orden.               |
| `status`          | String | Estado de la orden. Puede ser "RECIBIDO", "FACTURADO", "ENVIADO" o "ENTREGADO". |
| `delivery_date`   | Date          | Fecha estimada de entrega de la orden.              |
| `products`        | Array de objetos      | Lista de productos en la orden. Cada objeto contiene un `product` (id del producto) y `amount` (cantidad del producto). |


## Endpoints

### /orders
Devuelve un array con todas las ordenes

### /orders/:id
Devuelve la orden que coincida con el el parametro `id`

|  Parametro | Tipo de Datos    | Descripción  |
|------------|------------------|--------------|
| `id`       | Number  | Identificar de la orden a buscar |

### /orders/search
Busca y devuelve una order que concuerde con los query params proporcionados

|  Query Params    |  Tipo de Dato      |   Descripción   |
|------------------|--------------------|-----------------|
| `order`          |  Number   |  Número de orden que desea buscar  |
| `document_type`  |  String  |  Tipo de documento del cliente. Puede ser "CEDULA CIUDADANIA", "CEDULA EXTRANGERA" o "PASAPORTE" |
| `document`  |  Number   |  Número de documento de identificación del cliente   |


### /clients
Devuelve un array con todos los clientes

### /clients/document/types
Devuelve un array con los tipo de documento de los clientes. Puede ser "CEDULA CIUDADANIA", "CEDULA EXTRANGERA" o "PASAPORTE"

### /products
Devuelve un array con todos los productos

### /products/:id
Devuelve el producto que coincida con el parametro `id`

|  Parametro | Tipo de Datos    | Descripción  |
|------------|------------------|--------------|
| `id`       | Number  | Identificar del producto a buscar |
