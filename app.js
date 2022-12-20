const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

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
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}

function cancelPainting() {
    isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); 
//click은 마우스를 눌렀다가 땟을때 발생
//mousedown은 마우스를 계속 누르고 있을 때 발생
//mouseleave는 마우스다운 된 상태로 캔버스를 벗어났다가 마우스가 다시 컨버스로 되돌아 왔을 때 mauseup이 true가 되는 버그를 고쳐준다.