//!         General
ScrollOut({
  targets: "#hr_load",
  onShown(el) {
    el.classList.add("hr_load");
  },
  onHidden(el) {
    el.classList.remove("hr_load");
  }
});

//!         Footer
ScrollOut({
  targets: ".foot_grid",
  onShown(el) {
    el.classList.add("footer_load");
  },
  onHidden(el) {
    el.classList.remove("footer_load");
  }
});

var root = document.documentElement;

ScrollOut({ 
  targets: "#h_h1",
  onShown(el) {
    root.style.setProperty('--t-delay', '.2s');
    el.classList.add("d1","y0");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay', '0s');
    el.classList.remove("d1","y0");
  }
});
ScrollOut({
  targets: "#h_hr_load",
  onShown(el) {
    root.style.setProperty('--t-delay', '1s');
    el.classList.add("d1","h_hr_load");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay', '0s');
    el.classList.remove("d1","h_hr_load");
  }
});
ScrollOut({
  targets: "#h_h2",
  onShown(el) {
    root.style.setProperty('--t-delay', '1.5s');
    el.classList.add("d1","y0");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay', '0s');
    el.classList.remove("d1","y0");
  }
});