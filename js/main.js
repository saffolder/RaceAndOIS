/**
 * JS for index.html
 */
'use strict';
(function() {
  window.addEventListener('load', init); // Waits for the DOM to load in before running script

  // Global variables
  let map;
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYWZmb2xkZXIiLCJhIjoiY2wyam9oZmhrMDZhMzNlbzN5MmludTR1aiJ9.vhUMvam1aTt6ygnJsYLpiQ';

  // Initializing function called after the DOM is loaded in
  function init() {
    map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-122.3, 47.62], // Centered on Seattle
      zoom: 10.2
    });
    map.on('load', () => {

      map.addLayer({ // draws the demographics onto the map
        id: 'demographics-layer',
        type: 'fill',
        source: {
          type: 'geojson',
          data: 'assets/ACS2017_CensusTracts2010.geojson'
        },
        paint: {
          'fill-color': [
            'step',
            ['get', 'PCT_PERSON_OF_COLOR'], // fill tracts by % of population thats POC
            '#FFEDA0',                        // something less bright would be better
            10,
            '#FED976',
            20,
            '#FEB24C',
            40,
            '#FD8D3C',
            60,
            '#FC4E2A',
            80,
            '#E31A1C'
            ],
          'fill-outline-color': 'black',
          'fill-opacity': 0.6
        }
      });

      map.addLayer({ // draw the OIS data
        id: 'ois-layer',
        type: 'circle',
        source: {
          type: 'geojson',
          data: 'assets/OISCleaned.geojson'
        },
        paint: {
          'circle-radius': 4,
          'circle-color': 'black'
        }
      });
    })
  }
})();