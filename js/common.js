document.querySelector('.search').addEventListener('click', function() {
  this.classList.add('focused');
  this.querySelector('input').focus();
});

document.querySelector('.search input').addEventListener('focus', function() {
  this.setAttribute('placeholder', '통합검색');
});

document.querySelector('.search input').addEventListener('blur', function() {
  document.querySelector('.search').classList.remove('focused');
  this.removeAttribute('placeholder');
});

document.querySelector('.this-year').textContent = new Date().getFullYear();
