'use strict' ;
{
    // クラス
    class Clock {
        

            // 時計の盤面を描画するメソッド
            this.drawFace() {
                const canvas = document.querySelector('canvas');
                
                if (typeof canvas.getContext === 'undefined') {
                    return;
                }
                const ctx = canvas.getContext('2d');


                const width = canvas.width;
                const height = canvas.height;
            }

            run() {
                this.drawFace();

            }

    }

    // インスタンス
    const clock = new Clock();
    clock.run();
}