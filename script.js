document.querySelectorAll('.quick-amounts button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.quick-amounts button').forEach((b) => b.classList.remove('selected'));
    button.classList.add('selected');
  });
});

document.getElementById('paypalButton').addEventListener('click', (event) => {
  if (event.currentTarget.getAttribute('href') === '#') {
    event.preventDefault();
    alert('PayPal is not connected yet. Add your PayPal payment link next.');
  }
});