const navbar = document.getElementById("g");
const openBtn = document.getElementById("open-sidebar-btn");
const closeBtn = document.getElementById("close-sidebar-btn");
const walletBtn  = document.getElementById('wallet_btn')
const Modal =  document.getElementById('modaloverlay');
const Modalbtn =  document.getElementById('modal_btn')
const ModalCloseBtn = document.getElementById('modal_close_btn');
const modalInput = document.getElementById('modal_input');
const modalSendBtn =  document.getElementById('modal_btn')
const AdventureOutput = document.getElementById('adventureOutput');
const AdventureLocation = [
  {
  id: 1,
 Location: 'Lagos',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Adventuresimg/img1.png',
stars: './Logos/star.png',
  },
  {
  id: 2,
 Location: 'Lagos',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Adventuresimg/img2.png',
stars: './Logos/star.png',
  },
  {
  id: 3,
 Location: 'Abuja',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Adventuresimg/img3.png',
stars: './Logos/star.png',
  },
  {
  id: 4,
 Location: 'Abuja',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Adventuresimg/img4.png',
stars: './Logos/star.png',
  },
  {
  id: 5,
 Location: 'Ogun',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Adventuresimg/img5.png',
stars: './Logos/star.png',
  },
  {
  id: 6,
 Location: 'Ogun',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Adventuresimg/img6.png',
stars: './Logos/star.png',
  },
  {
  id: 7,
 Location: 'Kano',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Adventuresimg/img7.png',
stars: './Logos/star.png',
  },
  {
  id: 8,
 Location: 'Lagos',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Adventuresimg/img8.png',
stars: './Logos/star.png',
  },

]



openBtn.addEventListener("click", () => {
  navbar.style.display = 'block';
});

closeBtn.addEventListener("click", () => {
    navbar.style.display = 'none';
});

walletBtn.addEventListener('click', ()=>{
 Modal.classList.add('active')
})

ModalCloseBtn.addEventListener('click',()=>{
  Modal.classList.remove("active");
})



const modalAlert =()=>{
const inputValue = modalInput.value;
if(inputValue.length >= 10){
  alert('Your Wallet is Connected')
 inputValue.innerText = '';
}else{
  alert('wallet ID is less than 10')
}

}

modalSendBtn.onclick =()=> modalAlert()


const htmlOutput = AdventureLocation.map((items)=>{
 console.log(items.Amount);
return  `<div class="d">
        <div class="adventurecard">
        <div class="adventureImgContainer">
         <img class="adventure_img" src=${items.imgs} alt="">
      <div><img class="heartImg" src="Asset/Logos/heart.png" alt=""></div>
      </div>
      
       <div class="adventureContext">
        <div class="left_context">
             <p class="">${items.Location}</p>
        <p class="second_rightText">${items.distance}</p>
        <img src="Asset/Logos/star.png" alt="">
        </div>
        <div class="right_context">
        <p class="first_leftText">${items.Amount}</p>
        <p class="second_leftText">${items.availability}</p>
        </div>
       </div>
      </div>
      </div>`

})

AdventureOutput.innerHTML = htmlOutput.join('');






// console.log(htmlOutput);
