const packingList = ['bowls', 'plates', 'pots', 'pans', 'eating utensils', 'glasses', 'cups', 'cooking utensils'];


//first method
for (let i = 0; i < packingList.length; i++){
    console.log(packingList[i]);
}


console.log('===============================================================')
//second method
packingList.forEach(item =>{
    console.log(item);
})