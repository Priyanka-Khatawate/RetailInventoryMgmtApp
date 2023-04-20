Ext.define('MyAppName.view.main.categorySelectionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.categorySelection',

    onShirtImageClick: function () {
        this.getView().add({
            xtype: 'customization',
        }).show();
    }
});