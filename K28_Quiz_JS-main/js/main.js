// Mock data
const students = [
  {
    id: 1,
    studentID: "SV001",
    name: "Nguyễn Văn A",
    email: "vana@example.com",
  },
  { id: 2, studentID: "SV002", name: "Trần Thị B", email: "thib@example.com" },
];

const studentList = document.getElementById("studentList");
const addStudentForm = document.getElementById("addStudentForm");
const editStudentForm = document.getElementById("editStudentForm");

// Hiển thị danh sách sinh viên
function displayStudents() {
  studentList.innerHTML = "";
  students.forEach((student) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${student.studentID} - ${student.name} - ${student.email} <button onclick="editStudent(${student.id})">Sửa</button> <button onclick="deleteStudent(${student.id})">Xóa</button>`;
    studentList.appendChild(listItem);
  });
}

// Thêm sinh viên mới
addStudentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const studentID = document.getElementById("studentID").value;
  const name = document.getElementById("studentName").value;
  const email = document.getElementById("studentEmail").value;
  students.push({ id: students.length + 1, studentID, name, email });
  displayStudents();
  addStudentForm.reset();
});

// Sửa đổi sinh viên
function editStudent(id) {
  const student = students.find((student) => student.id === id);
  document.getElementById("studentID").value = student.studentID;
  document.getElementById("studentName").value = student.name;
  document.getElementById("studentEmail").value = student.email;

  editStudentForm.innerHTML = `
        <button onclick="updateStudent(${id})">Cập nhật</button>
        <button onclick="cancelEdit()">Hủy</button>
    `;
}

// Cập nhật sinh viên
function updateStudent(id) {
  const student = students.find((student) => student.id === id);
  student.studentID = document.getElementById("studentID").value;
  student.name = document.getElementById("studentName").value;
  student.email = document.getElementById("studentEmail").value;
  displayStudents();
  editStudentForm.innerHTML = "";
}

// Hủy sửa đổi
function cancelEdit() {
  editStudentForm.innerHTML = "";
}

// Xóa sinh viên
function deleteStudent(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    displayStudents();
  }
}

// Hiển thị danh sách ban đầu
displayStudents();
