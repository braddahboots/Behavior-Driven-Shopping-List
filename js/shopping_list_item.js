function ShoppingListItem(name, description){
  this.name = name;
  this.description = description;
  this.is_done = false;
  this.count = 0;
}

ShoppingListItem.prototype.check = function() {
  this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function() {
  this.is_done = false;
};

ShoppingListItem.prototype.render = function(idx) {
  count = idx;
  console.log(count);
  return '<li class="completed_' + this.is_done + ' "><input type="checkbox" \
  name="box" onchange="changeCheckedStatus(idx, checkbox)"><span> ' + this.name + ' \
  </span><span> ' + this.description + ' </span><button onclick="removeItemButtonClicked(idx)">X</button></li>';
};