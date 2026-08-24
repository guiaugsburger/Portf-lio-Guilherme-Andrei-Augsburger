(function () {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');

  if (!toggle || !navigation) return;

  toggle.addEventListener('click', function () {
    const isOpen = navigation.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navigation.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();