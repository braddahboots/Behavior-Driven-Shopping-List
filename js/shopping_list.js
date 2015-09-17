function ShoppingList(items){
  this.items = [];
}

ShoppingList.prototype.addItem = function(obj) {
  if(obj instanceof ShoppingListItem) {
    this.items.push(obj);
  } else {
    throw new Error('Error');
  }
};

ShoppingList.prototype.removeItem = function(obj) {
  for(var i = 0; i < this.items.length - 1; i++) {
      if(this.items[i] === obj) {
        this.items.pop(obj);
      }
  }
};