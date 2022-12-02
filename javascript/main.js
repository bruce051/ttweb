let users = document.querySelector('.users');
let icons = document.querySelectorAll('.btn__icons');
let cr = document.querySelector('.cr');
let userName = document.querySelector('.right_usr-name')
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then (res => mapper(res))
function mapper(data) {
    let sldata = data.slice(0,2)
    sldata.forEach((e,i)=> {
        let newSec = document.createElement('li')
        newSec.innerHTML = `
        <div class="cc user1" id="${e.id}">
            <div class="user__letf">
                <img class="" src="./img/user.webp" alt="">
            </div>
            <div class=" user__info">
                <h3 class=""user__name" value="${i}">${e.name}</h3>
    
                <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing</p>
            </div>
        </div>
        `
        users.appendChild(newSec)

        let users1 = document.querySelectorAll('.user1')
        users1.forEach(e =>{
            e.addEventListener('click', ()=>{
                let there = document.querySelector('.there')
                there.innerHTML = " "
                if (e.id == 1) {
                    userName.textContent = 'Leanne Graham'



                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => comn(res))
                    function comn(pas) {
                        let slpas = pas.slice(4,8)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'meLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => com(res))
                    function com(pas) {
                        let slpas = pas.slice(0,4)
                        
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'thereLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })
                    }




                }
                if (e.id == 2) {
                    userName.textContent = 'Ervin Howell'

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => com(res))
                    function com(pas) {
                        let slpas = pas.slice(8,15)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'thereLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })


                    }



                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => comn(res))
                    function comn(pas) {
                        let slpas = pas.slice(4,8)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'meLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi) 
                        })}


                }
            })
        })
}
)}
icons.forEach(e =>{
    e.addEventListener('click', (k)=>{
        users.innerHTML = ''
         let iid = k.target.id

if (iid == 1) {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then (res => mapper(res))
            function mapper(data) {
            let sldata = data.slice(2,4)
            sldata.forEach((e,i)=> {
                let newSec = document.createElement('li')
                
                newSec.innerHTML = `
                <div class="cc user1" id="${e.id}">
                    <div class="user__letf">
                        <img class="" src="./img/user.webp" alt="">
                    </div>
                    <div class=" user__info">
                        <h3 class=""user__name" value="${i}">${e.name}</h3>
            
                        <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing</p>
                    </div>


                </div>
                `
                users.appendChild(newSec)

                
                let users1 = document.querySelectorAll('.user1')
                users1.forEach(e =>{
                e.addEventListener('click', ()=>{
                    let there = document.querySelector('.there')
                    there.innerHTML = " "
                if (e.id == 3) {
                    userName.textContent = 'Clementine Bauch'

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => com(res))
                    function com(pas) {
                        let slpas = pas.slice(12,17)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'thereLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })


                    }


                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => comn(res))
                    function comn(pas) {
                        let slpas = pas.slice(17,21)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'meLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}
                }
                if (e.id == 4) {
                    userName.textContent = 'Patricia Lebsack'


                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => comn(res))
                    function comn(pas) {
                        let slpas = pas.slice(29,34)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'meLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => com(res))
                    function com(pas) {
                        let slpas = pas.slice(21,29)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'thereLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })


                    }


                }
            })
        })


    });
}}


if (iid == 2) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (res => mapper(res))
    function mapper(data) {
    let sldata = data.slice(4,6)
    sldata.forEach((e,i)=> {
        let newSec = document.createElement('li')
        
        newSec.innerHTML = `
        <div class="cc user1" id="${e.id}">
            <div class="user__letf">
                <img class="" src="./img/user.webp" alt="">
            </div>
            <div class=" user__info">
                <h3 class=""user__name" value="${i}">${e.name}</h3>
    
                <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing</p>
            </div>


        </div>
        `
        users.appendChild(newSec)

        let users1 = document.querySelectorAll('.user1')
        users1.forEach(e =>{
            e.addEventListener('click', ()=>{
                let there = document.querySelector('.there')
                there.innerHTML = " "
                if (e.id == 5) {
                    userName.textContent = 'Chelsey Dietrich'

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => comn(res))
                    function comn(pas) {
                        let slpas = pas.slice(38,40)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'meLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}
                        

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => com(res))
                    function com(pas) {
                        let slpas = pas.slice(42,46)
                        slpas.forEach(e =>{
                        
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'thereLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })


                    }
                }
                if (e.id == 6) {
                    userName.textContent = 'Mrs. Dennis Schulist'

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => com(res))
                    function com(pas) {
                        let slpas = pas.slice(46,50)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'meLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}
                        
                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => comn(res))
                    function comn(pas) {
                        let slpas = pas.slice(50,54)
                        slpas.forEach(e =>{
                        
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'thereLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}
                }
            })
        })



});
}}


if (iid == 3) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (res => mapper(res))
    function mapper(data) {
    let sldata = data.slice(6,8)
    sldata.forEach((e,i)=> {
        let newSec = document.createElement('li')
        
        newSec.innerHTML = `
        <div class="cc user1" id="${e.id}">
            <div class="user__letf">
                <img class="" src="./img/user.webp" alt="">
            </div>
            <div class=" user__info">
                <h3 class=""user__name" value="${i}">${e.name}</h3>
    
                <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing</p>
            </div>


        </div>
        `
        users.appendChild(newSec)

        let users1 = document.querySelectorAll('.user1')
        users1.forEach(e =>{
            e.addEventListener('click', ()=>{
                let there = document.querySelector('.there')
                there.innerHTML = " "
                if (e.id == 7) {
                    userName.textContent = 'Kurtis Weissnat'

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => com(res))
                    function com(pas) {
                        let slpas = pas.slice(54,58)
                        
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'thereLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })
                    }


                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => comn(res))
                    function comn(pas) {
                        let slpas = pas.slice(58,62)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'meLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}
                }
                if (e.id == 8) {
                    userName.textContent = 'Nicholas Runolfsdottir V'

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => comn(res))
                    function comn(pas) {
                        let slpas = pas.slice(62,64)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'meLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}

                        
                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => com(res))
                    function com(pas) {
                        let slpas = pas.slice(64,68)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'thereLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}



                }
            })
        })



});
}}


if (iid == 4) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (res => mapper(res))
    function mapper(data) {
    let sldata = data.slice(8,10)
    sldata.forEach((e,i)=> {
        let newSec = document.createElement('li')
        
        newSec.innerHTML = `
        <div class="cc user1" id="${e.id}">
            <div class="user__letf">
                <img class="" src="./img/user.webp" alt="">
            </div>
            <div class=" user__info">
                <h3 class=""user__name" value="${i}">${e.name}</h3>
    
                <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing</p>
            </div>


        </div>
        `
        users.appendChild(newSec)

        let users1 = document.querySelectorAll('.user1')
        users1.forEach(e =>{
            e.addEventListener('click', ()=>{
                let there = document.querySelector('.there')
                there.innerHTML = " "
                if (e.id == 9) {
                    userName.textContent = 'Glenna Reichert'

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => com(res))
                    function com(pas) {
                        let slpas = pas.slice(68,72)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'thereLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}

                        fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(res => res.json())
                        .then(res => comn(res))
                        function comn(pas) {
                            let slpas = pas.slice(74,76)
                            slpas.forEach(e =>{
                                
                                let there = document.querySelector('.there')
                                let thereLi = document.createElement('li')
                                thereLi.setAttribute('class', 'meLi')
                                thereLi.textContent = e.title
                                there.appendChild(thereLi)
                            })}

                            

                }
                if (e.id == 10) {
                    userName.textContent = 'Clementina DuBuque'

                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(res => comn(res))
                    function comn(pas) {
                        let slpas = pas.slice(76,80)
                        slpas.forEach(e =>{
                            
                            let there = document.querySelector('.there')
                            let thereLi = document.createElement('li')
                            thereLi.setAttribute('class', 'meLi')
                            thereLi.textContent = e.title
                            there.appendChild(thereLi)
                        })}


                        fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(res => res.json())
                        .then(res => com(res))
                        function com(pas) {
                            let slpas = pas.slice(80,84)
                            slpas.forEach(e =>{
                                
                                let there = document.querySelector('.there')
                                let thereLi = document.createElement('li')
                                thereLi.setAttribute('class', 'thereLi')
                                thereLi.textContent = e.title
                                there.appendChild(thereLi)
                            })}


                }
            })
        })

});
}}


// dfgh 
    })
})