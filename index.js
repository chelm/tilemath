// Math for map tiles 
// mostly taken from http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/
// currently supports turning z, x, y coords into lat lon bounds 


var TileMath = function( size ){
  this.size = size || 256;
  this.initRes = 2 * Math.PI * 6378137 / this.size;
  this.shift = 2 * Math.PI * 6378137 / 2.0
}
  
TileMath.prototype.Resolution = function( zoom ){
  return this.initRes / Math.pow(2,zoom);
};

TileMath.prototype.MetersToLatLon = function( mx, my ){
  var lon = (mx / this.shift) * 180.0,
    lat = (my / this.shift) * 180.0,
    lat = 180 / Math.PI * (2 * Math.atan( Math.exp( lat * Math.PI / 180.0)) - Math.PI / 2.0);
  return [lat, lon];
};

TileMath.prototype.PixelsToMeters = function( x, y, zoom ){
  var res = this.Resolution( zoom ),
    mx = (x * res - this.shift ),
    my = (y * res - this.shift) * -1;
  return [ mx, my ];
};

TileMath.prototype.bounds = function( x, y, zoom ){
  var min = this.PixelsToMeters( x * this.size, y * this.size, zoom ),
    max = this.PixelsToMeters( ( x+1 ) * this.size, ( y+1 ) * this.size, zoom );
  return [ min[0], min[1], max[0], max[1] ];
};

TileMath.prototype.tileBounds = function( z, x, y ){
  var bounds = this.bounds( x, y, z );
  var min = this.MetersToLatLon(bounds[0], bounds[1]);
  var max = this.MetersToLatLon(bounds[2], bounds[3]);
  return [ min[0], min[1], max[0], max[1] ];
};

module.exports = new TileMath();
