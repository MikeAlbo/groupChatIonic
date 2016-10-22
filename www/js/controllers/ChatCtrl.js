groupChat.controller('ChatsCtrl', ['$scope', '$rootScope', 'ChatServices', 'ContactsService', '$ionicModal', function($scope,  $rootScope, ChatServices, ContactsService, $ionicModal){
    

$scope.chats = ChatServices.all();
$scope.contacts = ContactsService.all();
    
$scope.newChat = function(){
    

// move to message controller when it's created
//    var newMessage  = {
//        message: $scope.message,
//        from: "01",
//        to: ["02"],
//        date: firebase.database.ServerValue.TIMESTAMP,
//        messageStatus: "sent"
//    };
    
    var chat = {
        title: "demo chat",
        users: [
            {id: "01", name: "Michael", avatar: "http://placehold.it/100x100"},
            {id: "02", name: "Kristy", avatar: "http://placehold.it/100x100"}
        ],
        settings: {
            option1: true,
            option2: false
        },
        createdDate: firebase.database.ServerValue.TIMESTAMP,
        lastUodated: firebase.database.ServerValue.TIMESTAMP,
        lastMessage: "test last message", 
        avatar: "http://placehold.it/100x100"
    };
    
    ChatServices.add(chat);

};
    
    
// new chat modal

    $ionicModal.fromTemplateUrl('templates/chatDetailModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal){
        $scope.chatDetailModal = modal;
        console.log("modal built");
    });

    $scope.openChatDetails = function(){
      $scope.chatDetailModal.show();  
    };
    
    $scope.closeChatDetails = function(){
        $scope.chatDetailModal.hide();
    };
    
    $scope.$on('$destroy', function(){
       $scope.chatDetailModal.remove(); 
    });
    
   
    
}]);