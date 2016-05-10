$.getJSON('http://pokeapi.co/api/v2/pokemon', function(data){
  var result = data.results;
  var resultUrl = result[0].url;
  $.getJSON(resultUrl, function(pokeData){
    var pokeName = pokeData.name;
    var pokeType = pokeData.types;
    var pokeFirstAbil = pokeType[0].type.name;
    var pokeSecondAbil = pokeType[1].type.name;
    var pokeId = pokeData.id;
    $('.poke-img').css('background-image', 'url(http://pokeapi.co/media/img/' + pokeId + '.png)');
    $('.poke-name').append(pokeName);
    $('.poke-slot-1').append(pokeFirstAbil);
    $('.poke-slot-2').append(pokeSecondAbil);
  });
});
