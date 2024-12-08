// Noakhali flood donation

document.getElementById('noakhali-donate-btn').addEventListener('click', function(event){
  event.preventDefault();

  const noakhaliDonateMoney = getValueById('noakhali-donate-input');
  const noakhaliBalance = getTextById('noakhali-Balance');
  const mainBalance = getTextById('main-balance');

  if (noakhaliDonateMoney > 0 && mainBalance > noakhaliDonateMoney) {
    const noakhaliNewBalance = noakhaliBalance + noakhaliDonateMoney;
    const mainNewBalance = mainBalance - noakhaliDonateMoney;
    
    document.getElementById('noakhali-Balance').innerText = noakhaliNewBalance;
    document.getElementById('main-balance').innerText = mainNewBalance;    
    my_modal_1.showModal()
  }
  else {
    alert('Donate error')
    
  }
  
})
