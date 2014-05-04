
Ext.define('DigitialPassport.controller.android.Main', {
    extend: 'DigitialPassport.controller.Main',

    requires: [
        'Ext.Img'
    ],

    config: {
        refs: {},
        control: {
            startpanelView: {
                show: 'onStartPanelShow'
            }
        }
    },
    init: function() {
        this.callParent();
    },

    onStartPanelShow: function() {
        this.androidVersionGT44 = false;
        if (device && device.platform === "Android") {
            var splits = device.version.split(".");
            if (splits.length >= 2) {
                if (parseInt(splits[0]) >= 4 && parseInt(splits[1]) >= 4) {
                    this.androidVersionGT44 = true;
                }
            }
        }
    }
});