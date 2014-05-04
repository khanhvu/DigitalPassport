
Ext.define('DigitialPassport.view.PhotoActionSheet', {
    extend: 'Ext.Panel',
    alias: 'widget.photoactionsheet',
        xtype: 'photoactionsheet',
    requires: [
        'Ext.Button'
    ],

    config: {
        centered: true,
        fullscreen: true,
        style: 'border:none;\n    background-color: transparent;',
        width: '90%',
        hideOnMaskTap: true,
        modal: true,
        hideAnimation: {
            type: 'popOut',
            duration: 200,
            easing: 'ease-out'
        },
        showAnimation: {
            type: 'popIn',
            duration: 200,
            easing: 'ease-out'
        },
        items: [
            {
                xtype: 'button',
                docked: 'top',
                margin: 10,
                text: 'Take Picture'
            },
            {
                xtype: 'button',
                docked: 'top',
                margin: 10,
                text: 'Choose Existing'
            },
            {
                xtype: 'button',
                docked: 'top',
                itemId: 'CancelButton',
                margin: 10,
                text: 'Cancel'
            }
        ]
    }

});