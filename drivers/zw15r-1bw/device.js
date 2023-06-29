"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homey_zwavedriver_1 = require("homey-zwavedriver");
class zw15r1bwDevice extends homey_zwavedriver_1.ZwaveDevice {
    async onNodeInit() {
        this.registerCapability('onoff', 'SWITCH_BINARY');
    }
}
module.exports = zw15r1bwDevice;
