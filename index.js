// Element by id
// let Id1=document.getElementById("Id1")
// Id1.innerHTML = "mahmud";

// Element by class name
// let mahmud= document.getElementsByClassName('mahmud')[0];
// mahmud.innerHTML="nabi";

// Element by Name
// let d = document.getElementsByName('d')[0];
// d.innerHTML="mahmud"

// Element by tag name
// let tagname=document.getElementsByTagName('h4')[0]
// tagname.innerHTML="Tag Name"

// click event

// function clickMe(){
//     // document.write('hi parvaz');
//     document.getElementById("time").innerHTML=Date();
// }

//traversing elements child to parent
//  let child=document.querySelector('.pnote');
//  console.log(child.parentNode);

// siblings elements next
// let next=document.querySelector(".sibling");
// console.log(next.nextElementSibling);

// sibling elements previous
// let pre=document.querySelector('.sibling');
// console.log(pre.previousElementSibling);
// next.textContent  = "This is updated content for item 4";

// manipulating elements
// let div=document.createElement("div");
// div.innerHTML="<p>create a div by javascript</p>";
// document.body.appendChild(div);

//id add
// div.id="mahmudID";

//class add
// div.className="mahmudClass";

//text add
// let text=document. createTextNode("This is displayed by createTextNode method");
// div.appendChild(text);

//add element in div
// let h1=document.createElement("h1");
// h1.textContent="this is h1 tag";
// div.appendChild(h1);

// practise
// let ul= document.createElement("ul");
// ul.id="menu";
// document.body.appendChild(ul);
// let li1=document.createElement('li');
// let li2=document.createElement('li');
// let li3=document.createElement('li');
// let li4=document.createElement('li');
// li1.textContent="home";
// li2.textContent="about";
// li3.textContent="blog";
// li4.textContent="contact";
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);


// let items=['home','about','blog','contact'];
// items.forEach(text=>{
//     let li=document.createElement('li');
//     li.textContent=text;
//     ul.appendChild(li);
// })

// function createMenu(){
//     let ul= document.createElement("ul");
// ul.id="menu";
// document.body.appendChild(ul);

// let items=['home','about','blog','contact'];
// items.forEach(text=>{
//     let li=document.createElement('li');
//     li.textContent=text;
//     ul.appendChild(li);
// })
// }

//document fragment
// let languages = ['JS', 'TypeScript', 'Elm', 'Dart','Scala'];
// let lan=document.querySelector("#language");
// let fragment=new DocumentFragment();
// languages.forEach((language)=>{

//     let li=document.createElement("li");
//     li.textContent=language;
//     fragment.appendChild(li);
// })
// lan.appendChild(fragment);

// insertBefore
// let menu=document.querySelector("#menu");
// let li=document.createElement("li");
// li.textContent="Home    "
// menu.insertBefore(li,menu.firstChild);
// menu.insertBefore(li,menu.firstElementChild);

// Append
// let menu=document.querySelector("#name ");
// names=['Newaz','mamun','parvaz'];
// let m= names.map((name)=>{
//     let li=document.createElement("li");
//     li.textContent=name;
//     return li;
// })
// menu.append(...m);

// Prepend
// let menu=document.querySelector("#name ");
// names=['Newaz','mamun','parvaz'];
// let m= names.map((name)=>{
//     let li=document.createElement("li");
//     li.textContent=name;
//     return li;
// })
// menu.prepend(...m);

