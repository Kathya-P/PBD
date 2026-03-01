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
let correctCount = 0;
let incorrectCount = 0;
let completedByTopic = {};
let correctByTopic = {};
let incorrectByTopic = {};

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
  correctCount = 0;
  incorrectCount = 0;
  completedByTopic = {};
  correctByTopic = {};
  incorrectByTopic = {};
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
  if (question.type === "choice") {
    inputBlock = `<div class="options-list">${question.options.map((opt, i) => `
      <label class="option-label">
        <input type="radio" name="answer" value="${i}" />
        <span>${opt}</span>
      </label>`).join("")}
    </div>`;
  } else if (question.type === "tf") {
    inputBlock = `<div class="options-list">
      <label class="option-label">
        <input type="radio" name="answer" value="true" />
        <span>Verdadero</span>
      </label>
      <label class="option-label">
        <input type="radio" name="answer" value="false" />
        <span>Falso</span>
      </label>
    </div>`;
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
  const selected = document.querySelector('input[name="answer"]:checked');
  return selected ? selected.value : "";
};

const registerAnswer = () => {
  const question = activeQuestions[currentIndex];
  const userAnswer = getUserAnswer();

  if (!userAnswer) {
    feedback.className = "feedback error";
    feedback.textContent = "Selecciona una opcion antes de revisar.";
    feedback.style.display = "block";
    return;
  }

  const isFirstAnswer = !answeredMap[question.id];
  if (isFirstAnswer) {
    answeredMap[question.id] = true;
    completedCount += 1;
    completedByTopic[question.topic] = (completedByTopic[question.topic] || 0) + 1;
  }

  let isCorrect = false;
  let correctText = "";

  if (question.type === "choice") {
    isCorrect = parseInt(userAnswer) === question.correctAnswer;
    correctText = question.options[question.correctAnswer];
  } else if (question.type === "tf") {
    isCorrect = (userAnswer === "true") === question.correctAnswer;
    correctText = question.correctAnswer ? "Verdadero" : "Falso";
  }

  if (isFirstAnswer) {
    if (isCorrect) {
      correctCount += 1;
      correctByTopic[question.topic] = (correctByTopic[question.topic] || 0) + 1;
    } else {
      incorrectCount += 1;
      incorrectByTopic[question.topic] = (incorrectByTopic[question.topic] || 0) + 1;
    }
  }

  // Highlight correct/incorrect options
  document.querySelectorAll('.option-label').forEach((label, i) => {
    const radio = label.querySelector('input[type="radio"]');
    if (question.type === "choice") {
      if (i === question.correctAnswer) label.classList.add('correct');
      else if (radio.checked && !isCorrect) label.classList.add('incorrect');
    } else {
      const val = radio.value === "true";
      if (val === question.correctAnswer) label.classList.add('correct');
      else if (radio.checked && !isCorrect) label.classList.add('incorrect');
    }
    radio.disabled = true;
  });

  const explanationText = question.explanation ? `<br /><small>${question.explanation}</small>` : "";

  feedback.className = `feedback ${isCorrect ? "success" : "error"}`;
  feedback.innerHTML = `
    <strong>${isCorrect ? "Correcta!" : "Incorrecta"}</strong><br />
    <span>Respuesta: ${correctText}</span>${explanationText}
  `;

  feedback.style.display = "block";
  nextBtn.disabled = false;
  updateStatsPBD();
};

const showAnswer = () => {
  const question = activeQuestions[currentIndex];
  let answer = "";
  if (question.type === "choice") {
    answer = question.options[question.correctAnswer];
  } else if (question.type === "tf") {
    answer = question.correctAnswer ? "Verdadero" : "Falso";
  }
  const explanation = question.explanation ? `<br /><small>${question.explanation}</small>` : "";

  // Highlight correct option
  document.querySelectorAll('.option-label').forEach((label, i) => {
    const radio = label.querySelector('input[type="radio"]');
    if (question.type === "choice") {
      if (i === question.correctAnswer) label.classList.add('correct');
    } else {
      if ((radio.value === "true") === question.correctAnswer) label.classList.add('correct');
    }
    radio.disabled = true;
  });

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
  const total = activeQuestions.length;
  const pctCorrect = total ? Math.round((correctCount / total) * 100) : 0;
  const pctIncorrect = total ? Math.round((incorrectCount / total) * 100) : 0;
  scoreText.textContent = `${completedCount}/${total}`;

  const correctStat = document.getElementById('correctStat');
  const incorrectStat = document.getElementById('incorrectStat');
  if (correctStat) correctStat.textContent = `${correctCount} (${pctCorrect}%)`;
  if (incorrectStat) incorrectStat.textContent = `${incorrectCount} (${pctIncorrect}%)`;

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
  updateStatsPBD();
});

sectionSelect.addEventListener("change", () => { buildActiveQuestions(); updateStatsPBD(); });
topicSelect.addEventListener("change", () => { buildActiveQuestions(); updateStatsPBD(); });
difficultySelect.addEventListener("change", () => { buildActiveQuestions(); updateStatsPBD(); });
countSelect.addEventListener("change", () => { buildActiveQuestions(); updateStatsPBD(); });
restartBtn.addEventListener("click", () => { buildActiveQuestions(); updateStatsPBD(); });

const topics = Array.from(new Set(QUESTION_BANK.map((q) => q.topic)));
topics.forEach((topic) => {
  const opt = document.createElement("option");
  opt.value = topic;
  opt.textContent = topic;
  topicSelect.appendChild(opt);
});

buildActiveQuestions();

const updateStatsPBD = () => {
  const total = activeQuestions.length;
  const reviewed = correctCount + incorrectCount;
  const accuracy = reviewed > 0 ? Math.round((correctCount / reviewed) * 100) : null;

  document.getElementById("pbd-stat-total").textContent = total;
  document.getElementById("pbd-stat-reviewed").textContent = reviewed;
  document.getElementById("pbd-stat-correct").textContent = correctCount;
  document.getElementById("pbd-stat-incorrect").textContent = incorrectCount;
  document.getElementById("pbd-stat-accuracy").textContent = accuracy !== null ? `${accuracy}%` : "—";

  const correctPct = reviewed > 0 ? (correctCount / reviewed) * 100 : 0;
  const incorrectPct = reviewed > 0 ? (incorrectCount / reviewed) * 100 : 0;
  document.getElementById("pbd-stats-bar-correct").style.width = `${correctPct}%`;
  document.getElementById("pbd-stats-bar-incorrect").style.width = `${incorrectPct}%`;

  const container = document.getElementById("pbd-stats-by-topic");
  container.innerHTML = "";
  const topicsInSession = [...new Set(activeQuestions.map((q) => q.topic))];
  topicsInSession.forEach((topic, idx) => {
    const tTotal = activeQuestions.filter((q) => q.topic === topic).length;
    const tCorrect = correctByTopic[topic] || 0;
    const tIncorrect = incorrectByTopic[topic] || 0;
    const tReviewed = tCorrect + tIncorrect;
    const tAccuracy = tReviewed > 0 ? Math.round((tCorrect / tReviewed) * 100) : null;
    const tCorrectPct = tReviewed > 0 ? (tCorrect / tReviewed) * 100 : 0;
    const tIncorrectPct = tReviewed > 0 ? (tIncorrect / tReviewed) * 100 : 0;

    if (idx > 0) {
      const hr = document.createElement("hr");
      hr.className = "pbd-topic-stat-divider";
      container.appendChild(hr);
    }

    const row = document.createElement("div");
    row.className = "pbd-topic-stat-row";

    const label = document.createElement("span");
    label.className = "pbd-topic-stat-label";
    label.textContent = topic;

    const meta = document.createElement("span");
    meta.className = "pbd-topic-stat-meta";
    meta.textContent = tReviewed > 0
      ? `${tCorrect}/${tTotal} correctas · ${tAccuracy}%`
      : `0/${tTotal} respondidas`;

    const track = document.createElement("div");
    track.className = "pbd-topic-stat-bar-track";

    const barCorrect = document.createElement("div");
    barCorrect.className = "pbd-topic-stat-bar-correct";
    barCorrect.style.width = `${tCorrectPct}%`;

    const barIncorrect = document.createElement("div");
    barIncorrect.className = "pbd-topic-stat-bar-incorrect";
    barIncorrect.style.width = `${tIncorrectPct}%`;

    track.appendChild(barCorrect);
    track.appendChild(barIncorrect);
    row.appendChild(label);
    row.appendChild(meta);
    row.appendChild(track);
    container.appendChild(row);
  });
};

updateStatsPBD();
