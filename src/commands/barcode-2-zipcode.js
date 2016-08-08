/**
 * Created by zhagnian on 16-8-7.
 */
let commandClass=require('../command-class');
let GoToBarcodeToZipcode=require('./goto-barcode-2-zipcode');
class BarcodeToZipcode {
    run() {
        return new commandClass({
            text: 'please input zipcode:',
            newItem: {'#': new GoToBarcodeToZipcode()}
        });
    }
}
module.exports=BarcodeToZipcode;
