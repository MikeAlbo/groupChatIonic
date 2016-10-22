groupChat.factory('ContactsService', ['$firebaseArray', function ($firebaseArray){

//    conect to the app.contacts db
    var ref = firebase.database().ref().child('contacts');
    var syncedContacts = $firebaseArray(ref);

    //demo contact list -----

    var sampleContact = function(name, lastActive, uid){
        var a  = {
            name: name,
            uid: uid,
            lastActive: lastActive,
            preferences: {
                allowsGroupMessages: true,
                allowsUnknownUserMessages: false,
                allowsExipreMessages:true
            },
            avatar: "http://www.placehold.it/100x100"
        };

        return a;

    };

    var sampleNames = ["Michael Albonetti", "Kristy Horton", "Paige Skiba", "Andrew Hutch", "Marius A.", "Adam Beck", "Moose Macaroni", "Kristen A.", "Mario Lopez", "Brad Pitt", "Dominic L.", "Joey T.", "Pheebee B.", "Chandler Bing", "Monica G.", "Ross the Boss", "Holden Obrien", "Schyler Obien", "Reilli Obien", "Amber Reid", "Josh Reid", "Anthony Albonetti", "Anna Albonetti", "Michelle Walker", "Phillip Albonetti", "Joe Albonetti", "Matt Damon"];

    function generateContacts(howMany){

        var x = [];
        var id = 0000001;

        for(var i = 0; i < howMany; i++){
            x.push(sampleContact(sampleNames[i], Date.now(), id));

            id += 1;
        }

        return x;
    }

    return {
        all: function(){
            //return syncedContacts;
            return generateContacts(10);
        },

        add: function(){
            //add contacts
        },
        remove: function(){
            // remove contact
        },
        get: function(){
            // get contact
        },
        update: function(){

        }

    };

}]);