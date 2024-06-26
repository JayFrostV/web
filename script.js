window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var sidebar = document.querySelector('.sidebar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('fixed');
      sidebar.style.marginTop = header.offsetHeight + 'px';
    } else {
      header.classList.remove('fixed');
      sidebar.style.marginTop = '0';
    }
  });
  document.querySelectorAll('.navimg img').forEach(img => {
    img.addEventListener('click', function() {
      const link = this.parentElement.getAttribute('href');
      window.open(link, '_blank');
    });
  });
  
  