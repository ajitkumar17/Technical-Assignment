let addUserBtn = document.getElementById("addUser");
let btnText = addUserBtn.innerText;
let usernameTextField = document.getElementById("username");
let recordsDisplay = document.getElementById("records");

let userArray = [];
let edit_id = null;

function addUserBtnClick() {
  const name = usernameTextField.value;
  if (edit_id != null) {
    //edit
    userArray.splice(edit_id, 1, { name: name });
    edit_id = null;
  } else {
    //insert
    userArray.push({ name: name });
  }
  usernameTextField.value = "";
  DisplayInfo();
  addUserBtn.innerText = btnText;
}

function completed(id) {
  userArray[id].completed = !userArray[id].completed;
  DisplayInfo();
}

function DisplayInfo() {
  let statement = "";
  userArray.forEach((user, i) => {
    statement += `<tr>
    <td><span class="${
      user.completed ? "completed-item" : ""
    }" onclick='completed(${i})'>${user.name}</span></td>
    <td>
      <i class="fa fa-pen me-2 editBtn" style='font-size:16px' onclick='EditInfo(${i})'></i>
      <i class='fa fa-trash delBtn' style='font-size:16px' onclick='DeleteInfo(${i})'></i>
    </td>
  </tr>`;
  });
  recordsDisplay.innerHTML = statement;
}

function EditInfo(id) {
  edit_id = id;
  usernameTextField.value = userArray[id].name;
  addUserBtn.innerText = "Update";
}

function DeleteInfo(id) {
  userArray.splice(id, 1);
  DisplayInfo();
}
