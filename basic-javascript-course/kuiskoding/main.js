// if (score >= 90){
//     result = 'Selamat! Anda mendapatkan nilai A.';
// }
// else if(score >= 80 ){
//     result = 'Anda mendapatkan nilai B.';
// }
// else if(score >= 70 ){
//     result = 'Anda mendapatkan nilai C.';
// }
// else if(score >= 60){
//     result = 'Anda mendapatkan nilai D.';
// }

// object
// let restaurant = {
//   name: "Bakso Mang Dicoding",
//   city: "Bandung",
//   favorite_drink: "Es Teh",
//   favorite_food: "Bakso",
//   isVegan: false,
// };

// let name = restaurant.name;
// let favoriteDrink=restaurant.favorite_drink;

// array
// let evenNumber = [];
// for (let i = 1; i < 100; i++) {
//     if( i % 2 === 0){
//         evenNumber.push(i);
//     }
// }
// console.log(evenNumber);

// map
// const priceInJPY = 5000;
// const currency = new Map([
//     ['USD',14000],
//     ['JPY',131],
//     ['SGD',11000],
//     ['MYR',3500],
// ]);
// console.log(currency);

// const priceInIDR = priceInJPY * currency.get("JPY");
// console.log(priceInIDR);

// function
// function minimal(a, b) {
//   if (a < b) {
//     return a;
//   } else if (b < a) {
//     return b;
//   } else if (a == b && b == a) {
//     return a;
//   }
// }
// console.log(minimal(1, 4));
// console.log(minimal(3, 2));
// console.log(minimal(3, 3));

// function findIndex(array, number) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findIndex([1, 2, 3, 4, 5], 3));

// class
// class Animal{
//   constructor(name,age,isMammal){
//     this.name = name;
//     this.age = age;
//     this.isMammal = isMammal;
//   }
// }

// class Rabbit extends Animal{
//   constructor(name,age,isMammal){
//     super(name,age,true);
//   }
//    eat(){
//     return`${this.name} sedang makan!`;
//   }
// }

// class Eagle extends Animal{
//   constructor(name,age,isMammal){
//     super(name,age,false);
//   }
//   fly(){
//     return `${this.name} sedang terbang!`;
//  }
// }

// const myRabbit = new Rabbit('Labi',2);
// const myEagle = new Eagle('Elo',4);
// console.log(myRabbit,'\n',myEagle,'\n',myRabbit.eat(),'\n',myEagle.fly());

// functional programming with filter() and map()
// const books = [
//     { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
//     { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
//     { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
//     { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
//     { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
//     { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
//     { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
//   ];

// const bookFilter = books.filter((books) => books.sales > 1000000 );
// const greatAuthors = bookFilter.map((bookFilter)=>{return `${bookFilter.author} adalah penulis buku ${bookFilter.title} yang sangat hebat!`});
// console.log(greatAuthors);

// try catch
// class ValidationError extends Error{
//     constructor(message){
//         super (message);
//         this.name = "ValidationError";
//     }
// }

// try {
    
// } catch (error) {
    
// }

// function validateNumberInput(a,b,c){
//     if (!typeof a !="number") {
//         throw ValidationError('Argumen pertama harus number');
//     } else if (!typeof b !="number") {
//         throw ValidationError('Argumen kedua harus number');
//     }else if(!typeof c !="number"){
//         throw ValidationError('Argumen ketiga harus number');
//     }
// }

// promisefy
// const { promisify } = require('util');
// function getProvinces(countryId, callback) {
//     setTimeout(() => {
//       if (countryId === 'id') {
//         callback(null, [
//           { id: 'id-jk', name: 'Jakarta' },
//           { id: 'id-bt', name: 'Banten' },
//           { id: 'id-jr', name: 'Jawa Barat' },
//         ]);
//         return;
//       }

//       callback(new Error('Country not found'), null);
//     }, 1000);
//   }

//   const getProvincesPromise = promisify(getProvinces);

//   getProvincesPromise('id')
//   .then(provinces =>console.log(provinces))
//   .catch(err =>console.log(err.message));


//   module.exports = { getProvinces: getProvincesPromise };
// async await
// const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

// async function getTollAccess() {
//     try {
//         const card = await buyTollRoadCard(25);
//         const updateCard = await topUpBalance(card,10);
//         await useTollRoad(updateCard);

//     } catch (error) {
//         console.log(error.message);
//     }
//   return;
// }

try {
    const arr = [1,2,3,4];
    for (let i = 0; i <= 4; i++) {
       console.log(arr[i]);
        
    }
} catch (e) {
    console.log("out of bounds");
}