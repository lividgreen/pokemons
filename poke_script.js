$.getJSON('http://pokeapi.co/api/v2/pokemon/', function(pokemon){
  for(var i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].name);
  }
});
