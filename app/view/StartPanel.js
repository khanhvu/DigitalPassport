

Ext.define('DigitialPassport.view.StartPanel', {
    extend: 'Ext.Panel',
    //alias: 'widget.startpanel',
    xtype:'startpanel',
    requires: [
        'Ext.carousel.Carousel',
        'Ext.Panel',
        'Ext.Button'
    ],

    config: {
        itemId: 'mypanel',
        layout: 'vbox',
        items: [
            {
                xtype: 'container',
                flex: 9,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'carousel',
                        flex: 10,
                        items: [
                            {
                                xtype: 'panel',
                                html: '<div class="container-fluid"> <div class="content"> 	<div class="rows"> 		<span class="col-xs-12 col-md-12 title">Requirement</span>	 		<span class="col-xs-12 col-md-12 title2">New Zealand travel & citizenship </span> 		<span class="col-xs-12 col-md-12 title2">document standard </span> 		<span class="col-xs-12 col-md-12 title2">(Online Application):</span> 	</div> 	<div class="rows">	 		<div class="col-xs-12 col-md-12"> 		<ul class="properties"> 			<li><span>Photo width: 900px - 1500px</span></li> 			<li><span>Photo height: 1200px - 6000px</span></li> 			<li><span>Ratio: 1:3</span></li> 			<li><span>File type: .jpg or .jpeg</span></li> 			<li><span>File size: 500KB - 10MB</span></li> 		</ul>  </div> 	</div> 		 	</div> 	</div>'
                            },
                            {
                                xtype: 'panel',
                                html: '<div class="container-fluid"> 	<div class="content"> 		<div class="rows"> 			<span class="col-xs-12 col-md-12 title">Setting</span>	 			<span class="col-xs-12 col-md-12 title2"></span> 		</div> 		<div class="rows">	 			<div class="col-xs-12 col-md-12"> 				<ul class="properties"> 					<li> 					<span>Ask someone to take a picture of you</span> 					</li> 					<li> 						<span>Stand 1-1.5 meters from the background</span> 					</li> 				</ul> 			</div> 		</div>		 		<div class="rows"> 			<img src="resources/images/2.png"/> 		</div> 	</div> </div>'
                            },
                            {
                                xtype: 'panel',
                                html: '<div class="container-fluid"> <div class="content"> 	<div class="rows"> 		<span class="col-xs-12 col-md-12 title">Lightning</span>	 		<span class="col-xs-12 col-md-12 title2"></span> 	</div> 	<div class="rows">	 		<div class="col-xs-12 col-md-12"> 		<ul class="properties"> 			<li> 			<span>A plain or light colored background; but not white</span> 		</li> 		<li> 			<span>No reflected light on the face</span> 		</li> 		<li> 			<span>No shadow in the background nor on the face</span> 		</li> 		<li><span>File type: .jpg or .jpeg</span></li> 		<li><span>File size: 500KB - 10MB</span></li> 		</ul>  </div> 	</div> 		 	</div> 	</div>'
                            },
                            {
                                xtype: 'panel',
                                html: '<div class="container-fluid"> 	<div class="content"> 		<div class="rows"> 			<span class="col-xs-12 col-md-12 title">Pose</span>	 			<span class="col-xs-12 col-md-12 title2"></span> 		</div> 		<div class="rows">	 			<div class="col-xs-12 col-md-12"> 				<ul class="properties"> 					<li> 						<span>Natural expression -  no smiling/frowning</span> 					</li> 					<li> 						<span>face the camera - not titled/turned</span> 					</li> 				</ul> 			</div>			 		</div>		 		<div class="rows"> 			<img src="resources/images/4.png"/> 		</div> 	</div> </div>'
                            },
                            {
                                xtype: 'panel',
                                html: '<div class="container-fluid"> <div class="content"> 	<div class="rows"> 		<span class="col-xs-12 col-md-12 title">Restriction</span>	 		<span class="col-xs-12 col-md-12 title2"></span> 	</div> 	<div class="rows">	 		<div class="col-xs-12 col-md-12"> 		<ul class="properties"> 			<li><span>No head convering unless it\'s for religious <br /> or medical reasons</span></li> 			<li> 			<span>Glasses</span> 				<ul> 					<li><span>Eyes must be clearly showing through</span> <br /> <span>glasses with <strong>no reflection</strong></span></li> 					<li><span>Remove glasses with <strong>heavy frames</strong></span></li> 				</ul>						 			</li> 		</ul>  </div> 	</div> 		 	</div> 	</div>'
                            },
                            {
                                xtype: 'panel'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'button',
                        itemId: 'StartBtn',
                        text: 'Start'
                    }
                ]
            }
        ]
    }

});