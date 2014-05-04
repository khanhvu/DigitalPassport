

Ext.define('DigitialPassport.controller.ios.Main', {
    extend: 'DigitialPassport.controller.Main',

    config: {
        refs: {},
        control: {}
    },

    init: function() {
        this.callParent();

        // device ios version for brightness and contrast
        var version = device.version,
            major = parseInt(version.split(".")[0], 10);
        
        this.iOS7 = (major >= 7);
    }

    

});