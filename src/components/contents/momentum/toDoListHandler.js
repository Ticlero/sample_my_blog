const _handleToDoListInputBox = (e) => {
  console.dir(e);
  console.log(e.keyCode);
  console.log(e.which);
  if (e.keyCode === 13) {
    _handleTextBox();
  }
};

const _handleTextBox = () => {
  const textbox = document.querySelector(".todolist-container__textbox");
  if (textbox.value !== "") {
    addToList(textbox.value);
    textbox.value = "";
  }
  textbox.value = "";
};

const addToList = (text) => {
  const parent = document.querySelector(".todolist-container__list");
  let listItem = document.createElement("li");
  listItem.classList.add("list-item");

  let clear = document.createElement("span");
  clear.classList.add("c-icon");
  let clearIcon = document.createElement("i");
  clearIcon.addEventListener("click", listItemControl);
  clearIcon.classList.add("far");
  clearIcon.classList.add("fa-thumbs-up");
  clear.appendChild(clearIcon);

  let remove = document.createElement("span");
  remove.classList.add("c-icon");
  let removeIcon = document.createElement("i");
  removeIcon.addEventListener("click", listItemControl);
  removeIcon.classList.add("fas");
  removeIcon.classList.add("fa-eraser");
  remove.appendChild(removeIcon);

  let textSpan = document.createElement("span");
  textSpan.innerText = text;

  listItem.appendChild(clear);
  listItem.appendChild(textSpan);
  listItem.appendChild(remove);

  parent.appendChild(listItem);
  saveTodoList();
};

const listItemControl = (e) => {
  const parent = document.querySelector(".todolist-container__list");
  if (e.target.classList[1] === "fa-eraser") {
    for (var i = 0; i < parent.childNodes.length; i++) {
      let li = parent.childNodes[i];
      if (e.target === li.childNodes[2].childNodes[0]) {
        parent.removeChild(li);
        saveTodoList();
        break;
      }
    }
  } else {
    for (var i = 0; i < parent.childNodes.length; i++) {
      let li = parent.childNodes[i];
      if (e.target === li.childNodes[0].childNodes[0]) {
        li.classList.toggle("clear-item");
        if (li.classList.contains("clear-item")) {
          li.style.textDecoration = "line-through";
        } else {
          li.style.textDecoration = "none";
        }
      }
    }
  }
};

const saveTodoList = () => {
  if (localStorage.removeItem("lists") != null) localStorage.removeItem("lists");
  const parent = document.querySelector(".todolist-container__list");
  var listObj = {};
  var i = 0;
  for (i; i < parent.childNodes.length; i++) {
    let li = parent.childNodes[i];
    listObj[i] = li.childNodes[1].innerText;
  }
  listObj["length"] = parent.childNodes.length;
  localStorage.setItem("lists", JSON.stringify(listObj));
};

const loadTodoList = () => {
  if (localStorage.getItem("lists") === null) {
    return;
  } else {
    let lists = JSON.parse(localStorage.getItem("lists"));
    for (var i = 0; i < lists.length; i++) addToList(lists[i]);
  }
};

const _HandleClickTodoList = (e) => {
  e.persist();
  if (e.target.tagName !== "UL") {
    console.log(e.target.innerText);
  } else {
    console.error(`Click miss error. you have to click a 'LI' element. Not ${e.target.tagName}`);
  }
};

export { _handleToDoListInputBox, _handleTextBox, addToList, _HandleClickTodoList, loadTodoList };
