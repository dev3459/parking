let prenoms = ["pierre","paul","jacques"];
let monPrenom = prenoms.splice(0,1,"Gaetan");

document.getElementById('viewport').innerHTML = prenoms[0];