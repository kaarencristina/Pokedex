const pokemonname=document.querySelector('.pokemon_name')


const fetchPokemon=async(pokemon)=>{
    const APIResponde= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data=await APIResponde.json();
    return data;
}

const renderPokemon=async(pokemon)=>{

    const data= await fetchPokemon(pokemon);
    pokemonname.innerHTML=data.name;
}