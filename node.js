//i will have to experiment with everything 
let main =document.createElement('main')
main.id= 'main'
main.className ='main'

let div = document.createElement('div')
main.append(div);
document.body.append(main);
 let p = document.createElement('p')

 p.textContent='nice'
 p.style.color = 'red'
 p.style.background = 'green'
 div.appendChild(p);
 //it works i have confirmed it does 
//if i remember well the for loop is automatically executed
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
div.append(ul);

let div2 = document.createElement('div')
div2.innerHTML= 
'<h1>the title</h1><p>the title again</p>'
main.appendChild(div2);
main.classList.remove('main');
main.classList.add('this','is','real')
//it seems class names have the dots between them

//in removing it works like append 
//the parent or child then what to delete
//document.body.remove(main)
//it works

//what about remove on its own 
//p.remove()
//also works





