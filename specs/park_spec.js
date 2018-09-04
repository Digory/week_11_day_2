const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaurRex;
  let dinosaurSnapface;
  let dinosaurBitey;

  beforeEach(function () {
    park = new Park("Digory's fun park", 16.50);
    dinosaurRex = new Dinosaur("T-rex", "meat", 200);
    dinosaurSnapface = new Dinosaur("Brontosaurus", "leaves", 150);
    dinosaurBitey = new Dinosaur("T-rex", "meat", 100);
  })

  it('should have a name', function(){
    const actual = park.name;
    const expected = "Digory's fun park";
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    const expected = 16.50;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaurRex);
    const actual = park.collectionOfDinosaurs;
    const expected = [dinosaurRex];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaurRex);
    park.addDinosaur(dinosaurSnapface);
    park.removeDinosaur(dinosaurRex);
    const actual = park.collectionOfDinosaurs;
    const expected = [dinosaurSnapface];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaurRex);
    park.addDinosaur(dinosaurSnapface);
    park.addDinosaur(dinosaurBitey);
    const actual = park.findMostPopular();
    const expected = dinosaurRex;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaurRex);
    park.addDinosaur(dinosaurSnapface);
    park.addDinosaur(dinosaurBitey);
    const actual = park.findAllOfSpecies("T-rex");
    const expected = [dinosaurRex, dinosaurBitey];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaurRex);
    park.addDinosaur(dinosaurSnapface);
    park.addDinosaur(dinosaurBitey);
    park.removeAllOfSpecies("T-rex");
    const actual = park.collectionOfDinosaurs;
    const expected = [dinosaurSnapface];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to check the total number of daily visitors', function(){
    park.addDinosaur(dinosaurRex);
    park.addDinosaur(dinosaurSnapface);
    park.addDinosaur(dinosaurBitey);
    const actual = park.getDailyVisitors();
    const expected = 450;
    assert.strictEqual(actual, expected);
  })

  it('should be able to check the total number of yearly visitors', function(){
    park.addDinosaur(dinosaurRex);
    park.addDinosaur(dinosaurSnapface);
    park.addDinosaur(dinosaurBitey);
    const actual = park.getYearlyVisitors();
    const expected = 163800;
    assert.strictEqual(actual, expected);
  })

  it('should be able to get the yearly revenue from ticket sales', function(){
    park.addDinosaur(dinosaurRex);
    park.addDinosaur(dinosaurSnapface);
    park.addDinosaur(dinosaurBitey);
    const actual = park.getYearlyRevenue();
    const expected = 2702700;
    assert.strictEqual(actual, expected);
   })

});
