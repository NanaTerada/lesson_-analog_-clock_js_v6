'use strict' ;

(() => {
    // クラス
    class ClockDrawer {
        constructor(canvas) {
            this.ctx = canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;

        }

    }

    class Clock {
            constructor(drawer) {
                this.r = 100;
                this.drawer = drawer ;
            }
        

            // 時計の盤面を描画するメソッド
            drawFace() {
                
               

                // 360 / 60 = 6 6度ずつ回転しながら描画
                for (let angle = 0; angle <360; angle += 6) {
                    ctx.save(); //次のループの時に座標空間をもどしたいので

                    //原点をキャンバスの中心に移動させる
                    ctx.translate(width / 2, height / 2);
                    ctx.rotate(2 * Math.PI / 360 * angle); //アングルをラジアンに変換しつつ。。。？

                    //細い線を描いていく
                    ctx.beginPath();
                    ctx.moveTo(0,-this.r); //中心から半径の位置まで　-this.r←マイナス方向に半径分

                    if (angle % 30=== 0) {
                        ctx.lineWidth = 2;
                        ctx.lineTo(0,-this.r + 10);
                        ctx.font = '13px Arial'
                        ctx.textAlign = 'center';
                        ctx.fillText(angle/ 30 || 12,0,-this.r + 25); //|| 12 falseだったら12を使いなさい

                    } else {
                        ctx.lineTo(0,-this.r + 5); //線の長さ
                    }

                    
                    ctx.stroke(); //線をひく

                    ctx.restore();//次のループの時に座標空間をもどしたいので
                } 
            }

            run() {
                this.drawFace();

            }
    }

                const canvas = document.querySelector('canvas');
                
                if (typeof canvas.getContext === 'undefined') {
                    return;
                }

    // インスタンス
    const clock = new Clock(new ClockDrawer(canvas));
    clock.run();

})();