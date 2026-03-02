const placeToStayOutput  = document.getElementById('PlaceToStay');
const linksEl = document.querySelectorAll('.ancor_link');
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
 Location:'Fantanst city',
Amount:'1MBT per night',
distance:'2345km away',
availability:'available for 2weeks stay',
imgs: 'Asset/Location_img/img_7.png',
stars: './Logos/star.png',
  },
  {
  id: 8,
 Location:'Fantanst city',
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

const placeoutput = (PlaceData) =>{
   const Render = PlaceData.map((item)=>{
    return `
      <div class="d">
        <div class="adventurecard">
          <div class="adventureImgContainer">
            <img class="adventure_img" loading="lazy" src="${item.imgs}" alt="">
            <div><img class="heartImg" src="Asset/Logos/heart.png" alt=""></div>
          </div>

          <div class="adventureContext">
            <div class="left_context">
              <p>${item.Location}</p>
              <p class="second_rightText">${item.distance}</p>
              <img src="Asset/Logos/star.png" alt="">
            </div>
            <div class="right_context">
              <p class="first_leftText">${item.Amount}</p>
              <p class="second_leftText">${item.availability}</p>
            </div>
          </div>
        </div>
      </div>
    `;
   });
  placeToStayOutput.innerHTML = Render.join('')
  }
placeoutput( PlaceToStay)

linksEl.forEach(links=>{
links.addEventListener('click',(e)=>{
// console.log(e.target);
e.preventDefault()
// console.log(e);
const category = e.target.dataset.id;
const Locations = PlaceToStay.filter(function(data){
if(data.Location === category){
return data;
}

})
placeoutput(Locations)
console.log(Locations);
})
});