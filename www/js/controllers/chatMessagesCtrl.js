groupChat.controller('ChatMessagesCtrl', ['$scope' , '$stateParams', 'ChatServices', '$rootScope',  function($scope, $stateParams, ChatServices, $rootScope ){
    
    //$scope.chat = ChatServices.get($stateParams.chatId);
    ChatServices.get($stateParams.chatId);
    
    $rootScope.$on('loadChat', function(event, data){
        $scope.chat = data;
    });
    
    
}]);