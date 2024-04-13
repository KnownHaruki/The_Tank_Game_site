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