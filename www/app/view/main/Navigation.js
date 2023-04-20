/**
 * This is a navigation view.
 */
Ext.define('MyAppName.view.main.Navigation', {
    extend: 'Ext.navigation.View',
    xtype: 'app-navigation',

    controller: 'main',
    viewModel: 'main',
    fullscreen: true,
    itemId: 'navigationView',

    items: [
        {
            title: 'Retail Inventory Mangement App',
            items: [
                {
                    xtype: 'main-login',
                    
                }
            ]
        }
      ]
});
