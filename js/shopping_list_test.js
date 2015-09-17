var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function() {

  var poke;

  beforeEach(function() {
    poke = new ShoppingListItem('poke', 'daBomb');
  });

  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
    expect(poke).to.be.a('object');
  });

  it('should have a property name', function() {
    expect(poke).to.have.property('name');
  });

  it('should have a property description', function() {
    expect(poke).to.have.property('description');
  });

  it('should have a property is_done', function() {
    expect(poke).to.have.property('is_done');
  });

  describe('check', function() {

    it('should be a function', function() {
      expect(poke.check).to.be.a('function');
    });

    it('should set is_done to true', function() {
      poke.check();
      expect(poke.is_done).to.be.true;
    });

  });

  describe('uncheck', function() {

    it('should be a function', function() {
      expect(poke.uncheck).to.be.a('function');
    });

    it('should set is_done to false', function() {
      poke.uncheck();
      expect(poke.is_done).to.be.false;
    });
  });

  describe('render', function() {

    it('should be a function', function() {
      expect(poke.render).to.be.a('function');
    });

    it('should return html link', function() {
      var renderHTML = '<ul> \ <li class="completed_false"> \ <span>poke</span> \ <span>daBomb.</span> \ </li> \ <ul>';
    });
  });
}); // end ShoppingListItem class

describe('ShoppingList', function() {

  var list;

  beforeEach(function() {
    list = new ShoppingList();
    listItem = new ShoppingListItem('beer','for programming');
  });


  it('should be a class', function() {
    expect(ShoppingList).to.be.a('function');
    expect(list).to.be.a('object');
  });

  it('should be a property', function() {
    expect(list).to.have.property('items');
  });

  describe('addItem', function() {

    it('invoke addItem by passing in ShoppingListItem', function() {
      list.addItem(listItem);
      expect(list.items, 'expected to be in the items array').to.have.deep.property('beer', 'for programming;')
    });
  });
});


