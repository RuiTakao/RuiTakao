'use strict';

const todo = ['デザインカンプ作成','データ整理','勉強会申し込み','牛乳買う','歯医者に行く'];

console.log(todo[0]);
console.log(todo[3]);
const output = document.getElementById('output');
const ul = document.createElement('ul');
output.appendChild(ul);
todo.push('魚捌く','アニメ観賞');
// 配列の後ろに追加
todo.unshift('起きる','歯磨き');
// 配列の前に追加

for(let item of todo){
  // for of文 繰り返し処理

  const li = `<li>${item}</li>`;
  ul.insertAdjacentHTML('beforeend',li);
  // 取得した要素.insertAdjacentHTML('投入する場所',投入する要素);
}

const a = `<a href='' class='color'>Hello World</a>`;
ul.insertAdjacentHTML('beforebegin',a);