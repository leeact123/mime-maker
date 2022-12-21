const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

// ctx.moveTo(50, 50); //연필의 시작 좌표를 지정한다. x50 y50에 연필을 갖다데는 것과 같다.
// ctx.lineTo(150, 50);//연필을 갖다댄 시작점 50,50에서 y는 그대로인채 x로 150만큼 이동하면서 stroke를 긋는다. 

// ctx.stroke(); 선을 긁는다
// ctx.fill(); 색을 채운다
let isPainting = false;

function onMove(event) {
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath(); //path는 서로 연결되기 때문에 eventlistener로 linewidth의 event.target.value를 잡아서 linewidth를 바꿀 때 이미 그렸던 line의 width도 같이 바뀌게 된다. ctx.beginPath();로 이전에 그린 line의 path를 끊는다.
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}

function cancelPainting() {
    isPainting = false;
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange)
//click은 마우스를 눌렀다가 땟을때 발생
//mousedown은 마우스를 계속 누르고 있을 때 발생
//mouseleave는 마우스다운 된 상태로 캔버스를 벗어났다가 마우스가 다시 컨버스로 되돌아 왔을 때 mauseup이 true가 되는 버그를 고쳐준다.