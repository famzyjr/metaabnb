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
const LocationBtn   =  document.getElementById('locationBtn');
const SearchInput   = document.getElementById('hero_input');


const AdventureLocation = [
  {
  id: 1,
 Location:'Lagos',
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
 Location: 'Kano',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Adventuresimg/img8.png',
stars: './Logos/star.png',
  },

]
const PlaceToStay = [
  {
  id: 1,
 Location:'Resturant',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_1.png',
stars: './Logos/star.png',
  },
{
  id: 2,
 Location:'Resturant',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_2.png',
stars: './Logos/star.png',
  },
  {
  id: 3,
 Location:'Cottage',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_3.png',
stars: './Logos/star.png',
  },
{
  id: 4,
 Location:'Cottage',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_4.png',
stars: './Logos/star.png',
  },

  {
  id: 5,
 Location:'Castle',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_5.png',
stars: './Logos/star.png',
  },
  {
  id: 6,
 Location:'Castle',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_6.png',
stars: './Logos/star.png',
  },

  {
  id: 7,
 Location:'fantast city',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_7.png',
stars: './Logos/star.png',
  },
  {
  id: 8,
 Location:'fantast city',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_8.png',
stars: './Logos/star.png',
  },

  {
  id: 9,
 Location:'Beach',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_9.png',
stars: './Logos/star.png',
  },

  {
  id: 10,
 Location:'Beach',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_10.png',
stars: './Logos/star.png',
  },
{
  id: 11,
 Location:'Carbins',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_11.png',
stars: './Logos/star.png',
  },

  {
  id: 12,
 Location:'Carbins',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_12.png',
stars: './Logos/star.png',
  },

  {
  id: 13,
 Location:'Off-grid',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_13.png',
stars: './Logos/star.png',
  },

  {
  id: 14,
 Location:'Off-grid',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_14.png',
stars: './Logos/star.png',
  },

  {
  id: 15,
 Location:'Farm',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_15.png',
stars: './Logos/star.png',
  },

{
  id: 16,
 Location:'Farm',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_16.png',
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



const htmlOutput = (data) => {

  const output = data.map((items) => {
     return `
      <div class="d">
        <div class="adventurecard">
          <div class="adventureImgContainer">
            <img class="adventure_img" loading="lazy" src="${items.imgs}" alt="">
            <div><img class="heartImg" src="Asset/Logos/heart.png" alt=""></div>
          </div>

          <div class="adventureContext">
            <div class="left_context">
              <p>${items.Location}</p>
              <p class="second_rightText">${items.distance}</p>
              <img src="Asset/Logos/star.png" alt="">
            </div>
            <div class="right_context">
              <p class="first_leftText">${items.Amount}</p>
              <p class="second_leftText">${items.availability}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });

AdventureOutput.innerHTML = output.join(' ');
};

htmlOutput(AdventureLocation)

LocationBtn.addEventListener('click', () => {
  const searchValue = SearchInput.value.trim();

  if (searchValue !== '') {

    let searchLocation = AdventureLocation.filter(function (data) {
      return data.Location.toLowerCase().includes(searchValue.toLowerCase());
    });

    console.log(searchLocation);

    if (searchLocation.length > 0) {
      console.log("Found:", searchLocation);
      htmlOutput(searchLocation)
    } else {
      alert("No location found!");
    }

    SearchInput.value = '';

  } else {
    alert('Please search the category or title!');
  }
});




