function ShoppingList(items){
  this.items = [];
}

ShoppingList.prototype.addItem = function(obj) {
  if(!(obj instanceof ShoppingListItem)) {
    throw new Error('Error');
  } else {

    this.items.push(obj);
    // console.log('hello',this.items);
  }
};

ShoppingList.prototype.removeItem = function(obj) {
  var rmItem = this.items.indexOf(obj);
  if(rmItem !== -1) {
    this.items.splice(rmItem, 1);
  } else if(obj === undefined) {
    this.items.pop();
  } else {
    throw new Error('Item does not exist');
  }
};

ShoppingList.prototype.render = function() {
  // var returnString = '<ul>';
  // var renderedItem;
  // for (var i = 0; i < this.items.length; i++) {
  //   renderedItem = this.items[i].render(i);
  //   returnString += renderedItem;
  // }
  // returnString += '</ul>';
  // return returnString;
  var listItems = [];
  console.log('test',this.items);
  console.log('I have every');
  for(var i = 0; i < this.items.length; i++) {
    console.log('hello');
    listItems.push(this.items[i].render());
  }
  var strList = listItems.join(' ');

  return ('<ul> ' +  strList + ' </ul>');
};