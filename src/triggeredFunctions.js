import { isValidElement } from "react";

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
            localStorage.setItem('product-pic', 'https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20130819%2F20%2F2902520%2F10%2F454x480x031744bcea057e01d5c67be2.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r');

            document.querySelectorAll('[class*=product-button]')[0].click();
        }
    }
}