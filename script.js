// === O'QUVCHILAR ===
const students = [
  "Al Orifxo'ja Said Odilxon Said Olimxon o'g'li",
  "Ashurov Humoyun Zamir O'g'li",
  "Botiraliyeva Aziza Erali qizi",
  "Davranov Muhammadiso Jamol o’g’li",
  "Fayzullayev Elshodbek Elbek o’g’li",
  "Husanova Mushtariy Ergash qizi",
  "Ilxamboyev Xurrambek Gulomjon O'g'li",
  "Ismoilov Muslimbek Isomiddinovich",
  "Jurayeva Dilnura Rustamovna",
  "Matyoqubova Madinabonu G‘ayrat qizi",
  "Muxtarov Sunnatxon Batir o’g’li",
  "Nasrullayeva Hadicha Talibjonovna",
  "Ochilov Mo'minjon Ma'ruf O'g'li",
  "Pardaboyeva Dariya Yermanovna",
  "Rajabaliyeva Shirinabonu Sobir qizi",
  "Sobirova Robiya Shavkat qizi",
  "Tirkashova Ruhshona Rustam qizi",
  "Turdibayev Muhammadali Nosirjon o'g'li",
  "Tuxtasinova Madinabonu Murodjon qizi",
  "Urazbekova Diana Toxir qizi",
  "Urolova Laylo Zuxriddin qizi",
  "Xakimova O‘giloy Furqat qizi",
  "Xamidov Shohjahon Shuxrat o'g'li",
  "Yo‘ldoshboyeva Rahima Hajixon qizi",
  "Yormatova Dilnura Latif qizi",
  "Zayniddinova Mohichehra Xamroz qizi",
  "Shoqulova Sevinch Orzibek qizi",
  "Shovdirova Marjona Raximjon qizi",
  "Xudayberganova Umida Ravshan qizi"
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
    "10:15 - Jismoniy tarbiya"
  ],
  "Chorshanba": [
    "08:00 - Tabiiy fan",
    "08:45 - Ona tili",
    "09:35 - Rus tili",
    "10:20 - Ingliz tili",
    "11:05 - Matematika",
    "11:55 - Adabiyot"
  ],
  "Payshanba": [
    "08:00 - Ona tili",
    "08:45 - Musiqa",
    "09:30 - Ingliz tili",
    "10:15 - Tarix",
    "11:00 - Tarbiya"
  ],
  "Juma": [
    "08:00 - Texnologiya",
    "08:45 - Matematika",
    "09:30 - Tabiiy fan",
    "10:15 - Informatika",
    "11:00 - Jismoniy tarbiya"
  ],
  "Shanba": [
    "08:00 - Ingliz tili",
    "08:45 - Rus tili",
    "09:30 - Matematika",
    "10:15 - Ona tili",
    "11:00 - Adabiyot"
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
