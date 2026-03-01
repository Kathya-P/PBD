window.QUESTION_BANK = [

  /* ───── Operadores ───── */
  {
    id: 45,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Que son los operadores en SQL?",
    options: [
      "Son tablas especiales que almacenan condiciones.",
      "Son simbolos que especifican una accion o condicion en una declaracion SQL.",
      "Son funciones que crean bases de datos automaticamente.",
      "Son tipos de datos exclusivos de SQL Server."
    ],
    correctAnswer: 1,
    explanation: "Los operadores son simbolos que especifican una accion o condicion en una declaracion SQL, esenciales para WHERE, UPDATE y DELETE."
  },
  {
    id: 46,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "tf",
    prompt: "Los operadores SQL son esenciales para las clausulas WHERE, UPDATE y DELETE.",
    correctAnswer: true,
    explanation: "Los operadores permiten filtrar resultados y conectar multiples condiciones en esas clausulas."
  },
  {
    id: 47,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Cual es el operador de comparacion para 'No es igual a' en sintaxis ISO estandar?",
    options: [
      "!=",
      "!>",
      "<>",
      "NOT EQUAL"
    ],
    correctAnswer: 2,
    explanation: "El operador <> es la forma ISO estandar para indicar 'no es igual a'."
  },
  {
    id: 48,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Cual operador de comparacion significa 'Mayor o igual que'?",
    options: [
      ">",
      ">=",
      "<=",
      "=>"
    ],
    correctAnswer: 1,
    explanation: "El operador >= compara si un valor es mayor o igual que otro."
  },
  {
    id: 49,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cuales de los siguientes operadores son sintaxis NO estandar (Non-ISO)?",
    options: [
      "<> , >= , <=",
      "!= , !< , !>",
      "= , > , <",
      "AND , OR , NOT"
    ],
    correctAnswer: 1,
    explanation: "Los operadores !=, !< y !> son funcionales pero no recomendados por el estandar ISO."
  },
  {
    id: 50,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "tf",
    prompt: "El operador != es la forma recomendada por el estandar ISO para indicar 'no es igual a'.",
    correctAnswer: false,
    explanation: "!= es sintaxis no estandar (Non-ISO). La forma recomendada es <>."
  },
  {
    id: 51,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Que operador aritmetico se utiliza para obtener el resto de una division?",
    options: [
      "/",
      "*",
      "%",
      "-"
    ],
    correctAnswer: 2,
    explanation: "El operador % (modulo) devuelve el resto de una division."
  },
  {
    id: 52,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Para que se utilizan los operadores aritmeticos en SQL?",
    options: [
      "Para crear tablas y columnas.",
      "Para realizar calculos sobre los operandos o datos presentes en las tablas.",
      "Para definir restricciones de integridad.",
      "Para establecer relaciones entre tablas."
    ],
    correctAnswer: 1,
    explanation: "Los operadores aritmeticos (+, -, *, /, %) realizan calculos sobre datos en las tablas."
  },
  {
    id: 53,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Cual de los siguientes NO es un operador aritmetico en SQL?",
    options: [
      "+ (Suma)",
      "- (Resta)",
      "& (Concatenar)",
      "% (Modulo)"
    ],
    correctAnswer: 2,
    explanation: "Los operadores aritmeticos son +, -, *, / y %. El simbolo & no es un operador aritmetico SQL."
  },
  {
    id: 54,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Que hace el operador logico AND?",
    options: [
      "Devuelve TRUE si al menos una condicion es verdadera.",
      "Invierte el valor logico de una condicion.",
      "Devuelve TRUE solo si ambas condiciones son verdaderas.",
      "Compara un valor con una lista."
    ],
    correctAnswer: 2,
    explanation: "AND requiere que ambas condiciones sean verdaderas para devolver TRUE."
  },
  {
    id: 55,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Que hace el operador logico OR?",
    options: [
      "Devuelve TRUE solo si ambas condiciones son verdaderas.",
      "Devuelve TRUE si al menos una condicion es verdadera.",
      "Niega la condicion.",
      "Busca patrones en cadenas de texto."
    ],
    correctAnswer: 1,
    explanation: "OR devuelve TRUE cuando al menos una de las condiciones es verdadera."
  },
  {
    id: 56,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Que hace el operador logico NOT?",
    options: [
      "Combina resultados de dos consultas.",
      "Compara dos valores.",
      "Invierte el valor logico de una condicion.",
      "Filtra por rango de valores."
    ],
    correctAnswer: 2,
    explanation: "NOT invierte el valor: si la condicion es TRUE devuelve FALSE y viceversa."
  },
  {
    id: 57,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Segun la tabla de verdad de AND, que resultado da: Input V (verdadero) AND Input F (falso)?",
    options: [
      "TRUE",
      "FALSE",
      "NULL",
      "Depende del tipo de dato"
    ],
    correctAnswer: 1,
    explanation: "AND solo devuelve TRUE cuando ambas entradas son verdaderas. Si una es falsa, el resultado es FALSE."
  },
  {
    id: 58,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Segun la tabla de verdad de OR, que resultado da: Input F (falso) OR Input F (falso)?",
    options: [
      "TRUE",
      "FALSE",
      "NULL",
      "Depende de la tabla"
    ],
    correctAnswer: 1,
    explanation: "OR solo devuelve FALSE cuando ambas entradas son falsas."
  },
  {
    id: 59,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "tf",
    prompt: "El operador NOT invierte el valor logico: si la condicion es TRUE, NOT la convierte en FALSE.",
    correctAnswer: true,
    explanation: "NOT cambia TRUE a FALSE y FALSE a TRUE."
  },
  {
    id: 60,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Que hace el operador BETWEEN?",
    options: [
      "Compara un valor con una lista de opciones.",
      "Busca coincidencias de patrones en cadenas.",
      "Filtra valores dentro de un rango inclusivo.",
      "Verifica si existe un registro en una subconsulta."
    ],
    correctAnswer: 2,
    explanation: "BETWEEN filtra valores dentro de un rango inclusivo (incluye los extremos)."
  },
  {
    id: 61,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "tf",
    prompt: "El operador BETWEEN incluye los valores extremos del rango (es inclusivo).",
    correctAnswer: true,
    explanation: "BETWEEN es inclusivo: WHERE precio BETWEEN 10 AND 20 incluye 10 y 20."
  },
  {
    id: 62,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Que hace el operador IN?",
    options: [
      "Filtra por un rango de valores.",
      "Coincidencia con cualquiera de los valores de una lista.",
      "Busca patrones con comodines.",
      "Une dos consultas eliminando duplicados."
    ],
    correctAnswer: 1,
    explanation: "IN permite verificar si un valor coincide con cualquiera de los valores en una lista."
  },
  {
    id: 63,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Que hace el operador LIKE?",
    options: [
      "Compara igualdad exacta entre dos valores.",
      "Filtra valores en un rango numerico.",
      "Busqueda de patrones en cadenas de texto (ej. empieza por 'M').",
      "Verifica la existencia de una subconsulta."
    ],
    correctAnswer: 2,
    explanation: "LIKE permite buscar patrones usando comodines como % y _ en cadenas de texto."
  },
  {
    id: 64,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "choice",
    prompt: "Que hace el operador EXISTS?",
    options: [
      "Compara un valor con una lista.",
      "Filtra por rango inclusivo.",
      "Verifica si una subconsulta devuelve al menos un registro.",
      "Busca coincidencia de patrones."
    ],
    correctAnswer: 2,
    explanation: "EXISTS devuelve TRUE si la subconsulta asociada retorna uno o mas registros."
  },
  {
    id: 65,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Que hace el operador de conjunto UNION?",
    options: [
      "Combina resultados de dos consultas y mantiene duplicados.",
      "Combina resultados de dos consultas y elimina duplicados.",
      "Devuelve solo los registros comunes entre dos consultas.",
      "Devuelve registros del primero que no estan en el segundo."
    ],
    correctAnswer: 1,
    explanation: "UNION combina los resultados de dos SELECT y elimina las filas duplicadas."
  },
  {
    id: 66,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cual es la diferencia entre UNION y UNION ALL?",
    options: [
      "No hay diferencia, son iguales.",
      "UNION mantiene duplicados y UNION ALL los elimina.",
      "UNION elimina duplicados y UNION ALL mantiene duplicados.",
      "UNION ALL solo funciona con numeros."
    ],
    correctAnswer: 2,
    explanation: "UNION elimina filas duplicadas del resultado combinado, mientras que UNION ALL las conserva."
  },
  {
    id: 67,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Que hace el operador de conjunto INTERSECT?",
    options: [
      "Combina resultados eliminando duplicados.",
      "Combina resultados manteniendo duplicados.",
      "Devuelve solo los registros comunes entre ambas consultas.",
      "Devuelve registros que estan en la primera pero no en la segunda."
    ],
    correctAnswer: 2,
    explanation: "INTERSECT devuelve unicamente los registros que aparecen en ambas consultas."
  },
  {
    id: 68,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Que hace el operador de conjunto EXCEPT?",
    options: [
      "Devuelve los registros comunes entre dos consultas.",
      "Combina todos los resultados con duplicados.",
      "Devuelve los registros del primer SELECT que no estan en el segundo.",
      "Elimina todas las filas de ambas consultas."
    ],
    correctAnswer: 2,
    explanation: "EXCEPT retorna las filas del primer SELECT que no aparecen en el resultado del segundo."
  },
  {
    id: 69,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cuales son las reglas de compatibilidad para usar operadores de conjunto (UNION, INTERSECT, EXCEPT)?",
    options: [
      "Las tablas deben tener el mismo nombre.",
      "Cada SELECT debe tener el mismo numero de columnas, tipos de datos similares y mismo orden.",
      "Solo se pueden usar con tablas que tengan clave primaria.",
      "Las consultas deben estar en la misma base de datos."
    ],
    correctAnswer: 1,
    explanation: "Se requiere mismo numero de columnas, tipos de datos compatibles (int con int, varchar con varchar) y mismo orden."
  },
  {
    id: 70,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "tf",
    prompt: "Para usar UNION, ambos SELECT deben tener el mismo numero de columnas y tipos de datos similares.",
    correctAnswer: true,
    explanation: "Las reglas de compatibilidad exigen mismo numero de columnas, tipos de datos similares y mismo orden."
  },
  {
    id: 71,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "basico",
    type: "tf",
    prompt: "El operador logico OR devuelve TRUE solo cuando ambas condiciones son verdaderas.",
    correctAnswer: false,
    explanation: "Eso describe a AND. OR devuelve TRUE cuando al menos una condicion es verdadera."
  },
  {
    id: 72,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "tf",
    prompt: "UNION ALL es mas rapido que UNION porque no necesita eliminar duplicados.",
    correctAnswer: true,
    explanation: "UNION ALL no realiza la operacion adicional de verificar y eliminar filas duplicadas, por lo que es mas eficiente."
  },
  {
    id: 73,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Que operador Non-ISO representa 'No es menor que'?",
    options: [
      "!=",
      "!<",
      "!>",
      "<>"
    ],
    correctAnswer: 1,
    explanation: "!< significa 'no es menor que'. Es funcional pero no recomendado por el estandar ISO."
  },
  {
    id: 74,
    section: "Teoria",
    topic: "Operadores",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cual seria la expresion SQL correcta para calcular el total con descuento: Precio - Descuento?",
    options: [
      "SELECT Precio % Descuento AS Total FROM Productos",
      "SELECT Precio - Descuento AS Total FROM Productos",
      "SELECT Precio / Descuento AS Total FROM Productos",
      "SELECT Precio + Descuento AS Total FROM Productos"
    ],
    correctAnswer: 1,
    explanation: "El operador - (resta) permite calcular la diferencia entre Precio y Descuento."
  },

  /* ───── T-SQL y PL-SQL (Introduccion) ───── */
  {
    id: 75,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "choice",
    prompt: "Que son T-SQL y PL/SQL?",
    options: [
      "Son herramientas graficas para disenar diagramas de base de datos.",
      "Son lenguajes procedurales que extienden al SQL estandar para programar logica dentro del motor de base de datos.",
      "Son sistemas gestores de bases de datos independientes.",
      "Son protocolos de red para comunicar servidores de base de datos."
    ],
    correctAnswer: 1,
    explanation: "T-SQL y PL/SQL son lenguajes procedurales que extienden al SQL estandar y se usan para programar logica dentro del motor de base de datos."
  },
  {
    id: 76,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "tf",
    prompt: "T-SQL y PL/SQL pertenecen a la misma plataforma de base de datos.",
    correctAnswer: false,
    explanation: "T-SQL pertenece a Microsoft SQL Server / Azure SQL, mientras que PL/SQL pertenece a Oracle Database."
  },
  {
    id: 77,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "choice",
    prompt: "Que define el Modelado de Base de Datos segun la comparacion Estructura vs Comportamiento?",
    options: [
      "El comportamiento del sistema.",
      "La estructura (tablas, relaciones, normalizacion).",
      "La logica de negocio y automatizacion.",
      "La seguridad avanzada del sistema."
    ],
    correctAnswer: 1,
    explanation: "El Modelado de Base de Datos define la Estructura: tablas, relaciones y normalizacion."
  },
  {
    id: 78,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "choice",
    prompt: "Que definen T-SQL y PL/SQL en la comparacion Estructura vs Comportamiento?",
    options: [
      "La estructura fisica de las tablas.",
      "Las relaciones entre entidades.",
      "El comportamiento: reglas de negocio, automatizacion y validaciones complejas.",
      "El esquema de normalizacion de la base de datos."
    ],
    correctAnswer: 2,
    explanation: "T-SQL / PL-SQL Definen el Comportamiento: reglas de negocio avanzadas, automatizacion con Triggers/Procedures y validaciones complejas."
  },
  {
    id: 79,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "choice",
    prompt: "Cual de las siguientes capacidades NO corresponde al Modelado de Base de Datos?",
    options: [
      "Definir tablas y relaciones.",
      "Normalizacion.",
      "Automatizacion con Triggers y Procedures.",
      "Seguridad basica."
    ],
    correctAnswer: 2,
    explanation: "La automatizacion con Triggers y Procedures es una capacidad de T-SQL / PL-SQL, no del modelado de datos."
  },
  {
    id: 80,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "tf",
    prompt: "El Modelado de Base de Datos permite definir reglas de negocio avanzadas y automatizacion con Triggers.",
    correctAnswer: false,
    explanation: "El modelado solo ofrece validaciones limitadas y seguridad basica. Las reglas de negocio avanzadas y la automatizacion corresponden a T-SQL / PL-SQL."
  },
  {
    id: 81,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "choice",
    prompt: "En que plataforma se utiliza T-SQL?",
    options: [
      "Oracle Database",
      "MySQL Community",
      "Microsoft SQL Server / Azure SQL",
      "PostgreSQL"
    ],
    correctAnswer: 2,
    explanation: "T-SQL es el lenguaje procedural de Microsoft SQL Server y Azure SQL."
  },
  {
    id: 82,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "choice",
    prompt: "En que plataforma se utiliza PL/SQL?",
    options: [
      "Microsoft SQL Server",
      "Oracle Database",
      "Azure SQL",
      "IBM DB2"
    ],
    correctAnswer: 1,
    explanation: "PL/SQL es el lenguaje nativo y robusto de Oracle Database."
  },
  {
    id: 83,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "choice",
    prompt: "Como se clasifica T-SQL en cuanto a su tipo?",
    options: [
      "Lenguaje procedural completo e independiente.",
      "Extension del SQL estandar.",
      "Sistema gestor de base de datos.",
      "Lenguaje de programacion orientado a objetos."
    ],
    correctAnswer: 1,
    explanation: "T-SQL es una Extension de SQL: agrega capacidades procedurales al SQL estandar de Microsoft."
  },
  {
    id: 84,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cual es la orientacion principal de T-SQL?",
    options: [
      "Programacion avanzada y sistemas criticos.",
      "Diseno grafico de bases de datos.",
      "Administracion y logica transaccional.",
      "Creacion de interfaces de usuario."
    ],
    correctAnswer: 2,
    explanation: "T-SQL esta orientado a la Administracion y logica transaccional dentro de SQL Server."
  },
  {
    id: 85,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cual es la orientacion principal de PL/SQL?",
    options: [
      "Administracion y logica transaccional.",
      "Programacion avanzada en base de datos.",
      "Modelado de datos y normalizacion.",
      "Gestion de redes y seguridad."
    ],
    correctAnswer: 1,
    explanation: "PL/SQL esta orientado a la Programacion avanzada en base de datos dentro de Oracle."
  },
  {
    id: 86,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "tf",
    prompt: "PL/SQL es el lenguaje nativo de Microsoft SQL Server.",
    correctAnswer: false,
    explanation: "PL/SQL es el lenguaje nativo de Oracle Database. El lenguaje nativo de Microsoft SQL Server es T-SQL."
  },
  {
    id: 87,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cual es una diferencia clave entre T-SQL y PL/SQL respecto a los paquetes?",
    options: [
      "T-SQL tiene soporte completo de paquetes nativos, PL/SQL no.",
      "Ambos tienen soporte completo de paquetes nativos.",
      "T-SQL no tiene paquetes nativos, PL/SQL tiene soporte completo de paquetes.",
      "Ninguno soporta paquetes nativos."
    ],
    correctAnswer: 2,
    explanation: "T-SQL no cuenta con paquetes nativos, mientras que PL/SQL ofrece soporte completo de paquetes."
  },
  {
    id: 88,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "A nivel de que opera un Trigger en T-SQL?",
    options: [
      "Nivel de fila y tabla.",
      "Solo nivel de fila.",
      "Solo nivel de tabla.",
      "Nivel de base de datos completa."
    ],
    correctAnswer: 2,
    explanation: "En T-SQL los Triggers operan a Nivel de tabla. PL/SQL en cambio soporta Triggers a nivel de fila y tabla."
  },
  {
    id: 89,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "intermedio",
    type: "tf",
    prompt: "PL/SQL soporta Triggers tanto a nivel de fila como a nivel de tabla.",
    correctAnswer: true,
    explanation: "PL/SQL tiene Triggers a Nivel fila y tabla, lo que le da mayor flexibilidad que T-SQL."
  },
  {
    id: 90,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "choice",
    prompt: "Para que tipo de sistemas es ideal T-SQL?",
    options: [
      "Sistemas criticos de alta disponibilidad.",
      "Sistemas administrativos.",
      "Sistemas embebidos de tiempo real.",
      "Sistemas de inteligencia artificial."
    ],
    correctAnswer: 1,
    explanation: "T-SQL es ideal para Sistemas administrativos integrados con SQL Server."
  },
  {
    id: 91,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "basico",
    type: "choice",
    prompt: "Para que tipo de sistemas es ideal PL/SQL?",
    options: [
      "Sistemas administrativos simples.",
      "Sistemas de escritorio.",
      "Sistemas criticos.",
      "Sistemas de modelado grafico."
    ],
    correctAnswer: 2,
    explanation: "PL/SQL es ideal para Sistemas criticos gracias a su mayor robustez y capacidades avanzadas."
  },
  {
    id: 92,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cual de las siguientes afirmaciones describe mejor la diferencia de cursores entre T-SQL y PL/SQL?",
    options: [
      "T-SQL tiene cursores avanzados y PL/SQL cursores basicos.",
      "Ambos tienen el mismo nivel de soporte para cursores.",
      "T-SQL tiene cursores basicos y PL/SQL cursores avanzados.",
      "Ninguno de los dos soporta cursores."
    ],
    correctAnswer: 2,
    explanation: "T-SQL ofrece Cursores Basicos mientras que PL/SQL ofrece Cursores Avanzados."
  },
  {
    id: 93,
    section: "Teoria",
    topic: "T-SQL y PL-SQL",
    difficulty: "intermedio",
    type: "tf",
    prompt: "T-SQL es un lenguaje simple sin soporte nativo de paquetes, mientras que PL/SQL es un lenguaje estructurado con soporte completo de paquetes.",
    correctAnswer: true,
    explanation: "Esa es una de las diferencias clave: T-SQL es simple y sin paquetes nativos; PL/SQL es estructurado y con soporte completo de paquetes."
  },

  /* ───── Fundamentos de Base de Datos ───── */
  {
    id: 94,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Como se llama la estructura que organiza los datos en filas y columnas dentro de una base de datos relacional?",
    options: [
      "Consulta",
      "Tabla",
      "Indice",
      "Esquema"
    ],
    correctAnswer: 1,
    explanation: "Una Tabla organiza los datos en filas (registros/tuplas) y columnas (campos)."
  },
  {
    id: 95,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Como se denomina cada columna de una tabla en una base de datos?",
    options: [
      "Registro o Tupla",
      "Fila",
      "Campo o Columna",
      "Indice"
    ],
    correctAnswer: 2,
    explanation: "Cada columna de una tabla se denomina Campo o Columna, y representa un atributo del dato."
  },
  {
    id: 96,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Como se denomina cada fila de una tabla en una base de datos?",
    options: [
      "Campo",
      "Columna",
      "Atributo",
      "Registro o Tupla"
    ],
    correctAnswer: 3,
    explanation: "Cada fila de una tabla se denomina Registro o Tupla, y representa un conjunto de datos de una entidad."
  },
  {
    id: 97,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "tf",
    prompt: "En una tabla de base de datos, una fila tambien puede llamarse Tupla.",
    correctAnswer: true,
    explanation: "Fila, Registro y Tupla son terminos equivalentes para referirse a cada entrada horizontal de una tabla."
  },
  {
    id: 98,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Cual es la caracteristica principal de las bases de datos No Relacionales (NoSQL)?",
    options: [
      "Usan tablas con estructura fija y bien definida.",
      "Solo almacenan datos numericos.",
      "No son estructuradas, es decir no tienen una estructura bien definida.",
      "Requieren SQL para todas las consultas."
    ],
    correctAnswer: 2,
    explanation: "Las bases de datos NoSQL no son estructuradas, lo que les da flexibilidad para distintos formatos de datos."
  },
  {
    id: 99,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Cual de los siguientes NO es un tipo de base de datos NoSQL?",
    options: [
      "Key-Value",
      "Document",
      "Graph",
      "Relacional con tablas"
    ],
    correctAnswer: 3,
    explanation: "Los tipos NoSQL son: Key-Value, Column Store, Graph y Document. Las bases relacionales con tablas son SQL, no NoSQL."
  },
  {
    id: 100,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "tf",
    prompt: "Graph y Document son tipos de bases de datos NoSQL.",
    correctAnswer: true,
    explanation: "Los cuatro tipos de NoSQL son: Key-Value, Column Store, Graph y Document."
  },
  {
    id: 101,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Que significa SQL?",
    options: [
      "System Query List",
      "Structured Question Logic",
      "Structured Query Language",
      "Standard Query Layer"
    ],
    correctAnswer: 2,
    explanation: "SQL significa Structured Query Language (Lenguaje de Consulta Estructurado)."
  },
  {
    id: 102,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Que es SQL?",
    options: [
      "Un sistema operativo para servidores de base de datos.",
      "Un lenguaje de programacion estandar para interactuar con bases de datos relacionales.",
      "Un programa para diseniar interfaces graficas.",
      "Un protocolo de transferencia de datos entre servidores."
    ],
    correctAnswer: 1,
    explanation: "SQL es un lenguaje de programacion estandar para interactuar con las bases de datos relacionales."
  },
  {
    id: 103,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Como se llamaba originalmente SQL antes de ser renombrado?",
    options: [
      "TSQL",
      "SEQUEL",
      "QSQL",
      "ISQL"
    ],
    correctAnswer: 1,
    explanation: "SQL se llamo originalmente SEQUEL, y fue desarrollado por IBM en San Jose, California."
  },
  {
    id: 104,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Quienes crearon SQL en IBM?",
    options: [
      "Bill Gates y Paul Allen",
      "Larry Ellison y Bob Miner",
      "Donald D. Chamberlin y Raymond F. Boyce",
      "Edgar Codd y Chris Date"
    ],
    correctAnswer: 2,
    explanation: "SQL fue creado por Donald D. Chamberlin y Raymond F. Boyce en IBM, San Jose, California."
  },
  {
    id: 105,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En que anio se desarrollo el primer sistema de gestion de bases de datos relacional de IBM?",
    options: [
      "1968",
      "1974",
      "1980",
      "1986"
    ],
    correctAnswer: 1,
    explanation: "En 1974 IBM desarrollo el primer sistema de gestion de bases de datos relacional, llamado System R."
  },
  {
    id: 106,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Como se llamo el primer sistema de gestion de bases de datos relacional de IBM?",
    options: [
      "DB2",
      "System R",
      "Oracle",
      "MySQL"
    ],
    correctAnswer: 1,
    explanation: "El primer SGBD relacional de IBM fue System R, desarrollado en 1974."
  },
  {
    id: 107,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En que anio fue estandarizado SQL por ANSI e ISO?",
    options: [
      "1974",
      "1980",
      "1986",
      "1992"
    ],
    correctAnswer: 2,
    explanation: "En 1986 el American National Standards Institute (ANSI) y la ISO estandarizaron SQL, dando origen al SQL-86."
  },
  {
    id: 108,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "tf",
    prompt: "El estandar ANSI SQL es considerado un lenguaje de programacion maduro y estable.",
    correctAnswer: true,
    explanation: "Gracias a multiples versiones (SQL-86, SQL-92, SQL:1999, SQL:2016 entre otras), el estandar ANSI SQL es maduro y estable."
  },
  {
    id: 109,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En que anio se lanzo Microsoft SQL Server 1.0?",
    options: [
      "1977",
      "1986",
      "1989",
      "1995"
    ],
    correctAnswer: 2,
    explanation: "Microsoft SQL Server 1.0 fue lanzado en 1989, basado en la tecnologia de Sybase System (1987)."
  },
  {
    id: 110,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En que anio fue fundada Oracle (Relational Software, Inc)?",
    options: [
      "1974",
      "1977",
      "1986",
      "1989"
    ],
    correctAnswer: 1,
    explanation: "Oracle fue fundada en 1977 como Relational Software, Inc., adoptando la tecnologia SQL de IBM."
  },
  {
    id: 111,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En que anio aparecio MySQL?",
    options: [
      "1989",
      "1992",
      "1995",
      "2000"
    ],
    correctAnswer: 2,
    explanation: "MySQL surgio en 1995 y se popularizo junto con PHP para el desarrollo web."
  },
  {
    id: 112,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En que anio surgio MariaDB?",
    options: [
      "2000",
      "2005",
      "2009",
      "2012"
    ],
    correctAnswer: 2,
    explanation: "MariaDB surgio en 2009, el mismo anio en que Oracle compro Sun Microsystems (que controlaba MySQL)."
  },
  {
    id: 113,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Cuales son los 4 grupos de instrucciones que forman SQL?",
    options: [
      "DDL, DML, DQL, DTL",
      "DDL, DML, DCL, TCL",
      "CREATE, SELECT, GRANT, COMMIT",
      "DDL, DQL, DML, DSL"
    ],
    correctAnswer: 1,
    explanation: "Los 4 grupos que forman SQL son: DDL (Definicion), DML (Manipulacion), DCL (Control) y TCL (Transacciones)."
  },
  {
    id: 114,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Que significa DDL?",
    options: [
      "Data Download Language",
      "Data Definition Language",
      "Database Design Logic",
      "Data Deletion Language"
    ],
    correctAnswer: 1,
    explanation: "DDL significa Data Definition Language (Lenguaje de Definicion de Datos)."
  },
  {
    id: 115,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Cuales son las tres sentencias de DDL?",
    options: [
      "INSERT, UPDATE, DELETE",
      "SELECT, FROM, WHERE",
      "CREATE, ALTER, DROP",
      "GRANT, REVOKE, DENY"
    ],
    correctAnswer: 2,
    explanation: "DDL tiene tres sentencias: CREATE (crear objetos), ALTER (modificar objetos) y DROP (eliminar objetos)."
  },
  {
    id: 116,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "tf",
    prompt: "La sentencia ALTER en DDL se usa para eliminar objetos de la base de datos.",
    correctAnswer: false,
    explanation: "ALTER modifica objetos existentes. Para eliminar objetos se usa DROP."
  },
  {
    id: 117,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Que significa DML?",
    options: [
      "Data Modification List",
      "Database Management Layer",
      "Data Manipulation Language",
      "Dynamic Merge Language"
    ],
    correctAnswer: 2,
    explanation: "DML significa Data Manipulation Language (Lenguaje de Manipulacion de Datos)."
  },
  {
    id: 118,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Cuales son los elementos de DML?",
    options: [
      "CREATE, ALTER, DROP, TRUNCATE",
      "GRANT, REVOKE, DENY",
      "INSERT, UPDATE, DELETE, SELECT",
      "COMMIT, ROLLBACK, SAVEPOINT"
    ],
    correctAnswer: 2,
    explanation: "DML incluye: INSERT (insertar), UPDATE (modificar), DELETE (eliminar) y SELECT (consultar datos)."
  },
  {
    id: 119,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "La sentencia SELECT del DML tambien se conoce como DQL. Que significa DQL?",
    options: [
      "Data Query Language",
      "Data Queue List",
      "Dynamic Question Language",
      "Database Query Logic"
    ],
    correctAnswer: 0,
    explanation: "SELECT pertenece al DML pero a veces se clasifica aparte como DQL: Data Query Language (Lenguaje de Consulta de Datos)."
  },
  {
    id: 120,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Que significa DCL?",
    options: [
      "Data Creation Language",
      "Data Control Language",
      "Database Connection Layer",
      "Data Commit Logic"
    ],
    correctAnswer: 1,
    explanation: "DCL significa Data Control Language (Lenguaje de Control de Datos)."
  },
  {
    id: 121,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Cuales son los comandos de DCL?",
    options: [
      "COMMIT y ROLLBACK",
      "CREATE y DROP",
      "GRANT y REVOKE",
      "INSERT y DELETE"
    ],
    correctAnswer: 2,
    explanation: "DCL tiene dos comandos: GRANT (otorga permiso) y REVOKE (elimina permiso)."
  },
  {
    id: 122,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "tf",
    prompt: "El comando GRANT del DCL se usa para otorgar permisos sobre objetos de la base de datos.",
    correctAnswer: true,
    explanation: "GRANT otorga permiso y REVOKE lo elimina; ambos se usan para administrar el acceso al sistema gestor."
  },
  {
    id: 123,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Que significa TCL?",
    options: [
      "Table Control Language",
      "Transaction Control Language",
      "Trigger Command List",
      "Temporal Commit Logic"
    ],
    correctAnswer: 1,
    explanation: "TCL significa Transaction Control Language (Lenguaje de Control de Transacciones)."
  },
  {
    id: 124,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Cuales son los comandos de TCL?",
    options: [
      "INSERT, UPDATE, DELETE, SELECT",
      "GRANT, REVOKE, DENY",
      "COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION",
      "CREATE, ALTER, DROP, TRUNCATE"
    ],
    correctAnswer: 2,
    explanation: "TCL incluye: COMMIT (confirmar), ROLLBACK (deshacer), SAVEPOINT (punto de guardado) y SET TRANSACTION (inicializar transaccion)."
  },
  {
    id: 125,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "choice",
    prompt: "Que hace el comando ROLLBACK en TCL?",
    options: [
      "Confirma la transaccion y guarda los cambios.",
      "Deshace la transaccion y revierte los cambios.",
      "Crea un punto de guardado dentro de la transaccion.",
      "Inicializa una nueva transaccion."
    ],
    correctAnswer: 1,
    explanation: "ROLLBACK deshace la transaccion, revirtiendo todos los cambios realizados desde el ultimo COMMIT o SAVEPOINT."
  },
  {
    id: 126,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "basico",
    type: "tf",
    prompt: "COMMIT confirma una transaccion y guarda los cambios de forma permanente en la base de datos.",
    correctAnswer: true,
    explanation: "COMMIT hace permanentes los cambios realizados en la transaccion actual."
  },
  {
    id: 127,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Para que sirve SAVEPOINT en TCL?",
    options: [
      "Para confirmar todos los cambios de la transaccion.",
      "Para eliminar una transaccion completa.",
      "Para crear un punto de guardado dentro de una transaccion al que se puede volver con ROLLBACK.",
      "Para iniciar una nueva sesion de base de datos."
    ],
    correctAnswer: 2,
    explanation: "SAVEPOINT establece un punto de guardado dentro de la transaccion; se puede hacer ROLLBACK hasta ese punto sin deshacer todo."
  },
  {
    id: 128,
    section: "Teoria",
    topic: "Fundamentos BD",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cual de los siguientes grupos SQL se usa para administrar el sistema gestor y controlar el acceso a los objetos?",
    options: [
      "DDL",
      "DML",
      "DCL",
      "TCL"
    ],
    correctAnswer: 2,
    explanation: "DCL (GRANT y REVOKE) se usa para Administrar el Sistema Gestor de Base de Datos y controlar el acceso a los objetos."
  },

  // ── Fundamentos SQL Server ──────────────────────────────────────────────────
  {
    id: 129,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "tf",
    prompt: "Antes de la era digital, los seres humanos ya dependian de 'bancos de datos' fisicos como guias telefonicas o historiales medicos.",
    correctAnswer: true,
    explanation: "Las bases de datos son producto de la necesidad humana de almacenar informacion de manera accesible; guias telefonicas, bibliotecas e historiales medicos son ejemplos fisicos previos a lo digital."
  },
  {
    id: 130,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun la presentacion, ¿cual era la funcion principal de las guias telefonicas como banco de datos fisico?",
    options: [
      "Organizacion de conocimiento por categorias",
      "Registro critico y cronologico de salud",
      "Encontrar contactos masivos",
      "Almacenar transacciones comerciales"
    ],
    correctAnswer: 2,
    explanation: "Las guias telefonicas servian para encontrar contactos masivos; eran uno de los primeros 'bancos de datos' fisicos antes de la era digital."
  },
  {
    id: 131,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cuantos de los siguientes son ejemplos de bancos de datos fisicos mencionados en la presentacion? (Guias telefonicas, Bibliotecas, Historial medico)",
    options: [
      "Solo uno (Guias telefonicas)",
      "Solo dos (Guias telefonicas y Bibliotecas)",
      "Los tres son ejemplos validos",
      "Ninguno, solo las bases digitales son 'bancos de datos'"
    ],
    correctAnswer: 2,
    explanation: "La presentacion menciona los tres: guias telefonicas (contactos masivos), bibliotecas (conocimiento por categorias) e historial medico (registro cronologico de salud)."
  },
  {
    id: 132,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Como define la presentacion a las bases de datos modernas?",
    options: [
      "Archivos de texto plano organizados en carpetas",
      "Sistemas organizados para almacenar y gestionar grandes cantidades de informacion",
      "Hojas de calculo con formulas avanzadas",
      "Repositorios exclusivos para datos numericos"
    ],
    correctAnswer: 1,
    explanation: "Las bases de datos modernas son sistemas organizados para almacenar y gestionar grandes cantidades de informacion, con facil recuperacion, manipulacion eficiente y actualizacion constante."
  },
  {
    id: 133,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "tf",
    prompt: "Las bases de datos modernas aplican unicamente a sistemas empresariales grandes, no a aplicaciones personales.",
    correctAnswer: false,
    explanation: "Las bases de datos modernas abarcan desde aplicaciones personales hasta sistemas empresariales."
  },
  {
    id: 134,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es el 'focus' principal que diferencia a las bases de datos relacionales (SQL) de las NoSQL?",
    options: [
      "Escalabilidad horizontal sin limites",
      "Estructura clara y definida",
      "Sin estructura predefinida",
      "Rendimiento en Big Data"
    ],
    correctAnswer: 1,
    explanation: "Las bases de datos relacionales (SQL) tienen como focus una estructura clara y definida, y son la tecnologia estandar en la industria."
  },
  {
    id: 135,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que caracteristica define a las bases de datos NoSQL segun la presentacion?",
    options: [
      "Estructura fija con esquema rigido",
      "Uso exclusivo de SQL como lenguaje",
      "Sin estructura predefinida; ideales para datos no estructurados",
      "Tecnologia estandar en la industria"
    ],
    correctAnswer: 2,
    explanation: "Las bases de datos No Relacionales (NoSQL) se caracterizan por no tener estructura predefinida (schema-less) y ser ideales para datos no estructurados."
  },
  {
    id: 136,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual de las siguientes es una VENTAJA de las bases de datos relacionales SQL?",
    options: [
      "Escalabilidad horizontal ilimitada",
      "Flexibilidad de esquema cambiante",
      "Consistencia e integridad de los datos",
      "Rendimiento optimizado para Big Data no estructurado"
    ],
    correctAnswer: 2,
    explanation: "Una ventaja clave de SQL relacional es la consistencia e integridad de los datos (los datos son fiables), junto con soporte maduro y consultas avanzadas."
  },
  {
    id: 137,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual de las siguientes es una DESVENTAJA de las bases de datos relacionales SQL?",
    options: [
      "Falta de estandarizacion del lenguaje",
      "Integridad eventual de los datos",
      "Rigidez: los cambios de esquema pueden ser complejos",
      "No soporta consultas avanzadas"
    ],
    correctAnswer: 2,
    explanation: "Las desventajas del modelo SQL relacional incluyen escalabilidad limitada bajo cargas masivas y rigidez (los cambios de esquema pueden ser complejos)."
  },
  {
    id: 138,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "intermedio",
    type: "tf",
    prompt: "Una desventaja de las bases de datos relacionales SQL es que pueden tener escalabilidad limitada bajo cargas masivas.",
    correctAnswer: true,
    explanation: "La escalabilidad limitada en algunos casos bajo cargas masivas es identificada como una desventaja de las bases de datos SQL relacionales."
  },
  {
    id: 139,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que significa que las bases de datos NoSQL son 'Schema-less'?",
    options: [
      "Usan un esquema muy complejo predefinido",
      "No requieren una estructura definida",
      "Solo almacenan datos numericos sin etiquetas",
      "Requieren SQL para definir su esquema"
    ],
    correctAnswer: 1,
    explanation: "'Schema-less' significa que las bases de datos NoSQL no requieren una estructura definida, lo que les da flexibilidad para esquemas cambiantes."
  },
  {
    id: 140,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que significa 'Escalabilidad Horizontal' en el contexto de NoSQL?",
    options: [
      "Aumentar la capacidad de un solo servidor mas potente",
      "Reducir el numero de nodos para simplificar la red",
      "Crecer distribuyendo la carga entre mas nodos",
      "Escalar verticalmente la memoria RAM del servidor"
    ],
    correctAnswer: 2,
    explanation: "La escalabilidad horizontal en NoSQL significa crecer distribuyendo la carga entre mas servidores/nodos, en lugar de mejorar un solo servidor."
  },
  {
    id: 141,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "tf",
    prompt: "Una desventaja de NoSQL es que no existe un lenguaje unico y estandarizado como SQL para todas sus implementaciones.",
    correctAnswer: true,
    explanation: "La falta de estandarizacion es una desventaja de NoSQL: no hay un lenguaje unico como SQL, lo que varia segun la implementacion."
  },
  {
    id: 142,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "En el modelo relacional, ¿como se llama una fila individual dentro de una tabla?",
    options: [
      "Campo",
      "Columna",
      "Registro",
      "Esquema"
    ],
    correctAnswer: 2,
    explanation: "En el modelo relacional, una fila individual de datos se denomina Registro. La tabla es el conjunto de datos, y el campo o columna representa una categoria."
  },
  {
    id: 143,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "En la anatomia del modelo relacional, ¿que representa un 'Campo o Columna'?",
    options: [
      "Una fila individual con datos de una entidad",
      "El conjunto completo de datos de la tabla",
      "Una categoria de informacion (por ejemplo: Nombre, Ciudad)",
      "La clave primaria que identifica cada registro"
    ],
    correctAnswer: 2,
    explanation: "Un Campo o Columna representa una categoria de informacion dentro de la tabla, como Nombre, Fecha de Nacimiento, Direccion o Ciudad."
  },
  {
    id: 144,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que significan las siglas SQL?",
    options: [
      "System Query Logic",
      "Structured Query Language",
      "Sequential Query Language",
      "Simple Query Layer"
    ],
    correctAnswer: 1,
    explanation: "SQL significa Structured Query Language (Lenguaje de Consulta Estructurado). Es el lenguaje estandar para interactuar con bases de datos relacionales."
  },
  {
    id: 145,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "tf",
    prompt: "SQL es el lenguaje estandar para interactuar con bases de datos relacionales y permite definir, manipular y controlar los datos almacenados.",
    correctAnswer: true,
    explanation: "SQL es el puente entre el humano y la base de datos: el lenguaje estandar para interactuar con bases de datos relacionales, permitiendo definir, manipular y controlar datos."
  },
  {
    id: 146,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun la linea de tiempo de SQL, ¿en que decada nacio System R de IBM (el primer sistema relacional)?",
    options: [
      "60s",
      "70s",
      "80s",
      "90s"
    ],
    correctAnswer: 1,
    explanation: "En los anos 70 nacio System R de IBM, el primer sistema relacional, que sento las bases para el desarrollo del lenguaje SQL."
  },
  {
    id: 147,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que evento ocurrio en los anos 80 dentro de la evolucion del estandar SQL?",
    options: [
      "Nacimiento de System R en IBM",
      "Lanzamiento de MySQL y Oracle",
      "ANSI e ISO adoptaron SQL como estandar (SQL-86)",
      "Se creo PostgreSQL y SQLite"
    ],
    correctAnswer: 2,
    explanation: "En los anos 80 ocurrio la estandarizacion: ANSI e ISO adoptaron SQL como estandar con la version SQL-86, consolidandolo como lenguaje maduro y estable."
  },
  {
    id: 148,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que decada corresponde a la 'Expansion comercial' de SQL con productos como SQL Server, MySQL y Oracle?",
    options: [
      "70s",
      "80s",
      "90s - 2000s",
      "2010s"
    ],
    correctAnswer: 2,
    explanation: "Los anos 90 - 2000s representaron la expansion comercial de SQL, con la consolidacion de productos como SQL Server, MySQL y Oracle en el mercado."
  },
  {
    id: 149,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cuantos pilares (grupos de instrucciones) componen el lenguaje SQL completo segun la presentacion?",
    options: [
      "2 (DDL y DML)",
      "3 (DDL, DML y DCL)",
      "4 (DDL, DML, DCL y TCL)",
      "5 (DDL, DML, DCL, TCL y DQL)"
    ],
    correctAnswer: 2,
    explanation: "Los 4 pilares del lenguaje SQL son: DDL (Estructura), DML (Datos), DCL (Permisos) y TCL (Transacciones). Estos 4 grupos forman el SQL completo."
  },
  {
    id: 150,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "El DDL es conocido como 'El Arquitecto'. ¿Cual de los siguientes comandos pertenece al DDL?",
    options: [
      "INSERT",
      "UPDATE",
      "ALTER",
      "GRANT"
    ],
    correctAnswer: 2,
    explanation: "ALTER es un comando DDL (Lenguaje de Definicion de Datos) que sirve para modificar objetos como cambiar una columna o estructura. Los comandos DDL son: CREATE, ALTER y DROP."
  },
  {
    id: 151,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que funcion cumple el comando CREATE dentro del DDL?",
    options: [
      "Modificar una columna o estructura existente",
      "Eliminar una estructura por completo",
      "Crear objetos nuevos como tablas o bases de datos",
      "Insertar datos en una tabla existente"
    ],
    correctAnswer: 2,
    explanation: "CREATE es el comando DDL para crear objetos nuevos, como nuevas tablas o bases de datos."
  },
  {
    id: 152,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "tf",
    prompt: "El comando DROP del DDL permite eliminar una estructura por completo.",
    correctAnswer: true,
    explanation: "DROP es un comando DDL que elimina objetos (borra una estructura por completo), a diferencia de ALTER que solo la modifica."
  },
  {
    id: 153,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "El DML es conocido como 'El Habitante'. ¿Cual de los siguientes comandos pertenece al DML?",
    options: [
      "CREATE",
      "DROP",
      "GRANT",
      "DELETE"
    ],
    correctAnswer: 3,
    explanation: "DELETE es un comando DML (Lenguaje de Manipulacion de Datos) que elimina datos especificos. Los comandos DML son: INSERT, UPDATE y DELETE."
  },
  {
    id: 154,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que comando DML se utiliza para modificar datos existentes en una tabla?",
    options: [
      "INSERT",
      "UPDATE",
      "ALTER",
      "MODIFY"
    ],
    correctAnswer: 1,
    explanation: "UPDATE es el comando DML para modificar datos existentes dentro de las estructuras de la base de datos."
  },
  {
    id: 155,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es el comando principal del DQL (Data Query Language) para recuperar informacion?",
    options: [
      "FETCH",
      "GET",
      "SELECT",
      "FIND"
    ],
    correctAnswer: 2,
    explanation: "SELECT es la herramienta principal del DQL para recuperar informacion especifica de grandes volumenes de datos."
  },
  {
    id: 156,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "intermedio",
    type: "tf",
    prompt: "El DQL (Data Query Language) es un lenguaje completamente independiente del DML; no tiene ninguna relacion con el.",
    correctAnswer: false,
    explanation: "Aunque SELECT merece su propio foco por ser vital, el DQL es tecnicamente parte del DML. La presentacion lo destaca por separado por su importancia, pero forma parte del grupo DML."
  },
  {
    id: 157,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que comando DCL se utiliza para DAR permisos a un usuario?",
    options: [
      "COMMIT",
      "ROLLBACK",
      "REVOKE",
      "GRANT"
    ],
    correctAnswer: 3,
    explanation: "GRANT es el comando DCL para dar permisos. Su contraparte es REVOKE, que quita permisos. Juntos controlan quien puede ver o cambiar que."
  },
  {
    id: 158,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que comando TCL se utiliza para DESHACER operaciones no confirmadas?",
    options: [
      "GRANT",
      "REVOKE",
      "COMMIT",
      "ROLLBACK"
    ],
    correctAnswer: 3,
    explanation: "ROLLBACK es el comando TCL para deshacer operaciones. COMMIT es para guardar/confirmar. Juntos aseguran que las operaciones se completen o se deshagan."
  },
  {
    id: 159,
    section: "Teoria",
    topic: "Fundamentos SQL Server",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun la presentacion, ¿dentro de que entorno se gestiona el DDL, DML, DCL y TCL en SQL Server?",
    options: [
      "Visual Studio Code",
      "Oracle SQL Developer",
      "SSMS (SQL Server Management Studio)",
      "MySQL Workbench"
    ],
    correctAnswer: 2,
    explanation: "Todo se gestiona dentro del entorno SSMS (SQL Server Management Studio), la herramienta oficial de Microsoft para administrar SQL Server."
  },

  // ── Sentencias DDL ──────────────────────────────────────────────────────────
  {
    id: 160,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que significa la sigla DDL en bases de datos?",
    options: [
      "Data Delivery Language",
      "Database Definition Logic",
      "Data Definition Language",
      "Dynamic Data Layer"
    ],
    correctAnswer: 2,
    explanation: "DDL significa Data Definition Language (Lenguaje de Definicion de Datos). Es fundamental para cualquier RDBMS (Sistema de Administracion de Base de Datos Relacionales)."
  },
  {
    id: 161,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que tipo de elementos gestionan las sentencias DDL?",
    options: [
      "Los datos almacenados dentro de las tablas",
      "Los permisos de acceso de los usuarios",
      "La estructura de la base de datos: tablas, indices, vistas y restricciones",
      "Las transacciones pendientes de confirmacion"
    ],
    correctAnswer: 2,
    explanation: "Las sentencias DDL gestionan la ESTRUCTURA de la base de datos: objetos como tablas, indices, vistas y restricciones. No gestionan los datos en si, sino la arquitectura que los contiene."
  },
  {
    id: 162,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "tf",
    prompt: "DDL es fundamental para cualquier RDBMS (Sistema de Administracion de Base de Datos Relacionales).",
    correctAnswer: true,
    explanation: "Verdadero. DDL es el lenguaje base de cualquier RDBMS porque define la estructura donde se almacenaran todos los datos."
  },
  {
    id: 163,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cuales son las 4 sentencias DDL principales segun la presentacion?",
    options: [
      "INSERT, UPDATE, DELETE, SELECT",
      "CREATE, ALTER, DROP, TRUNCATE",
      "GRANT, REVOKE, COMMIT, ROLLBACK",
      "CREATE, INSERT, ALTER, DELETE"
    ],
    correctAnswer: 1,
    explanation: "Las 4 sentencias DDL principales son: CREATE (crear), ALTER (modificar), DROP (eliminar objeto) y TRUNCATE (limpiar datos). Son el 'kit de herramientas del arquitecto'."
  },
  {
    id: 164,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Para que se utiliza la sentencia CREATE en DDL?",
    options: [
      "Para modificar la estructura de objetos existentes",
      "Para eliminar permanentemente un objeto",
      "Para crear nuevos objetos en la base de datos como tablas, vistas o indices",
      "Para limpiar todas las filas de una tabla"
    ],
    correctAnswer: 2,
    explanation: "CREATE se utiliza para crear nuevos objetos en la base de datos: tablas, vistas, indices, procedimientos almacenados, entre otros."
  },
  {
    id: 165,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "En la sintaxis de CREATE, ¿que representa el parametro [tipo_de_objeto]?",
    options: [
      "El nombre que deseas asignar al nuevo objeto",
      "La accion a realizar sobre el objeto",
      "El tipo de objeto a crear: Table, Database, View, Index, etc.",
      "La condicion de existencia del objeto"
    ],
    correctAnswer: 2,
    explanation: "En CREATE [tipo_de_objeto] [nombre_de_objeto], el primer parametro indica el tipo: Table, Database, View, Index, etc. El segundo parametro es el nombre que se desea asignar."
  },
  {
    id: 166,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Para que se utiliza la sentencia ALTER en DDL?",
    options: [
      "Para crear nuevos objetos en la base de datos",
      "Para modificar la estructura de objetos ya existentes, como agregar, eliminar o modificar columnas",
      "Para eliminar todos los datos de una tabla sin borrar el objeto",
      "Para otorgar permisos sobre un objeto"
    ],
    correctAnswer: 1,
    explanation: "ALTER se utiliza para modificar la estructura de objetos ya existentes, como agregar, eliminar o modificar columnas. Es 'La Evolucion' del objeto."
  },
  {
    id: 167,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En la sintaxis ALTER [tipo_de_objeto] [nombre_de_objeto] [accion], ¿cuales son ejemplos validos de [accion]?",
    options: [
      "SELECT, INSERT, UPDATE",
      "TABLE, COLUMN, INDEX",
      "Add, Drop, Alter",
      "GRANT, REVOKE, COMMIT"
    ],
    correctAnswer: 2,
    explanation: "En ALTER, los parametros son: (1) tipo: Table, Column, Index, etc.; (2) nombre del objeto a modificar; (3) accion: Add, Drop, Alter, etc."
  },
  {
    id: 168,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que hace la sentencia DROP en DDL?",
    options: [
      "Elimina todas las filas de una tabla pero conserva su estructura",
      "Modifica la estructura de un objeto existente",
      "Elimina objetos de la base de datos como tablas, vistas o indices",
      "Crea una copia de seguridad antes de eliminar"
    ],
    correctAnswer: 2,
    explanation: "DROP elimina objetos completos de la base de datos, como tablas, vistas o indices. Su accion es IRREVERSIBLE y elimina permanentemente los datos asociados."
  },
  {
    id: 169,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "tf",
    prompt: "La sentencia DROP es irreversible y elimina permanentemente los datos asociados al objeto.",
    correctAnswer: true,
    explanation: "Verdadero. DROP es IRREVERSIBLE. Una vez ejecutado, el objeto y todos sus datos asociados se eliminan permanentemente de la base de datos."
  },
  {
    id: 170,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En la sintaxis DROP [tipo_de_objeto] IF EXISTS [nombre_de_objeto], ¿para que sirve la clausula IF EXISTS?",
    options: [
      "Para confirmar que el objeto existe antes de crearlo",
      "Para evitar un error si el objeto no existe al intentar eliminarlo",
      "Para hacer la eliminacion reversible",
      "Para eliminar solo si el objeto esta vacio"
    ],
    correctAnswer: 1,
    explanation: "IF EXISTS es opcional en DROP y se utiliza para evitar un error si el objeto no existe. Sin ella, SQL lanzaria un error al intentar eliminar un objeto inexistente."
  },
  {
    id: 171,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que hace la sentencia TRUNCATE en DDL?",
    options: [
      "Elimina el objeto completo de la base de datos",
      "Modifica la estructura de una tabla existente",
      "Elimina todas las filas de una tabla sin registrar las eliminaciones individuales",
      "Crea una nueva tabla vacia con la misma estructura"
    ],
    correctAnswer: 2,
    explanation: "TRUNCATE elimina todas las filas de una tabla sin registrar las eliminaciones individuales. Es el 'Reinicio Rapido' porque limpia los datos pero conserva la estructura de la tabla."
  },
  {
    id: 172,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual es la principal diferencia de rendimiento entre TRUNCATE y DELETE?",
    options: [
      "TRUNCATE es mas lento porque verifica restricciones en cada fila",
      "DELETE es mas rapido porque no registra nada en el log de transacciones",
      "TRUNCATE es mas rapido porque utiliza menos recursos del registro de transacciones",
      "No hay diferencia de rendimiento entre ambos"
    ],
    correctAnswer: 2,
    explanation: "TRUNCATE es mas rapido porque utiliza menos recursos del registro de transacciones; no registra la eliminacion fila por fila. DELETE es mas lento porque registra cada fila individualmente."
  },
  {
    id: 173,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "tf",
    prompt: "TRUNCATE es equivalente a ejecutar un DELETE sin clausula WHERE.",
    correctAnswer: true,
    explanation: "Verdadero. TRUNCATE es similar a un DELETE sin clausula WHERE: ambos eliminan todas las filas. La diferencia es que TRUNCATE es mas rapido y usa menos recursos de log."
  },
  {
    id: 174,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Por que DELETE requiere la clausula WHERE para un uso seguro?",
    options: [
      "Porque sin WHERE solo elimina la primera fila",
      "Porque sin WHERE eliminaria todos los registros de la tabla",
      "Porque WHERE es obligatorio en todas las sentencias SQL",
      "Porque sin WHERE DELETE se convierte en TRUNCATE automaticamente"
    ],
    correctAnswer: 1,
    explanation: "DELETE sin clausula WHERE elimina TODOS los registros de la tabla. Por eso se necesita WHERE para especificar que filas eliminar y evitar borrar todo accidentalmente."
  },
  {
    id: 175,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es la sintaxis correcta de TRUNCATE segun la presentacion?",
    options: [
      "TRUNCATE [nombre_de_objeto];",
      "TRUNCATE TABLE [nombre_de_objeto];",
      "TRUNCATE DROP [nombre_de_objeto];",
      "TRUNCATE FROM [nombre_de_objeto];"
    ],
    correctAnswer: 1,
    explanation: "La sintaxis correcta es TRUNCATE TABLE [nombre_de_objeto]; donde [nombre_de_objeto] es el nombre de la tabla que se desea truncar (limpiar)."
  },
  {
    id: 176,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Segun el resumen de sintaxis DDL, ¿cual es la funcion de TRUNCATE?",
    options: [
      "Eliminar permanentemente el objeto",
      "Modificar la estructura del objeto",
      "Crear un nuevo objeto vacio",
      "Limpiar datos (reset)"
    ],
    correctAnswer: 3,
    explanation: "Segun el resumen DDL, TRUNCATE tiene la funcion de 'Limpiar datos (reset)'. Elimina solo las filas, conservando la estructura del objeto."
  },
  {
    id: 177,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual sentencia DDL usarias para agregar una nueva columna a una tabla ya existente?",
    options: [
      "CREATE",
      "ALTER",
      "DROP",
      "TRUNCATE"
    ],
    correctAnswer: 1,
    explanation: "ALTER se usa para modificar la estructura de objetos existentes, incluyendo agregar, eliminar o modificar columnas de una tabla que ya existe."
  },
  {
    id: 178,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual sentencia DDL usarias para eliminar una tabla COMPLETA junto con todos sus datos de forma permanente?",
    options: [
      "TRUNCATE",
      "DELETE",
      "DROP",
      "ALTER"
    ],
    correctAnswer: 2,
    explanation: "DROP elimina el objeto completo (tabla, vista, indice, etc.) de forma permanente e irreversible, incluyendo todos sus datos y la estructura misma."
  },
  {
    id: 179,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que sentencia DDL conserva la estructura de la tabla pero elimina todos sus datos?",
    options: [
      "DROP",
      "DELETE",
      "TRUNCATE",
      "ALTER DROP"
    ],
    correctAnswer: 2,
    explanation: "TRUNCATE elimina todas las filas (datos) de la tabla pero conserva la estructura (definicion de columnas, etc.). DROP eliminaria tanto los datos como la estructura."
  },
  {
    id: 180,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "tf",
    prompt: "La sentencia DDL CREATE puede usarse para crear tablas, bases de datos, vistas e indices.",
    correctAnswer: true,
    explanation: "Verdadero. CREATE puede crear distintos tipos de objetos: Table, Database, View, Index, procedimientos almacenados, etc. El tipo se especifica en el parametro [tipo_de_objeto]."
  },
  {
    id: 181,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "Ademas de tablas, vistas e indices, ¿que otros objetos pueden crearse con CREATE segun la presentacion?",
    options: [
      "Solo tablas y bases de datos",
      "Tablas, vistas, indices, procedimientos almacenados y funciones",
      "Unicamente procedimientos almacenados",
      "Solo tablas e indices"
    ],
    correctAnswer: 1,
    explanation: "CREATE puede crear: tablas, vistas, indices, procedimientos almacenados, funciones y otros elementos que forman parte de la estructura de la base de datos."
  },
  {
    id: 182,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Ademas de agregar, eliminar o modificar columnas, ¿que otra accion permite realizar ALTER sobre un objeto?",
    options: [
      "Eliminar el objeto por completo",
      "Cambiar el nombre de un objeto",
      "Limpiar todos los datos del objeto",
      "Crear una copia del objeto"
    ],
    correctAnswer: 1,
    explanation: "ALTER permite modificar la estructura de objetos existentes: agregar, eliminar o modificar columnas de una tabla, cambiar el nombre de un objeto, etc."
  },
  {
    id: 183,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Segun la presentacion, ¿sobre que puede actuar la sentencia TRUNCATE ademas de una tabla completa?",
    options: [
      "Solo sobre una columna especifica",
      "Sobre vistas e indices",
      "Sobre particiones especificas de una tabla",
      "Solo sobre bases de datos completas"
    ],
    correctAnswer: 2,
    explanation: "TRUNCATE puede eliminar todas las filas de una tabla O de particiones especificas de una tabla, sin registrar las eliminaciones de filas individuales."
  },
  {
    id: 184,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "tf",
    prompt: "Las sentencias DDL se utilizan para crear, modificar y eliminar objetos que definen la organizacion y estructura de los datos en un RDBMS.",
    correctAnswer: true,
    explanation: "Verdadero. DDL define la organizacion y estructura de los datos en un RDBMS; crea, modifica y elimina objetos como tablas, indices, vistas, restricciones y otros elementos estructurales."
  },
  {
    id: 185,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cuales son ejemplos validos del parametro [tipo_objeto] en la sintaxis DROP [tipo_objeto] IF EXISTS [nombre_objeto]?",
    options: [
      "INSERT, UPDATE, DELETE",
      "ADD, DROP, ALTER",
      "Table, Index, Database",
      "GRANT, REVOKE, COMMIT"
    ],
    correctAnswer: 2,
    explanation: "En DROP, el parametro [tipo_objeto] puede ser: Table, Index, Database, etc. Seguido opcionalmente de IF EXISTS para evitar errores si el objeto no existe."
  },
  {
    id: 186,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "intermedio",
    type: "tf",
    prompt: "TRUNCATE utiliza menos recursos del sistema y del registro de transacciones que DELETE.",
    correctAnswer: true,
    explanation: "Verdadero. TRUNCATE es mas rapido y utiliza menos recursos del sistema y del registro de transacciones porque no registra la eliminacion fila por fila como lo hace DELETE."
  },
  {
    id: 187,
    section: "Teoria",
    topic: "Sentencias DDL",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual de las siguientes afirmaciones sobre DDL es correcta segun la presentacion?",
    options: [
      "DDL gestiona los datos almacenados dentro de las tablas",
      "DDL es un conjunto de comandos para definir, modificar y gestionar la estructura de una base de datos",
      "DDL solo puede crear objetos nuevos, no modificarlos",
      "DDL es exclusivo de SQL Server y no aplica a otros RDBMS"
    ],
    correctAnswer: 1,
    explanation: "DDL (Data Definition Language) es un conjunto de comandos utilizados para definir, modificar y gestionar la ESTRUCTURA de una base de datos en cualquier RDBMS."
  },

  /* ───── Sentencias DML ───── */
  {
    id: 188,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Para que se utiliza la instruccion UPDATE en SQL Server?",
    options: [
      "Para insertar nuevos registros en una tabla.",
      "Para actualizar registros existentes en una tabla.",
      "Para eliminar registros de una tabla.",
      "Para crear una nueva tabla en la base de datos."
    ],
    correctAnswer: 1,
    explanation: "UPDATE se utiliza para modificar (actualizar) registros que ya existen en una tabla. No crea nuevos registros."
  },
  {
    id: 189,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que clausula es obligatoria en UPDATE para indicar que columnas y valores cambiar?",
    options: [
      "WHERE",
      "FROM",
      "SET",
      "VALUES"
    ],
    correctAnswer: 2,
    explanation: "La clausula SET es obligatoria en UPDATE. En ella se especifican las columnas y sus nuevos valores: SET columna = expresion."
  },
  {
    id: 190,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "La instruccion UPDATE modifica registros existentes; no crea nuevos registros.",
    correctAnswer: true,
    explanation: "Correcto. UPDATE solo modifica filas que ya existen. Para insertar nuevas filas se usa INSERT."
  },
  {
    id: 191,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que ocurre si ejecutas un UPDATE sin la clausula WHERE?",
    options: [
      "SQL Server devuelve un error de sintaxis.",
      "Se actualiza unicamente el primer registro de la tabla.",
      "Se actualizan TODOS los registros de la tabla.",
      "La sentencia no se ejecuta."
    ],
    correctAnswer: 2,
    explanation: "Sin WHERE, UPDATE aplica el cambio a TODAS las filas de la tabla, lo cual puede ser muy peligroso en produccion."
  },
  {
    id: 192,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En un UPDATE de multiples columnas, ¿como se separan las asignaciones dentro de SET?",
    options: [
      "Con punto y coma (;)",
      "Con la palabra clave AND",
      "Con coma (,)",
      "Con la palabra clave THEN"
    ],
    correctAnswer: 2,
    explanation: "Las asignaciones multiples dentro de SET se separan por comas: SET columna1 = valor1, columna2 = valor2."
  },
  {
    id: 193,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Para que se utiliza la instruccion DELETE en SQL Server?",
    options: [
      "Para modificar la estructura de una tabla.",
      "Para actualizar valores de columnas existentes.",
      "Para eliminar registros existentes de una tabla.",
      "Para crear un respaldo de la tabla."
    ],
    correctAnswer: 2,
    explanation: "DELETE elimina filas existentes de una tabla. Se usa: DELETE FROM nombre_tabla WHERE condicion."
  },
  {
    id: 194,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "Si se omite la clausula WHERE en un DELETE, se eliminaran TODOS los registros de la tabla.",
    correctAnswer: true,
    explanation: "Verdadero. Sin WHERE el DELETE aplica a toda la tabla, eliminando cada fila. Es una de las operaciones mas peligrosas si se ejecuta por error."
  },
  {
    id: 195,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que sucede cuando intentas eliminar con DELETE un registro que esta referenciado por una Foreign Key en otra tabla?",
    options: [
      "SQL Server elimina el registro y todos los registros relacionados automaticamente.",
      "SQL Server bloquea la operacion para mantener la integridad referencial.",
      "SQL Server lo elimina pero registra una advertencia.",
      "SQL Server convierte el valor a NULL en la tabla hija."
    ],
    correctAnswer: 1,
    explanation: "SQL Server bloquea el DELETE cuando viola la integridad referencial. No puedes eliminar un padre si aun tiene hijos referenciandolo (a menos que este configurado ON DELETE CASCADE)."
  },
  {
    id: 196,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual es la practica recomendada ANTES de ejecutar un DELETE?",
    options: [
      "Ejecutar primero un DROP TABLE para asegurarse.",
      "Ejecutar primero un SELECT * FROM tabla WHERE... para verificar que datos se eliminaran.",
      "Deshabilitar todos los constraints de la tabla.",
      "Ejecutar TRUNCATE TABLE primero para limpiar la tabla."
    ],
    correctAnswer: 1,
    explanation: "La practica recomendada es ejecutar primero un SELECT con la misma condicion WHERE para ver exactamente que registros se veran afectados antes de confirmar el DELETE."
  },
  {
    id: 197,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "tf",
    prompt: "Antes de ejecutar sentencias UPDATE o DELETE masivas en produccion, se recomienda tener un backup reciente.",
    correctAnswer: true,
    explanation: "Correcto. El poder de manipular datos conlleva la responsabilidad de protegerlos. Siempre tener copias de seguridad recientes antes de operaciones masivas."
  },
  {
    id: 198,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que instruccion DML se utiliza para consultar (leer) registros de una tabla?",
    options: [
      "GET",
      "FETCH",
      "SELECT",
      "READ"
    ],
    correctAnswer: 2,
    explanation: "SELECT es la instruccion principal para consultar datos. Es el punto de partida de cualquier analisis de informacion en SQL Server."
  },
  {
    id: 199,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que devuelve la sentencia SELECT * FROM Peliculas?",
    options: [
      "Solo la primera columna de la tabla Peliculas.",
      "El conteo total de registros de la tabla.",
      "Todas las columnas y todos los registros de la tabla Peliculas.",
      "Solo las columnas numericas de la tabla."
    ],
    correctAnswer: 2,
    explanation: "El asterisco (*) en SELECT solicita TODAS las columnas disponibles de la tabla. Es util para exploracion rapida pero ineficiente en produccion."
  },
  {
    id: 200,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "Usar SELECT * en produccion es mas eficiente que especificar columnas concretas.",
    correctAnswer: false,
    explanation: "Falso. Seleccionar todas las columnas con * consume mas red y memoria. La seleccion especifica de columnas reduce la carga y es la practica recomendada en produccion."
  },
  {
    id: 201,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es la ventaja de especificar columnas concretas en SELECT en lugar de usar *?",
    options: [
      "La consulta retorna mas registros.",
      "Reduce la carga en la red y la memoria.",
      "Permite ordenar automaticamente los resultados.",
      "Evita el uso de la clausula WHERE."
    ],
    correctAnswer: 1,
    explanation: "La seleccion especifica de columnas (SELECT col1, col2) reduce la carga en la red y la memoria al traer solo los datos necesarios."
  },
  {
    id: 202,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Para que sirve la clausula DISTINCT en una consulta SELECT?",
    options: [
      "Para ordenar los resultados de forma ascendente.",
      "Para limitar el numero de filas devueltas.",
      "Para devolver solo valores unicos, eliminando duplicados.",
      "Para filtrar filas segun una condicion."
    ],
    correctAnswer: 2,
    explanation: "DISTINCT filtra los valores repetidos del resultado, devolviendo solo valores unicos. Ej: SELECT DISTINCT Genero FROM Peliculas."
  },
  {
    id: 203,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "SELECT DISTINCT elimina filas duplicadas del conjunto de resultados.",
    correctAnswer: true,
    explanation: "Correcto. DISTINCT devuelve solo las filas unicas, limpiando el resultado final de repeticiones innecesarias."
  },
  {
    id: 204,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es el proposito de la clausula WHERE en una consulta SELECT?",
    options: [
      "Ordenar los resultados por una columna.",
      "Limitar el numero de filas al inicio del resultado.",
      "Filtrar las filas que cumplen una condicion especifica.",
      "Agrupar filas con valores iguales."
    ],
    correctAnswer: 2,
    explanation: "WHERE actua como un filtro, permitiendo el paso solo a las filas que cumplen la condicion especificada. Es vital para obtener datos precisos."
  },
  {
    id: 205,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que ordena por defecto la clausula ORDER BY en SQL Server cuando no se especifica ASC ni DESC?",
    options: [
      "Descendente (Z-A, 9-0)",
      "Ascendente (A-Z, 0-9)",
      "Por orden de insercion original",
      "Aleatorio"
    ],
    correctAnswer: 1,
    explanation: "El orden predeterminado de ORDER BY es ASC (ascendente): A-Z para texto y 0-9 para numeros. Hay que escribir DESC explicitamente para invertirlo."
  },
  {
    id: 206,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "Si quieres mostrar las peliculas con mayor calificacion primero, ¿que modificador usas en ORDER BY?",
    options: [
      "ASC",
      "TOP",
      "DESC",
      "MAX"
    ],
    correctAnswer: 2,
    explanation: "DESC (descendente) ordena de mayor a menor: 9-0 para numeros y Z-A para texto. Ej: ORDER BY Calificacion DESC."
  },
  {
    id: 207,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "La clausula ORDER BY ASC ordena los resultados de Z a A (descendente).",
    correctAnswer: false,
    explanation: "Falso. ASC ordena de forma ascendente (A-Z, 0-9). El orden descendente (Z-A, 9-0) se logra con DESC."
  },
  {
    id: 208,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que hace la clausula TOP en una consulta SELECT?",
    options: [
      "Ordena los resultados por la columna principal.",
      "Especifica el numero exacto de filas que se devuelven.",
      "Elimina filas duplicadas del resultado.",
      "Filtra registros por una condicion logica."
    ],
    correctAnswer: 1,
    explanation: "TOP limita el numero exacto de filas devueltas. Ej: SELECT TOP 10 ... devuelve exactamente 10 filas."
  },
  {
    id: 209,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cuál sentencia devuelve las 10 peliculas con mayor ganancia financiera?",
    options: [
      "SELECT 10 Titulo, Ganancia FROM Peliculas ORDER BY Ganancia DESC",
      "SELECT TOP 10 Titulo, Ganancia FROM Peliculas ORDER BY Ganancia DESC",
      "SELECT Titulo, Ganancia FROM Peliculas WHERE TOP 10 ORDER BY Ganancia DESC",
      "SELECT Titulo, Ganancia FROM Peliculas ORDER BY Ganancia DESC TOP 10"
    ],
    correctAnswer: 1,
    explanation: "TOP se coloca justo despues de SELECT: SELECT TOP 10 columnas FROM tabla ORDER BY columna DESC."
  },
  {
    id: 210,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que hace TOP n PERCENT en una consulta?",
    options: [
      "Devuelve exactamente n filas.",
      "Devuelve un porcentaje del total de filas del resultado.",
      "Calcula el porcentaje de un campo numerico.",
      "Ordena los resultados por porcentaje."
    ],
    correctAnswer: 1,
    explanation: "TOP n PERCENT devuelve un porcentaje del total de filas. Ej: SELECT TOP 20 PERCENT * FROM Peliculas devuelve el 20% de todas las filas."
  },
  {
    id: 211,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "avanzado",
    type: "choice",
    prompt: "¿Para que sirve WITH TIES en combinacion con TOP?",
    options: [
      "Para excluir filas repetidas del limite TOP.",
      "Para incluir filas adicionales que empatan en valor con la ultima fila del limite.",
      "Para garantizar que los resultados se ordenen por dos columnas.",
      "Para unir dos tablas con los mismos valores."
    ],
    correctAnswer: 1,
    explanation: "WITH TIES incluye filas adicionales que tienen el mismo valor que la ultima fila dentro del limite TOP, garantizando equidad estadistica en los empates."
  },
  {
    id: 212,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "avanzado",
    type: "tf",
    prompt: "WITH TIES puede devolver mas filas de las indicadas en TOP si existen empates en el valor de ordenamiento.",
    correctAnswer: true,
    explanation: "Correcto. WITH TIES rompe el limite estricto de TOP para incluir todas las filas que comparten el valor de la ultima posicion, pudiendo devolver mas filas que el numero indicado."
  },
  {
    id: 213,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual es el orden logico correcto de las clausulas en una sentencia SELECT completa?",
    options: [
      "FROM → SELECT → WHERE → ORDER BY",
      "SELECT → WHERE → FROM → ORDER BY",
      "SELECT → FROM → WHERE → ORDER BY",
      "WHERE → SELECT → FROM → ORDER BY"
    ],
    correctAnswer: 2,
    explanation: "El orden correcto es: SELECT [DISTINCT] [TOP] lista_columnas FROM nombre_tabla WHERE condicion ORDER BY columna [ASC|DESC]. El motor de base de datos requiere esta secuencia exacta."
  },
  {
    id: 214,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "En la sintaxis de SELECT, la clausula FROM va antes que la clausula WHERE.",
    correctAnswer: true,
    explanation: "Correcto. El orden es SELECT → FROM → WHERE → ORDER BY. FROM siempre precede a WHERE en la sintaxis de SQL Server."
  },
  {
    id: 215,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿En que posicion de la sentencia SELECT se coloca la clausula DISTINCT?",
    options: [
      "Antes de FROM",
      "Justo despues de SELECT y antes de la lista de columnas",
      "Despues de WHERE",
      "Al final de la sentencia"
    ],
    correctAnswer: 1,
    explanation: "DISTINCT se escribe inmediatamente despues de la palabra SELECT: SELECT DISTINCT columnas FROM tabla."
  },
  {
    id: 216,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual de las siguientes describe correctamente la diferencia entre DML y DDL?",
    options: [
      "DML define la estructura de la BD; DDL manipula los datos dentro de las tablas.",
      "DML manipula los datos dentro de las tablas; DDL define la estructura de la BD.",
      "DML y DDL son lo mismo, solo cambia el nombre.",
      "DML solo aplica a SQL Server; DDL aplica a todos los RDBMS."
    ],
    correctAnswer: 1,
    explanation: "DML (Data Manipulation Language) manipula los datos: SELECT, INSERT, UPDATE, DELETE. DDL (Data Definition Language) define la estructura: CREATE, ALTER, DROP."
  },

  /* ── INSERT INTO ── */
  {
    id: 217,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es la sintaxis basica de la instruccion INSERT INTO?",
    options: [
      "INSERT nombre_tabla VALUES (valor1, valor2);",
      "INSERT INTO nombre_tabla (columna1, columna2) VALUES (valor1, valor2);",
      "INSERT INTO nombre_tabla SET columna1 = valor1;",
      "ADD INTO nombre_tabla (columna1) VALUES (valor1);"
    ],
    correctAnswer: 1,
    explanation: "La sintaxis correcta es: INSERT INTO nombre_tabla (lista_columnas) VALUES (lista_valores). La palabra clave INTO es obligatoria y la lista de columnas (Mapa de Campos) define el destino de cada valor."
  },
  {
    id: 218,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "En la anatomia de INSERT INTO, ¿como se llama la parte que indica la tabla donde se insertaran los datos?",
    options: [
      "Payload",
      "Mapa de Campos",
      "Destino (Target)",
      "Palabra Clave"
    ],
    correctAnswer: 2,
    explanation: "El Destino (Target) es el nombre de la tabla donde se insertaran los registros. El Mapa de Campos es la lista de columnas entre parentesis, y el Payload son los valores de VALUES."
  },
  {
    id: 219,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "En INSERT INTO, el orden de los valores en VALUES debe corresponder exactamente al orden de las columnas declaradas.",
    correctAnswer: true,
    explanation: "Correcto. La Regla de Correspondencia indica que el orden importa: el primer valor va a la primera columna, el segundo a la segunda, y asi sucesivamente."
  },
  {
    id: 220,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun la Regla de Correspondencia, ¿que tres aspectos deben coincidir entre las columnas y los valores en un INSERT INTO?",
    options: [
      "Nombre, indice y seccion",
      "Orden, tipo de dato y cantidad",
      "Longitud, formato y zona",
      "Tabla, columna y constraint"
    ],
    correctAnswer: 1,
    explanation: "La Regla de Correspondencia establece que el orden importa, el tipo de dato importa y la cantidad importa. Los valores deben corresponder en esos tres aspectos con las columnas declaradas."
  },
  {
    id: 221,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que error genera intentar insertar un valor de texto en una columna definida como numerica (INT)?",
    options: [
      "Error de constraint NOT NULL",
      "Error de conversion de tipos de datos",
      "Error de clave primaria duplicada",
      "Error de tabla no encontrada"
    ],
    correctAnswer: 1,
    explanation: "Insertar texto en una columna numerica genera un error de conversion. SQL Server no puede convertir automaticamente un texto como 'Juan' a un numero entero."
  },
  {
    id: 222,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cuales son las columnas de Auto-Gestion que NO se deben insertar manualmente?",
    options: [
      "Columnas de tipo CHAR y VARCHAR",
      "Columnas IDENTITY/Auto, Calculadas y Generadas",
      "Columnas de tipo DATE y DATETIME",
      "Columnas con constraint NOT NULL"
    ],
    correctAnswer: 1,
    explanation: "Las columnas de Auto-Gestion son: IDENTITY (valores secuenciales del sistema), Calculadas (resultado de una operacion) y Generadas (creadas por funciones del sistema). Deben omitirse en el INSERT."
  },
  {
    id: 223,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "Las columnas IDENTITY deben incluirse en la lista de columnas del INSERT INTO para que SQL Server genere el valor automatico.",
    correctAnswer: false,
    explanation: "Falso. Las columnas IDENTITY son gestionadas automaticamente por el motor. Si las incluyes en el INSERT causara un error (a menos que IDENTITY_INSERT este habilitado)."
  },
  {
    id: 224,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que significa que una columna sea NOT NULL al momento de hacer un INSERT?",
    options: [
      "Que la columna acepta cualquier valor incluyendo NULL.",
      "Que el dato es obligatorio y la BD rechazara la fila si falta.",
      "Que la columna tiene un valor predeterminado automatico.",
      "Que la columna es de tipo texto exclusivamente."
    ],
    correctAnswer: 1,
    explanation: "NOT NULL significa que el dato es obligatorio. Si intentas insertar una fila sin proporcionar ese valor (o enviando NULL), la base de datos rechazara la insercion."
  },
  {
    id: 225,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿De que forma puede representarse un campo NULL en una tabla de SQL Server?",
    options: [
      "Solo como la cadena vacia ''",
      "Solo como el numero 0",
      "Como NULL, '' (vacio) o 0 dependiendo del contexto",
      "Solo con la palabra clave EMPTY"
    ],
    correctAnswer: 2,
    explanation: "Un campo NULL representa un valor desconocido o inexistente. Puede manifestarse como NULL, como cadena vacia '' o como 0 segun el contexto y tipo de dato."
  },
  {
    id: 226,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "Una columna definida como NULL permite omitir el dato o dejar el espacio vacio al insertar un registro.",
    correctAnswer: true,
    explanation: "Correcto. NULL es opcional: se permite dejar el espacio vacio (valor desconocido o inexistente). A diferencia de NOT NULL que es obligatorio."
  },
  {
    id: 227,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Como se escribe correctamente un valor de texto en un INSERT INTO en SQL Server?",
    options: [
      "Entre comillas dobles: \"Juan\"",
      "Entre comillas simples: 'Juan'",
      "Sin comillas: Juan",
      "Entre corchetes: [Juan]"
    ],
    correctAnswer: 1,
    explanation: "En SQL Server los valores de tipo CHAR y VARCHAR siempre van entre comillas simples: 'texto'. Las comillas dobles se reservan para identificadores."
  },
  {
    id: 228,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es el formato correcto para insertar una fecha con el tipo DATE en SQL Server?",
    options: [
      "DD/MM/YYYY  ej: 01/03/2026",
      "YYYY-MM-DD  ej: 2026-03-01",
      "MM-DD-YYYY  ej: 03-01-2026",
      "DDMMYYYY  ej: 01032026"
    ],
    correctAnswer: 1,
    explanation: "El formato estandar para DATE en SQL Server es 'YYYY-MM-DD', por ejemplo '2026-03-01' o '2024-01-01'. Siempre entre comillas simples."
  },
  {
    id: 229,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "Los valores numericos (INT, DECIMAL) se insertan sin comillas, mientras que los textos y fechas se insertan entre comillas simples.",
    correctAnswer: true,
    explanation: "Correcto. Los numericos van sin comillas (13, 10.5), mientras que CHAR/VARCHAR y DATE/DATETIME van entre comillas simples ('Juan', '2026-03-01')."
  },
  {
    id: 230,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual es la ventaja de insertar multiples registros en un solo INSERT INTO con varios bloques VALUES?",
    options: [
      "Permite omitir la clausula INTO.",
      "Es mas eficiente que ejecutar un INSERT por cada fila.",
      "Permite insertar en varias tablas simultaneamente.",
      "Evita verificar las restricciones de la tabla."
    ],
    correctAnswer: 1,
    explanation: "Insertar multiples filas en un solo INSERT (batch) es mucho mas eficiente para cargas masivas que ejecutar un INSERT independiente por cada registro."
  },
  {
    id: 231,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En un INSERT de multiples registros, ¿como se separan los bloques de VALUES?",
    options: [
      "Con punto y coma (;) entre cada bloque",
      "Con la palabra clave AND",
      "Con coma (,) entre cada bloque de parentesis",
      "Con la palabra clave NEXT"
    ],
    correctAnswer: 2,
    explanation: "Los bloques de valores se separan por comas: INSERT INTO t (c1,c2) VALUES ('a',1), ('b',2), ('c',3);. Solo hay un punto y coma al final de toda la sentencia."
  },
  {
    id: 232,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que hace la variante INSERT INTO ... SELECT ... FROM?",
    options: [
      "Crea una nueva tabla copiando la estructura de otra.",
      "Inserta en una tabla destino los datos extraidos de otra tabla mediante consulta.",
      "Actualiza registros usando datos de otra tabla.",
      "Elimina registros duplicados entre dos tablas."
    ],
    correctAnswer: 1,
    explanation: "INSERT INTO tabla_destino (cols) SELECT cols FROM tabla_origen permite poblar una tabla usando datos extraidos de otra tabla mediante una consulta SELECT."
  },
  {
    id: 233,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "tf",
    prompt: "En INSERT INTO ... SELECT, el orden y los tipos de datos de las columnas consultadas deben coincidir con las columnas de destino.",
    correctAnswer: true,
    explanation: "Correcto. Las columnas consultadas en SELECT deben coincidir con las columnas a insertar en orden y tipo de dato. De lo contrario ocurrira un error de conversion o insercion incorrecta."
  },
  {
    id: 234,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que sucede si intentas insertar un registro con un ID que ya existe en una columna Primary Key?",
    options: [
      "SQL Server sobreescribe el registro existente.",
      "SQL Server inserta el registro con un ID diferente automaticamente.",
      "SQL Server lanza un error: Violation of PRIMARY KEY constraint.",
      "SQL Server ignora la insercion sin generar error."
    ],
    correctAnswer: 2,
    explanation: "La Primary Key no permite duplicados. SQL Server lanzara: 'Violation of PRIMARY KEY constraint. Cannot insert duplicate key in object.'"
  },
  {
    id: 235,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cuales son las tres caracteristicas de una Primary Key segun la presentacion?",
    options: [
      "Puede ser NULL, debe ser unica, puede repetirse.",
      "Identifica unicamente cada fila, no puede contener NULL, debe ser unica.",
      "Es obligatoria en toda tabla, puede tener duplicados, acepta NULL.",
      "Solo aplica a columnas numericas, no puede tener restricciones adicionales."
    ],
    correctAnswer: 1,
    explanation: "Una PK: (1) identifica de manera unica a cada fila, (2) no puede contener valores NULL, (3) debe ser unica (no se pueden repetir IDs)."
  },
  {
    id: 236,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que garantiza una Foreign Key (Clave Foranea) al insertar datos?",
    options: [
      "Que el valor insertado sea unico en toda la tabla.",
      "Que el registro de la tabla hija corresponda a un registro existente en la tabla padre.",
      "Que la columna no acepte valores NULL.",
      "Que los valores se generen automaticamente de forma secuencial."
    ],
    correctAnswer: 1,
    explanation: "La Foreign Key garantiza la integridad referencial: un registro en la tabla hija (ej: Productos) debe corresponder a un registro existente en la tabla padre (ej: Categorias)."
  },
  {
    id: 237,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "tf",
    prompt: "Puedes insertar un registro con una Foreign Key que apunte a un ID que NO existe en la tabla padre.",
    correctAnswer: false,
    explanation: "Falso. SQL Server bloqueara la insercion con: 'Violation of FOREIGN KEY constraint. The insert statement conflicted with the FOREIGN KEY constraint.' El padre debe existir primero."
  },
  {
    id: 238,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que error lanza SQL Server al intentar insertar un registro con una Foreign Key invalida (el padre no existe)?",
    options: [
      "Violation of PRIMARY KEY constraint.",
      "Cannot insert duplicate key in object.",
      "Violation of FOREIGN KEY constraint. The insert statement conflicted with the FOREIGN KEY constraint.",
      "Invalid column name."
    ],
    correctAnswer: 2,
    explanation: "SQL Server lanza 'Violation of FOREIGN KEY constraint' cuando el valor de la FK no corresponde a ningun registro existente en la tabla padre."
  },
  {
    id: 239,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "avanzado",
    type: "choice",
    prompt: "¿Que comando especial permite insertar manualmente un valor en una columna IDENTITY en SQL Server?",
    options: [
      "SET IDENTITY_OVERRIDE tabla ON;",
      "SET IDENTITY_INSERT tabla ON;",
      "ENABLE IDENTITY tabla;",
      "ALTER TABLE tabla DISABLE IDENTITY;"
    ],
    correctAnswer: 1,
    explanation: "SET IDENTITY_INSERT tabla ON; habilita la insercion manual en columnas IDENTITY. Solo debe usarse cuando estrictamente necesario, como en migraciones de datos."
  },
  {
    id: 240,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "avanzado",
    type: "tf",
    prompt: "Se recomienda usar SET IDENTITY_INSERT tabla ON de forma habitual para controlar manualmente todos los IDs.",
    correctAnswer: false,
    explanation: "Falso. Solo debe usarse cuando es estrictamente necesario (ej: migracion). Generalmente es mejor dejar que la base de datos gestione la numeracion automaticamente."
  },
  {
    id: 241,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Segun el Checklist de Buenas Practicas para INSERT, ¿que se debe hacer antes de insertar para evitar errores de orden?",
    options: [
      "Deshabilitar todos los constraints temporalmente.",
      "Verificar que el orden de los valores coincida con el orden de las columnas.",
      "Usar siempre SELECT * para verificar la tabla.",
      "Eliminar todos los registros previos con DELETE."
    ],
    correctAnswer: 1,
    explanation: "El primer punto del checklist es Verificar Columnas: el orden de valores debe coincidir con el orden de columnas declarado en el INSERT INTO."
  },
  {
    id: 242,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "En el Checklist de Buenas Practicas para INSERT, ¿cual es la regla para los tipos de dato?",
    options: [
      "Usar comillas dobles para todo tipo de dato.",
      "Comillas simples para texto y fechas; sin comillas para numeros.",
      "Siempre usar numeros enteros para evitar errores de conversion.",
      "Convertir todos los valores a texto antes de insertar."
    ],
    correctAnswer: 1,
    explanation: "La regla de Validar Tipos indica: comillas simples para texto/fechas ('Juan', '2026-03-01'); sin comillas para numeros (25, 10.5)."
  },
  {
    id: 243,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual es el formato correcto para insertar un valor decimal en SQL Server?",
    options: [
      "10,5 (con coma)",
      "10.5 (con punto)",
      "'10.5' (entre comillas simples)",
      "DEC(10,5)"
    ],
    correctAnswer: 1,
    explanation: "Los decimales en SQL Server usan punto como separador decimal: 10.5. No se usan comas (que en SQL separan columnas) ni comillas (que son para texto)."
  },
  {
    id: 244,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "intermedio",
    type: "tf",
    prompt: "Segun el Checklist de Buenas Practicas, se debe confirmar la existencia de los valores de las Claves Foraneas antes de insertar un registro.",
    correctAnswer: true,
    explanation: "Correcto. El punto 4 del checklist (Integridad) indica confirmar la existencia de Claves Foraneas antes de insertar. Si el padre no existe, el INSERT fallara con error de FK."
  },
  {
    id: 245,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Para que se utiliza la instruccion INSERT INTO en SQL Server?",
    options: [
      "Para modificar registros existentes en una tabla.",
      "Para eliminar una o mas filas de una tabla existente.",
      "Para agregar una o mas filas nuevas a una tabla existente.",
      "Para consultar registros dentro de una tabla."
    ],
    correctAnswer: 2,
    explanation: "INSERT INTO es el comando fundamental para agregar (poblar) una tabla con nuevos registros. Es la puerta de entrada de los datos al sistema."
  },
  {
    id: 246,
    section: "Teoria",
    topic: "Sentencias DML",
    difficulty: "basico",
    type: "tf",
    prompt: "La instruccion INSERT INTO solo puede agregar un registro a la vez.",
    correctAnswer: false,
    explanation: "Falso. INSERT INTO puede agregar una o mas filas nuevas en una sola instruccion. Se pueden insertar multiples registros usando varios bloques VALUES separados por comas."
  },

  /* ════════════════════════════════════════════════
     UNIONES Y SUBCONSULTAS
  ════════════════════════════════════════════════ */

  /* ── ¿Por qué separamos los datos? ── */
  {
    id: 247,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Por que se separan los datos en multiples tablas en bases de datos reales?",
    options: [
      "Para que las consultas sean mas lentas y seguras.",
      "Porque SQL Server no soporta tablas grandes.",
      "Para evitar redundancia y errores mediante la Normalizacion.",
      "Para facilitar la creacion de respaldos automaticos."
    ],
    correctAnswer: 2,
    explanation: "El concepto clave es la Normalizacion: separamos los datos en multiples tablas para evitar redundancia y errores. El reto es reconstruir la historia completa mediante el codigo usando JOINs y Subconsultas."
  },
  {
    id: 248,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "tf",
    prompt: "En bases de datos reales, toda la informacion reside en una sola tabla.",
    correctAnswer: false,
    explanation: "Falso. En bases de datos reales la informacion nunca reside en una sola tabla. Se separa en multiples tablas (Normalizacion) para evitar redundancia y errores, y se usa codigo para reconstruir la historia completa."
  },

  /* ── Pensar en Relaciones ── */
  {
    id: 249,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es el objetivo del concepto 'Pensar en Relaciones' al trabajar con bases de datos?",
    options: [
      "Crear diagramas visuales de las tablas sin escribir codigo.",
      "Pasar de visualizar tablas aisladas a visualizar un sistema de RELACIONES.",
      "Reducir el numero de tablas a una sola tabla maestra.",
      "Usar unicamente consultas simples sin JOIN."
    ],
    correctAnswer: 1,
    explanation: "El objetivo real es pasar de visualizar tablas aisladas a visualizar un sistema de RELACIONES (Modelo Mental Relacional), donde Tabla A, Tabla B y Tabla C se conectan entre si para representar la informacion completa."
  },

  /* ── JOINs: Comparativa ── */
  {
    id: 250,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual tipo de JOIN devuelve unicamente las filas que tienen coincidencia en AMBAS tablas?",
    options: [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL JOIN"
    ],
    correctAnswer: 2,
    explanation: "INNER JOIN devuelve solo las coincidencias: unicamente las filas donde existe un valor relacionado en ambas tablas. Es el JOIN mas restrictivo."
  },
  {
    id: 251,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual tipo de JOIN devuelve TODOS los registros de la tabla izquierda mas las coincidencias de la derecha?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN"
    ],
    correctAnswer: 1,
    explanation: "LEFT JOIN devuelve todo de la tabla izquierda + coincidencias de la derecha. Las filas de la izquierda que no tienen par en la derecha aparecen con NULL en las columnas de la tabla derecha."
  },
  {
    id: 252,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual tipo de JOIN devuelve TODOS los registros de ambas tablas, independientemente de si hay coincidencia o no?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN"
    ],
    correctAnswer: 3,
    explanation: "FULL JOIN (FULL OUTER JOIN) devuelve todo de ambos lados: el universo completo de registros de ambas tablas. Las filas sin par en la otra tabla aparecen con NULL en las columnas correspondientes."
  },
  {
    id: 253,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "tf",
    prompt: "RIGHT JOIN devuelve todos los registros de la tabla derecha mas las coincidencias de la tabla izquierda.",
    correctAnswer: true,
    explanation: "Correcto. RIGHT JOIN = todo derecha + coincidencias. Es el espejo de LEFT JOIN. Las filas de la tabla derecha que no tienen par en la izquierda aparecen con NULL en las columnas de la tabla izquierda."
  },

  /* ── Cambio de Paradigma: SubConsultas ── */
  {
    id: 254,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual es la diferencia central entre un JOIN y una Subconsulta?",
    options: [
      "JOIN filtra datos; la Subconsulta combina tablas.",
      "JOIN combina datasets; la Subconsulta pregunta algo antes de filtrar.",
      "JOIN solo funciona con dos tablas; la Subconsulta funciona con cualquier numero.",
      "No hay diferencia funcional entre JOIN y Subconsulta."
    ],
    correctAnswer: 1,
    explanation: "Diferencia Central: mientras el JOIN combina datos de multiples tablas, la Subconsulta pregunta algo (calcula un promedio o una lista) antes de ejecutar el filtro de la consulta principal."
  },
  {
    id: 255,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En una Subconsulta, ¿como se llama la parte interna que calcula el promedio o la lista?",
    options: [
      "Consulta Padre",
      "Consulta Maestra",
      "Consulta Hijo",
      "Consulta Externa"
    ],
    correctAnswer: 2,
    explanation: "La estructura de una Subconsulta tiene dos partes: la Consulta Interna (Hijo) que calcula el promedio o la lista, y la Consulta Externa (Padre) que usa ese resultado para filtrar los datos finales."
  },

  /* ── JOIN vs. Subconsulta ── */
  {
    id: 256,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Segun la comparativa JOIN vs Subconsulta, ¿cuando conviene usar JOIN?",
    options: [
      "Cuando solo necesito filtrar basandome en un calculo derivado.",
      "Cuando necesito mostrar columnas de ambas tablas.",
      "Cuando la logica secuencial es mas intuitiva.",
      "Cuando quiero verificar la existencia de un registro."
    ],
    correctAnswer: 1,
    explanation: "JOIN se usa cuando necesitas mostrar columnas de ambas tablas (combina datasets). Si solo necesitas filtrar, la Subconsulta es la herramienta correcta. Regla rapida: ¿Necesito columnas de la otra tabla? → JOIN."
  },
  {
    id: 257,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "tf",
    prompt: "En general, el JOIN tiene mejor rendimiento (performance) que la Subconsulta.",
    correctAnswer: true,
    explanation: "Correcto. Segun la comparativa, JOIN generalmente es mas rapido en cuanto a performance. Sin embargo, la Subconsulta puede ser mas clara para lógica secuencial cuando solo se necesita filtrar."
  },

  /* ── Tipos de SubConsultas ── */
  {
    id: 258,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que tipo de Subconsulta devuelve un unico valor y se usa con comparadores como > o =?",
    options: [
      "Subconsulta Lista",
      "Subconsulta EXISTS",
      "Subconsulta Escalar",
      "Subconsulta Correlacionada"
    ],
    correctAnswer: 2,
    explanation: "La Subconsulta Escalar devuelve un valor unico. Se usa con comparadores como WHERE salario > (SELECT AVG(salario) FROM Empleados). Ideal para comparar contra un calculo agregado."
  },
  {
    id: 259,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que tipo de Subconsulta realiza una verificacion Booleana (True/False) y se usa con WHERE EXISTS?",
    options: [
      "Escalar",
      "Lista",
      "EXISTS",
      "Correlacionada"
    ],
    correctAnswer: 2,
    explanation: "La Subconsulta EXISTS realiza una verificacion Booleana (True/False). Si la subconsulta devuelve al menos una fila, EXISTS es TRUE. Sintaxis: WHERE EXISTS (SELECT 1 FROM tabla WHERE condicion)."
  },
  {
    id: 260,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que tipo de Subconsulta se usa con el operador IN para comparar contra una columna de valores?",
    options: [
      "Subconsulta Escalar",
      "Subconsulta Lista",
      "Subconsulta EXISTS",
      "Subconsulta FULL"
    ],
    correctAnswer: 1,
    explanation: "La Subconsulta Lista devuelve una columna de valores y se usa con el operador IN. Ejemplo: WHERE id IN (SELECT IdCliente FROM Ventas WHERE Total > 1000). Filtra por pertenencia a una lista."
  },

  /* ── ¿JOIN o Subconsulta? ── */
  {
    id: 261,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Necesitas mostrar el nombre del cliente junto con el nombre del empleado que atendio su venta. ¿Que estrategia debes usar?",
    options: [
      "Subconsulta Escalar",
      "EXISTS",
      "JOIN",
      "LEFT JOIN + NULL"
    ],
    correctAnswer: 2,
    explanation: "Cuando necesitas traer columnas de otra tabla la solucion es JOIN. En este caso necesitas columnas de Clientes y de Empleados al mismo tiempo, por lo que JOIN es la herramienta correcta."
  },
  {
    id: 262,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que estrategia se recomienda para detectar registros faltantes (por ejemplo, clientes que nunca han comprado)?",
    options: [
      "INNER JOIN",
      "Subconsulta Escalar",
      "EXISTS",
      "LEFT JOIN + NULL"
    ],
    correctAnswer: 3,
    explanation: "Para detectar faltantes se usa LEFT JOIN + NULL. Al hacer LEFT JOIN entre Clientes y Ventas, los clientes sin ventas aparecen con NULL en las columnas de Ventas. Filtrando WHERE Ventas.IdVenta IS NULL se obtienen los que nunca compraron."
  },

  /* ── Método de los 5 Pasos ── */
  {
    id: 263,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun el Metodo de los 5 Pasos para construir un SELECT, ¿en que paso se define que relaciones (JOINs) se necesitan?",
    options: [
      "Paso 1: ¿Que quiero mostrar? (SELECT)",
      "Paso 2: ¿De que tabla nace? (FROM)",
      "Paso 3: ¿Que relaciones necesito? (JOINs)",
      "Paso 4: ¿Que filtros aplican? (WHERE)"
    ],
    correctAnswer: 2,
    explanation: "El Paso 3 del Metodo de los 5 Pasos es: ¿Que relaciones necesito? (JOINs). El orden correcto es: 1-SELECT, 2-FROM, 3-JOINs, 4-WHERE, 5-Estrategia (JOIN vs Subconsulta)."
  },
  {
    id: 264,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "tf",
    prompt: "En el Metodo de los 5 Pasos, el ultimo paso (Paso 5) consiste en decidir la estrategia: JOIN vs Subconsulta.",
    correctAnswer: true,
    explanation: "Correcto. El Paso 5 es: ¿Estrategia? (JOIN vs Subconsulta). Los cinco pasos son: 1-¿Que quiero mostrar? 2-¿De que tabla nace? 3-¿Que relaciones necesito? 4-¿Que filtros aplican? 5-¿Estrategia?"
  },

  /* ── Checklist Mental ── */
  {
    id: 265,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun el Checklist Mental, la pregunta '¿Que relacion estoy modelando?' se refiere a identificar el tipo de cardinalidad. ¿Cuales son los tipos que menciona?",
    options: [
      "1:1, 1:N, N:N",
      "INNER, LEFT, RIGHT, FULL",
      "Escalar, Lista, EXISTS",
      "SELECT, FROM, WHERE"
    ],
    correctAnswer: 0,
    explanation: "El Checklist Mental pide preguntarse: ¿Que relacion estoy modelando? con los tipos de cardinalidad 1:1 (uno a uno), 1:N (uno a muchos) y N:N (muchos a muchos), pues cada tipo de relacion influye en como se construye el JOIN."
  },
  {
    id: 266,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "tf",
    prompt: "Segun el Checklist Mental, la pregunta '¿Estoy pensando en filas o en conjuntos?' hace referencia a la diferencia entre una operacion individual y una operacion masiva.",
    correctAnswer: true,
    explanation: "Correcto. La tercera pregunta del Checklist Mental es: ¿Estoy pensando en filas o en conjuntos? (Operacion individual vs masiva). Razonar en conjuntos (conjuntos de filas) es la mentalidad correcta para escribir consultas SQL eficientes."
  },

  /* ── Errores Comunes ── */
  {
    id: 267,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que problema ocurre cuando se escribe un JOIN sin la condicion ON?",
    options: [
      "La consulta devuelve cero resultados.",
      "Se genera un error de sintaxis inmediato en SQL Server.",
      "Se produce un producto cartesiano accidental (todas las filas con todas).",
      "Solo se une la primera fila de cada tabla."
    ],
    correctAnswer: 2,
    explanation: "La falta de condicion ON provoca un producto cartesiano accidental: cada fila de la primera tabla se combina con TODAS las filas de la segunda tabla. Esto genera un resultado incorrecto y potencialmente enorme."
  },
  {
    id: 268,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En un JOIN, aparece el error 'Ambiguous column name'. ¿Cual es la solucion correcta?",
    options: [
      "Eliminar una de las dos tablas del JOIN.",
      "Usar alias para calificar la columna (por ejemplo, e.IdEmpleado).",
      "Cambiar el tipo de JOIN a INNER JOIN.",
      "Usar DISTINCT para eliminar duplicados."
    ],
    correctAnswer: 1,
    explanation: "El error 'Ambiguous column name' ocurre cuando dos tablas tienen una columna con el mismo nombre y SQL Server no sabe a cual te refieres. La solucion es usar alias de tabla para calificar la columna: tabla.columna o alias.columna (e.g., e.IdEmpleado)."
  },
  {
    id: 269,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "tf",
    prompt: "Agregar JOINs a tablas que no se usan ni en el SELECT ni en el WHERE es un error comun que afecta el rendimiento de la consulta.",
    correctAnswer: true,
    explanation: "Correcto. Los JOINs Innecesarios (unir tablas que no se utilizan en el SELECT ni en el filtro) tienen un costo de rendimiento: SQL Server debe procesar la union aunque el resultado no la necesite. Solo se deben incluir JOINs que aporten columnas o condiciones utiles."
  },

  /* ── El Ritual de Oro ── */
  {
    id: 270,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun el 'Ritual de Oro', ¿cual es el orden correcto de los pasos antes de escribir SQL?",
    options: [
      "1-Marcar PK/FK, 2-Dibujar flechas, 3-Dibujar tablas.",
      "1-Dibujar tablas, 2-Marcar PK y FK, 3-Dibujar flechas de relacion.",
      "1-Escribir el SELECT, 2-Dibujar tablas, 3-Marcar PK/FK.",
      "1-Dibujar flechas, 2-Escribir el JOIN, 3-Marcar PK/FK."
    ],
    correctAnswer: 1,
    explanation: "El Ritual de Oro dice: NUNCA escribir SQL sin antes dibujar. Los pasos son: 1-Dibujar las tablas involucradas, 2-Marcar PK (Primary Keys) y FK (Foreign Keys), 3-Dibujar las flechas de relacion."
  },
  {
    id: 271,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "tf",
    prompt: "Segun el Ritual de Oro, si no puedes dibujar el modelo de datos, tampoco puedes consultarlo correctamente.",
    correctAnswer: true,
    explanation: "Correcto. La maxima del Ritual de Oro es: 'Si no puedes dibujarlo, no puedes consultarlo.' Dibujar el modelo mental (tablas, PK, FK y flechas) es el paso previo obligatorio antes de escribir cualquier consulta SQL."
  },

  /* ── Modelo Visual Relacional ── */
  {
    id: 272,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "En el Modelo Visual Relacional del ejemplo, la columna id_carrera de la tabla ESTUDIANTES es una FK que apunta a la PK de ¿que tabla?",
    options: [
      "INSCRIPCIONES",
      "MATERIAS",
      "CARRERAS",
      "PROFESORES"
    ],
    correctAnswer: 2,
    explanation: "En el modelo ESTUDIANTES(id_estudiante PK, nombre, id_carrera FK) -> CARRERAS(id_carrera PK, nombre_carrera). La FK id_carrera en ESTUDIANTES apunta a la PK id_carrera de la tabla CARRERAS, estableciendo la relacion entre ambas tablas."
  },
  {
    id: 273,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "tf",
    prompt: "Al analizar un modelo visual relacional, las dos preguntas clave son: ¿Que tablas participan? y ¿Que claves las relacionan?",
    correctAnswer: true,
    explanation: "Correcto. El modelo visual relacional indica que hay que identificar: 1-¿Que tablas participan? y 2-¿Que claves las relacionan? Estas dos preguntas permiten construir correctamente la condicion ON del JOIN."
  },

  /* ── El Error Intencional: Producto Cartesiano ── */
  {
    id: 274,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que resultado produce la consulta 'SELECT * FROM estudiantes, carreras;' sin condicion de union?",
    options: [
      "Devuelve solo los estudiantes con carrera asignada.",
      "Genera un error de sintaxis en SQL Server.",
      "Produce un producto cartesiano: cada fila de estudiantes combinada con cada fila de carreras.",
      "Devuelve una tabla vacia."
    ],
    correctAnswer: 2,
    explanation: "Separar tablas con coma sin condicion ON genera un Producto Cartesiano (LOGICA INCORRECTA): cada fila de la Tabla A se combina con TODAS las filas de la Tabla B, resultando en una multiplicacion masiva de filas sin sentido. Un JOIN es un FILTRO de combinaciones validas, no solo una union."
  },
  {
    id: 275,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "tf",
    prompt: "Un JOIN es simplemente una union de tablas.",
    correctAnswer: false,
    explanation: "Falso. Un JOIN no es solo una union; es un FILTRO de combinaciones validas. Sin la condicion ON, SQL genera un producto cartesiano (multiplicacion masiva de filas sin sentido). La condicion ON es lo que transforma la union en un filtro logico correcto."
  },

  /* ── INNER JOIN — La Interseccion Logica ── */
  {
    id: 276,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "En la sintaxis de INNER JOIN, ¿que clausula define la Relacion Logica (la condicion de coincidencia entre las dos tablas)?",
    options: [
      "FROM",
      "WHERE",
      "HAVING",
      "ON"
    ],
    correctAnswer: 3,
    explanation: "La clausula ON define la Relacion Logica del JOIN. Ejemplo: ON e.id_carrera = c.id_carrera. Es la condicion que filtra las combinaciones validas entre ambas tablas. FROM define el Contexto Base e INNER JOIN define el Conector."
  },
  {
    id: 277,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "intermedio",
    type: "tf",
    prompt: "Un INNER JOIN une las tablas fisicamente en disco y modifica los datos almacenados.",
    correctAnswer: false,
    explanation: "Falso. JOIN no une tablas fisicamente; construye una vista temporal basada en un 'match'. Los datos en disco no se modifican. El resultado del JOIN es una estructura temporal en memoria que desaparece al terminar la consulta."
  },

  /* ── La Revelacion del JOIN ── */
  {
    id: 278,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "Cuando SQL Server ejecuta un JOIN, ¿donde se almacena la vista temporal resultante?",
    options: [
      "En una tabla nueva en el disco duro.",
      "En la memoria RAM (estructura volatil).",
      "En un archivo temporal en el sistema operativo.",
      "En la tabla de mayor tamaño de las dos."
    ],
    correctAnswer: 1,
    explanation: "Un JOIN crea una vista temporal en Memoria RAM (estructura volatil). Los datos fisicos en disco NO cambian. Esto explica la aparicion de duplicados en los resultados y por que los datos originales de las tablas permanecen intactos despues del JOIN."
  },
  {
    id: 279,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "tf",
    prompt: "Un JOIN fusiona fisicamente los archivos de las tablas en disco, por eso los datos originales pueden verse alterados.",
    correctAnswer: false,
    explanation: "Falso. Un JOIN NO fusiona archivos. Crea una vista temporal en Memoria RAM (estructura volatil). Los datos fisicos NO cambian. Esto explica por que los datos originales permanecen intactos y tambien por que pueden aparecer duplicados en los resultados de la consulta."
  },

  /* ── LEFT JOIN — Pensamiento Direccional ── */
  {
    id: 280,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun la regla del LEFT JOIN, si una fila de la tabla izquierda no tiene coincidencia en la tabla derecha, ¿con que rellena el sistema las columnas de la tabla derecha?",
    options: [
      "Con ceros (0).",
      "Con cadena vacia ('').",
      "Con NULL.",
      "Se omite esa fila del resultado."
    ],
    correctAnswer: 2,
    explanation: "La regla del LEFT JOIN: trae TODO lo de la izquierda, y solo lo que coincida de la derecha. Si no hay coincidencia, el sistema rellena con NULL las columnas de la tabla derecha. Esto permite detectar registros 'huerfanos' buscando filas donde esas columnas sean NULL."
  },
  {
    id: 281,
    section: "Teoria",
    topic: "Uniones y Subconsultas",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual de las siguientes describe correctamente el comportamiento del LEFT JOIN?",
    options: [
      "Devuelve solo las filas que tienen coincidencia exacta en ambas tablas.",
      "Devuelve todas las filas de la tabla derecha y solo las coincidencias de la izquierda.",
      "Devuelve todas las filas de la tabla izquierda y solo las coincidencias de la tabla derecha.",
      "Devuelve todas las filas de ambas tablas sin importar si hay coincidencia."
    ],
    correctAnswer: 2,
    explanation: "LEFT JOIN = Pensamiento Direccional. Trae TODO lo de la izquierda (tabla base, Datos Base) y solo lo que coincida de la derecha. La parte no coincidente de la derecha es 'ignorada' (aparece como NULL). Es el JOIN ideal para detectar registros sin relacion."
  },

  /* ════════════════════════════════════════════════
     FILTRACIONES Y AGRUPACIONES
  ════════════════════════════════════════════════ */

  /* ── Pensar SQL antes de escribir SQL ── */
  {
    id: 282,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun el modelo mental 'Pensar SQL antes de escribir SQL', ¿cual es el orden correcto de la transformacion de datos?",
    options: [
      "Filtrar → Datos → Agrupar → Calcular → Mostrar",
      "Datos → Filtrar → Agrupar → Calcular → Mostrar",
      "Datos → Calcular → Agrupar → Filtrar → Mostrar",
      "Agrupar → Filtrar → Datos → Calcular → Mostrar"
    ],
    correctAnswer: 1,
    explanation: "El modelo mental base es: Datos → Filtrar → Agrupar → Calcular → Mostrar. SQL se trata de transformar datos paso a paso. No se debe escribir codigo hasta visualizar la transformacion completa."
  },
  {
    id: 283,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "tf",
    prompt: "SQL se trata de memorizar comandos, no de transformar datos paso a paso.",
    correctAnswer: false,
    explanation: "Falso. SQL no se trata de memorizar comandos; se trata de transformar datos paso a paso. El Modelo Mental Base indica: no escribas codigo hasta que visualices la transformacion (Datos → Filtrar → Agrupar → Calcular → Mostrar)."
  },

  /* ── Analogia Universal: Las Tarjetas (Filas) ── */
  {
    id: 284,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "En la Analogia Universal, cada fila de la base de datos se representa como una ___.",
    options: [
      "Mesa",
      "Carpeta",
      "Tarjeta",
      "Grupo"
    ],
    correctAnswer: 2,
    explanation: "En la Analogia Universal: la base de datos es fisica y cada fila = una Tarjeta. El comando WHERE se usa para filtrar estas tarjetas individuales (Ej: solo tarjetas con monto > 60)."
  },
  {
    id: 285,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "tf",
    prompt: "El comando WHERE se usa para filtrar filas (tarjetas) individuales antes de agrupar.",
    correctAnswer: true,
    explanation: "Correcto. WHERE filtra las tarjetas individuales (filas) antes de cualquier agrupacion. Ejemplo: solo tarjetas con monto > 60. Es el primer nivel de filtrado en el pipeline de datos."
  },

  /* ── Analogia Universal: Las Mesas (Grupos) ── */
  {
    id: 286,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "En la Analogia Universal, el comando GROUP BY equivale a ___.",
    options: [
      "Filtrar tarjetas individuales.",
      "Crear mesas con etiquetas y mover las tarjetas a su mesa correspondiente.",
      "Calcular el total de todas las tarjetas.",
      "Mostrar el resultado final ordenado."
    ],
    correctAnswer: 1,
    explanation: "GROUP BY = Crear mesas con etiquetas. Si agrupamos por cliente, se crea una 'Mesa Ana' y una 'Mesa Luis'. Las tarjetas individuales (filas) se mueven de la pila general a su mesa correspondiente segun el valor del campo de agrupacion."
  },
  {
    id: 287,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "tf",
    prompt: "Al ejecutar GROUP BY cliente, todas las transacciones de Ana van a la misma mesa.",
    correctAnswer: true,
    explanation: "Correcto. GROUP BY crea una mesa (grupo) por cada valor unico de la columna indicada. Todas las filas (tarjetas) con el mismo cliente se agrupan en la misma mesa: todas las de Ana van a 'Mesa Ana', todas las de Luis a 'Mesa Luis'."
  },

  /* ── GROUP BY (sintaxis y proceso) ── */
  {
    id: 288,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es el proceso correcto que ejecuta GROUP BY en la consulta SELECT cliente, SUM(monto) FROM ventas GROUP BY cliente?",
    options: [
      "1-Aplicar calculo, 2-Crear mesa, 3-Colocar tarjetas.",
      "1-Colocar tarjetas, 2-Crear mesa, 3-Aplicar calculo.",
      "1-Crear mesa (etiqueta por cliente), 2-Colocar tarjetas, 3-Aplicar calculo SUM(monto).",
      "1-Filtrar tarjetas, 2-Mostrar resultado, 3-Crear mesa."
    ],
    correctAnswer: 2,
    explanation: "El proceso de GROUP BY es: 1-Crear mesa (se genera una etiqueta por cada cliente unico), 2-Colocar tarjetas (todas las transacciones de ese cliente van a su mesa), 3-Aplicar calculo (SUM(monto) suma los valores dentro de esa mesa)."
  },

  /* ── Agrupacion Multiple ── */
  {
    id: 289,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Que resultado produce GROUP BY cliente, producto?",
    options: [
      "Una mesa por cada cliente unicamente.",
      "Una mesa por cada producto unicamente.",
      "Una mesa por cada combinacion unica de cliente y producto.",
      "Una sola mesa con todos los datos combinados."
    ],
    correctAnswer: 2,
    explanation: "La Agrupacion Multiple crea mesas por combinacion unica. GROUP BY cliente, producto genera una mesa distinta para cada par cliente-producto unico (ej: ANA-LAPTOP, ANA-MOUSE, LUIS-LAPTOP, etc.). La especificidad aumenta con cada columna adicional."
  },
  {
    id: 290,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "tf",
    prompt: "GROUP BY cliente, producto genera la misma cantidad de grupos que GROUP BY cliente solo.",
    correctAnswer: false,
    explanation: "Falso. Agregar mas columnas al GROUP BY aumenta la especificidad y crea mas grupos (mesas). GROUP BY cliente, producto crea una mesa por cada combinacion unica de cliente+producto, lo cual genera potencialmente mas grupos que agrupar solo por cliente."
  },

  /* ── Funciones Agregadas ── */
  {
    id: 291,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Que hace una funcion agregada como SUM() dentro de un GROUP BY?",
    options: [
      "Filtra las filas antes de agrupar.",
      "Reduce multiples filas (tarjetas) a un solo valor por grupo (mesa).",
      "Crea una nueva tabla con los resultados.",
      "Ordena las filas dentro de cada grupo."
    ],
    correctAnswer: 1,
    explanation: "Las funciones agregadas reducen multiples filas (muchas tarjetas) a un solo valor por grupo (mesa). Regla clave: las funciones agregadas trabajan DENTRO de cada mesa/grupo. Funciones disponibles: SUM(), COUNT(), AVG(), MAX(), MIN()."
  },
  {
    id: 292,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cuales son las funciones agregadas basicas en SQL Server?",
    options: [
      "SELECT, FROM, WHERE, GROUP BY",
      "SUM(), COUNT(), AVG(), MAX(), MIN()",
      "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN",
      "INSERT, UPDATE, DELETE, SELECT"
    ],
    correctAnswer: 1,
    explanation: "Las funciones agregadas basicas son: SUM() (suma), COUNT() (cuenta), AVG() (promedio), MAX() (maximo) y MIN() (minimo). Todas trabajan dentro de cada grupo generado por GROUP BY, redudiendo multiples filas a un unico valor."
  },

  /* ── La Realidad: El Orden de Ejecucion ── */
  {
    id: 293,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual es el orden real de ejecucion de SQL Server al procesar una consulta?",
    options: [
      "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
      "FROM → GROUP BY → WHERE → HAVING → SELECT → ORDER BY",
      "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
      "WHERE → FROM → GROUP BY → SELECT → HAVING → ORDER BY"
    ],
    correctAnswer: 2,
    explanation: "SQL NO se ejecuta en el orden en que se escribe. El orden real es: 1-FROM (trae datos/tarjetas), 2-WHERE (filtra tarjetas), 3-GROUP BY (arma las mesas), 4-HAVING (filtra las mesas), 5-SELECT (muestra el resultado final), 6-ORDER BY (ordena la presentacion)."
  },
  {
    id: 294,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "tf",
    prompt: "SQL Server ejecuta las clausulas en el mismo orden en que el programador las escribe.",
    correctAnswer: false,
    explanation: "Falso. SQL NO se ejecuta en el orden en que se escribe. Aunque se escribe SELECT...FROM...WHERE, el orden real de ejecucion es: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. Entender este orden es clave para escribir consultas correctas."
  },

  /* ── El Pipeline de Datos (El Embudo) ── */
  {
    id: 295,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Segun el Pipeline de Datos (El Embudo), ¿en que dos momentos distintos ocurre el filtrado?",
    options: [
      "Antes de SELECT y despues de ORDER BY.",
      "Antes de agrupar (WHERE) y despues de agrupar (HAVING).",
      "Antes de FROM y despues de GROUP BY.",
      "Una sola vez, antes de GROUP BY."
    ],
    correctAnswer: 1,
    explanation: "El filtrado ocurre en dos momentos diferentes: WHERE (elimina tarjetas/filas antes de agrupar) y HAVING (elimina mesas/grupos completos despues de agrupar). Esta es la diferencia fundamental entre ambas clausulas en el pipeline: Dataset → WHERE → GROUP BY → HAVING → SELECT."
  },

  /* ── WHERE vs. HAVING ── */
  {
    id: 296,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Cual es la diferencia fundamental entre WHERE y HAVING?",
    options: [
      "WHERE filtra grupos; HAVING filtra filas individuales.",
      "WHERE filtra tarjetas (filas individuales antes de agrupar); HAVING filtra mesas (grupos completos despues de agrupar).",
      "WHERE y HAVING hacen lo mismo, solo cambia la sintaxis.",
      "WHERE se usa con funciones agregadas; HAVING no."
    ],
    correctAnswer: 1,
    explanation: "WHERE filtra TARJETAS (filas individuales, antes de agrupar). HAVING filtra MESAS (grupos completos, despues de agrupar). Ejemplo: WHERE quita ventas menores a $50 (tarjetas); HAVING quita clientes cuyo total no supera $150 (mesas). Si recuerdas esto, ya entendiste SQL."
  },
  {
    id: 297,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "tf",
    prompt: "HAVING se aplica despues de que GROUP BY ha creado los grupos, mientras que WHERE se aplica antes de agrupar.",
    correctAnswer: true,
    explanation: "Correcto. WHERE actua sobre filas individuales (tarjetas) ANTES de agrupar; HAVING actua sobre los grupos completos (mesas) DESPUES de agrupar. Por eso HAVING puede usar funciones agregadas como HAVING COUNT(*) >= 2, mientras WHERE no puede."
  },

  /* ── Plantilla Universal de consulta ── */
  {
    id: 298,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "En la Plantilla Universal de consulta, ¿cual clausula actua como 'Filtro de Grupos / Mesas'?",
    options: [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "HAVING"
    ],
    correctAnswer: 3,
    explanation: "Segun la Plantilla Universal: SELECT [Columnas/Calculos], FROM [Tabla], WHERE [Filtro de Filas/Tarjetas], GROUP BY [Columna de Agrupacion], HAVING [Filtro de Grupos/Mesas], ORDER BY [Criterio de Ordenamiento]. Esta estructura es rigida; el motor de base de datos requiere este orden exacto."
  },
  {
    id: 299,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "tf",
    prompt: "El orden de las clausulas en la Plantilla Universal (SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY) es flexible y puede cambiarse segun preferencia.",
    correctAnswer: false,
    explanation: "Falso. Esta estructura es rigida. El motor de base de datos requiere este orden exacto: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY. Alterar el orden produce errores de sintaxis."
  },

  /* ── El Algoritmo Mental (5 preguntas) ── */
  {
    id: 300,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Segun el Algoritmo Mental, la pregunta '¿Como agrupo las tarjetas?' define __.",
    options: [
      "Tu WHERE",
      "Tu GROUP BY",
      "Tu SUM/COUNT/AVG",
      "Tu HAVING"
    ],
    correctAnswer: 1,
    explanation: "Las 5 preguntas del Algoritmo Mental son: 1-¿Que tarjetas necesito? → WHERE, 2-¿Como agrupo las tarjetas? → GROUP BY, 3-¿Que calculo hago por mesa? → SUM/COUNT/AVG, 4-¿Elimino alguna mesa? → HAVING, 5-¿Que muestro y ordeno? → SELECT/ORDER BY."
  },
  {
    id: 301,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Segun el Algoritmo Mental, la pregunta '¿Elimino alguna mesa?' define cual clausula SQL?",
    options: [
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "HAVING"
    ],
    correctAnswer: 3,
    explanation: "El Paso 4 del Algoritmo Mental es: ¿Elimino alguna mesa? → Define tu HAVING. Esta pregunta lleva a escribir la condicion HAVING que filtra los grupos (mesas) completos despues de la agrupacion, como HAVING COUNT(*) >= 2 o HAVING SUM(monto) > 500."
  },

  /* ── Ejercicio de Consolidacion ── */
  {
    id: 302,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En la consulta: SELECT cliente, COUNT(*) FROM ventas WHERE monto > 100 GROUP BY cliente HAVING COUNT(*) >= 2; ¿que hace la clausula WHERE monto > 100?",
    options: [
      "Filtra los grupos que tengan total mayor a 100.",
      "Filtra las filas individuales (tarjetas) con monto mayor a 100 antes de agrupar.",
      "Ordena los resultados por monto de forma descendente.",
      "Elimina los clientes que tengan menos de 100 transacciones."
    ],
    correctAnswer: 1,
    explanation: "WHERE monto > 100 filtra las tarjetas pequenas (quita ruido): elimina las filas individuales cuyo monto no supera 100 ANTES de crear los grupos. Despues, GROUP BY cliente crea las mesas, y HAVING COUNT(*) >= 2 filtra las mesas con pocas tarjetas (menos de 2 transacciones)."
  },
  {
    id: 303,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "En la consulta del Ejercicio de Consolidacion, ¿que funcion cuenta cuantas transacciones tiene cada cliente?",
    options: [
      "SUM(*)",
      "AVG(*)",
      "COUNT(*)",
      "MAX(*)"
    ],
    correctAnswer: 2,
    explanation: "COUNT(*) cuenta el numero de filas (transacciones) dentro de cada grupo (mesa de cliente). En el ejercicio: HAVING COUNT(*) >= 2 filtra los clientes que tienen al menos 2 transacciones con monto mayor a 100, cumpliendo el objetivo: clientes con compras mayores a 100 y al menos 2 transacciones."
  },

  /* ── Resumen ── */
  {
    id: 304,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "Segun el Resumen del tema, ¿cual es el orden logico de ejecucion que se debe respetar?",
    options: [
      "SELECT → FROM → WHERE → GROUP BY → HAVING",
      "WHERE → GROUP BY → HAVING → FROM → SELECT",
      "FROM → WHERE → GROUP BY → HAVING → SELECT",
      "GROUP BY → WHERE → HAVING → SELECT → FROM"
    ],
    correctAnswer: 2,
    explanation: "El Resumen indica que la Ejecucion respeta el orden logico: FROM → WHERE → GROUP BY → HAVING → SELECT. La Filosofia es que SQL es transformacion logica, no solo sintaxis; y la Analogia distingue siempre entre Tarjetas (Rows) y Mesas (Groups)."
  },
  {
    id: 305,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "tf",
    prompt: "La analogia de Tarjetas y Mesas ayuda a distinguir cuando usar WHERE (tarjetas) y cuando usar HAVING (mesas).",
    correctAnswer: true,
    explanation: "Correcto. La Analogia Universal distingue siempre entre Tarjetas (Rows/filas individuales) y Mesas (Groups/grupos). Esta distincion es la clave para saber cuando usar WHERE (filtrar tarjetas antes de agrupar) y cuando usar HAVING (filtrar mesas despues de agrupar)."
  },

  /* ── La Regla Critica del SELECT ── */
  {
    id: 306,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "Cuando usas GROUP BY, ¿que dos tipos de elementos puedes poner en el SELECT?",
    options: [
      "Cualquier columna de la tabla y funciones de texto.",
      "La etiqueta del grupo (columna del GROUP BY) y el resultado agregado (SUM, COUNT, etc.).",
      "Solo funciones agregadas, nunca columnas directas.",
      "Todas las columnas de la tabla y cualquier funcion agregada."
    ],
    correctAnswer: 1,
    explanation: "La Regla Critica del SELECT con GROUP BY: solo puedes poner 1) La Etiqueta del Grupo (la columna que usaste en GROUP BY) y 2) El Resultado Agregado (SUM, COUNT, AVG, etc.). No puedes mostrar detalles individuales de una tarjeta si ya colapsaste la mesa en un resumen."
  },
  {
    id: 307,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "tf",
    prompt: "En una consulta con GROUP BY cliente, es valido incluir Fecha_Transaccion directamente en el SELECT sin agregarla al GROUP BY.",
    correctAnswer: false,
    explanation: "Falso. Fecha_Transaccion seria una 'Columna Huerfana': no esta en el GROUP BY ni es una agregacion. La razon: solo existe una etiqueta por mesa. No puedes mostrar detalles individuales de una tarjeta si ya colapsaste la mesa en un resumen. Solo se permiten la etiqueta del grupo y resultados agregados."
  },
  {
    id: 308,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "choice",
    prompt: "¿Por que no se puede incluir una columna de detalle (como Fecha_Transaccion) en el SELECT cuando ya se aplico GROUP BY cliente?",
    options: [
      "Porque SQL Server no soporta mas de dos columnas en el SELECT.",
      "Porque la fecha ocupa demasiada memoria.",
      "Porque solo existe una etiqueta por mesa; no puedes mostrar detalles individuales si ya colapsaste la mesa en un resumen.",
      "Porque GROUP BY automaticamente elimina las columnas de fecha."
    ],
    correctAnswer: 2,
    explanation: "La razon logica es: solo existe una etiqueta por mesa (grupo). Al colapsar multiples tarjetas en una mesa con GROUP BY, se pierde el detalle individual. No tiene sentido mostrar 'la fecha' de un grupo que contiene 10 transacciones con fechas distintas."
  },

  /* ── Errores Comunes ── */
  {
    id: 309,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Por que es imposible usar una funcion agregada como SUM() directamente dentro de una clausula WHERE?",
    options: [
      "Porque SUM() solo funciona con numeros enteros.",
      "Porque WHERE filtra tarjetas individuales, no resultados calculados.",
      "Porque SQL Server no reconoce SUM() como funcion valida.",
      "Porque SUM() solo puede usarse en el ORDER BY."
    ],
    correctAnswer: 1,
    explanation: "Error 1 - SUM dentro de WHERE: es imposible porque WHERE filtra tarjetas (filas individuales) y en ese momento aun no se han calculado los agregados. Los calculos de SUM, COUNT, AVG ocurren en el paso GROUP BY, que viene despues del WHERE en el orden de ejecucion."
  },
  {
    id: 310,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Como se llama el error de incluir en el SELECT columnas que no estan en el GROUP BY ni son funciones agregadas?",
    options: [
      "Mito del Orden",
      "Confusion de Conteo",
      "Columnas Huerfanas",
      "SUM dentro de WHERE"
    ],
    correctAnswer: 2,
    explanation: "Error 2 - Columnas Huerfanas: incluir columnas en SELECT que no estan en GROUP BY ni son agregaciones. SQL Server generara un error porque no sabe que valor mostrar para esa columna dentro de un grupo que colapsó multiples filas."
  },
  {
    id: 311,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "basico",
    type: "tf",
    prompt: "GROUP BY ordena automaticamente los resultados de la consulta.",
    correctAnswer: false,
    explanation: "Falso. Este es el Error 3: el Mito del Orden. GROUP BY NO ordena los resultados; su unica funcion es agrupar las filas en grupos (mesas). Para ordenar el resultado se debe usar ORDER BY explicitamente."
  },
  {
    id: 312,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "choice",
    prompt: "¿Cual es la diferencia entre COUNT(*) y COUNT(columna)?",
    options: [
      "COUNT(*) solo cuenta filas con valores distintos; COUNT(columna) cuenta todas las filas.",
      "No hay diferencia; ambas cuentan exactamente lo mismo.",
      "COUNT(*) cuenta todas las filas del grupo; COUNT(columna) cuenta solo los valores no nulos de esa columna.",
      "COUNT(*) es mas lento; COUNT(columna) es la forma optimizada."
    ],
    correctAnswer: 2,
    explanation: "Error 4 - Confusion de Conteo: COUNT(*) cuenta TODAS las filas del grupo (incluyendo NULLs). COUNT(columna) cuenta solo los valores NO NULOS de esa columna especifica. Si la columna tiene NULLs, COUNT(columna) devolvera un numero menor que COUNT(*)."
  },
  {
    id: 313,
    section: "Teoria",
    topic: "Filtraciones y Agrupaciones",
    difficulty: "intermedio",
    type: "tf",
    prompt: "COUNT(*) y COUNT(columna) siempre devuelven el mismo resultado.",
    correctAnswer: false,
    explanation: "Falso. COUNT(*) cuenta todas las filas del grupo sin importar NULLs. COUNT(columna) cuenta solo los valores no nulos de esa columna. Si la columna contiene valores NULL, COUNT(columna) devolvera un numero MENOR que COUNT(*). Esta es la Confusion de Conteo, uno de los errores comunes en SQL."
  }
];
