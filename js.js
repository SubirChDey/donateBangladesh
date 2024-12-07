document.getElementById('noakhali-Donate-Btn').addEventListener('click', function (event) {
  event.preventDefault();
  const donateMoney = document.getElementById('noakhali-donate-input').value;

  const noakhaliBalance = document.getElementById('noakhali-Balance').innerText;

  const mainBalance = document.getElementById('main-balance').innerText;
  const donateMoneyNumber = parseFloat(donateMoney);
  const noakhaliBalanceNumber = parseFloat(noakhaliBalance);
  const mainBalanceNumber = parseFloat(mainBalance);

  if (donateMoneyNumber > 0) {

    const noakhaliNewBalance = noakhaliBalanceNumber + donateMoneyNumber;
    const mainNewBalance = mainBalanceNumber - donateMoneyNumber;

    document.getElementById('noakhali-Balance').innerText = noakhaliNewBalance;
    document.getElementById('main-balance').innerText = mainNewBalance;


  }
  else {
    alert('Go back')

  }
})