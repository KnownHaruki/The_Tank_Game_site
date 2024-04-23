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
    root.style.setProperty('--t-delay-h1', '.2s');
    el.classList.add("d_h1","y0");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay-h1', '0s');
    el.classList.remove("d_h1","y0");
  }
});
ScrollOut({
  targets: "#h_hr_load",
  onShown(el) {
    root.style.setProperty('--t-delay-hr', '1.1s');
    el.classList.add("d_hr","h_hr_load");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay-hr', '0s');
    el.classList.remove("d_hr","h_hr_load");
  }
});
ScrollOut({
  targets: "#h_h2",
  onShown(el) {
    root.style.setProperty('--t-delay-h2', '1.5s');
    el.classList.add("d_h2","y0");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay-h2', '0s');
    el.classList.remove("d_h2","y0");
  }
});
ScrollOut({
  targets: "#bt_load",
  onShown(el) {
    root.style.setProperty('--t-delay-bt', '2.3s');
    el.classList.add("d_bt","s1");
  },
  onHidden(el) {
    root.style.setProperty('--t-delay-bt', '0s');
    el.classList.remove("d_bt","s1");
  }
});