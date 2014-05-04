

Ext.define('DigitialPassport.view.CameraTut', {
    extend: 'Ext.Panel',
    alias: 'widget.cameratut',
     xtype: 'cameratut',
    requires: [
        'Ext.Container',
        'Ext.Button'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'container',
                flex: 7
            },
            {
                xtype: 'container',
                flex: 3,
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        margin: 10,
                        itemId:'ShowAgainButton',
                        text: 'Show Again'
                    },
                    {
                        xtype: 'button',
                        margin: 10,
                        itemId:'OkButton',
                        text: 'OK'
                    }
                ]
            }
        ]
    }

});