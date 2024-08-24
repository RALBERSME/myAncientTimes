const osirisSrc = [
  "https://cdn.pixabay.com/photo/2022/08/25/19/54/osiris-7411148_1280.png",
  "https://cdn.pixabay.com/photo/2022/08/25/19/54/osiris-7411151_640.png",
  "https://cdn.pixabay.com/photo/2022/08/25/19/55/osiris-7411155_640.png",
  "https://cdn.pixabay.com/photo/2022/08/25/19/55/osiris-7411152_640.png",
];
let index = 0;
let interval = setInterval(() => {
  if (index < osirisSrc.length) {
    document.getElementById("osirisImg").setAttribute("src", osirisSrc[index]);
    index++;
  } else {
    index = 0;
  }
}, 3000);

function clearIntervallfunc() {
  clearInterval(interval);
}
const leave = document.getElementById("leave");
leave.addEventListener("click", clearIntervallfunc);
