function popup() {
  const modalContainer = document.querySelector('.modal');
  const toggleButton = document.querySelector('.toggle');
  const closeButton = document.querySelector('.modal__close');
  const initialToggleText = toggleButton.textContent;
  let intervalId = null;
  
  function openModal() {
    modalContainer.classList.add('modal__visible');
    toggleButton.textContent = 'Opened!!!';
    intervalId = setInterval(() => {
      console.log('asdfasdfasd');
    }, 3000);
  }


  function closeModal() {
    modalContainer.classList.remove('modal__visible');
    toggleButton.textContent = initialToggleText;
    clearInterval(intervalId);
  }

  

  toggleButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
}

popup();





