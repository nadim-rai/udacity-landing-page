let ul = document.querySelector('#navbar_ul');
let list = document.querySelectorAll('.section_container');
let active_section = document.querySelectorAll('.active_section');

//Dynamically adding li to ul (Navigation)
for(let i =0; i<list.length; i++){
    let li = document.createElement('li');
    let link = document.createElement('a');
 
    link.href = `#${list[i].id}`;
    link.innerHTML = list[i].dataset.nav;
    li.appendChild(link);
    li.className = "navbar_li";
    ul.appendChild(li);
}

