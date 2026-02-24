const navbar = document.getElementById("g");
const openBtn = document.getElementById("open-sidebar-btn");
const closeBtn = document.getElementById("close-sidebar-btn");
const walletBtn  = document.getElementById('wallet_btn')
const Modal =  document.getElementById('modaloverlay');
const Modalbtn =  document.getElementById('modal_btn')
const ModalCloseBtn = document.getElementById('modal_close_btn');
const modalInput = document.getElementById('modal_input');
const modalSendBtn =  document.getElementById('modal_btn')

openBtn.addEventListener("click", () => {
  navbar.style.display = 'block';
});

closeBtn.addEventListener("click", () => {
    navbar.style.display = 'none';
});

walletBtn.addEventListener('click', ()=>{
 Modal.style.display = 'block';
})

ModalCloseBtn.addEventListener('click',()=>{
  Modal.style.display = 'none';
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






  // <div style="display: flex;">
  //         <nav>
  //           <a href="">Home</a>
  //           <a href="">Place to stay </a>
  //           <a href="">NFTS</a>
  //           <a href="">Community</a>
  //           <a href=""></a>
  //         </nav>
  //           <button  id="wallet_btn">Connect wallet</button>
  //        </div>
  //  <div id="modaloverlay">
  //      <div class="modal_con">
  //       <div  id="modal">
  //      <div>
  //        <div class="modal_context_con"> 
  //         <div id="modal_close_btn"  aria-label="close sidbar">❌</div>
  //           <div class="modal_context">
  //             <input type="text" id="modal_input" placeholder="Input Your Adress">
  //             <button id="modal_btn" >Send!</button>
  //           </div>
  //        </div>
  //      </div>
  //     </div>
  //      </div>
  //      </div>

  //  <div style="display: flex">
  //           <div>
  //             <img style="margin-top: 20px;" src="./Asset/Logos/header_logo.png" alt="" />
              
  //           </div>
  //              <h1 class="logo_text">Metabnb</h1>
  //              </div>