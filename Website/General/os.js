const userAgent = window.navigator.userAgent,
    platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
let os = null;

var bt_type = document.getElementById("down_bt");
var bt_img = document.getElementById("down_bt_img");

if (macosPlatforms.indexOf(platform) !== -1) {
  if (far_far_away%2==1){
    bt_type.href="../../Game/TheTankGame_Mac_old.zip"; 
  }
  else{
    bt_type.href="../../Game/TheTankGame_mac_2.zip"; 
  }
  bt_img.classList.add("Macos_img");
} else if (iosPlatforms.indexOf(platform) !== -1) {
  if (far_far_away%2==1){
    bt_type.href=""; 
  }
  else{
    bt_type.href=""; 
  }
  bt_type.href=""; 
  bt_img.classList.add("Ios_img");
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  if (far_far_away%2==1){
    bt_type.href="../../Game/TheTankGame_Windows_old.zip"; 
  }
  else{
    bt_type.href="../../Game/TheTankGame_windows_2.zip"; 
  }
  bt_img.classList.add("Windows_img");
} else if (/Android/.test(userAgent)) {
  if (far_far_away%2==1){
    bt_type.href=""; 
  }
  else{
    bt_type.href=""; 
  }
  bt_type.href=""; 
  bt_img.classList.add("Android_img");
} else if (/Linux/.test(platform)) {
  if (far_far_away%2==1){
    bt_type.href="../../Game/TheTankGame_Linux_old.zip"; 
  }
  else{
    bt_type.href="../../Game/TheTankGame_linux_2.zip"; 
  }
  bt_img.classList.add("Linux_img");
}



//Shhh.....

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;
var far_far_away = 0;

var keyHandler = function (event) {
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}
	current++;

	if (pattern.length === current) {
		current = 0;
		far_far_away += 1;
	}
  if (far_far_away%2==1){
    document.getElementById("h_h2").textContent="\" Roads? Where we're going, we don't need roads. \"";
    document.getElementById("bg_video").src="../IMG/Loop.mp4";
  }
  else{
    document.getElementById("h_h2").textContent="\" The first of its kind \"";
    document.getElementById("bg_video").src="../IMG/gameplay_loop.mp4";
  }

};
document.addEventListener('keydown', keyHandler, false);

window.addEventListener("keydown", function(e) {
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
  }
}, false);