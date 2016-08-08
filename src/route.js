/**
 * Created by zhagnian on 16-8-5.
 */
let MainToPage = require('./commands/main-page.js');
let RouteClass=require('./route-class');

const ORIGINITEM = {
    '#': new MainToPage()
};
let item = ORIGINITEM;
//console.log(item);
class Route {
    constructor() {
        this.item = ORIGINITEM;
    }

    handle(input) {
        let order = this.item[input] || this.item['#'];
        //console.log(order);
        let respond = order.run(input);
        //console.log(respond);
        if (respond.newItem) {
            this.item = respond.newItem;
            return new RouteClass({text: respond.text});
        }
        if (respond.err) {
            return new RouteClass({text: respond.text});
        }
        if (respond.reset) {
            this.item = ORIGINITEM;
            // console.log(item);
            return new RouteClass({
                text: respond.text,
                rerun: true
            });
        }

        return new RouteClass({text: respond.text});

    }
}
module.exports=Route;
