

let html = '';
let countryContainer = document.querySelector('.countries-container')
const countryCard = document.querySelector('.country-card')
fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    data.forEach((country)=>{

        const flag = country.flags.svg;
        const name = country.name.common;
        const population = country.population;
        const region = country.region;
        const capital = country.capital;
       
        
        

         html += `
        <a href="
        /country.html?name=${name}
        "><div class="country-card">
                <img src="${flag}" alt="flag">
                 <div class="country-card-text-item">
                    <h3>${name}</h3>
               
                 <p><strong>Population:</strong>${population}</p>
                    <p><strong>Region:</strong>${region}</p>
                    <p><strong>Capital:</strong>${capital}</p>
                 </div>
                 </div>
            </a>
        `
        
    })
    countryContainer.innerHTML = html;
})

