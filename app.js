const questionCard = document.getElementById("questionCard");
const feedback = document.getElementById("feedback");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const answerBtn = document.getElementById("answerBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const sectionSelect = document.getElementById("sectionSelect");
const topicSelect = document.getElementById("topicSelect");
const countSelect = document.getElementById("countSelect");
const difficultySelect = document.getElementById("difficultySelect");
const summary = document.getElementById("summary");
const scoreText = document.getElementById("scoreText");
const weakTopics = document.getElementById("weakTopics");
const restartBtn = document.getElementById("restartBtn");
const studyGuide = document.getElementById("study-guide");

const QUESTION_BANK = window.QUESTION_BANK || [];
const DEFAULT_SCHEMA_NOTE =
  "Esquema base: Clientes(IdCliente, Nombres, Apellidos, DUI, Email, FechaRegistro, Telefono, Activo), " +
  "Empleados(IdEmpleado, Nombres, Apellidos, Cargo, Salario, FechaContratacion, Sucursal), " +
  "Productos(IdProducto, Nombre, Categoria, Proveedor, Precio, Stock), " +
  "Ventas(IdVenta, IdCliente, IdEmpleado, Fecha, Total), " +
  "DetalleVenta(IdVenta, IdProducto, Cantidad, PrecioUnitario).";
let pool = [...QUESTION_BANK];
let activeQuestions = [];
let currentIndex = 0;
let answeredMap = {};
let completedCount = 0;
let completedByTopic = {};

const normalize = (value) => value.toString().trim().toLowerCase();

if (!QUESTION_BANK.length) {
  feedback.className = "feedback error";
  feedback.textContent = "No se cargaron preguntas. Verifica questions.js.";
  feedback.style.display = "block";
}

const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const buildActiveQuestions = () => {
  const section = sectionSelect.value;
  const topic = topicSelect.value;
  const difficulty = difficultySelect.value;
  const countValue = countSelect.value;

  let filtered = [...pool];
  if (section !== "all") {
    if (section === "Practica") {
      filtered = filtered.filter((q) => q.section === "Practica" || q.section === "Practica Consultas");
    } else {
      filtered = filtered.filter((q) => q.section === section);
    }
  }
  if (topic !== "all") {
    filtered = filtered.filter((q) => q.topic === topic);
  }
  if (difficulty !== "all") {
    filtered = filtered.filter((q) => q.difficulty === difficulty);
  }

  if (countValue !== "all") {
    const count = Number(countValue);
    filtered = filtered.slice(0, count);
  }

  activeQuestions = filtered.length ? filtered : [...pool];
  currentIndex = 0;
  answeredMap = {};
  completedCount = 0;
  completedByTopic = {};
  summary.hidden = true;
  if (studyGuide) {
    studyGuide.hidden = section !== "Guia";
  }
  if (section === "Guia") {
    questionCard.innerHTML = "";
    feedback.className = "feedback";
    feedback.textContent = "";
    feedback.style.display = "none";
    progressText.textContent = "";
    progressFill.style.width = "0%";
    nextBtn.disabled = true;
    return;
  }
  renderQuestion();
};

const renderQuestion = () => {
  const total = activeQuestions.length;
  if (!total) return;

  const question = activeQuestions[currentIndex];
  nextBtn.disabled = true;
  feedback.className = "feedback";
  feedback.textContent = "";
  feedback.style.display = "none";

  progressText.textContent = `Pregunta ${currentIndex + 1} de ${total}`;
  progressFill.style.width = `${((currentIndex + 1) / total) * 100}%`;

  const meta = `
    <div class="meta">
      <span>${question.section}</span>
      <span>·</span>
      <span>${question.topic}</span>
      <span>·</span>
      <span>${question.difficulty}</span>
    </div>`;

  const schemaNote = question.section.startsWith("Practica")
    ? `<div class="schema-note">${DEFAULT_SCHEMA_NOTE}</div>`
    : "";

  const codeBlock = question.code ? `<pre class="code-block">${question.code}</pre>` : "";
  const taskList = question.tasks
    ? `<ul class="task-list">${question.tasks.map((task) => `<li>${task}</li>`).join("")}</ul>`
    : "";

  let inputBlock = "";
  if (question.type === "input") {
    inputBlock = `<input class="input-answer" type="text" id="textAnswer" placeholder="Escribe tu respuesta" autocomplete="off" />`;
  } else if (question.type === "task") {
    inputBlock = `<textarea class="input-answer" id="textAnswer" rows="6" placeholder="Escribe tu solucion o notas (SQL, pasos, etc.)"></textarea>`;
  }

  questionCard.innerHTML = `
    ${meta}
    ${schemaNote}
    <h3>${question.prompt}</h3>
    ${taskList}
    ${codeBlock}
    ${inputBlock}
  `;
};

const getUserAnswer = () => {
  const input = document.getElementById("textAnswer");
  return input ? input.value : "";
};

const registerAnswer = () => {
  const question = activeQuestions[currentIndex];
  const userAnswer = getUserAnswer();

  if (!userAnswer.trim()) {
    feedback.className = "feedback error";
    feedback.textContent = "Escribe algo antes de revisar.";
    feedback.style.display = "block";
    return;
  }

  if (!answeredMap[question.id]) {
    answeredMap[question.id] = true;
    completedCount += 1;
    completedByTopic[question.topic] = (completedByTopic[question.topic] || 0) + 1;
  }

  const answerPool = Array.isArray(question.answer)
    ? question.answer
    : question.answerText
      ? [question.answerText]
      : [];

  const hasAutoCheck = answerPool.length > 0;
  let isCorrect = false;

  if (hasAutoCheck) {
    isCorrect = answerPool.map(normalize).includes(normalize(userAnswer));
  }

  feedback.className = `feedback ${isCorrect ? "success" : "error"}`;
  feedback.innerHTML = `
    <strong>${isCorrect ? "Correcta" : "Incorrecta"}</strong><br />
    <span>Respuesta correcta: ${question.answerText || answerPool[0] || "No hay respuesta registrada."}</span>
  `;

  feedback.style.display = "block";
  nextBtn.disabled = false;
};

const showAnswer = () => {
  const question = activeQuestions[currentIndex];
  const answer = question.answerText || question.answer || "Sin respuesta registrada.";
  const explanation = question.explanation ? `<br /><small>${question.explanation}</small>` : "";
  feedback.className = "feedback answer";
  feedback.innerHTML = `<strong>Respuesta correcta</strong><br /><span>${answer}</span>${explanation}`;
  feedback.style.display = "block";
};

const goNext = () => {
  if (currentIndex < activeQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showSummary();
  }
};

const showSummary = () => {
  summary.hidden = false;
  scoreText.textContent = `${completedCount}/${activeQuestions.length}`;
  weakTopics.innerHTML = "";

  const totalsByTopic = activeQuestions.reduce((acc, question) => {
    acc[question.topic] = (acc[question.topic] || 0) + 1;
    return acc;
  }, {});

  const pending = Object.keys(totalsByTopic)
    .map((topic) => ({
      topic,
      remaining: totalsByTopic[topic] - (completedByTopic[topic] || 0)
    }))
    .filter((entry) => entry.remaining > 0)
    .sort((a, b) => b.remaining - a.remaining);

  if (!pending.length) {
    weakTopics.innerHTML = "<li>Sin temas pendientes. Buen trabajo.</li>";
  } else {
    pending.forEach((entry) => {
      const item = document.createElement("li");
      item.textContent = `${entry.topic} (pendientes: ${entry.remaining})`;
      weakTopics.appendChild(item);
    });
  }

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

checkBtn.addEventListener("click", registerAnswer);
answerBtn.addEventListener("click", showAnswer);
nextBtn.addEventListener("click", goNext);
shuffleBtn.addEventListener("click", () => {
  pool = shuffle(pool);
  buildActiveQuestions();
});

sectionSelect.addEventListener("change", buildActiveQuestions);
topicSelect.addEventListener("change", buildActiveQuestions);
difficultySelect.addEventListener("change", buildActiveQuestions);
countSelect.addEventListener("change", buildActiveQuestions);
restartBtn.addEventListener("click", buildActiveQuestions);

const topics = Array.from(new Set(QUESTION_BANK.map((q) => q.topic)));
topics.forEach((topic) => {
  const opt = document.createElement("option");
  opt.value = topic;
  opt.textContent = topic;
  topicSelect.appendChild(opt);
});

buildActiveQuestions();
