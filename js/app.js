var safeWay = new ShoppingList();
var myList = safeWay.render();

document.getElementById('content').innerHTML = myList;
// console.log('myList',myList);

//should take in input from the two text fields in html form
function add_to_shopping_list() {
  // console.log("faka")
  //pull the value from the title form
  var title = document.getElementById('title').value;

  //pull the value from the description form
  var description = document.getElementById('description').value;

  //run the value of both title and description in a new instance of Shopping List Item (creates an objec)
  var new_shopping_list_item = new ShoppingListItem(title, description);
  //adds the new shopping list item to the safway shopping list
  safeWay.addItem(new_shopping_list_item);

  //pushes the new object to my html via div
  var list = safeWay.render();
  // console.log(list);
  document.getElementById('content').innerHTML = list;
}

function changeCheckedStatus(idx) {
  //Get the DOM index of the current object
  // debugger;
  var index = document.getElementById("list_check_" + idx);

  //assigns the current object to a variable
  var curItem = safeWay.items[idx];

  //if box is checked, invoke check method
  if(index.checked) {
    curItem.check();
  } else {
    curItem.uncheck();
  }

  var list = safeWay.render();

  document.getElementById('content').innerHTML = list;
}

function removeItemButtonClicked(idx) {
  //Get the DOM index of the currnet object
  console.log(idx);

  //assign the current object to a variable
  var curItem = safeWay.items[idx];

  //remove current object from array
  safeWay.removeItem(curItem);

  var list = safeWay.render();
  document.getElementById('content').innerHTML = list;
}

