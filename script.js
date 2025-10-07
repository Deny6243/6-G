// --- O'QUVCHILAR RO'YXATI ---
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

const list = document.getElementById("studentList");
students.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  list.appendChild(li);
});

// --- DARS JADVALI ---
const schedule = {
  "Dushanba": [
    "1️⃣ Kelajak soati",
    "2️⃣ Tabiiy fan",
    "3️⃣ Matematika",
    "4️⃣ Ona tili",
    "5️⃣ Ingliz tili"
  ],
  "Seshanba": [
    "1️⃣ Tarix",
    "2️⃣ Matematika",
    "3️⃣ Tasviriy san’at",
    "4️⃣ Jismoniy tarbiya",
    "5️⃣ Ingliz tili"
  ],
  "Chorshanba": [
    "1️⃣ Tabiiy fan",
    "2️⃣ Ona tili",
    "3️⃣ Rus tili",
    "4️⃣ Ingliz tili",
    "5️⃣ Adabiyot"
  ],
  "Payshanba": [
    "1️⃣ Matematika",
    "2️⃣ Texnologiya",
    "3️⃣ Ona tili",
    "4️⃣ Informatika",
    "5️⃣ Tarbiya"
  ],
  "Juma": [
    "1️⃣ Texnologiya",
    "2️⃣ Rus tili",
    "3️⃣ Matematika",
    "4️⃣ Ona tili",
    "5️⃣ Jismoniy tarbiya"
  ],
  "Shanba": [
    "1️⃣ Ingliz tili",
    "2️⃣ Matematika",
    "3️⃣ Adabiyot"
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
