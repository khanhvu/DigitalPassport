Ext.define('DigitialPassport.profile.Android', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Android',
        controllers: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Android;
    }
});