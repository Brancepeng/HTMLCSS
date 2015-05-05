

var drawing = document.getElementById("drawing");
drawing.width = window.innerWidth;
drawing.height = window.innerHeight;
document.body.classList.add('body--ready');//表示向body中classList中添加class元素,等价于在html中的body标签上加上class="body--ready"
console.log(drawing.getContext);
if(drawing.getContext){
    var context = drawing.getContext('2d');

  /*  //绘制红色矩形
    context.fillStyle = '#ff0000';
    context.fillRect(10,10,50,50);
    //绘制半透明的蓝色矩形
    context.fillStyle = 'rgba(0,0,255,0.5)';
    context.fillRect(50,50,50,50);*/

    //绘制一个不带数字的时钟表盘
    //开始路径
    context.beginPath();
    //绘制外圆
    context.arc(100,100,99,0,2*Math.PI,false);
    //绘制内圆
    context.moveTo(194,100);
    context.arc(100,100,94,0,2*Math.PI,false);
    //绘制分针
    context.moveTo(100,100);
    context.lineTo(100,15);

    //绘制时针
    context.moveTo(100,100);
    context.lineTo(35,100);

    //描边路径
    context.stroke();

}


