const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

// ctx.moveTo(50, 50); //연필의 시작 좌표를 지정한다. x50 y50에 연필을 갖다데는 것과 같다.
// ctx.lineTo(150, 50);//연필을 갖다댄 시작점 50,50에서 y는 그대로인채 x로 150만큼 이동하면서 stroke를 긋는다. 

// ctx.stroke(); 선을 긁는다
// ctx.fill(); 색을 채운다

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2;
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);

ctx.fill();


