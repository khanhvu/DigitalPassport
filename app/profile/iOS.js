Ext.define('DigitialPassport.profile.iOS', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'iOS',
        controllers: ['Main']
    },

    isActive: function() {
        return Ext.os.is.iOS;
    }
});