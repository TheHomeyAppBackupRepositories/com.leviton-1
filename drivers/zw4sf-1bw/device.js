"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homey_zwavedriver_1 = require("homey-zwavedriver");
class zw4sf1bwDevice extends homey_zwavedriver_1.ZwaveDevice {
    async onNodeInit() {
        await this.setUnavailable();
        this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
        this.registerCapability('dim', 'SWITCH_MULTILEVEL');
        this.registerCapabilityListener('dim', async (range) => {
            const steps = (25 * Math.round((range * 100) / 25)) / 100;
            await this.setCapabilityValue('dim', steps);
            return this.executeCapabilitySetCommand('dim', 'SWITCH_MULTILEVEL', steps);
        });
        await this.setAvailable();
    }
}
module.exports = zw4sf1bwDevice;
