Ext.define('MyAppName.view.main.CategorySelection', {
    extend: 'Ext.panel.Panel',

    xtype: 'categorySelection',
    controller: 'categorySelection',
    width: 600,
    height: 400,
    layout: 'vbox',
    title: 'Clothing',
    items: [{
        xtype: 'container',
        layout: 'hbox',
        items: [
            {
                xtype: 'image',
                height: 150,
                width: 150,
                margin: '5 30 5 5',
                src: '/resources/images/categories/Jewellery.jpeg'
            },
            {
                xtype: 'image',
                height: 150,
                width: 150,
                margin: '5 30 5 5',
                src: '/resources/images/categories/Accessories.jpeg',
            },
            {
                xtype: 'image',
                height: 150,
                width: 150,
                margin: '5 30 5 5',
                src: '/resources/images/categories/Hoodies.jpeg',
            },
            {
                xtype: 'image',
                height: 150,
                width: 150,
                margin: '5 30 5 5',
                src: '/resources/images/categories/t-shirts.jpeg',
                listeners: {
                    tap: 'onShirtImageClick'
                }
            },
            {
                xtype: 'image',
                height: 150,
                width: 150,
                margin: '5 30 5 5',
                src: '/resources/images/categories/Shirts.jpeg',
            }
        ]
    },
    {
        xtype: 'container',
        layout: 'hbox',
        items: [{
            xtype: 'label',
            html: 'Jewellery',
            padding: '0 0 0 5px'
        }, {
            xtype: 'label',
            html: 'Accessories',
            padding: '0 0 0 135px'
        }, {
            xtype: 'label',
            html: 'Hoodies',
            padding: '0 0 0 120px'
        }, {
            xtype: 'label',
            html: 'T-Shirts',
            padding: '0 0 0 140px'
        }, {
            xtype: 'label',
            html: 'Shirts',
            padding: '0 0 0 140px'
        }]
    }]
});