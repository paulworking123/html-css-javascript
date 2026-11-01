// ດຶງ Elements

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// ເກັບ Task ທີ່ກຳລັງແກ້ໄຂຢູ່ (null = ບໍ່ໄດ້ແກ້ໄຂ Task ໃດ)
let editingTask = null;

// ອອກຈາກໂໝດແກ້ໄຂ: ລ້າງ Input ແລະ ປ່ຽນ Button ກັບເປັນ "ເພີ່ມ"
const exitEditMode = () => {
  editingTask = null;
  taskInput.value = "";
  addBtn.textContent = "ເພີ່ມ";
  addBtn.classList.remove("update-btn");
};

// ເພີ່ມ Task ໃນ List
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    // ຖ້າກຳລັງແກ້ໄຂ: ອັບເດດຄ່າໃໝ່ໃສ່ Task ເດີມ ແລ້ວຢຸດ (ບໍ່ສ້າງ li ໃໝ່)
    if (editingTask !== null) {
      editingTask.textContent = taskText;
      exitEditMode();
      return;
    }

    const li = document.createElement("li");
    li.className = "task-item";

    // ໃສ່ຂໍ້ຄວາມໃນ span ເພື່ອໃຫ້ອ່ານ ແລະ ປ່ຽນຄ່າໄດ້ ໂດຍບໍ່ກະທົບ Button
    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    // ເພີ່ມ Button ແກ້ໄຂ
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";

    // ເມື່ອກົດ Edit: ສະແດງຄ່າໃນ Input ແລະ ປ່ຽນ Button ເປັນ "ອັບເດດ" ສີຟ້າ
    editBtn.addEventListener("click", () => {
      editingTask = taskSpan;
      taskInput.value = taskSpan.textContent;
      addBtn.textContent = "ອັບເດດ";
      addBtn.classList.add("update-btn");
      taskInput.focus();
    });

    // ເພີ່ມ Button ລຶບ
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      // ຖ້າລຶບ Task ທີ່ກຳລັງແກ້ໄຂຢູ່ ໃຫ້ອອກຈາກໂໝດແກ້ໄຂນຳ
      if (editingTask === taskSpan) {
        exitEditMode();
      }
      taskList.removeChild(li);
    });

    // ໃສ່ span ແລະ Button ແກ້ໄຂ ເຂົ້າໃນ li
    li.appendChild(taskSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("ກາລຸນາປ້ອນໜ້າວຽກກ່ອນ!");
    taskInput.focus();
  }
});
