groupChat.controller('ContactsCtrl', ['$scope', '$rootScope', 'ContactsService', function($scope, $rootScope, ContactsService){
    
    // dummy data
    

    
    $scope.contacts  = ContactsService.all();
    
    
}]);