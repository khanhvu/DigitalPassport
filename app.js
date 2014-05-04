

Ext.application({
    name: 'DigitialPassport',
    profiles: [
        'Android', 'iOS'

    ],
    views: [
        'StartPanel',
        'ProcessPanel',
        'FinishPanel',
        'PhotoActionSheet',
    ],
    
    

    launch: function() {


        Ext.Viewport.setActiveItem({
            xtype : 'startpanel'
        });
       
        Ext.Viewport.add({
            xtype:'finishpanel'
        });
         Ext.Viewport.add({
            xtype:'processpanel'
        });
        

        //Ext.create('DigitialPassport.view.StartPanel', {fullscreen: true});
    }

});
