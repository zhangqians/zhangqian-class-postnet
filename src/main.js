/**
 * Created by zhagnian on 16-8-5.
 */
let Route=require('./route');
let readline=require('readline');
let route=new Route();
function connectToRoute(line){
    let response=route.handle(line);
    console.log(response.text);
    if(response.rerun)
    {
        connectToRoute(line);
    }
}

//connectToRoute();
module.exports=function(){
    let listener=readline.createInterface({

        input:process.stdin,
        output:process.stdout,
        terminal: false
    });

    listener.on('line',function (line){
        connectToRoute(line);

    });
    connectToRoute();

};