//*     Os
const userAgent = window.navigator.userAgent,
    platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
let os = null;

var bt_type = document.getElementById("down_bt");
var bt_img = document.getElementById("down_bt_img");

if (macosPlatforms.indexOf(platform) !== -1) {
  bt_type.classList.add("Macos");
  bt_img.classList.add("Macos_img");
} else if (iosPlatforms.indexOf(platform) !== -1) {
  bt_type.classList.add("Ios");
  bt_img.classList.add("Ios_img");
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  bt_type.classList.add("Windows");
  bt_img.classList.add("Windows_img");
} else if (/Android/.test(userAgent)) {
  bt_type.classList.add("Android");
  bt_img.classList.add("Android_img");
} else if (/Linux/.test(platform)) {
  bt_type.classList.add("Linux");
  bt_img.classList.add("Linux_img");
}