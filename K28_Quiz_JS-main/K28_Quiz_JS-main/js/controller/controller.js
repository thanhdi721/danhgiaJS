const getStudentInfo = () => {
  let studentId = document.getElementById("student-id").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let math = document.getElementById("math").value;
  let physic = document.getElementById("physic").value;
  let chemical = document.getElementById("chemical").value;
  let newStudent = new Student(studentId, name, email, math, physic, chemical);

  return newStudent;
};

const renderStudents = (students) => {
  let contentHTML = "";
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let contentTr = `
      <tr>
        <td>${currentStudent.id}</td>
        <td>${currentStudent.name}</td>
        <td>${currentStudent.email}</td>
        <td>${
          (currentStudent.math * 1 +
            currentStudent.physic * 1 +
            currentStudent.chemical * 1) /
          3
        }</td>
        <td>
          <button id="edit-btn">Edit</button>
          <button id="delete-btn">Delete</button>
        </td>
      </tr>
    `;
    contentHTML += contentTr;
  }
  document.getElementById("table-body").innerHTML = contentHTML;
};

const setLocalStudents = (students) => {
  let jsonStudents = JSON.stringify(students);
  localStorage.setItem(STUDENT_LOCAL_STORAGE, jsonStudents);
};

let getLocalStudents = () => {
  let jsonStudents = localStorage.getItem(STUDENT_LOCAL_STORAGE);
  return JSON.parse(jsonStudents);
};
const editStudent = (index) => {
  const studentToEdit = students[index];
  document.getElementById("student-id").value = studentToEdit.id;
  document.getElementById("name").value = studentToEdit.name;
  document.getElementById("email").value = studentToEdit.email;
  document.getElementById("math").value = studentToEdit.math;
  document.getElementById("physic").value = studentToEdit.physic;
  document.getElementById("chemical").value = studentToEdit.chemical;

  // Thêm một nút "Lưu" để lưu các thay đổi
  document.getElementById("form-control-student").innerHTML += `
    <button id="save-btn" onclick="saveStudent(${index})">Lưu</button>
  `;
};

const saveStudent = (index) => {
  const updatedStudent = getStudentInfo(); // Lấy thông tin đã chỉnh sửa từ form
  students[index] = updatedStudent; // Cập nhật thông tin của sinh viên trong mảng
  setLocalStudents(students); // Cập nhật dữ liệu vào local storage
  renderStudents(students); // Cập nhật bảng
  document.getElementById("form-control-student").reset(); // Reset form
};

const deleteStudent = (index) => {
  students.splice(index, 1); // Xóa sinh viên khỏi mảng
  setLocalStudents(students); // Cập nhật dữ liệu vào local storage
  renderStudents(students); // Cập nhật bảng
};
