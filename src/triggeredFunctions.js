export class triggeredFunctions{
    static sampleAlert() {
        var elements = document.querySelectorAll('[class*=message-entry-input]');
        elements[0].value = 'https://www.u-treasure-onlineshop.jp/fs/utre/c/pikachu';
        elements[0].defaultValue = 'https://www.u-treasure-onlineshop.jp/fs/utre/c/pikachu';

        document.querySelectorAll('[class*=message-entry-spawn]')[0].click();

        elements[0].value = 'https://poly.google.com/view/fgDXtV5sIGY';
        elements[0].defaultValue = 'https://poly.google.com/view/fgDXtV5sIGY';

        document.querySelectorAll('[class*=message-entry-spawn]')[0].click();
    }
}