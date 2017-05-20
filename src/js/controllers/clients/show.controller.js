angular
.module('cordant')
.controller('clientShowCtrl', showCtrl);

showCtrl.$inject = ['Client', 'Candidate', '$stateParams', 'NgMap', 'GmapAPIKey', 'Postcode', '$http'];
function showCtrl(Client, Candidate, $stateParams, NgMap, GmapAPIKey, Postcode, $http){
 const vm = this;

//setting up map
  NgMap.getMap().then(function(map) {
  //  console.log(map.getCenter());
  //   console.log('markers', map.markers);
  //   console.log('shapes', map.shapes);
  });

  vm.googleMapsUrl  = `https://maps.googleapis.com/maps/api/js?key=${GmapAPIKey}`;

//show API call
  Client
  .get($stateParams)
  .$promise.then(response => {
    vm.client = response;
//gets the geolocation of the client by making an API call to postcode.io
    Postcode
    .get({id:vm.client.postcode})
    .$promise.then(response =>
      {
        vm.clientLat = response.result.latitude,
        vm.clientLong = response.result.longitude;
      }
    );
  });

// Candidate index function
  vm.candidates = Candidate.query();

//create a function that compares the distance of the marker clicked with clientlat and client lng
vm.getDistance = (e, lat, lng, travel) => {
  const origin      = [vm.clientLat, vm.clientLong];

  $http({
    method: 'GET',
    url:`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${lat},${lng}&mode=${travel}&key=${GmapAPIKey}`}).then((response) => {
    vm.distance     = response.data.rows[0].elements[0].distance.text;
    vm.distanceTime = response.data.rows[0].elements[0].duration.text;
  });
};



//custom style for our Gmap
  vm.gMapStyles     = [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c8d7d4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
];
}
