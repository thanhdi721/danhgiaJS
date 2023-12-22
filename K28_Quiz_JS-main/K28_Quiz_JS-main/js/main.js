const STUDENT_LOCAL_STORAGE = "STUDENT_LOCAL_STORAGE";
let students = getLocalStudents() || [];
if (students) {
  renderStudents(students);
}

const addNewStudent = () => {
  let newStudent = getStudentInfo();
  students.push(newStudent);
  setLocalStudents(students);
  renderStudents(students);
  document.getElementById("form-control-student").reset();
};

const resetStudents = () => {
  student = [];
  renderStudents(students);
  localStorage.removeItem(STUDENT_LOCAL_STORAGE);
};
document.addEventListener("DOMContentLoaded", function () {
  renderStudents(students); // Gọi hàm để hiển thị danh sách sinh viên khi trang tải lần đầu

  // Bắt sự kiện khi nút "Sửa" được nhấn
  document
    .getElementById("table-body")
    .addEventListener("click", function (event) {
      if (event.target.id === "edit-btn") {
        const rowIndex = event.target.closest("tr").rowIndex - 1; // Lấy chỉ mục hàng của nút "Sửa"
        editStudent(rowIndex);
      }
    });

  // Bắt sự kiện khi nút "Xóa" được nhấn
  document
    .getElementById("table-body")
    .addEventListener("click", function (event) {
      if (event.target.id === "delete-btn") {
        const rowIndex = event.target.closest("tr").rowIndex - 1; // Lấy chỉ mục hàng của nút "Xóa"
        deleteStudent(rowIndex);
      }
    });
});
