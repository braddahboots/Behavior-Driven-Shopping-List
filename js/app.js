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

function changeCheckedStatus(idx, checkbox) {
  //some variable
  //need to find index of idx which is the argument being passed into the function
  if(checkbox === true) {
    this.check();
  } else {
    this.uncheck();
  }

  var list = safway.redner();
}

function removeItemButtonClick(idx) {
  //some variable
  //need to find index of idx which is the argument being passed into the function
  this.removeItem(idx);

  var list = safway.redner();
}

