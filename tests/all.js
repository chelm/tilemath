var vows   = require('vows');
var assert = require('assert');

var tilemath = require('../');

vows.describe('Tile Bounds from Z, X, Y').addBatch({
  'When requestings bounds for z,x,y coords': {
    topic: function () {
      var bounds = tilemath.tileBounds( 5, 5, 12 );
      this.callback( null, bounds);
    },
    'It should return the bounds': function ( err, b ) {
      assert.equal(b.length, 4);
      assert.equal(JSON.stringify(b), '[40.979898069620155,-123.75,31.952162238024975,-112.5]');
    }
  }

}).export(module);
