const userAgent = window.navigator.userAgent,
    platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
let os = null;

var bt_type = document.getElementById("down_bt");

if (macosPlatforms.indexOf(platform) !== -1) {
  bt_type.classList.add("Macos");
} else if (iosPlatforms.indexOf(platform) !== -1) {
  bt_type.classList.add("Ios");
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  bt_type.classList.add("Windows");
} else if (/Android/.test(userAgent)) {
  bt_type.classList.add("Android");
} else if (/Linux/.test(platform)) {
  bt_type.classList.add("Linux");
}
