'use strict';

const jsBook = {
  title: 'JavaScript入門',
  price: 2500,
  stock: 3,
};

// console.log(jsBook);
// console.log(jsBook.title);
// console.log(jsBook['price']);
// jsBook.stock = 10;
// console.log(jsBook.stock);

for(const p in jsBook){
  // オブジェクトのプロパティを全て読み取るループ文
  console.log(`${p}=${jsBook[p]}`);
}

document.getElementById('title').textContent = jsBook.title;
document.getElementById('price').textContent = `${jsBook.price}円`;
document.getElementById('stock').textContent = jsBook.stock;