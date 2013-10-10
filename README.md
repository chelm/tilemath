Tilemath 
----------

Math for map tiles, taken from http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/

## Install 

    npm install 

## Test 

    grunt vows 

## Usage 

    var tilemath = require( 'tilemath' );
    var bounds = tilemath( 5, 5, 12 );
    // [40.979898069620155,123.75,31.952162238024975,112.5] 
