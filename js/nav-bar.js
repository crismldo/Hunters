function loadNavbar() {
  navbar.innerHTML = `
  <header>
    <div class="nav-bar">
      <a href="/index.html">
        <img class="logo" src="/images/wolfLogo.png" alt="logo">
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="navMenu">
        <ul class="nav_links">
          <li><a href="/index.html">Game</a></li>
          <li><a href="/html/team.html">Team</a></li>
          <li><a href="/html/contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>`;

  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

loadNavbar();