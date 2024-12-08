// Noakhali flood donation

document.getElementById('noakhali-donate-btn').addEventListener('click', function (event) {
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
    const noakhaliTitle = document.getElementById("noakhali-title").innerText;
    const date = new Date();

    // transaction history add
    const div = document.createElement('div');
    // div.innerText = `H ${noakhaliDonateMoney} Taka is Donated for ${noakhaliTitle}`;
    div.innerHTML = `
                <div class="border border-gray-200 rounded-lg p-4 space-y-2">
                <h3 class="md:text-xl font-normal">${noakhaliDonateMoney} Taka is Donated for ${noakhaliTitle}</h3>
                <p class="text-[#111111B3] text-sm">Date: ${date}</p>
                </div>
    
    `
    document.getElementById('transaction-container').appendChild(div);

  }
  else {
    alert('Donate error')

  }

})

// toggle menu section
document.getElementById('donation-btn').addEventListener('click', function () {
  toggleMenuById('donation-section');
})
document.getElementById('history-btn').addEventListener('click', function () {
  toggleMenuById('transaction-section');
})


