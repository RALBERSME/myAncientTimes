const osirisSrc = [
  "Images/osiris1.png",
  "Images/osiris2.png",
  "Images/osiris3.png",
  "Images/osiris4.png",
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
