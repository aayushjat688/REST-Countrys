let html = '';
const fileterByRegion = document.querySelector('.filter-by-region')
let countryContainer = document.querySelector('.countries-container')
const countryCard = document.querySelector('.country-card')
const searchContainer = document.querySelector('.search-container input')


let allCountriesData = '';

const darkMood = document.querySelector('.ddark')
.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
})


fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    fetchWork(data)
    allCountriesData=data
})



fileterByRegion.addEventListener('change', (e)=>{
        html = '';
    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
.then((res)=>{
    return res.json();
})
.then(fetchWork)
})



searchContainer.addEventListener('input',(e)=>{
// console.log(e.target.value);
    // console.log(allCountriesData);
    
        const filteredCountry = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
        // console.log(filteredCountry);
        html = '';
        fetchWork(filteredCountry)
})

function fetchWork(data){


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
}