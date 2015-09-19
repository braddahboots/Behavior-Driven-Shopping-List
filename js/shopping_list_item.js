function ShoppingListItem(name, description){
  this.name = name;
  this.description = description;
  this.is_done = false;
}

ShoppingListItem.prototype.check = function() {
  this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function() {
  this.is_done = false;
};

ShoppingListItem.prototype.render = function(idx) {
  return '<li id="test" class="completed_' + this.is_done + ' "><input id="list_check_' + idx + '" type="checkbox" onchange="changeCheckedStatus(' + idx + ')"><span> ' + this.name + ' \
  </span><span> ' + this.description + ' </span><button type="button" onclick="removeItemButtonClicked(' + idx + ')">X</button></li>';
};