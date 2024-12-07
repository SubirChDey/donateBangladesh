document.getElementById('noakhali-Donate-Btn').addEventListener('click', function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('noakhali-donate-input').value;  
    const donateMoneyNumber = parseFloat(donateMoney);
      const noakhaliBalance = document.getElementById('noakhali-Balance').innerText;
      const noakhaliBalanceNumber = parseFloat(noakhaliBalance);

      const nokhaliNewBalance = noakhaliBalanceNumber + donateMoneyNumber;
})