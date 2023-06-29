"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homey_zwavedriver_1 = require("homey-zwavedriver");
class dz15s1bzDevice extends homey_zwavedriver_1.ZwaveDevice {
    async onNodeInit() {
        const settings = this.getSettings();
        this.registerCapability('onoff', 'SWITCH_BINARY', {
            get: 'SWITCH_BINARY_GET',
            report: 'SWITCH_BINARY_REPORT',
            getOpts: {
                getOnOnline: true,
                pollInterval: settings.pollInterval
            },
        });
    }
}
module.exports = dz15s1bzDevice;
