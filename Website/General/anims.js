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
    el.classList.add("y0","d1");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay', '0s');
    el.classList.remove("y0","d1");
  }
});
ScrollOut({
  targets: "#h_hr_load",
  onShown(el) {
    root.style.setProperty('--t-delay', '1s');
    el.classList.add("h_hr_load","d1");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay', '0s');
    el.classList.remove("h_hr_load","d1");
  }
});
ScrollOut({
  targets: "#h_h2",
  onShown(el) {
    root.style.setProperty('--t-delay', '1.5s');
    el.classList.add("y0","d1");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay', '0s');
    el.classList.remove("y0","d1");
  }
});