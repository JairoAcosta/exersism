const recipe1 = {
      sauce: 0.5,
      noodles: 250,
      meat: 150,
      tomatoes: 3,
      onion: 0.5,
    };




function scaleRecipe(objeto,numPorciones) {
  let valor = numPorciones/2;
  let newRecipe={};
  for (const receta in objeto){
    newRecipe[receta]=objeto[receta]*valor;
  }
  console.log(newRecipe);
}

scaleRecipe(recipe1,4);

