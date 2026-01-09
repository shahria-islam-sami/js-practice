function onlyOdd(numbers){
    console.log(numbers);
    const odds = [];
    for(const num of numbers){
        // console.log('The numbers are : ',num);

        if(num%2 === 1){
            console.log(num);
            odds.push(num);
        }
    }
return odds;
}
const numbers = [5, 4, 8,9,2 ,1,7];
const odds = onlyOdd(numbers);
console.log(odds);
