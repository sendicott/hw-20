let _ = require('lodash');

function appender(object) {
    $('#guy1').append('<h2>' + object + '</h2>');
    $("h2").draggable({ revert: "valid"});
}

let friends = [
    {
        name: "Mark",
        gender: "Male",
        hometown: "Ocean City, NJ",
        age: 25,
        bestie: false,
        order: 0
    },
    {
        name: "Casey",
        gender: "Female",
        hometown: "Galloway, NJ",
        age: 24,
        bestie: false,
        order: 1
    },
    {
        name: "Omensha",
        gender: "Male",
        hometown: "Somers Point, NJ",
        age: 26,
        bestie: false,
        order: 2
    },
    {
        name: "Jessica",
        gender: "Female",
        hometown: "Absecon, NJ",
        age: 23,
        bestie: false,
        order: 3
    },
];

window.addEventListener('load', function() {
    for (let i = 0; i < friends.length; i++) {
            appender(friends[i].name + ": " + friends[i].bestie);
    }
    // $("h2").draggable({ revert: "valid"});
    $("#guy2").droppable({
        drop: function(event, ui) {
            // friends[].bestie = true;
            // friends[0].bestie = true;

            // console.log(this);
            // console.log(ui.draggable);
            let content = ui.draggable.text();
            let zeeName = content.split(':')[0];
            console.log(name);

            // Which friend has that name?
            for (let i = 0; i <friends.length; i++) {
                if (friends[i].name === zeeName) {
                    friends[i].bestie = true;
                }
            }

            $("h2").empty();
            for (let i = 0; i < friends.length; i++) {
                appender(friends[i].name + ": " + friends[i].bestie);
            }
        }
    });
});