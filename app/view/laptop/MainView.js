Ext.define('Calc.view.laptop.MainView', {
    extend: 'Ext.Panel',
    requires: [
        'Calc.view.main.View'
    ],
    title: 'Calculator',
    layout: 'fit',
    items: [
        {
            xtype: 'calc_main',
        }
    ]
});