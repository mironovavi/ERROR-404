let phrase = "Сервер должен отвечать на входящие HTTP-запросы. Например, когда вы вводите URL в адресную строку браузера, то отправляется запрос на сервер, чтобы тот вернул соответствующую веб-страницу. Если страница была перемещена, удалена или её не существовало вовсе, сервер вернёт ошибку 404."

let button = document.querySelector(".button");
let explanation = document.querySelector(".explanation");

button.addEventListener('click', function(){
    explanation.textContent = phrase ;
});