// Write your code here!
/*const element = document.createElement('div');
document.body.append(element);

const ul = document.createElement('ul');
for (let i=0;i<3;i++){
    const li = document.createElement('li');
    li.textContent = (i + 1).toString();
    ul.append(li);
}
element.append(ul);
//this are the times that you clearly see if you understood the concept or not

const newli = document.createElement('li');//this is also a method 

newli.textContent = 'this is accurate'
ul.append(newli);
console.log(newli);

//can you not test it on the console or what 

const main = document.getElementById('main');
main.innerHTML = 
'<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic something.'
 
//very interesting 
//change properties on dom nodes 
main.style.color='blue';
main.style.background='green';
main.style.fontFamily='french';
main.style.font='small'
main.className='main';
main.id='main';
main.classList.add('of','the','code'); //do not forget that these are methods

//how to remove elements from the dom 
//we use a method called removeChild()
const secondChild = ul.querySelector('li')
console.log(secondChild);
ul.removeChild(secondChild);//should have been first child 
const newChild = ul.getElementsByTagName('li')[1]
console.log(newChild);
newChild.remove();
//all of this work flawlessly*/
main.remove();


let newHeader = document.createElement('h1');
//newHeader.textContent = 'Hi'
//newHeader.id='victory'
//function championName(name){
  //  let NAME = name.toUpperCase()
   //return newHeader.textContent = `${NAME} is the champion`
//} 
//newHeader.textContent = 'YOUR-NAME is the champion.'

newHeader.textContent = 'VICTOR is the champion'
newHeader.id = 'victory'
document.body.append(newHeader);





//this test also does not make any sense to me



















