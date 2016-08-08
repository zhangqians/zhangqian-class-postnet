/**
 * Created by zhagnian on 16-8-7.
 */
let {barcodeToZipcode}=require('../core/barcode-to-zipcode');
let commandClass=require('../command-class');
class BarcodeToZipcodeCommand
{
    run(barcode)
    {
        let zipcode=barcodeToZipcode(barcode);
        if(zipcode.startsWith('Invalid barcode:')) {
            return new commandClass({
                err: 'please input right zipcode'
            });

        }else{
            return new commandClass({
                text:zipcode,
                reset:true
            });
        }
    }
}

module.exports=BarcodeToZipcodeCommand;
