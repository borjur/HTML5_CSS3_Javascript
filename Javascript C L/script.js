var friends = {};
friends.boris = {
  firstName: "Boris",
  lastName: "Jurosevic",
  number: "(801) 111-1111",
  address: ['Herbert Avenue','Salt Lake City','UT','84115']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Rocky",
  number: "(801) 222-2222",
  address: ['Free Way Avenue','Murray','UT','84102']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name){
    name = name.toUpperCase();
    var matches = {};
    for (var look in friends){
        if (friends[look].firstName.toUpperCase() === name){
            matches[look] = friends[look];
        }
    }
    return matches;
};
console.log(search("Boris"));
console.log(search("Steve"));
