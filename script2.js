let html = '';
let html2 = '';

const urlParams = new URLSearchParams(location.search);
const countryName = urlParams.get('name');

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    // console.log(data);
    // console.log(Object.values(data[0].currencies));
    const country = data[0];
    // console.log(country.borders[0]);


    html = `
     <main>
        <img src="${country.flags.svg}" alt="">
         <div class="detail-main">
            <h3>${country.name.official}</h3>
            <div class="detail">
               <div class="left-detail">
                 <p class="native-name"><strong>Native Name:</strong>${country.name.official}</p>
                <p><strong>Population:</strong>${country.population}</p>
                <p><strong>Region:</strong>${country.region}</p>
                <p><strong>Sub Region:</strong>${country.subregion}</p>
                <p><strong>Capital:</strong>${country.capital}</p>
               </div>
                <div class="right-detail">
                    <p><strong>Top Level Domain:</strong>${country.tld[0]}</p>
                    <p><strong>Currencies:</strong>${Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
                    <p><strong>Languages:</strong>${Object.values(country.languages).join(', ')}</p>
                </div>
            </div>
            
         </div>
    </main>   
    `
    
    document.querySelector('.detail-container').innerHTML = html;
    document.querySelector('.border-countries').innerHTML = html2;
})



