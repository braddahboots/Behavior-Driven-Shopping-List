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
  // return '<li id="test" class="completed_' + this.is_done + ' "> \
  // <input id="list_check_' + idx + '" type="checkbox" ' + (this.is_done?"checked":"") + ' onchange="changeCheckedStatus(' + idx + ')"> \
  // <span> ' + this.name + '</span><span> ' + this.description + ' </span> \
  // <button type="button" onclick="removeItemButtonClicked(' + idx + ')">X</button></li>';


  //create a new HTML element list with a class type that is true or false
  var list_item = document.createElement('li');
    list_item.class = 'completed_' + this.is_done.toString();

  //add a new HTML element that creates a checkbox that allows us to check and uncheck it
  var checkbox = document.createElement('input');
    checkbox.id = "list_check_" + idx;
    checkbox.type = 'checkbox' + (this.is_done?'checked':'');
    checkbox.setAttribute("onclick", '"changeCheckedStatus(' + idx + ')"');
    list_item.appendChild(checkbox);

  //creates a new element name and assigns the value being passed through to it
  var spanName = document.createElement('name');
    spanName.innerHTML = this.name;
    list_item.appendChild(spanName);

  //create a new element description and assigns the value being passed
  var spanDescription = document.createElement('description');
    spanDescription.innerHTML = this.description;
    list_item.appendChild(spanDescription);

  //creates a new element button and on click it removes the current object from the DOM and our array list
  var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.onclick = removeItemButtonClicked(idx);
    deleteButton.innerHTML = "X";
    list_item.appendChild(deleteButton);

return list_item.outerHTML;

};