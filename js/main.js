'use strict' ;

{
    // クラス
    class Clock {
            constructor() {
                this.r = 100;
            }
        

            // 時計の盤面を描画するメソッド
            drawFace() {
                const canvas = document.querySelector('canvas');
                
                if (typeof canvas.getContext === 'undefined') {
                    return;
                }
                const ctx = canvas.getContext('2d');


                const width = canvas.width;
                const height = canvas.height;

                // 360 / 60 = 6 6度ずつ回転しながら描画
                for (let angle = 0; angle <360; angle += 6) {
                    ctx.save(); //次のループの時に座標空間をもどしたいので

                    //原点をキャンバスの中心に移動させる
                    ctx.translate(width / 2, height / 2);
                    ctx.rotate(2 * Math.PI / 360 * angle); //アングルをラジアンに変換しつつ。。。？

                    // 短い線を描いていく
                    ctx.beginPath();
                    ctx.moveTo(0,-this.r); //中心から半径の位置まで　-this.r←マイナス方向に半径分
                    ctx.lineTo(0,-this.r + 5); //線の長さ
                    ctx.stroke(); //線をひく

                    ctx.restore();//次のループの時に座標空間をもどしたいので
                } 
            }

            run() {
                this.drawFace();

            }

    }

    // インスタンス
    const clock = new Clock();
    clock.run();
}