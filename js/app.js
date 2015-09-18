var safeWay = new ShoppingList();
var myList = safeWay.render();

document.getElementById('content').innerHTML = myList;
// console.log(myList);

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
  document.getElementById('content').innerHTML = safeWay.render();
}


