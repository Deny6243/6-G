// === O'QUVCHILAR ===
const students = [
  "Abdullayeva Sofiya",
  "Kadirova Malohat",
  "Rustamov Bekzod",
  "Tursunboyev Muhammad",
  "Saidov Zafar",
  "Yusupova Madina",
  "To‘xtasinova Dilrabo",
  "Karimov Davron",
  "Islomova Shahlo",
  "Sharipov Aziz",
  "Mamatov Javohir",
  "Rasulova Shahrizoda",
  "Ergashev Ibrohim",
  "Murodov Otabek",
  "Tursunova Nilufar",
  "Saidov Kamol",
  "Ravshanov Nodir",
  "Xudoyberdiyeva Mohira"
];

const studentList = document.getElementById("studentList");
students.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  studentList.appendChild(li);
});

// === DARS JADVALI ===
const schedule = {
  "Dushanba": [
    "08:00 - Kelajak soati",
    "08:45 - Tabiiy fan",
    "09:30 - Matematika",
    "10:15 - Ona tili",
    "11:00 - Ingliz tili"
  ],
  "Seshanba": [
    "08:00 - Tarix",
    "08:45 - Matematika",
    "09:30 - Tasviriy san’at",
    "10:15 - Jismoniy tarbiya",
    "11:00 - Ingliz tili"
  ],
  "Chorshanba": [
    "08:00 - Tabiiy fan",
    "08:45 - Ona tili",
    "09:30 - Rus tili",
    "10:15 - Ingliz tili",
    "11:00 - Adabiyot"
  ],
  "Payshanba": [
    "08:00 - Matematika",
    "08:45 - Texnologiya",
    "09:30 - Ona tili",
    "10:15 - Informatika",
    "11:00 - Tarbiya"
  ],
  "Juma": [
    "08:00 - Texnologiya",
    "08:45 - Rus tili",
    "09:30 - Matematika",
    "10:15 - Ona tili",
    "11:00 - Jismoniy tarbiya"
  ],
  "Shanba": [
    "08:00 - Ingliz tili",
    "08:45 - Matematika",
    "09:30 - Adabiyot"
  ]
};

const daysContainer = document.getElementById("days");
Object.entries(schedule).forEach(([day, lessons]) => {
  const div = document.createElement("div");
  div.className = "day";
  const title = document.createElement("h3");
  title.textContent = day;
  div.appendChild(title);

  const ul = document.createElement("ul");
  lessons.forEach(lesson => {
    const li = document.createElement("li");
    li.textContent = lesson;
    ul.appendChild(li);
  });

  div.appendChild(ul);
  daysContainer.appendChild(div);
});

// === KNOPKALAR ===
const studentsSection = document.getElementById("students");
const scheduleSection = document.getElementById("schedule");

document.getElementById("showStudentsBtn").addEventListener("click", () => {
  studentsSection.classList.toggle("hidden");
  scheduleSection.classList.add("hidden");
});

document.getElementById("showScheduleBtn").addEventListener("click", () => {
  scheduleSection.classList.toggle("hidden");
  studentsSection.classList.add("hidden");
});

// === TUNGI REJIM ===
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
