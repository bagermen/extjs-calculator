Ext.define('Calc.profile.Desktop', {
    extend: 'Ext.app.Profile',
    requires: [
        'Calc.view.desktop.MainView'
    ],

    mainView: 'Calc.view.desktop.MainView',

    isActive: function() {
        return Ext.is.Desktop;
    }
});