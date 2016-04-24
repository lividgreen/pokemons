$.getJSON('https://pokeapi.co/api/v2/pokemon', function(data) {
  for (var i = 0; i < 12; i++) {
    $('.pokeDiv').append('<div></div>');
    var pokeInfo = data.results;
    $('.pokeDiv > div:last-child').append(pokeInfo[i].name);
  }
});
