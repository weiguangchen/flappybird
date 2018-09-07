// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    cotr() {

    },
    properties: {
        speed: 0.6,
        lands: {
            default: [],
            type: [cc.Sprite],
        },
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    moveland(land, speed) {
        var landw = this.lands[0].node.width;
        if (this.lands[0].node.x < -landw) {
            var land1 = this.lands.shift(0);
            land1.node.x = landw;
            this.lands.push(land1);
        } else {
            for (let i = 0; i < land.length; i++) {
                land[i].node.x -= speed;
            }
        }
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    },
    update(dt) {
        this.moveland(this.lands, this.speed)

    },
    start() {

    },

    // update (dt) {},
});