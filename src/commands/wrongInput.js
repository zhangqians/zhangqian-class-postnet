/**
 * Created by zhagnian on 16-8-7.
 */
let commandClass=require('../command-class');
class WrongInput{
    run()
    {
        return new commandClass(
            {
         text: 'sorry ! please give a right input(1,2 or 3)'
     });
    }
}
module.exports=WrongInput;