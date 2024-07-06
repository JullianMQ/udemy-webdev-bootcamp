let lists = document.querySelectorAll('li');
let len_of_list = lists.length;
lists[len_of_list - 1].innerHTML = "Lee";

// Does the same thing
document.querySelector('.list').firstElementChild.style.color = 'red';
// document.querySelector('.list a').style.color = 'red';

// Change the background color of the button
document.querySelector('button').style.backgroundColor = 'yellow';

document.querySelector('h1').classList.toggle('huge')

console.log(document.querySelector('a').attributes);
console.log(document.querySelector('a').getAttribute('href'));
console.log(document.querySelector('a').setAttribute('href', 'https://www.bing.com'));
console.log(document.querySelector('a').getAttribute('style'));
