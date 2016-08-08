/**
 * Created by zhagnian on 16-8-8.
 */
class CommandClass
{
    constructor({text,err,reset,newItem})
    {
        this.text=text;
        this.err=err;
        this.reset=reset;
        this.newItem=newItem;
    }

}
module.exports=CommandClass;