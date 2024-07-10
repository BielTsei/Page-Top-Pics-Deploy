const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstat") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/* class MobileNavbar {
  constructor(a, b, c) {
    (this.mobileMenu = document.querySelector(a)),
      (this.navList = document.querySelector(b)),
      (this.navLinks = document.querySelectorAll(c)),
      (this.activeClass = "active"),
      (this.handleClick = this.handleClick.bind(this));
  }
  animateLinks() {
    this.navLinks.forEach((a, b) => {
      a.style.animation = a.style.animation
        ? ""
        : `navLinksFade 0.5s ease forwards ${b / 7 + 0.3}s`;
    });
  }
  handleClick() {
    this.navList.classList.toggle(this.activeClass),
      this.mobileMenu.classList.toggle(this.activeClass),
      this.animateLinks();
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }
  init() {
    return this.mobileMenu && this.addClickEvent(), this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();
 */
