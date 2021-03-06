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
      var render = poke.render();
      poke.render().should.equal('<li class="completed_false ><span> poke </span><span> daBomb </span></li>');

    });
  });
}); // end ShoppingListItem class

describe('ShoppingList', function() {

  var list;
  var listItem;
  var listItem2;

  beforeEach(function() {
    list = new ShoppingList();
    listItem = new ShoppingListItem('beer','for programming');
    listItem2 = new ShoppingListItem('donuts', 'everyone likes donuts');
  });


  it('should be a class', function() {
    expect(ShoppingList).to.be.a('function');
    expect(list).to.be.a('object');
  });

  it('should be a property', function() {
    expect(list).to.have.property('items');
  });

  describe('addItem', function() {

    it('invoke addItem by passing in object', function() {
      list.addItem(listItem);
      expect(list.items, 'expected to be in the items array').to.deep.equal([listItem]);
    });

    it('throw error if not an object within list', function() {
      expect(list.addItem).to.throw(Error);
    });
  });

  describe('removeItem', function() {

    beforeEach(function() {
      list.addItem(listItem);
      list.addItem(listItem2);
    });

    it('invoke removeItem by passing in an object to remove', function() {
      list.removeItem(listItem);
      expect(list.items, 'expted to remove an object for the array').to.deep.equal([listItem2]);
    });

    it('remove the last item added to array', function() {
      list.removeItem();
      expect(list.items).to.deep.equal([listItem]);
    });

    it('throw error', function() {
      expect(list.removeItem).to.throw(Error);
    });
  });

  describe('render', function() {

    beforeEach(function() {
      list.addItem(listItem);
      list.addItem(listItem2);
    });

    it('should be a function', function() {
      expect(list.render).to.be.a('function');
    });

    it('should return string of ShoppingList', function() {
      console.log(list.render());
      var test1 = listItem.render();
      var test2 = listItem2.render();
      list.render().should.equal('<ul> <li class="completed_false ><span> beer </span><span> for programming </span></li> <li class="completed_false ><span> donuts </span><span> everyone likes donuts </span></li> </ul>');
    });
  });

});


