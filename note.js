const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

// ctx.moveTo(50, 50); //연필의 시작 좌표를 지정한다. x50 y50에 연필을 갖다데는 것과 같다.
// ctx.lineTo(150, 50);//연필을 갖다댄 시작점 50,50에서 y는 그대로인채 x로 150만큼 이동하면서 stroke를 긋는다. 

// ctx.stroke(); 선을 긁는다
// ctx.fill(); 색을 채운다
ctx.lineWidth = 2;
const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
]
let offsetX = 0;
let offsetY = 0;

function onClick(event) {
offsetX = event.offsetX;
offsetY = event.offsetY;
}

function mouseMove(event) {
     ctx.beginPath();
     ctx.moveTo(offsetX, offsetY); // 처음 시작하는 좌표
     const color = colors[Math.floor(Math.random() * colors.length)];
     ctx.strokeStyle = color;
     ctx.lineTo(event.offsetX, event.offsetY);
     ctx.stroke();
}
canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("click", onClick);