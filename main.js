//import './style.css'
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()
const btnCoin = document.getElementById('btn-coin');
const btnBill = document.getElementById('btn-bill');
const walletElement = document.getElementById('wallet');

const min = Math.ceil(300);
const max = Math.floor(1500);
const targetRich = Math.floor(Math.random() * (max - min) + min);
console.log(targetRich);

function updateSavingMoney(value) {
  const savingMoneyElement = document.getElementById('saving-money');
  const currenValue = parseInt(savingMoneyElement.textContent);

  let newValue = currenValue + value;
  savingMoneyElement.textContent = newValue;

  if(newValue>targetRich) {
    jsConfetti.addConfetti();
  }
}


btnCoin.addEventListener('click',function () {
  let iconElementHtml = `<img class="coin" src="https://cdn-icons-png.flaticon.com/512/217/217853.png?w=740&t=st=1657648140~exp=1657648740~hmac=f4be48dceb752518fe63f3d90c6584187f6c1fd7b8a6b437c530b910a7038520"/>`;
  walletElement.insertAdjacentHTML('beforeend',iconElementHtml);

  updateSavingMoney(10);
  
});

btnBill.addEventListener('click',function () {
  let iconElementHtml = `<img class="bill" src=" https://i.ibb.co/zNmpdCq/Pngtree-100-dollar-bill-7312202.png "/>`;
  walletElement.insertAdjacentHTML('beforeend',iconElementHtml);

  updateSavingMoney(100);
  
});