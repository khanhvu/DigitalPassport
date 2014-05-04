
Ext.define('DigitialPassport.controller.android.Main', {
    extend: 'DigitialPassport.controller.Main',

    requires: [
        'Ext.Img'
    ],

    config: {
        refs: {},
        control: {
            startpanelView: {
                show: 'onStartPanelShow'
            }
        }
    },
    init: function() {
        this.callParent();
    },

    onStartPanelShow: function() {
        this.androidVersionGT44 = false;
        if (device && device.platform === "Android") {
            var splits = device.version.split(".");
            if (splits.length >= 2) {
                if (parseInt(splits[0]) >= 4 && parseInt(splits[1]) >= 4) {
                    this.androidVersionGT44 = true;
                }
            }
        }
    },

    onChooseExisting: function() {
        this.onPhotoPicker('library');
    },
    onPickPhotoSuccess: function(imgUrl) {
        //this.getHomeView().getLayout().setAnimation('slide');

        // save the img from picker
        if (this.androidVersionGT44) this.imgUrl = "data:image/png;base64," + imgUrl;
        else this.imgUrl = imgUrl;

        console.log(this.imgUrl);

         Ext.Viewport.animateActiveItem({xtype:'processpanel'},{type: 'slide', direction: 'left'});
        
    },


    onProcessPanelShow: function(){
        // if (!this.transformImage) {
        //     this.imageElement(this.imgUrl, function(imageEl) {
        //         // add image to container
        //         var container = this.getProcessContainer(),
        //             sWidth = container.element.getWidth(),
        //             sHeight = container.element.getHeight();

        //         var image = Ext.create('widget.img', {
        //             src: this.imgUrl
        //         });
        //         container.add(image);
        //         this.transformImage = $(image.element.dom);

        //         // free it
        //         this.imgUrl = null;

        //         // keep track of transform image
        //         var iContainer = $('<div style="position: absolute; top: -99999px; left: -99999px;"></div>');
        //         iContainer.append(imageEl);
        //         $(document.body).append(iContainer);

        //         // resize image to fit the screen
        //         this.realImageEl = $(imageEl);
        //         if (this.realImageEl.width() > sWidth ||
        //             this.realImageEl.height() > sHeight) {
        //             var iWidth = this.realImageEl.width(),
        //                 iHeight = this.realImageEl.height(),
        //                 iRatio = iWidth/iHeight,
        //                 sRatio = sWidth/sHeight;

        //             if (sRatio > iRatio) {
        //                 this.transformImage.width(iWidth*sHeight/iHeight);
        //                 this.transformImage.height(sHeight);
        //             } else {
        //                 this.transformImage.width(sWidth);
        //                 this.transformImage.height(iHeight*sWidth/iWidth);
        //             }
        //         }
        //         iContainer.remove();

        //         // center image
        //         this.transformImage.css({
        //             x: (sWidth - this.transformImage.width())/2,
        //             y: (sHeight - this.transformImage.height())/2
        //         });
        //     });

        //     // handle for image zooming + moving
        //     this.getProcessContainer().element.on({
        //         scope: this,
        //         // touchstart: this.onPinchOrMoveStart,
        //         // touchmove: this.onPinchOrMove,
        //         // touchend: this.onPinchOrMoveEnd
        //     });

        //     // show crop frame as default
        //     //this.onCrop1();
        // }
    },

});