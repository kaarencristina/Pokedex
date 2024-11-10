const pokemonname=document.querySelector('.pokemon_name')
const pokemonnumber=document.querySelector('.pokemon_number')
const pokemonimg=document.querySelector('.pokemon_img')
const form=document.querySelector('.form')
const buttonprev=document.querySelector('.btn-prev')
const buttonnext=document.querySelector('.btn-next')


let searchPokemon=1;

const fetchPokemon=async(pokemon)=>{
    const APIResponde= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponde.status===200){
        const data=await APIResponde.json();
    return data;
    }

    
}

const renderPokemon=async(pokemon)=>{

    pokemonname.innerHTML='Loading...'
    pokemonnumber.innerHTML='';
 const data= await fetchPokemon(pokemon);
if(data) {
    pokemonimg.style.display='block';
    pokemonname.innerHTML=data.name;
    pokemonnumber.innerHTML=data.id;
    pokemonimg.src=data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value='';
    searchPokemon=data.id;

}else{
    pokemonimg.style.display='none';
    pokemonname.innerHTML="not found";
    pokemonnumber.innerHTML='';
}
   
}

form;addEventListener('submit',(event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());

});


buttonprev;addEventListener('click',()=>{
    if(searchPokemon>1){
    searchPokemon-=1;
    renderPokemon(searchPokemon);}

});

buttonnext;addEventListener('click',()=>{
    searchPokemon+=1;
    renderPokemon(searchPokemon);

});


renderPokemon(searchPokemon);