/**
 * Created by zhagnian on 16-8-6.
 */
//let gotozipcode2barcode=require('./goto-zipcode-2-barcode');
    let GoToZipcodeToBarcode=require('./goto-zipcode-2-barcode');
let commandClass=require('../command-class');
class zipcodeToBarcode {
    run() {
        return new commandClass({
            text: 'please input zipcode:',
            newItem: {'#': new GoToZipcodeToBarcode()}
        });
    }
}
module.exports=zipcodeToBarcode;
