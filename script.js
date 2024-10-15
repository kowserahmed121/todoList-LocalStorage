const todoInput = () => {
  const todoList = document.getElementById("todo-input");
  const todoData = todoList.value;
  if (todoData === "") {
    return;
  }
  todoList.value = "";
  getTodoList(todoData);
  saveItemLocalStorage(todoData)
};

const getTodoList = (data) => {
  const todoList = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.textContent = `${data}`;
  todoList.appendChild(li);
};

const getItem = () =>{
  let card = {};
  const findCard = localStorage.getItem("card");
  if(findCard){
    card = JSON.parse(findCard);
  }
  return card;
}

const saveItemLocalStorage = (data) => {
  const card = getItem();
  card[data] = data;
  const stirngCard = JSON.stringify(card)
  localStorage.setItem("card", stirngCard)
};


const displayCard = ()=>{
  const show = getItem();
  for(let menu in show){
    getTodoList(menu)
  }
}

displayCard();