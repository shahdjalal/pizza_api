

async function getMeal(){

    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);

    const data= await response.json();

    const  recipes= data.recipes;

    console.log( recipes);

    const result= recipes.map(function(recipe){

        return `
        
          <div class="meal">
 
                <img src="${recipe.image_url}" >

                <h2>${recipe.title}</h2>
                
          
                </div>

        `;

    
}).join('')
    
document.querySelector( ".pizza .row").innerHTML = result;

}

getMeal();
