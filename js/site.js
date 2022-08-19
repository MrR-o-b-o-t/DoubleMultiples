// get values from user
function getValues() {
    let dValue = document.getElementById("dValue").value
    let mValue = document.getElementById("mValue").value

    dValue = parseInt(dValue)
    mValue = parseInt(mValue)

if(Number.isInteger(dValue) && Number.isInteger(mValue)) {
    let numArray = findMultiples(dValue, mValue)
    displayResults(numArray)
} else {
    alert("You must enter integers!")
}}

// find multiples for users values
function findMultiples(dValue, mValue){
    let returnArray = []
    
    for (let i = 1; i <= 100; i++) {
        let value = ((i % dValue == 0 ? "Double" : '') + (i % mValue == 0 ? " Multiple" : '') || i)
        returnArray.push(value)
    }
    return returnArray
}

// display values to screen
function displayResults(numArray) {
    let tableBody = document.getElementById("results")
    let templateRow = document.getElementById("dmTemplate")

    tableBody.innerHTML = ""

    for (let i = 0; i < numArray.length; i+=5) {
        let tableRow = document.importNode(templateRow.content, true)
        let rowCols = tableRow.querySelectorAll("td")
        rowCols[0].textContent = numArray[i]
        rowCols[1].textContent = numArray[i + 1]
        rowCols[2].textContent = numArray[i + 2]
        rowCols[3].textContent = numArray[i + 3]
        rowCols[4].textContent = numArray[i + 4]

        tableBody.appendChild(tableRow)
        
    }
}