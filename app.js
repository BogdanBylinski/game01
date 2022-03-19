function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const win = document.querySelector('#winMSG')
let rutuliukai = []
function start() {
    
    while (rutuliukai.length<25) {
        let randomColor2 = rand(0,255);
        let randomColor3 = rand(0,255);
        let randomColor1 = rand(0,255);
        const random = rand(1,25)
        const div =document.createElement('div')
        div.classList.add('circle')
        div.style = `background: radial-gradient(circle at ${1.4}vw ${1.4}vw, rgb(${randomColor1},${randomColor2},${randomColor3}), #000)`;
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
    // window.addEventListener('click', (event) => {
    //     console.log(event.button)
    //     if(rutuliukai2.length === 0){
    //         console.log(`done`);
    //     }
    //   })
    console.log(rutuliukai2);
    const visi = document.querySelectorAll('.circle');
    
    visi.forEach(el=>{
        el.addEventListener('click',(e)=>{
            if(+el.innerHTML === rutuliukai2[0]){
                e.stopPropagation()
                second.appendChild(el)
                rutuliukai2.shift([0])
                console.log(rutuliukai2);
                if(rutuliukai2.length === 0){
                    win.innerHTML = 'You Win !!!'
                    console.log(`done`);
                }
                
            }
            })
        })
        const visi2 = document.querySelectorAll('#second .circle')
        visi2.forEach(el =>{
            
            el.removeEventListener
            console.log(visi2);
        //     if(visi2.length === 25){
        //     console.log(`done`);
        // }
    })
}
start();
function reset() {
    first.innerHTML=('');
    second.innerHTML=('');
    win.innerHTML=('');

    rutuliukai= []
    console.log(rutuliukai);
    start()
    
}
const resetas = document.querySelector('#reset');
console.log(resetas);
resetas.addEventListener('click', ()=>{
    reset()
})
