/**
 * Created by zhagnian on 16-8-6.
 */
let {zipcodeToBarcode}=require('../core/zipcode-to-barcode');
let commandClass=require('../command-class');
class ZipcodeToBarcodeCommand
{
    run(zipcode)
    {
        let barcode=zipcodeToBarcode(zipcode);
    if(barcode.startsWith('Invalid barcode:')) {
        return new commandClass({
            err: 'please input right zipcode'
        });

    }else{
        return new commandClass({
            text:barcode,
            reset:true
        });
    }
    }
}

module.exports=ZipcodeToBarcodeCommand;
