
Ext.define('MyAppName.view.main.ColorPicker', {
    extend: 'Ext.Component',
    xtype: 'colorpicker',
    requires: 'Ext.XTemplate',

    colors : [
        '000000', '993300', '333300', '003300', '003366', '000080', '333399', '333333',
        '800000', 'FF6600', '808000', '008000', '008080', '0000FF', '666699', '808080',
        'FF0000', 'FF9900', '99CC00', '339966', '33CCCC', '3366FF', '800080', '969696',
        'FF00FF', 'FFCC00', 'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0',
        'FF99CC', 'FFCC99', 'FFFF99', 'CCFFCC', 'CCFFFF', '99CCFF', 'CC99FF', 'FFFFFF'
    ],

    colorRegEx: /(?:^|\s)color-(.{6})(?:\s|$)/,

    paletteTpl: '<tpl for=".">' +
                '<a href="#" role="button" class="color-{.} color-picker-item">' +
                '<span class="color-picker-item-inner" style="background:#{.}">&#160;</span>' +
                '</a>' +
                '</tpl>',

    cls: 'color-picker',

    initialize: function () {
        var tpl,
            me = this;

        me.callParent();

        // create the colors template and render it to the color picker's body
        tpl = new Ext.XTemplate(this.paletteTpl);
        tpl.overwrite(this.bodyElement, this.colors);

        // add handler for the click event on the hyperlink descendants of the color picker
        me.mon(me.el, 'click', me.handleClick, me, {delegate: 'a'});
    },

    /**
     * Handles the click event on the color elements
     * @param event
     */
    handleClick: function (event) {
        var me = this,
            color;

        event.stopEvent();
        if (!me.disabled) {
            color = event.currentTarget.className.match(me.colorRegEx)[1];
            me.fireEvent('select', '#'+color.toUpperCase());
        }
    }
});