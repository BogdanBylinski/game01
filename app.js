function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const first = document.querySelector('#first');
const second = document.querySelector('#second');
let rutuliukai = []
function start() {
    
    while (rutuliukai.length<25) {
        let randomColor2 = rand(1,255);
        let randomColor3 = rand(1,255);
        let randomColor1 = rand(1,255);
        const random = rand(1,25)
        const div =document.createElement('div')
        div.classList.add('circle')
        div.style = `background: radial-gradient(circle at 15px 15px, rgb(${randomColor1},${randomColor2},${randomColor3}), #000)`;
        if(randomColor1+randomColor2+randomColor3<500)
        div.style.color = "white"
        if(rutuliukai.includes(random)){
            continue;
        }
        else{
            
            div.innerHTML=random;
            rutuliukai.push(random);
        }
        first.appendChild(div);
        
    }
    const rutuliukai2 = [...rutuliukai]
    rutuliukai2.sort((a, b )=> a - b);
    console.log(rutuliukai2);
    const visi = document.querySelectorAll('.circle');
    
    
    visi.forEach(el=>{
        el.addEventListener('click',(e)=>{
            if(+el.innerHTML === rutuliukai2[0]){
                e.stopPropagation()
                second.appendChild(el)
                rutuliukai2.shift([0])
                console.log(rutuliukai2);
            }
        })
    })
    const visi2 = document.querySelectorAll('#second .circle')
    visi2.forEach(el =>{
        
        el.removeEventListener
        console.log(visi2);
    })
}
    start()
    function reset() {
        first.innerHTML=('');
        second.innerHTML=('');
        rutuliukai= []
        console.log(rutuliukai);
        start()
        
    }
    const resetas = document.querySelector('#reset');
    console.log(resetas);
    resetas.addEventListener('click', ()=>{
        reset()
    })