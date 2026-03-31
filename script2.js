let html = '';
let html2 = '';

const darkMood = document.querySelector('.ddark')
.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
})

const backButton = document.querySelector('.back-button')
.addEventListener('click',()=>{
    history.back();
})
const urlParams = new URLSearchParams(location.search);
const countryName = urlParams.get('name');
const borderCountrisButton = document.querySelector('.border-countries-button');
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    // console.log(data);
    // console.log(Object.values(data[0].currencies));
    const country = data[0];
    let currency = '';
    let lang = '';
    if(country.currencies && country.languages){
        currency = Object.values(country.currencies).map(currency => currency.name).join(', ');
        lang = Object.values(country.languages).join(', ');
    }

  html = `
     <main>
        <img src="${country.flags.svg}" alt="">
         <div class="detail-main">
            <h3>${country.name.common}</h3>
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
                    <p><strong>Currencies:</strong>${currency}</p>
                    <p><strong>Languages:</strong>${lang}</p>
                </div>
            </div>
            
         </div>
    </main>   
    `

    if(country.borders){
        country.borders.forEach((borders)=>{
                fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    // console.log(data[0].name.common);
                    const borderCountryTag = document.createElement('a');

                    borderCountryTag.innerText = data[0].name.common
                    borderCountryTag.href = `/country.html?name=${data[0].name.common}`
                    // console.log(borderCountryTag); 
                    borderCountrisButton.appendChild(borderCountryTag)                    
                })
        })
    }

    // html2 = `
    //  <footer class="border-countries"><p ><strong>Border Countries:</strong>
    // <a href="#country.html"><button>France</button></a>
    // <a href="#country.html"><button>Germany</button></a>
    // <a href="#country.html"><button>Netherlands</button></a>
    // </p></footer>
    // `;


    document.querySelector('.detail-container').innerHTML = html;
    // document.querySelector('.border-countries').innerHTML = html2;
})



