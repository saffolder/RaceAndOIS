mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtYWZmb2xkZXIiLCJhIjoiY2wyam9oZmhrMDZhMzNlbzN5MmludTR1aiJ9.vhUMvam1aTt6ygnJsYLpiQ';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-122, 47.80],
        zoom: 10
      });

      map.on('load', () => {

        /*map.addLayer({
          id: 'censusTracts',
          type: 'fill',
          source: {
            type: 'geojson',
            data:'assets/Census_Tracts_2010.geojson'
          },
          paint: {
            'fill-color': 'blue',
            'fill-opacity': 0.3
          }
        });*/

        /*map.addLayer({
          id:'OIS-layer',
          type:'circle',
          source: {
            type:'json',
            data:'assets/OISData.json'
          },
          paint: {
            'circle-radius': 3,
            'circle-color': 'red'
          }
        });*/
      })
