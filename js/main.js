let iconMood = document.querySelector(`.icon-mood`);
let gear = document.querySelector(`.gear`);
let colors = document.querySelectorAll(`.colors div`);

let links = Array.from(document.querySelectorAll(`.links li`));
let allsection = Array.from(document.querySelectorAll(`.allsection .data`));
let mood = document.querySelector(`.mood`);
gear.addEventListener(`click`,function(){
    iconMood.classList.toggle(`active`);
});   
mood.addEventListener(`click`,function(){
    document.body.classList.toggle(`dark`)
    document.querySelector(`.mood i`).classList.toggle('fa-sun')
});
colors.forEach(function(ele){
    ele.addEventListener('click',function(e){
        if(e.target.className === 'color-1'){
            document.body.style="  --text-black-800: orangered"
        }else if(e.target.className === 'color-2'){
            document.body.style="--text-black-800: orange"
        }else if(e.target.className === 'color-3'){
            document.body.style="--text-black-800: rgba(0, 128, 68, 0.952)"
        }else if(e.target.className === 'color-4'){
            document.body.style="--text-black-800: rgb(20, 35, 78)"
        }
    })
})

links.forEach((ele)=>{
    ele.addEventListener('click',function(e){
        links.forEach((l)=>{
            l.classList.remove('active')
        })
        allsection.forEach((el)=>{
            el.classList.remove('zindex')
        })
        if(e.currentTarget.id === 'home'){
            document.querySelector('.heading').classList.add('zindex')
        }else if(e.currentTarget.id === 'about'){
            document.querySelector('.about').classList.add('zindex') 
        }else if(e.currentTarget.id === 'portfoilo'){
            document.querySelector('.portfoilo').classList.add('zindex') 
        }else if(e.currentTarget.id === 'contact'){
            document.querySelector('.contact').classList.add('zindex') 
        }
        e.target.classList.add('active')
    })
})

let btns = Array.from(document.querySelectorAll('.card .text button'));
let obj = [
    {
        img:"img/protfoilo/p1.jpg",
        name:"Lorem, Ipsum Dolor.",
        p:`Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur . . .`
    },
    {
        img:"img/protfoilo/p2.jpg",
        name:"Lorem, Ipsum Dolor.",
        p:`Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur . . .`
    },
    {
        img:"img/protfoilo/p3.jpg",
        name:"Lorem, Ipsum Dolor.",
        p:`Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur . . .`
    },
    {
        img:"img/protfoilo/p4.jpg",
        name:"Lorem, Ipsum Dolor.",
        p:`Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur . . .`
    },
    {
        img:"img/protfoilo/p-5.jpg",
        name:"Lorem, Ipsum Dolor.",
        p:`Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur . . .`
    },
    {
        img:"img/protfoilo/p6.jpg",
        name:"Lorem, Ipsum Dolor.",
        p:`Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur . . .`
    },
]
let model = document.querySelector('.model');
let mark = document.querySelector('.mark');
mark.addEventListener('click',()=>{
    model.style.display='none'
})
function btn(){
    for(let i = 0 ; i<btns.length ; i++){
        btns[i].addEventListener('click',()=>{
            model.style.display='block'
            data(i)
        })
    }
}
btn()
function data(id){
    let cartona = ''
        console.log(obj[id])
        cartona +=`
        <div class="box w-100 h-100 pt-5">
            <div class="image">
                <img src="${obj[id].img}" class="w-100 h-100 mb-3" />
            </div>
            <div class="text px-5 pt-3">
                <h2>${obj[id].name}</h2>
                <p>${obj[id].p}</p>
            </div>
        </div>
        
        `
    document.querySelector('.model .container').innerHTML=cartona;

}




