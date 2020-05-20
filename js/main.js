'use strict' ;

(() => {
    // クラス
    class ClockDrawer {
        constructor(canvas) {
            this.ctx = canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;
        }

        draw(angle,func) {
            this.ctx.save(); //次のループの時に座標空間をもどしたいので

            //原点をキャンバスの中心に移動させる
            this.ctx.translate(this.width / 2, this.height / 2);
            this.ctx.rotate(2 * Math.PI / 360 * angle); //アングルをラジアンに変換しつつ。。。？

            //細い線を描いていく
            this.ctx.beginPath();
            
            func(this.ctx);
            
            this.ctx.stroke(); //線をひく

            this.ctx.restore();//次のループの時に座標空間をもどしたいので

        }

    }

    class Clock {
            constructor(drawer) {
                this.r = 100;
                this.drawer = drawer ;

                //現在時刻を取得しておく
                this.h = (new Date()).getHours();
                this.m = (new Date()).getMinutes();
                this.s = (new Date()).getSeconds();
            }


            // 時計の盤面を描画するメソッド
            drawFace() {
                // 360 / 60 = 6 6度ずつ回転しながら描画
                for (let angle = 0; angle <360; angle += 6) {
                    this.drawer.draw(angle,ctx => {
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

                    });
                   
                } 
            }
            // 時計の針を描画
            drawHands() {
                this.drawer.draw(this.h * 30 +this.m * 0.5, ctx => { //回転の角度とctxを渡す
                    ctx.lineWidth = 6;
                    ctx.moveTo(0,10);
                    ctx.lineTo(0,-this.r + 50);

                });
            }

            run() {
                this.drawFace();
                this.drawHands();

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