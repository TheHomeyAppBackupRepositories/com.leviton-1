"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homey_zwavedriver_1 = require("homey-zwavedriver");
class dzpa12bwDevice extends homey_zwavedriver_1.ZwaveDevice {
    async onNodeInit() {
        const settings = this.getSettings();
        this.registerCapability('onoff', 'BASIC', {
            get: 'BASIC_GET',
            report: 'BASIC_REPORT',
            getOpts: {
                getOnOnline: true,
                pollInterval: settings.pollInterval
            },
        });
    }
}
module.exports = dzpa12bwDevice;
