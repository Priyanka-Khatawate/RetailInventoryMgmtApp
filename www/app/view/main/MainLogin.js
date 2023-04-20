Ext.define('MyAppName.view.main.MainLogin', {
    extend: 'Ext.form.Panel',
    requires: [
        'MyAppName.view.main.CategorySelection'
    ],
    
    xtype: 'main-login',
    controller: 'main',
    viewModel: 'main',

    title: 'Login',

    bodyPadding: 20,
    width: 320,
    centered: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'User ID',
        name: 'user',
        placeholder: 'user id'
    }, {
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Password',
        name: 'pass',
        placeholder: 'password'
    }, {
        xtype: 'checkbox',
        boxLabel: 'Remember me',
        name: 'remember'
    }],

    buttons: [{
        text: 'Login',
        listeners: {
            tap: 'onLoginClick'
        }
    }]
});