function ShoppingList(items){
  this.items = [];
  // console.log("hello",this.items);
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
  var listItems = [];
  // console.log('this is what you want',listItems);
  for(var i = 0; i < this.items.length; i++) {
    listItems.push(this.items[i].render(i));
    // console.log("maybe here",listItems);
  }
  var strList = listItems.join(' ');
  console.log(strList);
  return '<ul>' +  strList + '</ul>';
};