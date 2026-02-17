window.QUESTION_BANK = [
  {
    id: 1,
    section: "Teoria",
    topic: "DDL",
    difficulty: "basico",
    type: "input",
    prompt: "Explica con tus palabras la diferencia entre CREATE, ALTER y DROP.",
    answerText: "CREATE crea objetos, ALTER los modifica y DROP los elimina.",
    explanation: "CREATE define estructuras nuevas, ALTER cambia una existente y DROP borra el objeto completo.",
    hint: "Piensa en crear, modificar y eliminar estructuras."
  },
  {
    id: 2,
    section: "Teoria",
    topic: "DDL",
    difficulty: "basico",
    type: "input",
    prompt: "Por que es critica una PRIMARY KEY en una tabla de clientes?",
    answerText: "Porque garantiza unicidad, identifica filas y permite relaciones seguras.",
    explanation: "Sin PK es mas facil duplicar registros y fallan relaciones con FKs.",
    hint: "Clave unica, integridad y relaciones."
  },
  {
    id: 201,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Consultar ventas realizadas por el vendedor mas antiguo.",
    tasks: [
      "Tablas: Ventas, Empleados",
      "Vendedor mas antiguo por FechaContratacion",
      "Filtrar ventas por ese IdEmpleado"
    ],
    answerText: "SELECT *\nFROM Ventas\nWHERE IdEmpleado = (\n  SELECT TOP 1 IdEmpleado\n  FROM Empleados\n  WHERE Cargo = 'Vendedor'\n  ORDER BY FechaContratacion ASC\n);",
    hint: "Subconsulta con TOP 1."
  },
  {
    id: 202,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Mostrar el total comprado por el ultimo cliente registrado.",
    tasks: [
      "Tablas: Clientes, Ventas, DetalleVentas, Productos",
      "Ultimo cliente por FechaRegistro",
      "Sumar Precio * Cantidad"
    ],
    answerText: "SELECT C.IdCliente, C.Nombres, C.Apellidos,\n       SUM(P.Precio * DV.Cantidad) AS TotalComprado\nFROM Clientes C\nJOIN Ventas V ON C.IdCliente = V.IdCliente\nJOIN DetalleVentas DV ON V.IdVenta = DV.IdVenta\nJOIN Productos P ON DV.IdProducto = P.IdProducto\nWHERE C.FechaRegistro = (SELECT MAX(FechaRegistro) FROM Clientes)\nGROUP BY C.IdCliente, C.Nombres, C.Apellidos;",
    hint: "Usa MAX(FechaRegistro)."
  },
  {
    id: 203,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "basico",
    type: "task",
    prompt: "Mostrar la lista de productos mas vendidos.",
    tasks: [
      "Tabla: DetalleVentas",
      "SUM(Cantidad) por IdProducto",
      "ORDER BY DESC"
    ],
    answerText: "SELECT IdProducto, SUM(Cantidad) AS Total\nFROM DetalleVentas\nGROUP BY IdProducto\nORDER BY Total DESC;",
    hint: "Agrupa por IdProducto."
  },
  {
    id: 204,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Mostrar el ranking de vendedores por cantidad de ventas.",
    tasks: [
      "Tablas: Empleados, Ventas",
      "COUNT(Ventas)",
      "ORDER BY DESC"
    ],
    answerText: "SELECT E.Nombres, E.Apellidos, COUNT(V.IdVenta) AS TotalVentas\nFROM Empleados E\nJOIN Ventas V ON E.IdEmpleado = V.IdEmpleado\nGROUP BY E.Nombres, E.Apellidos\nORDER BY TotalVentas DESC;",
    hint: "COUNT por empleado."
  },
  {
    id: 205,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Mostrar el ranking de clientes por compras realizadas.",
    tasks: [
      "Tablas: Clientes, Ventas",
      "COUNT(Ventas)",
      "ORDER BY DESC"
    ],
    answerText: "SELECT C.Nombres, C.Apellidos, COUNT(V.IdVenta) AS TotalCompras\nFROM Clientes C\nJOIN Ventas V ON C.IdCliente = V.IdCliente\nGROUP BY C.Nombres, C.Apellidos\nORDER BY TotalCompras DESC;",
    hint: "Cuenta ventas por cliente."
  },
  {
    id: 206,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Mostrar los 3 mejores clientes segun el valor comprado.",
    tasks: [
      "Tablas: Clientes, Ventas, DetalleVentas, Productos",
      "SUM(Precio * Cantidad)",
      "TOP 3"
    ],
    answerText: "SELECT TOP 3 C.Nombres, C.Apellidos,\n       SUM(P.Precio * DV.Cantidad) AS TotalComprado\nFROM Clientes C\nJOIN Ventas V ON C.IdCliente = V.IdCliente\nJOIN DetalleVentas DV ON V.IdVenta = DV.IdVenta\nJOIN Productos P ON DV.IdProducto = P.IdProducto\nGROUP BY C.Nombres, C.Apellidos\nORDER BY TotalComprado DESC;",
    hint: "Top 3 por total."
  },
  {
    id: 207,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Reporte gerencial con ingresos por mes.",
    tasks: [
      "Tablas: Ventas, DetalleVentas, Productos",
      "Agrupar por MONTH(FechaVenta)",
      "SUM(Precio * Cantidad)"
    ],
    answerText: "SELECT MONTH(V.FechaVenta) AS Mes,\n       SUM(P.Precio * DV.Cantidad) AS Ingresos\nFROM Ventas V\nJOIN DetalleVentas DV ON V.IdVenta = DV.IdVenta\nJOIN Productos P ON DV.IdProducto = P.IdProducto\nGROUP BY MONTH(V.FechaVenta)\nORDER BY Mes;",
    hint: "Usa MONTH(FechaVenta)."
  },
  {
    id: 208,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "basico",
    type: "task",
    prompt: "Mostrar los productos con precio mayor al promedio.",
    tasks: [
      "Tabla: Productos",
      "Comparar con AVG(Precio)"
    ],
    answerText: "SELECT *\nFROM Productos\nWHERE Precio > (SELECT AVG(Precio) FROM Productos);",
    hint: "Subconsulta con AVG."
  },
  {
    id: 209,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Mostrar el empleado que ha realizado mas ventas.",
    tasks: [
      "Tablas: Empleados, Ventas",
      "COUNT(Ventas)",
      "TOP 1"
    ],
    answerText: "SELECT TOP 1 E.Nombres, E.Apellidos, COUNT(V.IdVenta) AS TotalVentas\nFROM Empleados E\nJOIN Ventas V ON E.IdEmpleado = V.IdEmpleado\nGROUP BY E.Nombres, E.Apellidos\nORDER BY TotalVentas DESC;",
    hint: "TOP 1 por conteo."
  },
  {
    id: 210,
    section: "Practica Consultas",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Mostrar los productos vendidos mas de 5 veces en total.",
    tasks: [
      "Tablas: Productos, DetalleVentas",
      "SUM(Cantidad)",
      "HAVING > 5"
    ],
    answerText: "SELECT P.NombreProducto, SUM(DV.Cantidad) AS TotalVendido\nFROM Productos P\nJOIN DetalleVentas DV ON P.IdProducto = DV.IdProducto\nGROUP BY P.NombreProducto\nHAVING SUM(DV.Cantidad) > 5;",
    hint: "HAVING con SUM."
  }
  ,
  {
    id: 3,
    section: "Teoria",
    topic: "Integridad",
    difficulty: "medio",
    type: "input",
    prompt: "Que pasa si intentas eliminar un cliente con ventas asociadas y existe una FK?",
    answerText: "SQL Server lo bloquea (error) salvo que haya cascada definida.",
    explanation: "La FK evita eliminar el registro padre si hay hijos.",
    hint: "Menciona restriccion, error o accion en cascada."
  },
  {
    id: 4,
    section: "Teoria",
    topic: "Restricciones",
    difficulty: "basico",
    type: "input",
    prompt: "Diferencia entre UNIQUE y PRIMARY KEY.",
    answerText: "UNIQUE evita duplicados; PRIMARY KEY es UNIQUE + NOT NULL y define la clave principal.",
    explanation: "Solo una PK por tabla; puede haber varias UNIQUE.",
    hint: "Ambas evitan duplicados, pero una define identidad principal."
  },
  {
    id: 5,
    section: "Teoria",
    topic: "Restricciones",
    difficulty: "medio",
    type: "input",
    prompt: "Da un ejemplo de CHECK para validar un email en SQL Server.",
    answerText: "CHECK (Email LIKE '%@%.%')",
    explanation: "Es una validacion simple para contener @ y punto.",
    hint: "Usa LIKE con un patron simple."
  },
  {
    id: 6,
    section: "Teoria",
    topic: "DML",
    difficulty: "basico",
    type: "input",
    prompt: "Diferencia entre DELETE, TRUNCATE y DROP.",
    answerText: "DELETE borra filas, TRUNCATE vacia la tabla, DROP elimina la tabla.",
    explanation: "TRUNCATE es mas rapido y reinicia identidad; DROP elimina estructura.",
    hint: "Piensa en datos, estructura y registro de transacciones."
  },
  {
    id: 7,
    section: "Teoria",
    topic: "Consultas",
    difficulty: "basico",
    type: "input",
    prompt: "Para que sirve GROUP BY y cuando se combina con HAVING?",
    answerText: "GROUP BY agrupa filas; HAVING filtra grupos despues de agregaciones.",
    explanation: "WHERE filtra filas antes de agrupar; HAVING filtra despues.",
    hint: "Agrupa filas y filtra grupos."
  },
  {
    id: 8,
    section: "Teoria",
    topic: "Consultas",
    difficulty: "medio",
    type: "input",
    prompt: "Cuando prefieres JOIN vs subconsulta en SQL Server?",
    answerText: "JOIN para combinar tablas claramente; subconsulta para filtros puntuales o agregados.",
    explanation: "JOIN suele ser mas legible y optimizable.",
    hint: "Piensa en legibilidad, rendimiento y cantidad de tablas."
  },
  {
    id: 9,
    section: "Teoria",
    topic: "DML",
    difficulty: "medio",
    type: "input",
    prompt: "Cuando NO deberias usar DELETE en un entorno productivo?",
    answerText: "Cuando hay grandes volumenes o necesitas auditoria; mejor archivado o borrado logico.",
    explanation: "DELETE puede impactar rendimiento y perder trazabilidad.",
    hint: "Piensa en volumenes grandes y necesidad de auditoria."
  },
  {
    id: 10,
    section: "Teoria",
    topic: "Modelo",
    difficulty: "basico",
    type: "input",
    prompt: "Que es integridad referencial y que objeto la asegura?",
    answerText: "Es la coherencia entre tablas y se asegura con FOREIGN KEY.",
    explanation: "Evita registros huérfanos.",
    hint: "Piensa en relaciones y claves foraneas."
  },
  {
    id: 11,
    section: "Teoria",
    topic: "Consultas",
    difficulty: "medio",
    type: "input",
    prompt: "Diferencia entre WHERE y HAVING con un ejemplo breve.",
    answerText: "WHERE filtra filas; HAVING filtra grupos. Ej: HAVING SUM(Total) > 1000.",
    explanation: "HAVING se usa con funciones de agregacion.",
    hint: "WHERE filtra filas; HAVING filtra grupos."
  },
  {
    id: 12,
    section: "Teoria",
    topic: "DDL",
    difficulty: "medio",
    type: "input",
    prompt: "Por que elegir tipos de datos correctos (INT, DATE, VARCHAR) evita errores?",
    answerText: "Porque asegura validacion, consistencia y evita conversiones costosas.",
    explanation: "Tipos incorrectos rompen consultas y comparaciones.",
    hint: "Menciona consistencia, validacion y rendimiento."
  },
  {
    id: 13,
    section: "Teoria",
    topic: "Modelo",
    difficulty: "medio",
    type: "input",
    prompt: "Que significa 'ultimo cliente registrado' en terminos de datos?",
    answerText: "El cliente con mayor FechaRegistro o mayor IdCliente si es identidad.",
    explanation: "Depende del campo que represente la fecha de registro.",
    hint: "Ordenar por fecha o por identidad."
  },
  {
    id: 14,
    section: "Teoria",
    topic: "DML",
    difficulty: "medio",
    type: "input",
    prompt: "Que cuidados tomas antes de hacer UPDATE masivo?",
    answerText: "Usar transaccion, backup, WHERE correcto y revisar con SELECT previo.",
    explanation: "Evita cambios accidentales masivos.",
    hint: "Transacciones, backups, filtros, vista previa."
  },
  {
    id: 15,
    section: "Teoria",
    topic: "Consultas",
    difficulty: "avanzado",
    type: "input",
    prompt: "Explica el impacto de usar DISTINCT en una consulta grande.",
    answerText: "DISTINCT obliga a ordenar/agrup ar resultados, consume CPU y memoria.",
    explanation: "Puede afectar rendimiento en datasets grandes.",
    hint: "Piensa en ordenamiento, memoria y CPU."
  },
  {
    id: 16,
    section: "Teoria",
    topic: "Restricciones",
    difficulty: "medio",
    type: "input",
    prompt: "Que diferencia hay entre DEFAULT y NOT NULL?",
    answerText: "DEFAULT asigna valor automatico; NOT NULL obliga a enviar valor.",
    explanation: "Se pueden usar juntas.",
    hint: "Uno asigna valor automatico, el otro exige valor."
  },
  {
    id: 17,
    section: "Teoria",
    topic: "Consultas",
    difficulty: "medio",
    type: "input",
    prompt: "Que es un JOIN INNER y que devuelve?",
    answerText: "Devuelve solo registros con coincidencia en ambas tablas.",
    explanation: "Filtra los que cumplen la condicion de union.",
    hint: "Piensa en interseccion."
  },
  {
    id: 18,
    section: "Teoria",
    topic: "Consultas",
    difficulty: "medio",
    type: "input",
    prompt: "Que es un LEFT JOIN y para que se usa?",
    answerText: "Devuelve todas las filas de la tabla izquierda y coincidencias de la derecha.",
    explanation: "Sirve para encontrar registros sin relacion.",
    hint: "Piensa en conservar la tabla izquierda."
  },
  {
    id: 19,
    section: "Teoria",
    topic: "DDL",
    difficulty: "medio",
    type: "input",
    prompt: "Que diferencia hay entre VARCHAR y NVARCHAR en SQL Server?",
    answerText: "NVARCHAR soporta Unicode y usa mas bytes; VARCHAR no.",
    explanation: "NVARCHAR es mejor para idiomas y acentos.",
    hint: "Uno soporta Unicode."
  },
  {
    id: 20,
    section: "Teoria",
    topic: "Modelo",
    difficulty: "medio",
    type: "input",
    prompt: "Que es una tabla puente y cuando la usas?",
    answerText: "Se usa para resolver relaciones muchos a muchos.",
    explanation: "Ejemplo: Ventas-Productos.",
    hint: "Relacion M:N."
  },
  {
    id: 21,
    section: "Teoria",
    topic: "Rendimiento",
    difficulty: "avanzado",
    type: "input",
    prompt: "Para que sirve un indice y en que columnas lo recomendarias?",
    answerText: "Acelera busquedas; recomendado en PK, FK y columnas filtradas.",
    explanation: "Indices mejoran SELECT pero encarecen INSERT/UPDATE.",
    hint: "Piensa en columnas usadas en WHERE y JOIN."
  },
  {
    id: 22,
    section: "Teoria",
    topic: "DML",
    difficulty: "medio",
    type: "input",
    prompt: "Que es un borrado logico?",
    answerText: "Marcar un registro como inactivo sin eliminarlo fisicamente.",
    explanation: "Se usa para auditoria.",
    hint: "Usa un campo Activo o Eliminado."
  },
  {
    id: 23,
    section: "Teoria",
    topic: "Consultas",
    difficulty: "medio",
    type: "input",
    prompt: "Como obtienes el TOP 5 con empates en SQL Server?",
    answerText: "Usando TOP (5) WITH TIES.",
    explanation: "Incluye filas con el mismo valor que la ultima.",
    hint: "Usa WITH TIES."
  },
  {
    id: 24,
    section: "Teoria",
    topic: "DDL",
    difficulty: "medio",
    type: "input",
    prompt: "Que diferencia hay entre una vista y una tabla?",
    answerText: "La vista es una consulta guardada; la tabla almacena datos.",
    explanation: "La vista no duplica datos, depende de sus tablas.",
    hint: "Consulta guardada vs almacenamiento real."
  },
  {
    id: 101,
    section: "Practica",
    topic: "DDL",
    difficulty: "basico",
    type: "task",
    prompt: "Crea la base de datos BD_GrupoComercial_SV y verifica que existe.",
    tasks: [
      "Crear BD con CREATE DATABASE.",
      "Consultar sys.databases o usar SELECT DB_NAME()."
    ],
    answerText: "CREATE DATABASE BD_GrupoComercial_SV;\nGO\nSELECT name FROM sys.databases WHERE name = 'BD_GrupoComercial_SV';",
    hint: "Puedes usar USE para cambiar de contexto."
  },
  {
    id: 102,
    section: "Practica",
    topic: "DDL",
    difficulty: "basico",
    type: "task",
    prompt: "Crea la tabla Clientes con campos basicos y PK identidad.",
    tasks: [
      "IdCliente INT IDENTITY PRIMARY KEY",
      "Nombres, Apellidos, DUI, Email, FechaRegistro"
    ],
    answerText: "CREATE TABLE Clientes (\n  IdCliente INT IDENTITY(1,1) PRIMARY KEY,\n  Nombres NVARCHAR(80) NOT NULL,\n  Apellidos NVARCHAR(80) NOT NULL,\n  DUI VARCHAR(10) NOT NULL,\n  Email VARCHAR(120) NOT NULL,\n  FechaRegistro DATE NOT NULL\n);",
    hint: "Define NOT NULL donde aplique."
  },
  {
    id: 103,
    section: "Practica",
    topic: "Restricciones",
    difficulty: "medio",
    type: "task",
    prompt: "Agrega restricciones en Clientes.",
    tasks: [
      "UNIQUE en DUI",
      "CHECK para Email",
      "DEFAULT en FechaRegistro"
    ],
    answerText: "ALTER TABLE Clientes\n  ADD CONSTRAINT UQ_Clientes_DUI UNIQUE (DUI);\nALTER TABLE Clientes\n  ADD CONSTRAINT CK_Clientes_Email CHECK (Email LIKE '%@%.%');\nALTER TABLE Clientes\n  ADD CONSTRAINT DF_Clientes_FechaRegistro DEFAULT (GETDATE()) FOR FechaRegistro;",
    hint: "Usa ALTER TABLE ADD CONSTRAINT."
  },
  {
    id: 104,
    section: "Practica",
    topic: "Relaciones",
    difficulty: "medio",
    type: "task",
    prompt: "Crea la tabla Ventas y relaciona con Clientes.",
    tasks: [
      "Crear IdVenta PK",
      "Crear IdCliente FK",
      "Definir integridad referencial"
    ],
    answerText: "CREATE TABLE Ventas (\n  IdVenta INT IDENTITY(1,1) PRIMARY KEY,\n  IdCliente INT NOT NULL,\n  IdEmpleado INT NOT NULL,\n  Fecha DATE NOT NULL,\n  Total DECIMAL(10,2) NOT NULL,\n  CONSTRAINT FK_Ventas_Clientes FOREIGN KEY (IdCliente) REFERENCES Clientes(IdCliente),\n  CONSTRAINT FK_Ventas_Empleados FOREIGN KEY (IdEmpleado) REFERENCES Empleados(IdEmpleado)\n);",
    hint: "Usa FOREIGN KEY con REFERENCES."
  },
  {
    id: 105,
    section: "Practica",
    topic: "DDL",
    difficulty: "medio",
    type: "task",
    prompt: "Modifica Clientes para agregar Telefono y ampliar Email.",
    tasks: [
      "ALTER TABLE ADD Telefono",
      "ALTER TABLE ALTER COLUMN Email"
    ],
    answerText: "ALTER TABLE Clientes ADD Telefono VARCHAR(20) NULL;\nALTER TABLE Clientes ALTER COLUMN Email VARCHAR(150) NOT NULL;",
    hint: "Verifica longitud actual antes de cambiarla."
  },
  {
    id: 106,
    section: "Practica",
    topic: "DML",
    difficulty: "basico",
    type: "task",
    prompt: "Inserta 4 clientes reales con datos coherentes.",
    tasks: [
      "Usa INSERT INTO Clientes",
      "Incluye DUI y Email validos"
    ],
    answerText: "INSERT INTO Clientes (Nombres, Apellidos, DUI, Email, FechaRegistro, Telefono) VALUES\n('Ana', 'Ramos', '01234567-8', 'ana.ramos@mail.com', '2025-01-12', '7001-2233'),\n('Luis', 'Mejia', '12345678-9', 'luis.mejia@mail.com', '2025-02-03', '7011-2244'),\n('Carla', 'Sosa', '23456789-0', 'carla.sosa@mail.com', '2025-02-18', '7022-2255'),\n('David', 'Lopez', '34567890-1', 'david.lopez@mail.com', '2025-03-05', '7033-2266');",
    hint: "Puedes usar fechas diferentes en FechaRegistro."
  },
  {
    id: 107,
    section: "Practica",
    topic: "DML",
    difficulty: "basico",
    type: "task",
    prompt: "Inserta 6 productos tecnologicos con stock y precio.",
    tasks: [
      "Crea la tabla Productos si no existe",
      "Incluye Stock, Precio, Nombre"
    ],
    answerText: "IF OBJECT_ID('Productos') IS NULL\nBEGIN\n  CREATE TABLE Productos (\n    IdProducto INT IDENTITY(1,1) PRIMARY KEY,\n    Nombre NVARCHAR(120) NOT NULL,\n    Categoria NVARCHAR(60) NOT NULL,\n    Proveedor NVARCHAR(80) NULL,\n    Precio DECIMAL(10,2) NOT NULL,\n    Stock INT NOT NULL\n  );\nEND;\nINSERT INTO Productos (Nombre, Categoria, Proveedor, Precio, Stock) VALUES\n('Audifonos Pro', 'Audio', 'Sonik', 45.90, 20),\n('Teclado Mecanico', 'Computo', 'KeyMaster', 79.99, 12),\n('Mouse Inalambrico', 'Computo', 'Clicky', 25.50, 30),\n('Bocina BT', 'Audio', 'Sonik', 55.00, 15),\n('SSD 1TB', 'Computo', 'StorageX', 110.00, 8),\n('Router AC1200', 'Redes', 'NetHome', 60.00, 9);",
    hint: "Usa precios realistas para consultas posteriores."
  },
  {
    id: 108,
    section: "Practica",
    topic: "DML",
    difficulty: "medio",
    type: "task",
    prompt: "Inserta 3 empleados y agrega salario + fecha de contratacion.",
    tasks: [
      "Agregar columnas Salario y FechaContratacion",
      "Insertar empleados con anios distintos"
    ],
    answerText: "IF OBJECT_ID('Empleados') IS NULL\nBEGIN\n  CREATE TABLE Empleados (\n    IdEmpleado INT IDENTITY(1,1) PRIMARY KEY,\n    Nombres NVARCHAR(80) NOT NULL,\n    Apellidos NVARCHAR(80) NOT NULL,\n    Cargo NVARCHAR(60) NOT NULL,\n    Salario DECIMAL(10,2) NOT NULL,\n    FechaContratacion DATE NOT NULL,\n    Sucursal NVARCHAR(60) NOT NULL\n  );\nEND;\nINSERT INTO Empleados (Nombres, Apellidos, Cargo, Salario, FechaContratacion, Sucursal) VALUES\n('Mario', 'Gomez', 'Vendedor', 550.00, '2023-05-10', 'Centro'),\n('Patricia', 'Diaz', 'Vendedor', 600.00, '2022-11-02', 'Norte'),\n('Ernesto', 'Reyes', 'Supervisor', 850.00, '2021-07-15', 'Centro');",
    hint: "Define salario con DECIMAL(10,2)."
  },
  {
    id: 109,
    section: "Practica",
    topic: "Relaciones",
    difficulty: "medio",
    type: "task",
    prompt: "Registra al menos 10 ventas con detalle de 3 productos.",
    tasks: [
      "Crear DetalleVenta si es necesario",
      "Ventas en meses distintos",
      "Clientes distintos"
    ],
    answerText: "INSERT INTO Ventas (IdCliente, IdEmpleado, Fecha, Total) VALUES\n(1, 1, '2025-01-15', 145.90),\n(2, 2, '2025-01-28', 205.50),\n(3, 1, '2025-02-02', 89.99),\n(4, 3, '2025-02-14', 320.00),\n(1, 2, '2025-02-27', 150.00),\n(2, 1, '2025-03-03', 240.00),\n(3, 2, '2025-03-10', 175.00),\n(4, 1, '2025-03-18', 98.50),\n(1, 3, '2025-04-05', 260.00),\n(2, 2, '2025-04-19', 199.90);\n\nINSERT INTO DetalleVenta (IdVenta, IdProducto, Cantidad, PrecioUnitario) VALUES\n(1, 1, 1, 45.90), (1, 2, 1, 79.99), (1, 3, 1, 25.50),\n(2, 2, 1, 79.99), (2, 4, 1, 55.00), (2, 5, 1, 110.00),\n(3, 3, 1, 25.50), (3, 6, 1, 60.00), (3, 1, 1, 45.90),\n(4, 5, 2, 110.00), (4, 2, 1, 79.99), (4, 4, 1, 55.00),\n(5, 1, 1, 45.90), (5, 6, 1, 60.00), (5, 3, 2, 25.50),\n(6, 2, 2, 79.99), (6, 4, 1, 55.00), (6, 6, 1, 60.00),\n(7, 5, 1, 110.00), (7, 3, 1, 25.50), (7, 4, 1, 55.00),\n(8, 1, 1, 45.90), (8, 2, 1, 79.99), (8, 6, 1, 60.00),\n(9, 5, 1, 110.00), (9, 4, 1, 55.00), (9, 3, 2, 25.50),\n(10, 2, 1, 79.99), (10, 5, 1, 110.00), (10, 1, 1, 45.90);",
    hint: "Piensa en IdVenta + IdProducto."
  },
  {
    id: 110,
    section: "Practica",
    topic: "Consultas",
    difficulty: "basico",
    type: "task",
    prompt: "Lista clientes registrados en febrero.",
    tasks: [
      "Usa MONTH(FechaRegistro) = 2",
      "Ordena por fecha"
    ],
    answerText: "SELECT IdCliente, Nombres, Apellidos, FechaRegistro\nFROM Clientes\nWHERE MONTH(FechaRegistro) = 2\nORDER BY FechaRegistro;",
    hint: "Recuerda filtrar por mes."
  },
  {
    id: 111,
    section: "Practica",
    topic: "Consultas",
    difficulty: "basico",
    type: "task",
    prompt: "Muestra productos con stock menor a 10.",
    tasks: [
      "Selecciona Nombre, Stock",
      "Ordena por Stock ASC"
    ],
    answerText: "SELECT IdProducto, Nombre, Stock\nFROM Productos\nWHERE Stock < 10\nORDER BY Stock ASC;",
    hint: "Usa WHERE Stock < 10."
  },
  {
    id: 112,
    section: "Practica",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Consulta ventas realizadas por el primer vendedor.",
    tasks: [
      "Definir primer vendedor por FechaContratacion",
      "Usar JOIN entre Ventas y Empleados"
    ],
    answerText: "SELECT v.*\nFROM Ventas v\nJOIN Empleados e ON e.IdEmpleado = v.IdEmpleado\nWHERE e.IdEmpleado = (\n  SELECT TOP (1) IdEmpleado FROM Empleados ORDER BY FechaContratacion ASC\n);",
    hint: "Subconsulta para obtener el vendedor mas antiguo."
  },
  {
    id: 113,
    section: "Practica",
    topic: "DML",
    difficulty: "basico",
    type: "task",
    prompt: "Actualiza el telefono de un cliente.",
    tasks: [
      "Usa UPDATE con WHERE",
      "Verifica el resultado con SELECT"
    ],
    answerText: "UPDATE Clientes\nSET Telefono = '7999-1234'\nWHERE IdCliente = 2;\nSELECT IdCliente, Telefono FROM Clientes WHERE IdCliente = 2;",
    hint: "Filtra por IdCliente o DUI."
  },
  {
    id: 114,
    section: "Practica",
    topic: "DML",
    difficulty: "medio",
    type: "task",
    prompt: "Cambia el precio de productos con Stock cero.",
    tasks: [
      "Usa UPDATE",
      "Aplica un nuevo precio o marca como descontinuado"
    ],
    answerText: "UPDATE Productos\nSET Precio = Precio * 0.90\nWHERE Stock = 0;",
    hint: "WHERE Stock = 0."
  },
  {
    id: 115,
    section: "Practica",
    topic: "DML",
    difficulty: "medio",
    type: "task",
    prompt: "Aumenta el salario de empleados con mas de 1 anio.",
    tasks: [
      "Calcular antiguedad",
      "Actualizar Salario con porcentaje"
    ],
    answerText: "UPDATE Empleados\nSET Salario = Salario * 1.05\nWHERE DATEDIFF(YEAR, FechaContratacion, GETDATE()) >= 1;",
    hint: "Usa DATEDIFF(YEAR, FechaContratacion, GETDATE())."
  },
  {
    id: 116,
    section: "Practica",
    topic: "DML",
    difficulty: "medio",
    type: "task",
    prompt: "Elimina clientes sin ventas registradas.",
    tasks: [
      "Usa LEFT JOIN o NOT EXISTS",
      "Eliminar solo los sin movimientos"
    ],
    answerText: "DELETE c\nFROM Clientes c\nWHERE NOT EXISTS (\n  SELECT 1 FROM Ventas v WHERE v.IdCliente = c.IdCliente\n);",
    hint: "Cuidado con integridad referencial."
  },
  {
    id: 117,
    section: "Practica",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Ranking de vendedores por total vendido.",
    tasks: [
      "SUM de totales",
      "GROUP BY vendedor",
      "ORDER BY DESC"
    ],
    answerText: "SELECT v.IdEmpleado, SUM(v.Total) AS TotalVendido\nFROM Ventas v\nGROUP BY v.IdEmpleado\nORDER BY TotalVendido DESC;",
    hint: "Si tienes DetalleVenta, suma cantidad * precio."
  },
  {
    id: 118,
    section: "Practica",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Top 3 clientes por valor comprado.",
    tasks: [
      "Sumar total por cliente",
      "Ordenar y tomar TOP 3"
    ],
    answerText: "SELECT TOP (3) v.IdCliente, SUM(v.Total) AS TotalComprado\nFROM Ventas v\nGROUP BY v.IdCliente\nORDER BY TotalComprado DESC;",
    hint: "Usa TOP (3) con ORDER BY DESC."
  },
  {
    id: 119,
    section: "Practica",
    topic: "Consultas",
    difficulty: "avanzado",
    type: "task",
    prompt: "Reporte gerencial de ingresos por mes.",
    tasks: [
      "Agrupar por anio y mes",
      "Sumar ingresos",
      "Ordenar cronologicamente"
    ],
    answerText: "SELECT YEAR(Fecha) AS Anio, MONTH(Fecha) AS Mes, SUM(Total) AS Ingresos\nFROM Ventas\nGROUP BY YEAR(Fecha), MONTH(Fecha)\nORDER BY Anio, Mes;",
    hint: "Combina YEAR() y MONTH()."
  },
  {
    id: 120,
    section: "Practica",
    topic: "Consultas",
    difficulty: "avanzado",
    type: "task",
    prompt: "Productos con precio mayor al promedio.",
    tasks: [
      "Calcular AVG(Precio)",
      "Comparar con subconsulta"
    ],
    answerText: "SELECT IdProducto, Nombre, Precio\nFROM Productos\nWHERE Precio > (SELECT AVG(Precio) FROM Productos);",
    hint: "Usa una subconsulta en WHERE."
  },
  {
    id: 121,
    section: "Practica",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Empleado que ha realizado mas ventas.",
    tasks: [
      "Contar ventas por empleado",
      "Ordenar DESC y TOP 1"
    ],
    answerText: "SELECT TOP (1) IdEmpleado, COUNT(*) AS CantidadVentas\nFROM Ventas\nGROUP BY IdEmpleado\nORDER BY CantidadVentas DESC;",
    hint: "COUNT(IdVenta) por empleado."
  },
  {
    id: 122,
    section: "Practica",
    topic: "Consultas",
    difficulty: "avanzado",
    type: "task",
    prompt: "Productos vendidos mas de 5 veces en total.",
    tasks: [
      "Sumar cantidad por producto",
      "Filtrar con HAVING > 5"
    ],
    answerText: "SELECT IdProducto, SUM(Cantidad) AS TotalVendidas\nFROM DetalleVenta\nGROUP BY IdProducto\nHAVING SUM(Cantidad) > 5;",
    hint: "Necesitas DetalleVenta."
  },
  {
    id: 123,
    section: "Practica",
    topic: "DDL",
    difficulty: "medio",
    type: "task",
    prompt: "Crea tablas Empleados y Productos con relaciones a Ventas.",
    tasks: [
      "Crear PK en cada tabla",
      "FK en Ventas",
      "Verificar integridad"
    ],
    answerText: "CREATE TABLE Empleados (\n  IdEmpleado INT IDENTITY(1,1) PRIMARY KEY,\n  Nombres NVARCHAR(80) NOT NULL,\n  Apellidos NVARCHAR(80) NOT NULL,\n  Cargo NVARCHAR(60) NOT NULL,\n  Salario DECIMAL(10,2) NOT NULL,\n  FechaContratacion DATE NOT NULL,\n  Sucursal NVARCHAR(60) NOT NULL\n);\n\nCREATE TABLE Productos (\n  IdProducto INT IDENTITY(1,1) PRIMARY KEY,\n  Nombre NVARCHAR(120) NOT NULL,\n  Categoria NVARCHAR(60) NOT NULL,\n  Proveedor NVARCHAR(80) NULL,\n  Precio DECIMAL(10,2) NOT NULL,\n  Stock INT NOT NULL\n);\n\nALTER TABLE Ventas\n  ADD CONSTRAINT FK_Ventas_Empleados FOREIGN KEY (IdEmpleado) REFERENCES Empleados(IdEmpleado);",
    hint: "Puedes usar ON DELETE NO ACTION."
  },
  {
    id: 124,
    section: "Practica",
    topic: "DDL",
    difficulty: "avanzado",
    type: "task",
    prompt: "Crea un diagrama relacional (fuera del script) y documenta las relaciones.",
    tasks: [
      "Captura en imagen",
      "Describe cardinalidades"
    ],
    answerText: "Diagrama con relaciones: Clientes 1-N Ventas, Empleados 1-N Ventas, Ventas 1-N DetalleVenta, Productos 1-N DetalleVenta.",
    hint: "Puedes usar SSMS para generar el diagrama."
  },
  {
    id: 125,
    section: "Practica",
    topic: "DDL",
    difficulty: "medio",
    type: "task",
    prompt: "Agrega un indice en Productos por Nombre.",
    tasks: [
      "Crear indice no cluster",
      "Verificar con sys.indexes"
    ],
    answerText: "CREATE INDEX IX_Productos_Nombre ON Productos(Nombre);\nSELECT name FROM sys.indexes WHERE name = 'IX_Productos_Nombre';",
    hint: "Usa CREATE INDEX."
  },
  {
    id: 126,
    section: "Practica",
    topic: "DML",
    difficulty: "medio",
    type: "task",
    prompt: "Crea un campo Activo en Clientes y realiza borrado logico.",
    tasks: [
      "ALTER TABLE ADD Activo",
      "Actualizar Activo=0 en un cliente"
    ],
    answerText: "ALTER TABLE Clientes ADD Activo BIT NOT NULL CONSTRAINT DF_Clientes_Activo DEFAULT (1);\nUPDATE Clientes SET Activo = 0 WHERE IdCliente = 3;",
    hint: "Usa BIT con DEFAULT 1."
  },
  {
    id: 127,
    section: "Practica",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Lista clientes sin compras (borrado logico incluido).",
    tasks: [
      "Usa LEFT JOIN o NOT EXISTS",
      "Filtra Activo=1"
    ],
    answerText: "SELECT c.*\nFROM Clientes c\nWHERE c.Activo = 1\n  AND NOT EXISTS (SELECT 1 FROM Ventas v WHERE v.IdCliente = c.IdCliente);",
    hint: "Combina Activo y NOT EXISTS."
  },
  {
    id: 128,
    section: "Practica",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Calcula el ticket promedio por venta.",
    tasks: [
      "Usa AVG sobre Total",
      "Devuelve un solo valor"
    ],
    answerText: "SELECT AVG(Total) AS TicketPromedio\nFROM Ventas;",
    hint: "AVG(Total)."
  },
  {
    id: 129,
    section: "Practica",
    topic: "Consultas",
    difficulty: "avanzado",
    type: "task",
    prompt: "Ventas con mas de 3 productos distintos.",
    tasks: [
      "Agrupar por IdVenta en DetalleVenta",
      "Contar productos distintos"
    ],
    answerText: "SELECT IdVenta\nFROM DetalleVenta\nGROUP BY IdVenta\nHAVING COUNT(DISTINCT IdProducto) > 3;",
    hint: "COUNT(DISTINCT IdProducto)."
  },
  {
    id: 130,
    section: "Practica",
    topic: "DML",
    difficulty: "medio",
    type: "task",
    prompt: "Sube el precio de productos categoria 'Audio' en 8%.",
    tasks: [
      "Agregar columna Categoria si no existe",
      "Actualizar solo Audio"
    ],
    answerText: "UPDATE Productos\nSET Precio = Precio * 1.08\nWHERE Categoria = 'Audio';",
    hint: "Usa porcentaje con multiplicacion."
  },
  {
    id: 131,
    section: "Practica",
    topic: "Consultas",
    difficulty: "avanzado",
    type: "task",
    prompt: "Ranking de clientes con numero de compras y total gastado.",
    tasks: [
      "COUNT de ventas",
      "SUM del total",
      "Ordenar por total"
    ],
    answerText: "SELECT IdCliente, COUNT(*) AS Compras, SUM(Total) AS TotalGastado\nFROM Ventas\nGROUP BY IdCliente\nORDER BY TotalGastado DESC;",
    hint: "COUNT y SUM juntos."
  },
  {
    id: 132,
    section: "Practica",
    topic: "DDL",
    difficulty: "medio",
    type: "task",
    prompt: "Crea una vista VentasResumen con cliente, fecha y total.",
    tasks: [
      "CREATE VIEW",
      "JOIN Ventas y Clientes"
    ],
    answerText: "CREATE VIEW VentasResumen AS\nSELECT v.IdVenta, c.Nombres, c.Apellidos, v.Fecha, v.Total\nFROM Ventas v\nJOIN Clientes c ON c.IdCliente = v.IdCliente;",
    hint: "Incluye nombre del cliente."
  },
  {
    id: 133,
    section: "Practica",
    topic: "DDL",
    difficulty: "avanzado",
    type: "task",
    prompt: "Crea un procedimiento almacenado para registrar una venta.",
    tasks: [
      "CREATE PROCEDURE",
      "INSERT en Ventas",
      "Retornar IdVenta"
    ],
    answerText: "CREATE PROCEDURE sp_RegistrarVenta\n  @IdCliente INT,\n  @IdEmpleado INT,\n  @Fecha DATE,\n  @Total DECIMAL(10,2)\nAS\nBEGIN\n  INSERT INTO Ventas (IdCliente, IdEmpleado, Fecha, Total)\n  VALUES (@IdCliente, @IdEmpleado, @Fecha, @Total);\n\n  SELECT SCOPE_IDENTITY() AS IdVenta;\nEND;",
    hint: "Usa SCOPE_IDENTITY()."
  },
  {
    id: 134,
    section: "Practica",
    topic: "DML",
    difficulty: "avanzado",
    type: "task",
    prompt: "Normaliza precios: crea tabla PreciosHistoricos y registra cambios.",
    tasks: [
      "Crear PreciosHistoricos",
      "Insertar precio anterior cuando actualices"
    ],
    answerText: "CREATE TABLE PreciosHistoricos (\n  IdHistorial INT IDENTITY(1,1) PRIMARY KEY,\n  IdProducto INT NOT NULL,\n  PrecioAnterior DECIMAL(10,2) NOT NULL,\n  FechaCambio DATETIME NOT NULL DEFAULT GETDATE()\n);\n\nINSERT INTO PreciosHistoricos (IdProducto, PrecioAnterior)\nSELECT IdProducto, Precio FROM Productos WHERE IdProducto = 1;\n\nUPDATE Productos SET Precio = 99.99 WHERE IdProducto = 1;",
    hint: "Piensa en auditoria de cambios."
  },
  {
    id: 135,
    section: "Practica",
    topic: "Consultas",
    difficulty: "medio",
    type: "task",
    prompt: "Ventas por dia de la semana.",
    tasks: [
      "Usa DATENAME(WEEKDAY, Fecha)",
      "Agrupa y suma"
    ],
    answerText: "SELECT DATENAME(WEEKDAY, Fecha) AS Dia, SUM(Total) AS TotalDia\nFROM Ventas\nGROUP BY DATENAME(WEEKDAY, Fecha);",
    hint: "DATENAME(WEEKDAY, Fecha)."
  },
    {
      id: 136,
      section: "Teoria",
      topic: "Transacciones",
      difficulty: "medio",
      type: "input",
      prompt: "Que asegura una transaccion en SQL Server?",
      answerText: "Atomicidad y consistencia: todo se confirma o se revierte.",
      explanation: "BEGIN TRAN, COMMIT y ROLLBACK protegen cambios.",
      hint: "Piensa en todo o nada."
    },
    {
      id: 137,
      section: "Practica",
      topic: "DDL",
      difficulty: "avanzado",
      type: "task",
      prompt: "Diseña la tabla DetalleVenta con PK compuesta.",
      tasks: [
        "PK compuesta: IdVenta + IdProducto",
        "Cantidad, PrecioUnitario",
        "FK a Ventas y Productos"
      ],
      answerText: "CREATE TABLE DetalleVenta (\n  IdVenta INT NOT NULL,\n  IdProducto INT NOT NULL,\n  Cantidad INT NOT NULL,\n  PrecioUnitario DECIMAL(10,2) NOT NULL,\n  CONSTRAINT PK_DetalleVenta PRIMARY KEY (IdVenta, IdProducto),\n  CONSTRAINT FK_DetalleVenta_Ventas FOREIGN KEY (IdVenta) REFERENCES Ventas(IdVenta),\n  CONSTRAINT FK_DetalleVenta_Productos FOREIGN KEY (IdProducto) REFERENCES Productos(IdProducto)\n);",
      hint: "Usa PRIMARY KEY (IdVenta, IdProducto)."
    },
    {
      id: 138,
      section: "Practica",
      topic: "DML",
      difficulty: "medio",
      type: "task",
      prompt: "Carga 12 clientes con formato de DUI valido (00000000-0).",
      tasks: [
        "DUI unico",
        "Emails con dominio",
        "Fechas distribuidas en 3 meses"
      ],
      answerText: "INSERT INTO Clientes (Nombres, Apellidos, DUI, Email, FechaRegistro, Telefono) VALUES\n('Sofia','Mendez','45678901-2','sofia.mendez@mail.com','2025-01-04','7111-1100'),\n('Hector','Vega','56789012-3','hector.vega@mail.com','2025-01-19','7111-1101'),\n('Laura','Perez','67890123-4','laura.perez@mail.com','2025-01-26','7111-1102'),\n('Oscar','Lara','78901234-5','oscar.lara@mail.com','2025-02-02','7111-1103'),\n('Paula','Serrano','89012345-6','paula.serrano@mail.com','2025-02-09','7111-1104'),\n('Rene','Guzman','90123456-7','rene.guzman@mail.com','2025-02-15','7111-1105'),\n('Diana','Campos','01234567-9','diana.campos@mail.com','2025-02-25','7111-1106'),\n('Ivan','Aguilar','11234567-0','ivan.aguilar@mail.com','2025-03-03','7111-1107'),\n('Nora','Diaz','21234567-1','nora.diaz@mail.com','2025-03-10','7111-1108'),\n('Tomas','Ibarra','31234567-2','tomas.ibarra@mail.com','2025-03-16','7111-1109'),\n('Vero','Lopez','41234567-3','vero.lopez@mail.com','2025-03-20','7111-1110'),\n('Joel','Martinez','51234567-4','joel.martinez@mail.com','2025-03-27','7111-1111');",
      hint: "Usa un CHECK para el formato si lo tienes."
    },
    {
      id: 139,
      section: "Practica",
      topic: "DML",
      difficulty: "medio",
      type: "task",
      prompt: "Carga 15 productos con categoria y proveedor.",
      tasks: [
        "Agregar columnas Categoria y Proveedor",
        "Precios entre 10 y 1500"
      ],
      answerText: "ALTER TABLE Productos ADD Categoria NVARCHAR(60) NULL, Proveedor NVARCHAR(80) NULL;\nINSERT INTO Productos (Nombre, Categoria, Proveedor, Precio, Stock) VALUES\n('Monitor 24', 'Computo', 'ViewTek', 180.00, 10),\n('Tablet 10', 'Movil', 'Mobee', 210.00, 14),\n('Impresora WiFi', 'Oficina', 'Printy', 135.00, 6),\n('Smartwatch', 'Movil', 'Mobee', 95.00, 22),\n('Microfono USB', 'Audio', 'Sonik', 70.00, 18),\n('Laptop 14', 'Computo', 'TechHub', 650.00, 5),\n('Camara Web', 'Computo', 'ViewTek', 45.00, 20),\n('Parlante Studio', 'Audio', 'Sonik', 120.00, 7),\n('Router Mesh', 'Redes', 'NetHome', 160.00, 9),\n('SSD 2TB', 'Computo', 'StorageX', 220.00, 4),\n('Teclado Slim', 'Computo', 'KeyMaster', 35.00, 25),\n('Mouse Pro', 'Computo', 'Clicky', 40.00, 30),\n('PowerBank', 'Movil', 'Mobee', 28.00, 40),\n('Auriculares BT', 'Audio', 'Sonik', 60.00, 16),\n('Proyector', 'Oficina', 'ViewTek', 480.00, 3);",
      hint: "Categorias: Audio, Computo, Hogar, Movil."
    },
    {
      id: 140,
      section: "Practica",
      topic: "Consultas",
      difficulty: "medio",
      type: "task",
      prompt: "Top 5 productos por ingresos (cantidad * precio).",
      tasks: [
        "SUM(Cantidad * PrecioUnitario)",
        "ORDER BY DESC",
        "TOP 5"
      ],
      answerText: "SELECT TOP (5) IdProducto, SUM(Cantidad * PrecioUnitario) AS Ingresos\nFROM DetalleVenta\nGROUP BY IdProducto\nORDER BY Ingresos DESC;",
      hint: "Multiplica cantidad por precio unitario."
    },
    {
      id: 141,
      section: "Practica",
      topic: "Consultas",
      difficulty: "medio",
      type: "task",
      prompt: "Clientes que compraron en los ultimos 30 dias.",
      tasks: [
        "Comparar Fecha con GETDATE()",
        "DISTINCT clientes"
      ],
      answerText: "SELECT DISTINCT IdCliente\nFROM Ventas\nWHERE Fecha >= DATEADD(DAY, -30, GETDATE());",
      hint: "Usa DATEADD y GETDATE."
    },
    {
      id: 142,
      section: "Practica",
      topic: "Consultas",
      difficulty: "medio",
      type: "task",
      prompt: "Productos sin ventas en los ultimos 60 dias.",
      tasks: [
        "LEFT JOIN DetalleVenta",
        "Filtrar por fecha en Ventas"
      ],
      answerText: "SELECT p.IdProducto, p.Nombre\nFROM Productos p\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM DetalleVenta d\n  JOIN Ventas v ON v.IdVenta = d.IdVenta\n  WHERE d.IdProducto = p.IdProducto\n    AND v.Fecha >= DATEADD(DAY, -60, GETDATE())\n);",
      hint: "Usa NOT EXISTS con filtro de fecha."
    },
    {
      id: 143,
      section: "Practica",
      topic: "DML",
      difficulty: "medio",
      type: "task",
      prompt: "Actualiza stock al registrar una venta (descuento de inventario).",
      tasks: [
        "Resta Cantidad de Productos",
        "Usa transaccion"
      ],
      answerText: "UPDATE p\nSET p.Stock = p.Stock - d.Cantidad\nFROM Productos p\nJOIN DetalleVenta d ON d.IdProducto = p.IdProducto\nWHERE d.IdVenta = 1;",
      hint: "Usa JOIN en UPDATE."
    },
    {
      id: 144,
      section: "Practica",
      topic: "Transacciones",
      difficulty: "avanzado",
      type: "task",
      prompt: "Registra una venta completa en una transaccion.",
      tasks: [
        "INSERT en Ventas",
        "INSERT en DetalleVenta",
        "UPDATE Stock",
        "COMMIT o ROLLBACK"
      ],
      answerText: "BEGIN TRAN;\n\nINSERT INTO Ventas (IdCliente, IdEmpleado, Fecha, Total)\nVALUES (1, 1, GETDATE(), 150.00);\n\nDECLARE @IdVenta INT = SCOPE_IDENTITY();\n\nINSERT INTO DetalleVenta (IdVenta, IdProducto, Cantidad, PrecioUnitario)\nVALUES (@IdVenta, 1, 1, 45.90),\n       (@IdVenta, 2, 1, 79.99),\n       (@IdVenta, 3, 1, 25.50);\n\nUPDATE p\nSET p.Stock = p.Stock - d.Cantidad\nFROM Productos p\nJOIN DetalleVenta d ON d.IdProducto = p.IdProducto\nWHERE d.IdVenta = @IdVenta;\n\nCOMMIT;",
      hint: "Si algo falla, ROLLBACK."
    },
    {
      id: 145,
      section: "Practica",
      topic: "Consultas",
      difficulty: "avanzado",
      type: "task",
      prompt: "Ticket promedio por cliente.",
      tasks: [
        "Promedio del total por cliente",
        "ORDER BY DESC"
      ],
      answerText: "SELECT IdCliente, AVG(Total) AS TicketPromedio\nFROM Ventas\nGROUP BY IdCliente\nORDER BY TicketPromedio DESC;",
      hint: "AVG(Total) por IdCliente."
    },
    {
      id: 146,
      section: "Practica",
      topic: "Consultas",
      difficulty: "medio",
      type: "task",
      prompt: "Ventas por sucursal (si agregas Sucursal en Empleados).",
      tasks: [
        "Agregar Sucursal",
        "SUM por sucursal"
      ],
      answerText: "SELECT e.Sucursal, SUM(v.Total) AS TotalSucursal\nFROM Ventas v\nJOIN Empleados e ON v.IdEmpleado = e.IdEmpleado\nGROUP BY e.Sucursal;",
      hint: "Relaciona Ventas con Empleados."
    },
    {
      id: 147,
      section: "Practica",
      topic: "DML",
      difficulty: "medio",
      type: "task",
      prompt: "Corrige clientes con email invalido a un dominio estandar.",
      tasks: [
        "Detecta emails sin @",
        "Actualizar al formato nombre@dominio.com"
      ],
      answerText: "UPDATE Clientes\nSET Email = LOWER(CONCAT(Nombres, '.', Apellidos, '@empresa.com'))\nWHERE Email NOT LIKE '%@%';",
      hint: "Usa CONCAT y LIKE."
    },
    {
      id: 148,
      section: "Practica",
      topic: "Consultas",
      difficulty: "avanzado",
      type: "task",
      prompt: "Comparar ventas mes actual vs mes anterior.",
      tasks: [
        "Sumar por mes",
        "Calcular diferencia"
      ],
      answerText: "WITH VentasMes AS (\n  SELECT YEAR(Fecha) AS Anio, MONTH(Fecha) AS Mes, SUM(Total) AS TotalMes\n  FROM Ventas\n  GROUP BY YEAR(Fecha), MONTH(Fecha)\n)\nSELECT a.TotalMes AS TotalActual, b.TotalMes AS TotalAnterior,\n       (a.TotalMes - b.TotalMes) AS Diferencia\nFROM VentasMes a\nJOIN VentasMes b\n  ON (a.Anio = b.Anio AND a.Mes = b.Mes + 1) OR (a.Anio = b.Anio + 1 AND a.Mes = 1 AND b.Mes = 12);",
      hint: "Usa CTE o subconsultas para dos meses."
    },
    {
      id: 149,
      section: "Practica",
      topic: "DDL",
      difficulty: "medio",
      type: "task",
      prompt: "Agrega un CHECK para que el Salario sea mayor a 365.",
      tasks: [
        "ALTER TABLE Empleados",
        "CHECK (Salario > 365)"
      ],
      answerText: "ALTER TABLE Empleados\nADD CONSTRAINT CK_Empleados_Salario CHECK (Salario > 365);",
      hint: "Usa ALTER TABLE ADD CONSTRAINT."
    },
    {
      id: 150,
      section: "Practica",
      topic: "Consultas",
      difficulty: "avanzado",
      type: "task",
      prompt: "Clientes que compraron productos de mas de 3 categorias distintas.",
      tasks: [
        "JOIN Ventas, DetalleVenta, Productos",
        "COUNT DISTINCT Categoria",
        "HAVING > 3"
      ],
      answerText: "SELECT v.IdCliente\nFROM Ventas v\nJOIN DetalleVenta d ON v.IdVenta = d.IdVenta\nJOIN Productos p ON p.IdProducto = d.IdProducto\nGROUP BY v.IdCliente\nHAVING COUNT(DISTINCT p.Categoria) > 3;",
      hint: "COUNT DISTINCT Categoria."
    },
      {
        id: 151,
        section: "Practica",
        topic: "DDL",
        difficulty: "avanzado",
        type: "task",
        prompt: "A partir del diagrama, crea la base de datos y todas las tablas.",
        code: "erDiagram\n  CLIENTES ||--o{ VENTAS : realiza\n  EMPLEADOS ||--o{ VENTAS : vende\n  VENTAS ||--|{ DETALLE_VENTA : contiene\n  PRODUCTOS ||--o{ DETALLE_VENTA : incluye",
        tasks: [
          "BD: LabVentas",
          "CLIENTES(IdCliente, Nombres, Apellidos, DUI, Email, FechaRegistro, Telefono)",
          "EMPLEADOS(IdEmpleado, Nombres, Apellidos, Cargo, Salario, FechaContratacion, Sucursal)",
          "PRODUCTOS(IdProducto, Nombre, Categoria, Precio, Stock)",
          "VENTAS(IdVenta, IdCliente, IdEmpleado, Fecha, Total)",
          "DETALLE_VENTA(IdVenta, IdProducto, Cantidad, PrecioUnitario)"
        ],
        answerText: "CREATE DATABASE LabVentas;\nGO\nUSE LabVentas;\n\nCREATE TABLE Clientes (\n  IdCliente INT IDENTITY(1,1) PRIMARY KEY,\n  Nombres NVARCHAR(80) NOT NULL,\n  Apellidos NVARCHAR(80) NOT NULL,\n  DUI VARCHAR(10) NOT NULL,\n  Email VARCHAR(120) NOT NULL,\n  FechaRegistro DATE NOT NULL,\n  Telefono VARCHAR(20) NULL,\n  Activo BIT NOT NULL CONSTRAINT DF_Clientes_Activo DEFAULT (1)\n);\n\nCREATE TABLE Empleados (\n  IdEmpleado INT IDENTITY(1,1) PRIMARY KEY,\n  Nombres NVARCHAR(80) NOT NULL,\n  Apellidos NVARCHAR(80) NOT NULL,\n  Cargo NVARCHAR(60) NOT NULL,\n  Salario DECIMAL(10,2) NOT NULL,\n  FechaContratacion DATE NOT NULL,\n  Sucursal NVARCHAR(60) NOT NULL\n);\n\nCREATE TABLE Productos (\n  IdProducto INT IDENTITY(1,1) PRIMARY KEY,\n  Nombre NVARCHAR(120) NOT NULL,\n  Categoria NVARCHAR(60) NOT NULL,\n  Proveedor NVARCHAR(80) NULL,\n  Precio DECIMAL(10,2) NOT NULL,\n  Stock INT NOT NULL\n);\n\nCREATE TABLE Ventas (\n  IdVenta INT IDENTITY(1,1) PRIMARY KEY,\n  IdCliente INT NOT NULL,\n  IdEmpleado INT NOT NULL,\n  Fecha DATE NOT NULL,\n  Total DECIMAL(10,2) NOT NULL,\n  CONSTRAINT FK_Ventas_Clientes FOREIGN KEY (IdCliente) REFERENCES Clientes(IdCliente),\n  CONSTRAINT FK_Ventas_Empleados FOREIGN KEY (IdEmpleado) REFERENCES Empleados(IdEmpleado)\n);\n\nCREATE TABLE DetalleVenta (\n  IdVenta INT NOT NULL,\n  IdProducto INT NOT NULL,\n  Cantidad INT NOT NULL,\n  PrecioUnitario DECIMAL(10,2) NOT NULL,\n  CONSTRAINT PK_DetalleVenta PRIMARY KEY (IdVenta, IdProducto),\n  CONSTRAINT FK_DetalleVenta_Ventas FOREIGN KEY (IdVenta) REFERENCES Ventas(IdVenta),\n  CONSTRAINT FK_DetalleVenta_Productos FOREIGN KEY (IdProducto) REFERENCES Productos(IdProducto)\n);",
        hint: "Empieza por CLIENTES, EMPLEADOS y PRODUCTOS, luego VENTAS y DETALLE_VENTA."
      },
      {
        id: 152,
        section: "Practica",
        topic: "Restricciones",
        difficulty: "medio",
        type: "task",
        prompt: "Agrega restricciones clave al modelo del diagrama.",
        tasks: [
          "UNIQUE en DUI",
          "CHECK de Email",
          "DEFAULT en FechaRegistro",
          "FKs con NO ACTION"
        ],
        answerText: "ALTER TABLE Clientes\n  ADD CONSTRAINT UQ_Clientes_DUI UNIQUE (DUI);\nALTER TABLE Clientes\n  ADD CONSTRAINT CK_Clientes_Email CHECK (Email LIKE '%@%.%');\nALTER TABLE Clientes\n  ADD CONSTRAINT DF_Clientes_FechaRegistro DEFAULT (GETDATE()) FOR FechaRegistro;\n\nALTER TABLE Ventas\n  ADD CONSTRAINT FK_Ventas_Clientes FOREIGN KEY (IdCliente) REFERENCES Clientes(IdCliente);\nALTER TABLE Ventas\n  ADD CONSTRAINT FK_Ventas_Empleados FOREIGN KEY (IdEmpleado) REFERENCES Empleados(IdEmpleado);",
        hint: "Usa ALTER TABLE ADD CONSTRAINT."
      },
      {
        id: 153,
        section: "Practica",
        topic: "DML",
        difficulty: "medio",
        type: "task",
        prompt: "Carga datos minimos del diagrama para pruebas de laboratorio.",
        tasks: [
          "4 clientes, 3 empleados, 6 productos",
          "10 ventas en 3 meses distintos",
          "Cada venta con 3 detalles"
        ],
        answerText: "INSERT INTO Clientes (Nombres, Apellidos, DUI, Email, FechaRegistro, Telefono, Activo) VALUES\n('Ana','Ramos','01234567-8','ana.ramos@mail.com','2025-01-12','7001-2233',1),\n('Luis','Mejia','12345678-9','luis.mejia@mail.com','2025-02-03','7011-2244',1),\n('Carla','Sosa','23456789-0','carla.sosa@mail.com','2025-02-18','7022-2255',1),\n('David','Lopez','34567890-1','david.lopez@mail.com','2025-03-05','7033-2266',1);\n\nINSERT INTO Empleados (Nombres, Apellidos, Cargo, Salario, FechaContratacion, Sucursal) VALUES\n('Mario','Gomez','Vendedor',550.00,'2023-05-10','Centro'),\n('Patricia','Diaz','Vendedor',600.00,'2022-11-02','Norte'),\n('Ernesto','Reyes','Supervisor',850.00,'2021-07-15','Centro');\n\nINSERT INTO Productos (Nombre, Categoria, Proveedor, Precio, Stock) VALUES\n('Audifonos Pro','Audio','Sonik',45.90,20),\n('Teclado Mecanico','Computo','KeyMaster',79.99,12),\n('Mouse Inalambrico','Computo','Clicky',25.50,30),\n('Bocina BT','Audio','Sonik',55.00,15),\n('SSD 1TB','Computo','StorageX',110.00,8),\n('Router AC1200','Redes','NetHome',60.00,9);\n\nINSERT INTO Ventas (IdCliente, IdEmpleado, Fecha, Total) VALUES\n(1,1,'2025-01-15',145.90),(2,2,'2025-01-28',205.50),(3,1,'2025-02-02',89.99),(4,3,'2025-02-14',320.00),(1,2,'2025-02-27',150.00),(2,1,'2025-03-03',240.00),(3,2,'2025-03-10',175.00),(4,1,'2025-03-18',98.50),(1,3,'2025-04-05',260.00),(2,2,'2025-04-19',199.90);\n\nINSERT INTO DetalleVenta (IdVenta, IdProducto, Cantidad, PrecioUnitario) VALUES\n(1,1,1,45.90),(1,2,1,79.99),(1,3,1,25.50),\n(2,2,1,79.99),(2,4,1,55.00),(2,5,1,110.00),\n(3,3,1,25.50),(3,6,1,60.00),(3,1,1,45.90),\n(4,5,2,110.00),(4,2,1,79.99),(4,4,1,55.00),\n(5,1,1,45.90),(5,6,1,60.00),(5,3,2,25.50),\n(6,2,2,79.99),(6,4,1,55.00),(6,6,1,60.00),\n(7,5,1,110.00),(7,3,1,25.50),(7,4,1,55.00),\n(8,1,1,45.90),(8,2,1,79.99),(8,6,1,60.00),\n(9,5,1,110.00),(9,4,1,55.00),(9,3,2,25.50),\n(10,2,1,79.99),(10,5,1,110.00),(10,1,1,45.90);",
        hint: "Primero inserta maestros, luego ventas y detalles."
      },
      {
        id: 154,
        section: "Practica",
        topic: "Consultas",
        difficulty: "medio",
        type: "task",
        prompt: "Total vendido por categoria de producto.",
        tasks: [
          "JOIN Ventas, DetalleVenta, Productos",
          "SUM(Cantidad * PrecioUnitario)",
          "GROUP BY Categoria"
        ],
        answerText: "SELECT p.Categoria, SUM(d.Cantidad * d.PrecioUnitario) AS TotalCategoria\nFROM DetalleVenta d\nJOIN Productos p ON p.IdProducto = d.IdProducto\nGROUP BY p.Categoria;",
        hint: "Agrupa por Categoria."
      },
      {
        id: 155,
        section: "Practica",
        topic: "Consultas",
        difficulty: "avanzado",
        type: "task",
        prompt: "Empleado con mayores ingresos generados.",
        tasks: [
          "SUM de ventas por empleado",
          "TOP 1 ordenado DESC"
        ],
        answerText: "SELECT TOP (1) v.IdEmpleado, SUM(v.Total) AS Ingresos\nFROM Ventas v\nGROUP BY v.IdEmpleado\nORDER BY Ingresos DESC;",
        hint: "SUM(Total) por IdEmpleado."
      },
      {
        id: 156,
        section: "Practica",
        topic: "Consultas",
        difficulty: "avanzado",
        type: "task",
        prompt: "Clientes con ultima compra hace mas de 90 dias.",
        tasks: [
          "MAX(Fecha) por cliente",
          "Comparar con GETDATE()",
          "Devolver clientes"
        ],
        answerText: "SELECT v.IdCliente\nFROM Ventas v\nGROUP BY v.IdCliente\nHAVING MAX(v.Fecha) < DATEADD(DAY, -90, GETDATE());",
        hint: "Usa MAX(Fecha) y DATEADD."
      },
      {
        id: 157,
        section: "Practica",
        topic: "Consultas",
        difficulty: "medio",
        type: "task",
        prompt: "Ventas con ticket mayor al promedio general.",
        tasks: [
          "Calcular AVG(Total)",
          "Filtrar ventas por encima"
        ],
        answerText: "SELECT *\nFROM Ventas\nWHERE Total > (SELECT AVG(Total) FROM Ventas);",
        hint: "Subconsulta con AVG(Total)."
      }
];
