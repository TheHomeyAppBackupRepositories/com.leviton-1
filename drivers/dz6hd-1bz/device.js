"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homey_zwavedriver_1 = require("homey-zwavedriver");
class dz6hd1bzDevice extends homey_zwavedriver_1.ZwaveDevice {
    async onNodeInit() {
        const settings = this.getSettings();
        this.registerCapability('onoff', 'SWITCH_MULTILEVEL', {
            get: 'SWITCH_MULTILEVEL_GET',
            report: 'SWITCH_MULTILEVEL_REPORT',
            getOpts: {
                getOnOnline: true,
                pollInterval: settings.pollInterval
            },
        });
        this.registerCapability('dim', 'SWITCH_MULTILEVEL', {
            get: 'SWITCH_MULTILEVEL_GET',
            report: 'SWITCH_MULTILEVEL_REPORT',
            getOpts: {
                getOnOnline: true,
                pollInterval: settings.pollInterval
            },
        });
    }
}
module.exports = dz6hd1bzDevice;
