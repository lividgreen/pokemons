$.getJSON('https://pokeapi.co/api/v2/pokemon', function(data){
  var result = data.results;
  var resultUrl = result.url;
  $.getJSON(resultUrl, function(pokeData){
    var pokeName = pokeData.name;
    var pokeType = pokeData.types;
    var pokeFirstAbil = pokeType[1].name;
    var pokeSecondAbil = pokeType[0].name;
    var pokeId = pokeData.id;
    $('.poke-img').css('background-image', url = 'https://pokeapi.co/media/img/' + pokeId + '.png');
    $('.poke-name').append(pokeName);
    $('.poke-slot-1').append(pokeFirstAbil);
    $('.poke-slot-2').append(pokeSecondAbil);
  });
});
