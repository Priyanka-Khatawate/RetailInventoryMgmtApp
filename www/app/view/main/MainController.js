/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyAppName.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onLoginClick: function() {
        var myView = this.getView();
        if(myView.down('[name=user]').getValue() === 'priyanka.k@celestial.com' && myView.down('[name=pass]').getValue() === '1234'){
            var navigationView = myView.up();
            navigationView.getParent().push(
                {
                    xtype: 'categorySelection'
                }
            );
       } else {
            Ext.Msg.alert('Invalid', 'Invalid username or password');
        }
    }
});
