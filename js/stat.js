'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 530, 290);

  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  // ctx.fillRect(100, 10, 520, 280);
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(620, 10);
  ctx.lineTo(620, 280);
  ctx.lineTo(100, 280);
  // ctx.bezierCurveTo(420, 250, 220, 250, 100, 280);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  var textWin = ['Ура вы победили!', 'Список результатов:'];
  for (var i = 0, j = 30; i < textWin.length; i++, j += 30) {
    ctx.fillText(textWin[i], 200, j);
  }

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

 var histoHeight = 150;
 var histoX = 150;
 var step = histoHeight / max;
 var columnIndent = 90;

 for (var i = 0; i < times.length; i++) {
   var height = step * times[i];

   ctx.fillStyle = '#000000';
   ctx.fillText(times[i].toFixed(0), histoX + columnIndent * i, 90 + histoHeight - height);

   var transparency = Math.random().toFixed(1);
   var saturation = (Math.random() * 255).toFixed(0);

   ctx.fillStyle = ['rgba(0, 0, ' + saturation + ',' + transparency + ')'];

   if (names[i] === 'Вы') {
     ctx.fillStyle = 'rgba(255, 0, 0, 1)';
   }

   ctx.fillRect(histoX + columnIndent * i, 105 + histoHeight, 40, -height);

   ctx.fillStyle = '#000000';
   ctx.fillText(names[i], histoX + columnIndent * i, 110 + histoHeight);
 }
};
