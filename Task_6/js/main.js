
let list = document.querySelector('.list');

do {
    let text = prompt("enter you text")
    if(!text) break
    let li = document.createElement('li');
    li.textContent = text;
    list.append(li);
}while (true)











