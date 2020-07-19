'use strict'
{
  // DOM操作で加算、減算していく可能性有り、変数
  let now = new Date(); // 現在の時間
  let today = now.getDate(); // 今日の日付取得
  let year = now.getFullYear(); // 今日の年
  let month = now.getMonth() + 1; // 今日の月
  let week = now.getDay() // 今日の曜日
  //

  const Month_Of_Last_Date = new Date(year, month, 0).getDate(); // その月の最終日を求める、最終日は変動しないので定数
  const weekList = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]; // 曜日リスト、定数


  // テストエリア
  console.log(now)
  console.log(Month_Of_Last_Date)
  console.log(today)
  console.log(weekList[week])
  console.log(week);
  // 

  // メインの日付
  let one_of_date;
  let calender_week;
  let calender_date;
  let content;
  // カレンダー
  
  function calender(){
  const week_calender = document.getElementById('week_calender'); // calenderのid取得
  for (let i = 0; i <= 6; i++) {
    one_of_date = document.createElement('div');
    one_of_date.className = 'one_of_date';
    calender_week = document.createElement('div');
    calender_week.className = 'calender_week';
    calender_date = document.createElement('div');
    calender_date.className = 'calender_date';
    content = document.createElement('textarea');
    calender_week.textContent = weekList[week];
    calender_date.textContent = `${month}/${today}`;
    
  
      week++;
      today++;
      if (today > Month_Of_Last_Date) {
        today = 0;
        today++;
        month++;
  
  
  
      };
      if (week > 6) {
        week = -1 ;
        week++;
      }
  
      if(calender_week.textContent === "Sun"){
        calender_week.classList.add('sunday');
        calender_date.classList.add('sunday');

      }
      if(calender_week.textContent === "Sat"){
        calender_week.classList.add('saturday');
        calender_date.classList.add('saturday');
      console.log(week)
      }
  
      one_of_date.appendChild(calender_week);
      one_of_date.appendChild(calender_date);
      one_of_date.appendChild(content);
      week_calender.appendChild(one_of_date);
  
    }
  }
  calender();
  
  console.log(one_of_date)
  console.log(week_calender)
  // PREV
  const prev = document.getElementById('prev');
  prev.addEventListener('click',()=>{
    
    calender_week + 14;
    calender_date + 14;
    
    

  })
  // NEXT
  const next = document.getElementById('next');
  next.addEventListener('click',()=>{
    calender();
  })
  
}