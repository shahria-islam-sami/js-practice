function noDuplicate(personList){
    for(const person of personList){
           const uniques = [];
        console.log(person);
        if(uniques.includes(person) === false){
            uniques.push(person);
        }
    }
}
const personList = ['abul','kabul', 'cabul','abul', 'babul','kabul', 'babul','bulbul','dabul','kabul', 'dabul','babul']
noDuplicate(personList);
