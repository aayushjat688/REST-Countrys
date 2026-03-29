let html = '';
const urlParams = new URLSearchParams(location.search);
const countryName = urlParams.get('name');

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    const country = data[0];
    const cName = country.name.official
    const population = country.population;
    
    html = `
     <main>
        <img src="${country.flags.svg}" alt="">
         <div class="detail-main">
            <h3>${cName}</h3>
            <div class="detail">
               <div class="left-detail">
                 <p class="native-name"><strong>Native Name:</strong>${cName}</p>
                <p><strong>Population:</strong>${population}</p>
                <p><strong>Region:</strong>${country.region}</p>
                <p><strong>Sub Region:</strong>${country.subregion}</p>
                <p><strong>Capital:</strong>${country.capital}</p>
               </div>
                <div class="right-detail">
                    <p><strong>Top Level Domain:</strong>${country.tld[0]}</p>
                    <p><strong>Currencies:</strong>${country.currencies[0]}</p>
                    <p><strong>Languages:</strong>${country.languages[0]}</p>
                </div>
            </div>
            
         </div>
    </main>
    `
    document.querySelector('.detail-container').innerHTML = html;
})



