var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function() {

  var item;

  beforeEach(function() {
     item = new ShoppingListItem('name', 'description');
  });

  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property name', function() {
    item.name.should.equal('name');
  });

  it('should have a property description', function() {
    item.description.should.equal('description');
  });

  it('should have a property is_done', function() {
    item.is_done.should.equal('is_done');
  });
}); // end ShoppingListItem