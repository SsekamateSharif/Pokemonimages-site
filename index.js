// we get the button element from the HTML by its id and we add a click event listener to it 
// create a function that fetches the data of the pokemons and displays the pokemon image on our site
// get the textfield element by its id and access its value and use it in the place of the pokemon name 
let InputEl = document.getElementById("input-el");
let ImgEL = document.querySelector("#Pokemonimg");
async function fetchData(){ // the async keyword makes this function return a promise
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${InputEl.value}`); // we use the name that we typed in the textfield as the name for our pokemon
        // we use await since this returns a promise 
        const data = await response.json(); // converting the data retrieved into a json file. also returns a promise 
        // getting the image source from the data json file retrieved 
        let Imgsrc = data.sprites.front_default;
        ImgEL.src = Imgsrc;
    }
    catch(error){
        let errorEl = document.getElementById("error");
        errorEl.textContent = "An Error occured: ", error;
    }
}

// adding an event listener to the fetch data button 
// getting the button element by its id from HTML 
let FetchDataBtn = document.getElementById("fetch-data");
// then add the event listener, whereby if the button is clicked the fetchData function is called and it runs 
FetchDataBtn.addEventListener("click", () =>{
    fetchData();
    InputEl.value = "";
})