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
let nav_li = document.querySelectorAll('.navbar_li');

//Scroll to respective section from navigation menu (Scroll to Anchor)
nav_li.forEach(ele => {
    ele.addEventListener('click', e =>{
        e.preventDefault();
        let ahref_id = ele.firstChild.getAttribute("href");
        let section_id = document.querySelector(ahref_id);
        section_id.scrollIntoView();
    })
})

window.addEventListener('scroll', e =>{
    let currentSection = '';
    list.forEach(section =>{
        let section_top = window.scrollY + section.getBoundingClientRect().top; //section location relative to the viewport
        if(section_top <= scrollY + 350){
            currentSection = section.id;
        }
    })

    //Highlight active navigation menu li (Navbar Menu Active State)
    nav_li.forEach(li =>{
       let li_id = li.firstChild.getAttribute("href").slice(1);
        li.classList.remove('active_li');
        if(li_id === currentSection){
            li.classList.add('active_li');
        }    
    })

});

