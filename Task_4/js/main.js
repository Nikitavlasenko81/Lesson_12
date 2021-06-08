let allLi = document.querySelectorAll('li')

for (let li of allLi){
    let text = li.innerHTML
    console.log(text)       //текст едементов
    console.log(li.querySelector('li').length) // количество потомков каждого элемента
}








