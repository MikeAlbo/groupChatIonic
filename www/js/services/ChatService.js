// services for chats

groupChat.factory('ChatServices', ['$firebaseArray', function($firebaseArray){
    
    // databind chats with firebase
    var ref = firebase.database().ref().child('chats');
    var syncedChats = $firebaseArray(ref);
    
    return {
        all: function(){
            return syncedChats;
        }, 
        remove: function(chatId){
           syncedChats.$remove(chatId); 
        },
        add: function(chat){
            syncedChats.$add(chat);
        }, 
        get: function(chatId){
            syncedChats.$getRecord(chatId);
        },
        update: function(chatId){
            syncedChats.$save(chatId);
        }
    };
    
    
}]); // end factory