const som1 = document.getElementById('m1')
const som2 = document.getElementById('m2')
const som3 = document.getElementById('m3')
const img1 = document.getElementById('im1')
const img2 = document.getElementById('im2')
const img3 = document.getElementById('im3')

img1.addEventListener('click', ()=>{
    som1.src = "./sons/erou.mpeg"
    m1.play()
} )
img2.addEventListener('click', ()=>{
    som2.src = "./sons/sirene.mpeg"
    m2.play()
} )
img3.addEventListener('click', ()=>{
    som3.src = "./sons/cavalo.mpeg"
    m3.play()
} )
