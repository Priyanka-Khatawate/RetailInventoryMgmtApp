/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyAppName.Application',

    name: 'MyAppName',

    requires: [
        // This will automatically load all classes in the MyAppName namespace
        // so that application classes do not need to require each other.
        'MyAppName.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyAppName.view.main.Navigation'
});
