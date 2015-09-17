var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function() {

  var poke;

  beforeEach(function() {
    poke = new ShoppingListItem('poke', 'daBomb');
  });

  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property name', function() {
    poke.name.should.equal('poke');
  });

  it('should have a property description', function() {
    poke.description.should.equal('daBomb');
  });

  it('should have a property is_done', function() {
    expect(item.is_done).should.equal.false;
  });
}); // end ShoppingListItem class

describe('check', function() {

  it('should be a function', function() {
    expect(check).to.be.a('function');
  });

  it('should set is_done to true', function() {
    var poke = new ShoppingListItem('poke', 'daBomb');
    expect(poke instanceof ShoppingListItem).to.be.true;
  });
});

describe('uncheck', function() {

  it('should be a function', function() {
    expect(uncheck).to.be.a('function');
  });

  it('should set is_done to false', function() {
    var poke = new ShoppingListItem('poke', 'daBomb');
    expect(poke instanceof ShoppingListItem).to.be.false;
  });
});

describe('render', function() {

});