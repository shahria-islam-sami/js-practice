function noDuplicate(personList){
    for(const person of personList){
           const uniques = [];
        if(uniques.includes(person) === false){
            uniques.push(person);
        }
    }
    return uniques;
}
const personList = ['abul','kabul', 'cabul','abul', 'babul','kabul', 'babul','bulbul','dabul','kabul', 'dabul','babul']
const uniqueArray = noDuplicate(personList);
