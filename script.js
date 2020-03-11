const table = document.getElementById("myTable");
const input_name = document.getElementById("food_name");
const input_calories = document.getElementById("calories");
const input_btn = document.getElementById("addBtn");
const delBtn = document.querySelectorAll("fa-times-circle");
const totalOutput = document.getElementById("total");
const resetBtn = document.getElementById("reset");

//Variable allows for delete icon to be changed
const delBtnValue = "fas fa-times-circle";

input_btn.addEventListener("click", () => {
  if (
    input_name.value.length > 0 &&
    input_calories.value.length > 0 &&
    input_calories.value > 0
  ) {
    addNew();
  } else {
    console.error("Empty field(s) or invalid value");
  }
});

//RESET TABLE
resetBtn.addEventListener("click", () => {
  resetTable();
  newTotal();
});

//ADD NEW ROW TO TABLE
addNew = () => {
  //Declaring components of new row

  const newRow = document.createElement("tr");

  const cell1 = document.createElement("td");
  const cell1val = input_name.value;
  cell1.append(document.createTextNode(cell1val));

  const cell2 = document.createElement("td");
  const cell2val = input_calories.value;
  cell2.setAttribute("class", "calCount");
  cell2.append(document.createTextNode(cell2val));

  const delBtn = document.createElement("td");
  const delBtnI = document.createElement("i");
  delBtnI.setAttribute("class", delBtnValue);
  delBtn.appendChild(delBtnI);

  //Appending each component to the new row
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(delBtn);
  table.appendChild(newRow);

  //Delete row upon click of delete button
  delBtn.onclick = () => {
    delBtnI.parentElement.parentElement.parentElement.removeChild(newRow);
    newTotal();
  };
  newTotal();
};

//UPDATE TOTAL
newTotal = () => {
  //Using each 'calories' entry to loop through rows
  calories = document.querySelectorAll(".calCount");
  let total = 0;

  for (let i = 0; i < calories.length; i++) {
    total = total + parseInt(calories[i].innerText);
  }
  totalOutput.innerHTML = total;
};

//FUNCTION FOR TABLE RESET
resetTable = () => {
  const calories = document.querySelectorAll(".calCount");
  for (let i = 0; i < calories.length; i++) {
    calories[i].parentElement.parentElement.removeChild(calories[i].parentNode);
  }
  input_name.value = "";
  input_calories.value = "";
};
