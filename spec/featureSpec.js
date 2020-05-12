'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off', function() {
      plane.land(airport);
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane)
  }); 

  describe('under stormy conditions', function() {
    it('prevent take off if weather is stormy', function() {
        plane.land(airport);
        spyOn(airport, 'isStormy').and.returnValue(true);
        expect(function(){ plane.takeOff();}).toThrowError('can not take off during the storm');
        expect(airport.planes()).toContain(plane);
    });

    it('prevent landing when the weather is stormy', function() {
        // plane.land(airport);
        spyOn(airport, 'isStormy').and.returnValue(true)
        expect(function() { plane.land(airport) }).toThrowError('can not land during the stormy weather')
        expect(airport.planes()).toEqual([])
    });
  });

  describe('under not stromy conditions', function() {

  });
  



});