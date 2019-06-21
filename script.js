let searchSec = document.querySelector("#input-sec")
let clearBtn = document.querySelector("#clear-btn")
let searchInput = document.querySelector("#country-input")
let searchBtn = document.querySelector("#country-btn")
let allBtn = document.querySelector("#all-btn")
let name = document.querySelector("#name")
let topLevelDomain = document.querySelector("#topLevelDomain")
let capital = document.querySelector("#capital")
let currency = document.querySelector("#currency")
let flagImg = document.querySelector(".flag")
let allSearchToglle = false
let tempNewSectionElement
let tempNewFlagElement
let tempNewDetailsElement
let tempNewNameElement 
let tempNewNameValElement 
let tempNewTLPElement 
let tempNewTLPValElement
let tempNewCapitalElement 
let tempNewCapitalValElement 
let tempNewCurrElement 
let tempCurrUL
let tempCurrCodeLI
let tempCurrNameLI
let tempCurrSymbolLI
let tempNewCurrValElement
let tempNewIMGElement

let drawSec = (countries) => {
    console.log(countries)
    for(let country of countries){
        console.log(country.name)
        tempNewSectionElement = document.createElement("section")
        tempNewSectionElement.className= "each-all-sec"
        tempNewFlagElement = document.createElement("div")
        tempNewFlagElement.className="flag"
        tempNewFlagElement.style.backgroundImage = `url('${country.flag}')` 
        tempNewDetailsElement = document.createElement("div") 
        tempNewDetailsElement.className="details"
        tempNewSectionElement.appendChild(tempNewDetailsElement)
        tempNewSectionElement.appendChild(tempNewFlagElement)

        // name fildes
        tempNewNameElement = document.createElement("h2")
        tempNewNameElement.textContent = "Name:"
        tempNewNameValElement = document.createElement("h2")
        tempNewNameValElement.textContent = country.name
        tempNewNameValElement.className = "txt"
        tempNewDetailsElement.appendChild(tempNewNameElement)
        tempNewDetailsElement.appendChild(tempNewNameValElement)

        // topleveldomain fildes
        tempNewTLPElement = document.createElement("h2")
        tempNewTLPElement.textContent = "Top Level Domain:"
        tempNewTLPValElement = document.createElement("h2")
        tempNewTLPValElement.textContent = country.topLevelDomain
        tempNewTLPValElement.className = "txt"
        tempNewDetailsElement.appendChild(tempNewTLPElement)
        tempNewDetailsElement.appendChild(tempNewTLPValElement)

        // capital fildes
        tempNewCapitalElement = document.createElement("h2")
        tempNewCapitalElement.textContent = "capital:"
        tempNewCapitalValElement = document.createElement("h2")
        tempNewCapitalValElement.textContent = country.capital || "none"
        tempNewCapitalValElement.className = "txt"
        tempNewDetailsElement.appendChild(tempNewCapitalElement)
        tempNewDetailsElement.appendChild(tempNewCapitalValElement)

        // currency fildes
        tempNewCurrElement = document.createElement("h2")
        tempNewCurrElement.textContent = "currency:"
        tempCurrUL = document.createElement("ul")
        tempCurrNameLI = document.createElement("li")
        tempCurrCodeLI = document.createElement("li")
        tempCurrSymbolLI = document.createElement("li")
        tempCurrNameLI.innerHTML = `<h2 class="curr-h2">Name: </h2><span class="txt"> ${country.currencies[0].name}</span>`
        tempCurrCodeLI.innerHTML = `<h2 class="curr-h2">Code: </h2><span class="txt"> ${country.currencies[0].code}</span>`
        tempCurrSymbolLI.innerHTML = `<h2 class="curr-h2">Symbol: </h2><span class="txt"> ${country.currencies[0].symbol}</span>`
        // tempNewCurrValElement = document.createElement("h2")
        // tempNewCurrValElement.textContent = JSON.stringify(country.currencies)
        // tempNewCurrValElement.className = "txt" 
        tempNewDetailsElement.appendChild(tempNewCurrElement)
        // tempNewDetailsElement.appendChild(tempNewCurrValElement)
        tempCurrUL.appendChild(tempCurrNameLI)
        tempCurrUL.appendChild(tempCurrCodeLI)
        tempCurrUL.appendChild(tempCurrSymbolLI)
        tempNewDetailsElement.appendChild(tempCurrUL)

        document.body.appendChild(tempNewSectionElement)

    }
}

clearBtn.addEventListener("click", () => {
    location.reload()
})

searchBtn.addEventListener("click", () => {
    searchSec.style.display = 'none'
    let url = `https://restcountries.eu/rest/v2/name/${searchInput.value}?fields=name;capital;flag;topLevelDomain;currencies`
    console.log(url)
    $.get(url,drawSec)
})

allBtn.addEventListener("click", () => {
    if(!allSearchToglle){
        allSearchToglle = true
        // location.reload();
        searchSec.style.display = 'none'
        allBtn.textContent = 'Search'
        let url = `https://restcountries.eu/rest/v2/all/?fields=name;capital;flag;topLevelDomain;currencies`
        $.get(url,drawSec)
    } else {
        // location.reload();
        searchSec.style.display = 'block'
        allBtn.textContent = 'All'
        allSearchToglle = false
    } 
})



