'use strict';

angular.module('fsm160App')
  .factory('flickrService', function ($http) {
    var service = {};
    var BASE_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search',
        API_KEY = 'e348ad9cbdd3aa6e3c0395c2c4a46524',
        PER_PAGE = 50,
        FORMAT = 'json',
        EXTRAS = 'owner_name';

    var url = BASE_URL + '&api_key=' + API_KEY + '&per_page=' + PER_PAGE + '&format=' + FORMAT + '&extras=' + EXTRAS + '&nojsoncallback=true';
    // debugger

    service.photos = [];

    service.getFlickrPhotos = function(tag) {
      return $http.get(url + '&tags=' + tag)
        .success(function (data) {
          parseFlickrResponse(data);
        })
    };

    function parseFlickrResponse (data) {
      var flickrObj, currPhoto;
      for (var i = 0, len = data.photos.photo.length; i < len; i++) {
        service.photos.push(data.photos.photo[i]);
      }
    };

    return service;
  });
