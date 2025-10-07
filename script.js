const nameInput = document.getElementById("studentName");
const infoInput = document.getElementById("studentInfo");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("studentList");

// Local Storage'dan o'quvchilarni yuklash
let students = JSON.parse(localStorage.getItem("students")) || [];

function renderList() {
  list.innerHTML = "";
  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <span>${student.name}</span> — <small>${student.info}</small>
      </div>
      <button class="deleteBtn" onclick="deleteStudent(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function addStudent() {
  const name = nameInput.value.trim();
  const info = infoInput.value.trim();

  if (name === "") {
    alert("Iltimos, ism kiriting!");
    return;
  }

  students.push({ name, info });
  localStorage.setItem("students", JSON.stringify(students));

  nameInput.value = "";
  infoInput.value = "";

  renderList();
}

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderList();
}

addBtn.addEventListener("click", addStudent);

// Sayt ochilganda ro'yxatni ko'rsatish
renderList();
