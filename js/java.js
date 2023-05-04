const  card_header = document.querySelector('.header')
const  card_title = document.querySelector('.h3')
const card_ex = document.querySelector('.ex')
const  profile_img = document.querySelector('.profile-img')
const  num = document.querySelector('.name')
const  date = document.querySelector('.date')

const  img21 = document.querySelector('.img21')
const  img22= document.querySelector('.img22')
const  img23= document.querySelector('.img23')
const  img24= document.querySelector('.img24')
const  img25= document.querySelector('.img25')
const  img26= document.querySelector('.img26')



const all =document.querySelectorAll(".animated-bg")
const all_text =document.querySelectorAll(".animated-bg-text")

setTimeout( theData , 3000)

function theData(){
    card_header.innerHTML = '<img src="f.jpg"/>' 
    card_title.innerHTML = 'L'
    card_ex.innerHTML = ' he the most intellagent person in the move '
    profile_img.innerHTML ='<img src="l.jpeg" alt=""/>'
    num.innerHTML = 'cia agent'
    date.innerHTML = 'oct 15 / 2000'

    
    img21.innerHTML ='<img src="b.jpg"/>'
    img22.innerHTML = 'kira'
    img23.innerHTML = 'the owner of dathe note '
    img24.innerHTML = '<img src="eb1.jpg"/>'
    img25.innerHTML = 'student'
    img26.innerHTML = 'apr 23/2001'

        
    all.forEach(bg => bg.classList.remove('animated-bg'))
    all_text.forEach(bg => bg.classList.remove('animated-bg-text'))


}

