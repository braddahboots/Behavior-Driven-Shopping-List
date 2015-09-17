function ShoppingList(items){
  this.items = [];
}

ShoppingList.prototype.addItem = function(obj) {
  this.items.push(obj);
};