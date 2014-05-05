

Ext.define('DigitialPassport.view.ProcessPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.processpanel',
    xtype:'processpanel',
    requires: [
        'Ext.Panel',
        'Ext.Button',
        'Ext.Img'
    ],

    config: {
        layout: 'fit',

        items: [
            {
                xtype: 'panel',
                docked: 'top',
                height: '10%',
                style:'background-color: #246755',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'justify'
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'mybutton1',
                        text: 'Retake'
                    },
                    {
                        xtype: 'button',
                        itemId: 'mybutton2',
                        text: 'Done'
                    }
                ]
            },
            {
                xtype: 'panel',
                 style:'background-color: white',
                cls: 'process-panel-center',
                layout: 'fit',
                items: [
                    {
                        xtype: 'panel',
                        layout: 'fit',
                        cls: 'process-panel-center-img',
                    },
                    {
                        xtype: 'panel',
                        centered: false,
                        layout: 'fit',
                        scrollable: false,
                        items: [
                            {
                                xtype: 'panel',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        centered: false,
                                        cls: 'process-panel-frame',
                                        height: 376,
                                        // margin: '5%',
                                        style:'margin-left:5%; margin-right:5%;',
                                        width: '90%',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'center'
                                        },
                                        items: [
                                            {
                                                xtype: 'image',
                                                flex: 10,
                                                src: 'resources/images/frame.png'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
                
            },
            {
                xtype: 'panel',
                docked: 'bottom',
                height: '10%',
                style: 'background-color: #cdcccc'
            }
        ]
    }

});