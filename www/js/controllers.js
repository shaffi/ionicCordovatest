angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaCapture) {
$scope.imgsrc;
  $scope.captureAudio = function() {
    var options = { limit: 3, duration: 10 };

    $cordovaCapture.captureAudio(options).then(function(audioData) {
      // Success! Audio data is here
      console.log(audioData);
 
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }

  $scope.captureImage = function() {
    var options = { limit: 1 };

    $cordovaCapture.captureImage(options).then(function(imageData) {
      // Success! Image data is here
      $scope.imgsrc = imageData[0].fullPath;
	alert(mageData[0].fullPath);
    }, function(err) {
      // An error occured. Show a message to the user
      alert(err);
    });
  }

  $scope.captureVideo = function() {
    var options = { limit: 3, duration: 15 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
    }, function(err) {
      // An error occured. Show a message to the user
    });
  }
})

.controller('FriendsCtrl', function($scope, Friends, testdata) {
  $scope.friends = Friends.all();
    $scope.things = testdata.all();

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends, $cordovaDialogs, $cordovaNetwork, $cordovaMedia) {
  	 

  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, $cordovaMedia) {


    var src = "http://streaming.radionomy.com/Tlr-radio";

    var mediaSource = $cordovaMedia.newMedia(src);
    var promise = mediaSource.promise;
    var mediaStatus = mediaSource.mediaStatus;
    var media = mediaSource.media;


	$scope.playMedia = function(){
    	$cordovaMedia.play(media);
	};
	$scope.pauseMedia = function(){
    	$cordovaMedia.pause(media);
	};
	$scope.stopMedia = function(){
    	$cordovaMedia.stop(media);
	   	$cordovaMedia.release(media);
	};

	$scope.stopMedia();

});
