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
    answerText: "Script con CREATE DATABASE y validacion en sys.databases.",
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
    answerText: "CREATE TABLE Clientes con PK identidad y campos NOT NULL.",
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
    answerText: "ALTER TABLE ADD CONSTRAINT UNIQUE, CHECK y DEFAULT.",
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
    answerText: "Ventas con FK a Clientes y fecha/total de venta.",
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
    answerText: "ALTER TABLE ADD Telefono y ALTER COLUMN Email VARCHAR(150).",
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
    answerText: "Cuatro INSERT con DUI unicos y fechas distintas.",
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
    answerText: "Productos con Nombre, Precio DECIMAL y Stock INT.",
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
    answerText: "Empleados con Salario DECIMAL y fechas en anios distintos.",
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
    answerText: "Ventas + DetalleVenta con cantidad y precio unitario.",
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
    answerText: "SELECT ... WHERE MONTH(FechaRegistro)=2 ORDER BY FechaRegistro.",
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
    answerText: "SELECT Nombre, Stock FROM Productos WHERE Stock < 10.",
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
    answerText: "Subconsulta para IdEmpleado mas antiguo y JOIN con Ventas.",
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
    answerText: "UPDATE Clientes SET Telefono='...' WHERE IdCliente=...",
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
    answerText: "UPDATE Productos SET Precio=... WHERE Stock=0.",
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
    answerText: "UPDATE Empleados SET Salario=Salario*1.05 WHERE DATEDIFF(YEAR, FechaContratacion, GETDATE())>=1.",
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
    answerText: "DELETE c FROM Clientes c WHERE NOT EXISTS (SELECT 1 FROM Ventas v WHERE v.IdCliente=c.IdCliente).",
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
    answerText: "SELECT Empleado, SUM(Total) FROM Ventas GROUP BY Empleado ORDER BY SUM(Total) DESC.",
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
    answerText: "SELECT TOP (3) IdCliente, SUM(Total) FROM Ventas GROUP BY IdCliente ORDER BY SUM(Total) DESC.",
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
    answerText: "SELECT YEAR(Fecha), MONTH(Fecha), SUM(Total) FROM Ventas GROUP BY YEAR(Fecha), MONTH(Fecha) ORDER BY YEAR(Fecha), MONTH(Fecha).",
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
    answerText: "SELECT * FROM Productos WHERE Precio > (SELECT AVG(Precio) FROM Productos).",
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
    answerText: "SELECT TOP (1) IdEmpleado, COUNT(*) FROM Ventas GROUP BY IdEmpleado ORDER BY COUNT(*) DESC.",
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
    answerText: "SELECT IdProducto, SUM(Cantidad) FROM DetalleVenta GROUP BY IdProducto HAVING SUM(Cantidad) > 5.",
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
    answerText: "Ventas con FKs a Empleados y Clientes; DetalleVenta con FK a Productos.",
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
    answerText: "Diagrama con Clientes-Ventas-DetalleVenta-Productos y Empleados.",
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
    answerText: "CREATE INDEX IX_Productos_Nombre ON Productos(Nombre).",
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
    answerText: "ALTER TABLE Clientes ADD Activo BIT DEFAULT 1; UPDATE Clientes SET Activo=0 WHERE ...",
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
    answerText: "SELECT c.* FROM Clientes c WHERE c.Activo=1 AND NOT EXISTS (SELECT 1 FROM Ventas v WHERE v.IdCliente=c.IdCliente).",
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
    answerText: "SELECT AVG(Total) AS TicketPromedio FROM Ventas.",
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
    answerText: "SELECT IdVenta FROM DetalleVenta GROUP BY IdVenta HAVING COUNT(DISTINCT IdProducto) > 3.",
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
    answerText: "UPDATE Productos SET Precio=Precio*1.08 WHERE Categoria='Audio'.",
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
    answerText: "SELECT IdCliente, COUNT(*) AS Compras, SUM(Total) AS Total FROM Ventas GROUP BY IdCliente ORDER BY Total DESC.",
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
    answerText: "CREATE VIEW VentasResumen AS SELECT v.IdVenta, c.Nombres, v.Fecha, v.Total FROM Ventas v JOIN Clientes c ON ...",
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
    answerText: "PROCEDURE con parametros cliente, empleado, fecha y total; inserta y retorna SCOPE_IDENTITY().",
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
    answerText: "Tabla con IdProducto, PrecioAnterior, FechaCambio y trigger o script de actualizacion.",
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
    answerText: "SELECT DATENAME(WEEKDAY, Fecha) AS Dia, SUM(Total) FROM Ventas GROUP BY DATENAME(WEEKDAY, Fecha).",
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
      answerText: "CREATE TABLE DetalleVenta (IdVenta INT, IdProducto INT, Cantidad INT, PrecioUnitario DECIMAL(10,2), PRIMARY KEY (IdVenta, IdProducto), ...).",
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
      answerText: "12 INSERT con DUI en formato ########-# y fechas en meses distintos.",
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
      answerText: "ALTER TABLE Productos ADD Categoria, Proveedor; INSERT con precios realistas.",
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
      answerText: "SELECT TOP (5) IdProducto, SUM(Cantidad * PrecioUnitario) AS Ingresos FROM DetalleVenta GROUP BY IdProducto ORDER BY Ingresos DESC.",
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
      answerText: "SELECT DISTINCT IdCliente FROM Ventas WHERE Fecha >= DATEADD(DAY, -30, GETDATE()).",
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
      answerText: "SELECT p.IdProducto FROM Productos p WHERE NOT EXISTS (SELECT 1 FROM DetalleVenta d JOIN Ventas v ON v.IdVenta=d.IdVenta WHERE d.IdProducto=p.IdProducto AND v.Fecha >= DATEADD(DAY, -60, GETDATE())).",
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
      answerText: "UPDATE p SET Stock = Stock - d.Cantidad FROM Productos p JOIN DetalleVenta d ON p.IdProducto=d.IdProducto WHERE d.IdVenta=...",
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
      answerText: "BEGIN TRAN; INSERT Ventas; INSERT DetalleVenta; UPDATE Productos; COMMIT;",
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
      answerText: "SELECT IdCliente, AVG(Total) AS TicketPromedio FROM Ventas GROUP BY IdCliente ORDER BY TicketPromedio DESC.",
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
      answerText: "SELECT e.Sucursal, SUM(v.Total) FROM Ventas v JOIN Empleados e ON v.IdEmpleado=e.IdEmpleado GROUP BY e.Sucursal.",
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
      answerText: "UPDATE Clientes SET Email = CONCAT(Nombres, '.', Apellidos, '@empresa.com') WHERE Email NOT LIKE '%@%'.",
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
      answerText: "Consulta con YEAR/MONTH y comparar dos agregados.",
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
      answerText: "ALTER TABLE Empleados ADD CONSTRAINT CK_Empleados_Salario CHECK (Salario > 365);",
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
      answerText: "SELECT v.IdCliente FROM Ventas v JOIN DetalleVenta d ON v.IdVenta=d.IdVenta JOIN Productos p ON p.IdProducto=d.IdProducto GROUP BY v.IdCliente HAVING COUNT(DISTINCT p.Categoria) > 3.",
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
        answerText: "Tablas creadas con PKs y FKs segun diagrama, tipos de datos coherentes y NOT NULL.",
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
        answerText: "ALTER TABLE con UNIQUE, CHECK, DEFAULT y FKs definidas.",
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
        answerText: "INSERTs coherentes en todas las tablas y ventas distribuidas en meses.",
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
        answerText: "SELECT p.Categoria, SUM(d.Cantidad * d.PrecioUnitario) FROM DetalleVenta d JOIN Productos p ON p.IdProducto=d.IdProducto GROUP BY p.Categoria.",
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
        answerText: "SELECT TOP (1) v.IdEmpleado, SUM(v.Total) AS Ingresos FROM Ventas v GROUP BY v.IdEmpleado ORDER BY Ingresos DESC.",
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
        answerText: "SELECT v.IdCliente FROM Ventas v GROUP BY v.IdCliente HAVING MAX(v.Fecha) < DATEADD(DAY, -90, GETDATE()).",
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
        answerText: "SELECT * FROM Ventas WHERE Total > (SELECT AVG(Total) FROM Ventas).",
        hint: "Subconsulta con AVG(Total)."
      }
];
