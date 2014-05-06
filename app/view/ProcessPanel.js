

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
                        itemId: 'retakeBtn',
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
                layout: 'hbox',
                style: 'background-color: #cdcccc',
                items: [
                    {
                        xtype: 'carousel',
                        cls:'process-bottom-carousel',
                        flex: 10,
                        indicator: false,
                        items: [
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: 'fit'
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 8,
                                        items: [
                                            {
                                                xtype: 'label',
                                                centered: true,
                                                html: 'Put your head in the circle'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: 'fit',
                                        items: [
                                            {
                                                xtype: 'button',
                                                centered: true,
                                                ui: 'plain',
                                                text: '>>',
                                                itemId:'process-bottom-carousel-button-next-1'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: 'fit',
                                        items: [
                                            {
                                                xtype: 'button',
                                                centered: true,
                                                ui: 'plain',
                                                text: '<<',
                                                itemId:'process-bottom-carousel-button-previous-1'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 8,
                                        items: [
                                            {
                                                xtype: 'label',
                                                centered: true,
                                                html: 'Pinch and slide to edit'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: 'fit',
                                        items: [
                                            {
                                                xtype: 'button',
                                                centered: true,
                                                ui: 'plain',
                                                text: '>>',
                                                itemId:'process-bottom-carousel-button-next-2'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: 'fit',
                                        items: [
                                            {
                                                xtype: 'button',
                                                centered: true,
                                                ui: 'plain',
                                                text: '<<',
                                                itemId:'process-bottom-carousel-button-previous-2'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 8,
                                        items: [
                                            {
                                                xtype: 'label',
                                                centered: true,
                                                html: 'Maximum of head is 75% of photo'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: 'fit'
                                    }

                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});