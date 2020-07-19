<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>tasks</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <style>
  html {
  height: 100%;
}
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  background-color: aqua;
  margin: 0;
  flex-grow: 0;
  height: 50px;
  
}
.header > a {
  height: 50px;
  line-height: 50px;
}
h1 {
  padding-left: 10px;
  text-align: center;
  margin: 0;
}
main {
  margin: 0;
  background: ghostwhite;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.task {
  background-color: white;
  border-radius: 40px;
  width: 600px;
  height: 550px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.task_head {
  background: blue;
  margin: 0;
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: center;
}
.task_head>a {
  display: block;
  margin: 0;
  font-size: 30px;
  text-align: center;
  color:ghostwhite;
  padding-left: 100px
}
ul {
  list-style: none;
  text-decoration: none;
}
ul > li > a {
  color: ghostwhite; 
}
.task_main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.task_list {
  display: flex;
  border-bottom: 1px solid gray;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  width: 400px;
  height: 40px;
}
.tasks {
  font-size: 20px;
}
.delete {
  line-height: 40px;
  text-align: bottom;
  font-size: 20px;
}
footer {
  background-color: cornflowerblue;
  margin: 0;
  height: 50px;
}
  </style>
</head>
<body class="col">
  <header>
    <div class="header row">
      <a class="col-1"></a>
      <h1 class="col-10">Dai4sha Self-management Tool</h1>
      <a class="col-1">新規登録</a>
    </div>
  </header>
  <main>
    <div class="task shadow">
      <div class="task_head row">
      <a class="col-10" href="{{ url('/') }}">2020/6/9 Mon</a>
        
        <ul class="col-2">
        <li><a href="{{ url('/create') }}">Create</a></li>
          <li><a href="{{ url('/edit') }}">Edit</a></li>
        </ul>
        </div>
      <div class="task_main">
        @foreach($tasks as $task)
            <div class="task_list">
              <a class="tasks">
                  {{ $task->title }}
              </a>
              <a class="delete">
                 ×
              </a>
            </div>
        @endforeach
      </div>
    </div>
  </main>
  <footer>
    <h1>Dai4sha.Co.Ltd</h1>
  </footer>
  <script></script>
</body>
</html>