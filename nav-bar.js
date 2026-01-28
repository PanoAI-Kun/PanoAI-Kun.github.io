class MainNavbar extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    this.innerHTML = `
        <style>
            .nav-container { position: relative; }
            .nav-link { 
                transition: color 0.3s ease; 
                position: relative;
                z-index: 10;
            }
            /* The sliding underline */
            #nav-indicator {
                position: absolute;
                bottom: -8px;
                height: 2px;
                background: #2563eb;
                transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                border-radius: 2px;
                opacity: 0;
            }
        </style>

        <nav id="navbar" class="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-[100] bg-white/80 backdrop-blur-md transition-transform duration-300 ease-in-out">
            <div class="text-xl font-black tracking-tighter cursor-pointer" onclick="window.location.href='index.html'">
                PanoAI<span class="text-blue-600">-Kun</span>
            </div>
            
            <div class="nav-container hidden md:flex space-x-12 text-[11px] font-bold tracking-[0.2em]">
                <div id="nav-indicator"></div>
                <a href="index.html" class="nav-link ${currentPath === 'index.html' ? 'text-black active' : 'text-slate-400'}">OVERVIEW</a>
                <a href="application.html" class="nav-link ${currentPath === 'application.html' ? 'text-black active' : 'text-slate-400'}">APPLICATION</a>
                <a href="capability.html" class="nav-link ${currentPath === 'capability.html' ? 'text-black active' : 'text-slate-400'}">AI & INTELLINGENCE</a>
                <a href="contact.html" class="nav-link ${currentPath === 'contact.html' ? 'text-black active' : 'text-slate-400'}">CONTACT</a>
            </div>
        </nav>
    `;

    this.initScroll();
    this.initIndicator();
  }

  initIndicator() {
    const activeLink = this.querySelector('.nav-link.active');
    const indicator = this.querySelector('#nav-indicator');
    
    if (activeLink && indicator) {
        // Set initial position
        setTimeout(() => {
            indicator.style.width = `${activeLink.offsetWidth}px`;
            indicator.style.left = `${activeLink.offsetLeft}px`;
            indicator.style.opacity = '1';
        }, 100);
    }
  }

  initScroll() {
    let lastScrollY = window.scrollY;
    const navbar = this.querySelector('#navbar');
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      navbar.style.transform = (currentScrollY > lastScrollY && currentScrollY > 100) 
        ? 'translateY(-100%)' : 'translateY(0)';
      lastScrollY = currentScrollY;
    }, { passive: true });
  }
}

customElements.define('main-navbar', MainNavbar);