import {Howl} from 'howler';

export class triggeredFunctions{
    static pickachuSpawnerClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','ピカチュウ');
            localStorage.setItem('product-id','1');
            localStorage.setItem('product-info','あの大人気ポケットモンスター。トキワの森で会えるかも。');
            localStorage.setItem('product-genre','pocket monster');
            localStorage.setItem('product-price','750 yen');
            localStorage.setItem('product-status','新品');
            localStorage.setItem('product-script-src','https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151476901&style=cloth_blue&name=n&img=y&expl=y&stock=y&price=y&optview=n&inq=y&sk=y');
            //localStorage.setItem('product-pic', 'https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20130819%2F20%2F2902520%2F10%2F454x480x031744bcea057e01d5c67be2.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

    static shortJKSpawnerClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','Short JK(非売品)');
            localStorage.setItem('product-id','2');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151542346&style=normal_gray&name=y&img=y&expl=y&stock=y&price=y&optview=n&inq=n&sk=y');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

  static threeDPoseTrackerSpawnerClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','ThreeDPose Tracker');
            localStorage.setItem('product-id','3');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151531123&style=normal_gray&name=y&img=y&expl=y&stock=n&price=y&optview=n&inq=n&sk=y');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

  static threeDPoseUnityBarracudaClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','ThreeDPose UnityBarracuda');
            localStorage.setItem('product-id','4');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151522209&style=normal_gray&name=y&img=y&expl=y&stock=n&price=y&optview=n&inq=y&sk=y');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

  static hacaroBeltClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','Hacaroベルト');
            localStorage.setItem('product-id','5');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151522475&style=normal_gray&name=y&img=y&expl=y&stock=y&price=y&optview=n&inq=y&sk=y');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

    static shoesClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','登山靴');
            localStorage.setItem('product-id','6');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151591507&style=normal_gray&name=y&img=y&expl=y&stock=y&price=y&optview=n&inq=y&sk=y');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

    static tennisBallClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','テニスボール');
            localStorage.setItem('product-id','7');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digi-rooms.shop-pro.jp/?mode=cartjs&pid=151591533&style=normal_gray&name=y&img=y&expl=y&stock=y&price=y&optview=n&inq=y&sk=y');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

    static guideClick() {
        // // call guide announce
        // var guideAudio = new Audio(); //('triggerGuideAudio.mp3');
        // guideAudio.src = "./triggerGuideAudio.mp3";
        // guideAudio.load();
        // guideAudio.play();  // 再生
        // //guideAudio.pause();  // 一時停止

        const sound = new Howl({
            src: './triggerGuideAudio.mp3'
        });
        sound.play();

        if (sound.playing()) {
            alert('stopped');
            sound.stop();
        } else {
            sound.play();
        }
    }
}