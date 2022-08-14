Ext.define('Calc.view.desktop.MainView', {
    extend: 'Ext.Dialog',
    requires: [
        'Calc.view.main.View'
    ],
    title: 'Calculator',
    width: 200,
    height: 300,
    layout: 'fit',
    closable: true,
    maximizable: true,
    items: [
        {
            xtype: 'calc_main'
        }
    ]
});