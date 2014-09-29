'use strict';

angular.module('fsm160App')
.controller('MainCtrl', function ($scope, $http, socket, flickrService) {
  $scope.flickrService = flickrService;
  flickrService.getFlickrPhotos('uc berkeley');
});
