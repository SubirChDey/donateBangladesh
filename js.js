// Noakhali flood donation starts

document.getElementById('noakhali-donate-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const noakhaliDonateMoney = getValueById('noakhali-donate-input');
  const noakhaliBalance = getTextById('noakhali-Balance');
  const mainBalance = getTextById('main-balance');


  if (noakhaliDonateMoney > 0 && !isNaN(noakhaliDonateMoney) && mainBalance > noakhaliDonateMoney) {
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
// Noakhali flood donation ends


// Feni flood donation starts
document.getElementById('feni-donate-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const feniDonateMoney = getValueById('feni-donate-input');
  const feniBalance = getTextById('feni-Balance');
  const mainBalance = getTextById('main-balance');


  if (feniDonateMoney > 0 && !isNaN(feniDonateMoney) && mainBalance > feniDonateMoney) {
    const feniNewBalance = feniBalance + feniDonateMoney;
    const mainNewBalance = mainBalance - feniDonateMoney;

    document.getElementById('feni-Balance').innerText = feniNewBalance;
    document.getElementById('main-balance').innerText = mainNewBalance;
    my_modal_1.showModal()
    const feniTitle = document.getElementById("feni-title").innerText;
    const date = new Date();

    // transaction history add
    const div = document.createElement('div');
    // div.innerText = `H ${feniDonateMoney} Taka is Donated for ${feniTitle}`;
    div.innerHTML = `
                <div class="border border-gray-200 rounded-lg p-4 space-y-2">
                <h3 class="md:text-xl font-normal">${feniDonateMoney} Taka is Donated for ${feniTitle}</h3>
                <p class="text-[#111111B3] text-sm">Date: ${date}</p>
                </div>
    
    `
    document.getElementById('transaction-container').appendChild(div);

  }
  else {
    alert('Donate error')

  }

})
// Feni flood donation ends

// quota donation starts
document.getElementById('quota-donate-btn').addEventListener('click', function (event) {
  event.preventDefault();

  const quotaDonateMoney = getValueById('quota-donate-input');
  const quotaBalance = getTextById('quota-Balance');
  const mainBalance = getTextById('main-balance');


  if (quotaDonateMoney > 0 && !isNaN(quotaDonateMoney) && mainBalance > quotaDonateMoney) {
    const quotaNewBalance = quotaBalance + quotaDonateMoney;
    const mainNewBalance = mainBalance - quotaDonateMoney;

    document.getElementById('quota-Balance').innerText = quotaNewBalance;
    document.getElementById('main-balance').innerText = mainNewBalance;
    my_modal_1.showModal()
    const quotaTitle = document.getElementById("quota-title").innerText;
    const date = new Date();

    // transaction history add
    const div = document.createElement('div');
    // div.innerText = `H ${quotaDonateMoney} Taka is Donated for ${quotaTitle}`;
    div.innerHTML = `
                <div class="border border-gray-200 rounded-lg p-4 space-y-2">
                <h3 class="md:text-xl font-normal">${quotaDonateMoney} Taka is Donated for ${quotaTitle}</h3>
                <p class="text-[#111111B3] text-sm">Date: ${date}</p>
                </div>
    
    `
    document.getElementById('transaction-container').appendChild(div);

  }
  else {
    alert('Donate error')

  }

})
// quota donation ends


// toggle menu section
document.getElementById('donation-btn').addEventListener('click', function () {
  toggleMenuById('donation-section');
  document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
  document.getElementById('donation-btn').classList.add('bg-[#B4F461]');

})
document.getElementById('history-btn').addEventListener('click', function () {
  toggleMenuById('transaction-section');
  document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
  document.getElementById('history-btn').classList.add('bg-[#B4F461]');
})


function toggleMenuById(id){
  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('transaction-section').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}



