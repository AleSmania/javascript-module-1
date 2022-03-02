function returnBornDate (age){
    const year=2022
    return year - age
}
console.log(returnBornDate (38));
function introduceYourself (personName, age) {
return "Hola me llamo" + " " + personName + " y nací en"+" " +returnBornDate (age)
}
console.log (introduceYourself("Alejandra", 38));
