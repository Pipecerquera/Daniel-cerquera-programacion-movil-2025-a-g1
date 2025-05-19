# HU-01: Entender el negocio de lavadero Luxury

## Descripción
Como equipo de desarrollo,

Quiero comprender el negocio de la gestión de servicios de lavado de vehículos de Luxury,

Para definir correctamente la arquitectura y los requisitos técnicos de la aplicación web.

## Criterios de Aceptación
- *Portal Informativo y de Acceso*: Como usuario, quiero acceder a una página principal con información sobre el lavadero Luxury donde pueda ver los servicios ofrecidos, la información de la empresa, y enlaces para iniciar sesión y registrarme.
- *Registro e Inicio de Sesión*: Como visitante, quiero poder registrarme en el sistema proporcionando mis datos personales (nombre, correo, contraseña, celular, cédula, tipo de cédula y rol) y posteriormente iniciar sesión para acceder a los servicios del lavadero.
- *Recuperación de Contraseña*: Como usuario registrado, quiero poder recuperar mi contraseña si la he olvidado, mediante un correo electrónico con una nueva contraseña generada automáticamente.
- *Gestión de Vehículos*: Como cliente registrado, quiero poder registrar mis vehículos en el sistema (placa, color, modelo, marca y tipo de vehículo: carro, moto, bus) para posteriormente reservar servicios para ellos.
- *Visualización de Servicios y Precios*: Como usuario, quiero ver los diferentes servicios ofrecidos y sus precios categorizados por tipo de vehículo para seleccionar el que mejor se adapte a mis necesidades.
- *Reserva de Servicios*: Como cliente registrado, quiero poder reservar un servicio para mi vehículo en una fecha específica, seleccionando uno de mis vehículos registrados y el servicio deseado.
- *Historial de Reservas*: Como cliente registrado, quiero poder ver el historial de mis reservas con filtros por fecha, número de cédula, placa y tipo de vehículo para dar seguimiento a los servicios solicitados y su estado.
- *Ventas Directas*: Como administrador, quiero poder registrar ventas directas realizadas en el establecimiento para mantener un control unificado de todos los servicios.
- *Facturación*: Como administrador, quiero poder generar facturas para las reservas y ventas directas, con capacidad para agregar productos adicionales y exportar en formato PDF.
- *Información Corporativa*: Como usuario, quiero acceder a una sección "Acerca de Nosotros" para conocer más sobre el lavadero, su historia y valores.

## Documentación del Diagrama de Base de Datos para Lavadero Luxury

### 1. Descripción General
Este diagrama representa la estructura de una base de datos diseñada para la gestión del lavadero Luxury. Permite manejar usuarios, vehículos, reservas, servicios, pagos, facturación e información corporativa, proporcionando una solución completa para la administración de este negocio.

### 2. Descripción de las Tablas

#### 2.1 Usuario
Almacena la información de los usuarios del sistema.
- id_usuario (INTEGER): Identificador único del usuario.
- nombre (VARCHAR(100)): Nombre completo del usuario.
- correo (VARCHAR(100)): Correo electrónico del usuario.
- celular (VARCHAR(20)): Número de celular.
- cedula (VARCHAR(20)): Número de identificación.
- tipo_cedula (VARCHAR(20)): Tipo de documento de identidad.
- contrasena (VARCHAR(255)): Contraseña encriptada del usuario.
- rol (ENUM): Rol del usuario (Cliente, Administrador).
- fecha_registro (TIMESTAMP): Fecha de registro del usuario.

#### 2.2 Vehiculo
Guarda información sobre los vehículos registrados por los usuarios.
- id_vehiculo (INTEGER): Identificador único del vehículo.
- id_usuario (INTEGER): Referencia a la tabla Usuario.
- placa (VARCHAR(20)): Placa del vehículo.
- color (VARCHAR(50)): Color del vehículo.
- modelo (VARCHAR(50)): Modelo del vehículo.
- marca (VARCHAR(50)): Marca del vehículo.
- tipo_vehiculo (ENUM): Tipo de vehículo (Carro, Moto, Bus).

#### 2.3 Servicio
Almacena los servicios ofrecidos por el lavadero.
- id_servicio (INTEGER): Identificador único del servicio.
- nombre (VARCHAR(100)): Nombre del servicio.
- descripcion (TEXT): Descripción detallada del servicio.
- precio (DECIMAL(10,2)): Precio del servicio.
- tipo_vehiculo (ENUM): Tipo de vehículo al que aplica (Carro, Moto, Bus).
- duracion_estimada (INTEGER): Duración estimada en minutos.

#### 2.4 Reserva
Registra las reservas realizadas por los usuarios.
- id_reserva (INTEGER): Identificador de la reserva.
- id_usuario (INTEGER): Referencia a la tabla Usuario.
- id_vehiculo (INTEGER): Referencia a la tabla Vehiculo.
- id_servicio (INTEGER): Referencia a la tabla Servicio.
- fecha_reserva (DATE): Fecha de la reserva.
- hora (TIME): Hora de la reserva.
- estado (ENUM): Estado de la reserva (Pendiente, Confirmada, Cancelada, Completada).
- metodo_pago (VARCHAR(50)): Método de pago utilizado.

#### 2.5 VentaDirecta
Registra las ventas directas realizadas en el establecimiento.
- id_venta (INTEGER): Identificador único de la venta.
- placa (VARCHAR(20)): Placa del vehículo.
- tipo_vehiculo (ENUM): Tipo de vehículo (Carro, Moto, Bus).
- marca (VARCHAR(50)): Marca del vehículo.
- modelo (VARCHAR(50)): Modelo del vehículo.
- id_servicio (INTEGER): Referencia a la tabla Servicio.
- fecha_venta (TIMESTAMP): Fecha y hora de la venta.
- estado (ENUM): Estado de la venta.

#### 2.6 Factura
Administra las facturas generadas por reservas y ventas directas.
- id_factura (INTEGER): Identificador único de la factura.
- tipo_origen (ENUM): Tipo de origen (Reserva, VentaDirecta).
- id_origen (INTEGER): ID de la reserva o venta directa.
- fecha_emision (TIMESTAMP): Fecha y hora de emisión.
- valor_total (DECIMAL(10,2)): Valor total de la factura.
- productos_adicionales (TEXT): Productos adicionales incluidos.

#### 2.7 InformacionEmpresa
Almacena la información corporativa del lavadero.
- id_info (INTEGER): Identificador único.
- historia (TEXT): Historia de la empresa.
- mision (TEXT): Misión de la empresa.
- vision (TEXT): Visión de la empresa.
- valores (TEXT): Valores corporativos.
- contacto (TEXT): Información de contacto.

### 3. Relaciones entre Tablas
- Un Usuario puede registrar múltiples Vehículos.
- Un Usuario puede realizar múltiples Reservas.
- Una Reserva está asociada a un único Vehículo y Servicio.
- Los Servicios están categorizados por tipo de vehículo.
- Las Facturas pueden generarse tanto de Reservas como de VentasDirectas.

## Documentación del Diagrama de Caso de Uso

### 1. Descripción General
El diagrama representa los casos de uso del Sistema de Gestión del Lavadero Luxury, identificando los actores involucrados y las funcionalidades disponibles para cada uno. Los actores principales son el Cliente, el Administrador y la Base de Datos.

### 2. Actores
- *Cliente*: Persona que utiliza el sistema para gestionar sus vehículos y reservar servicios.
- *Administrador*: Responsable de la administración del sistema, incluyendo ventas directas y facturación.
- *Base de Datos*: Entidad que almacena la información del sistema.

### 3. Casos de Uso

#### Autenticación
- *Registrarse*: Permite al cliente crear una cuenta en el sistema.
- *Iniciar Sesión*: Permite al usuario autenticarse en el sistema. (Incluye "Registrarse" porque un usuario debe estar registrado para iniciar sesión).
- *Recuperar Contraseña*: Permite a los usuarios recuperar su contraseña si la han olvidado.

#### Gestión de Vehículos
- *Registrar Vehículo*: Permite al cliente añadir información de sus vehículos.
- *Ver Mis Vehículos*: Permite al cliente consultar los vehículos que ha registrado.

#### Servicios y Reservas
- *Ver Servicios y Precios*: Permite a los usuarios consultar los servicios disponibles y sus costos.
- *Reservar Servicio*: Permite al cliente programar un servicio para su vehículo.
- *Editar Reserva*: Permite modificar los datos de una reserva realizada. (Extiende "Reservar Servicio").
- *Cancelar Reserva*: Permite al cliente cancelar una reserva existente. (Extiende "Reservar Servicio").
- *Ver Historial de Reservas*: Permite a los clientes consultar sus reservas anteriores.

#### Administración
- *Registrar Venta Directa*: Permite al administrador registrar ventas realizadas en el establecimiento.
- *Generar Factura*: Permite al administrador crear facturas para reservas y ventas directas.
- *Agregar Productos Adicionales*: Permite añadir productos extras a una factura.
- *Exportar Factura a PDF*: Permite guardar la factura en formato PDF.

#### Información Corporativa
- *Ver Información de la Empresa*: Permite a los usuarios acceder a la sección "Acerca de Nosotros".

### 4. Relaciones Entre Casos de Uso
- "Include" (<>): Indica que un caso de uso siempre incluye otro. Ejemplo: "Iniciar Sesión" incluye "Registrarse".
- "Extend" (<>): Indica que un caso de uso puede ampliar opcionalmente otro. Ejemplo: "Cancelar Reserva" extiende "Reservar Servicio".

## Documentación del Diagrama de Clases

### 1. Descripción General
Este diagrama de clases representa la estructura del Sistema de Gestión del Lavadero Luxury, detallando las entidades principales, sus atributos y las relaciones entre ellas.

### 2. Clases y Atributos

#### Usuario
Representa a los usuarios que utilizan el sistema.
- id_usuario: int → Identificador único del usuario.
- nombre: String → Nombre completo del usuario.
- correo: String → Dirección de correo electrónico.
- celular: String → Número de celular.
- cedula: String → Número de identificación.
- tipo_cedula: String → Tipo de documento de identidad.
- contrasena: String → Contraseña de acceso (encriptada).
- rol: String → Determina si es cliente o administrador.
- fecha_registro: Timestamp → Fecha y hora del registro.

#### Vehiculo
Representa los vehículos registrados por los usuarios.
- id_vehiculo: int → Identificador único del vehículo.
- placa: String → Placa del vehículo.
- color: String → Color del vehículo.
- modelo: String → Modelo del vehículo.
- marca: String → Marca del vehículo.
- tipo_vehiculo: String → Tipo de vehículo (carro, moto, bus).

#### Servicio
Representa los servicios ofrecidos por el lavadero.
- id_servicio: int → Identificador único del servicio.
- nombre: String → Nombre del servicio.
- descripcion: String → Descripción detallada del servicio.
- precio: double → Precio del servicio.
- tipo_vehiculo: String → Tipo de vehículo al que aplica.
- duracion_estimada: int → Duración estimada en minutos.

#### Reserva
Registra las reservas realizadas por los usuarios.
- id_reserva: int → Identificador único de la reserva.
- fecha_reserva: Date → Fecha de la reserva.
- hora: Time → Hora de la reserva.
- estado: String → Estado de la reserva (pendiente, confirmada, cancelada, completada).
- metodo_pago: String → Método de pago utilizado.

#### VentaDirecta
Gestiona las ventas directas realizadas en el establecimiento.
- id_venta: int → Identificador único de la venta.
- placa: String → Placa del vehículo.
- tipo_vehiculo: String → Tipo de vehículo (carro, moto, bus).
- marca: String → Marca del vehículo.
- modelo: String → Modelo del vehículo.
- fecha_venta: Timestamp → Fecha y hora de la venta.
- estado: String → Estado de la venta.

#### Factura
Registra las facturas generadas para reservas y ventas directas.
- id_factura: int → Identificador único de la factura.
- tipo_origen: String → Tipo de origen (reserva o venta directa).
- id_origen: int → ID de la reserva o venta directa asociada.
- fecha_emision: Timestamp → Fecha y hora de emisión.
- valor_total: double → Valor total de la factura.
- productos_adicionales: String → Productos adicionales incluidos.

#### InformacionEmpresa
Almacena la información corporativa del lavadero.
- id_info: int → Identificador único.
- historia: String → Historia de la empresa.
- mision: String → Misión de la empresa.
- vision: String → Visión de la empresa.
- valores: String → Valores corporativos.
- contacto: String → Información de contacto.

### 3. Relaciones Clave
- Un Usuario puede registrar múltiples Vehículos.
- Un Usuario puede realizar múltiples Reservas.
- Cada Reserva está asociada a un Vehículo y un Servicio.
- Los Servicios están categorizados por tipo de vehículo.
- Tanto Reservas como VentasDirectas pueden generar Facturas.

## Documentación del Diagrama de Secuencia

### 1. Descripción General
Este diagrama de secuencia describe el flujo de interacción entre el Cliente, el Sistema Web del Lavadero Luxury, y los distintos módulos internos. Representa el proceso completo desde la autenticación hasta la reserva de un servicio y la generación de factura.

### 2. Actores Involucrados
- *Cliente*: Persona que utiliza el sistema para reservar servicios.
- *Sistema Web*: Plataforma a través de la cual el usuario interactúa con el sistema.
- *Módulo de Autenticación*: Responsable de la gestión de usuarios y sesiones.
- *Módulo de Vehículos*: Gestiona el registro y consulta de vehículos.
- *Módulo de Servicios*: Maneja el catálogo de servicios disponibles.
- *Módulo de Reservas*: Gestiona las reservas de servicios.
- *Módulo de Facturación*: Encargado de generar las facturas.

### 3. Descripción de Secuencia de Eventos

#### Paso 1: Inicio de Sesión
- El Cliente inicia sesión en el Sistema Web.
- El Sistema Web envía las credenciales al Módulo de Autenticación.
- El Módulo de Autenticación verifica las credenciales y devuelve el acceso concedido.

#### Paso 2: Gestión de Vehículos
- El Cliente selecciona la opción de registrar un vehículo.
- El Sistema Web muestra el formulario de registro.
- El Cliente ingresa los datos del vehículo (placa, color, modelo, marca, tipo).
- El Sistema Web envía la información al Módulo de Vehículos.
- El Módulo de Vehículos valida y registra el vehículo.
- Se confirma el registro exitoso al Cliente.

#### Paso 3: Consulta de Servicios
- El Cliente solicita ver los servicios disponibles.
- El Sistema Web consulta al Módulo de Servicios.
- El Módulo de Servicios retorna los servicios filtrados por tipo de vehículo.
- El Sistema Web muestra la lista de servicios y precios al Cliente.

#### Paso 4: Realización de Reserva
- El Cliente selecciona un vehículo y un servicio.
- El Cliente selecciona fecha y hora para la reserva.
- El Sistema Web envía la solicitud al Módulo de Reservas.
- El Módulo de Reservas verifica disponibilidad y registra la reserva.
- Se confirma la reserva exitosa al Cliente.

#### Paso 5: Generación de Factura
- El Sistema Web solicita la generación de factura al Módulo de Facturación.
- El Módulo de Facturación crea la factura asociada a la reserva.
- El Sistema Web muestra la factura al Cliente con opción de descarga en PDF.
- El Cliente recibe confirmación final con detalles de la reserva y factura.

### 4. Resumen del Proceso
El sistema de gestión del Lavadero Luxury permite a los clientes autenticarse, registrar sus vehículos, consultar servicios disponibles, realizar reservas y recibir facturas de manera eficiente. La integración entre los diferentes módulos garantiza un flujo continuo de información y una experiencia de usuario satisfactoria.

## Prioridad y Estimación
📌 Prioridad: Alta  
🕒 Estimación: 7 días

## Tareas
1. Analizar en detalle los requerimientos del lavadero Luxury.
2. Documentar la estructura organizativa y los procesos de negocio actuales.
3. Identificar los tipos de vehículos aceptados (carro, moto, bus) y documentar sus servicios específicos.
4. Desarrollar el modelo entidad-relación para la base de datos del sistema.
5. Diseñar los diagramas de casos de uso que representen todas las interacciones.
6. Crear el diagrama de clases completo con todas las entidades del sistema.
7. Desarrollar diagramas de secuencia para los flujos principales (registro, gestión de vehículos, reserva, facturación).
8. Validar la documentación con los stakeholders para asegurar la correcta comprensión del negocio.
9. Elaborar el documento final de comprensión del negocio para el equipo de desarrollo.
