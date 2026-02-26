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
