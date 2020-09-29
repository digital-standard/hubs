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

  static hacaroBlackClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','測定ベルト（Hacaroベルト）');
            localStorage.setItem('product-id','5');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digista.shop-pro.jp/?mode=cartjs&pid=152206459&style=normal_gray&name=n&img=y&expl=y&stock=y&price=y&optview=n&inq=n&sk=n');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

    static hacaroBlueClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','測定ベルト（Qualityベルト・ブルー）');
            localStorage.setItem('product-id','6');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digista.shop-pro.jp/?mode=cartjs&pid=152183768&style=normal_gray&name=n&img=y&expl=y&stock=y&price=y&optview=n&inq=n&sk=n');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

    static hacaroPinkClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('product-name','測定ベルト（Qualityベルト・ピンク）');
            localStorage.setItem('product-id','7');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digista.shop-pro.jp/?mode=cartjs&pid=152183818&style=normal_gray&name=n&img=y&expl=y&stock=y&price=y&optview=n&inq=n&sk=n');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }

    static tokutei1Click() {
        var el = document.getElementById("product_dialog_product_name");
        if(!el)
        {
            localStorage.setItem('product-name','特定商取引法に基づく表記');
            localStorage.setItem('product-id','8');
            localStorage.setItem('product-info','');
            localStorage.setItem('product-genre','tokutei');
            localStorage.setItem('product-price','');
            localStorage.setItem('product-status','');
            localStorage.setItem('product-script-src', 'https://digital-standard.com/specific-commerce/');

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

    static sickArtClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','看病');
            localStorage.setItem('art-info','病人と看病する人です。');
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/8790ec31-b8ca-45d7-bccc-e02f4f950e6f.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }

    static boucherArtClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','フランソワ・ブーシェ');
            localStorage.setItem('art-info','Portrait présumé de Marie-Emilie Baudouin, fille du peintre');
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/0a8c562c-28b7-43f2-a934-215fc8ee4419.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }

    static bunelArtClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','フランソワ・ブネル');
            localStorage.setItem('art-info','La procession de la ligue dans les rues de Paris, le 4 février 1593');
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/68189fa1-7f99-4242-a417-74e678d1784b.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }

    static cezanneArtClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','ポール・セザンヌ');
            localStorage.setItem('art-info','Portrait of Ambroise Vollard');
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/a5d018a4-7ef3-4b0c-9ae8-987653834b77.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }

    static chalonArtClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','ジョン・ジェームス・シャロン');
            localStorage.setItem('art-info','Le Marché et la fontaine des Innocents');
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/e0ec7574-c3f9-4ad1-be73-c2b848ad6531.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }

    static gerardArtClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','フランソワ・ジェラール');
            localStorage.setItem('art-info','Portrait de Juliette Récamier, née Bernard (1777-1849).');
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/2cf37f23-d3a5-4a91-8727-660b532745db.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }

    static modiglianiArtClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','アメデオ・モディリアーニ');
            localStorage.setItem('art-info','Femme aux yeux bleus');
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/3664865c-8cf8-4c61-986c-041645325335.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }

    static monetArtClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','クロード・モネ');
            localStorage.setItem('art-info',"Soleil couchant sur la Seine à Lavacourt, effet d'hiver");
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/598f167e-1a64-4619-8e7f-5ce0a1c50b09.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }

    static redouteArtClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','ピエール＝ジョゼフ・ルドゥーテ');
            localStorage.setItem('art-info','Papaver Somniferum');
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/9055f3b2-adc5-4d4b-9aed-f2aa2acedfb0.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }

    static canDoClick() {
        // check if product modal is opend by searching one of the element of the modal
        var el = document.getElementById("art_dialog_art_name");
        if(!el)
        {
            // write product info on session
            localStorage.setItem('art-name','スクリプト呼び出し実践');
            localStorage.setItem('art-info','スクリプトがあればなんでも出来る');
            localStorage.setItem('art-pic', 'https://digiroomsstack-assets.digi-rooms.link/files/27662fa8-1f37-45ff-a21a-8633b04ef3d0.jpg');

            document.querySelectorAll('[class*=art-button]')[0].click();
        }
    }
}