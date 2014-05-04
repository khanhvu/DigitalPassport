

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
        'CameraTut',
        'Transform'
    ],
    
    

    launch: function() {


        Ext.Viewport.setActiveItem({
            xtype : 'startpanel'
        });
       
        Ext.Viewport.add({
            xtype:'finishpanel'
        });
        //  Ext.Viewport.add({
        //     xtype:'processpanel'
        // });
         Ext.Viewport.add({
            xtype:'cameratut'
        });
        

        //Ext.create('DigitialPassport.view.StartPanel', {fullscreen: true});
    }

});
