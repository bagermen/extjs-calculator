Ext.define('Calc.profile.Laptop', {
    extend: 'Ext.app.Profile',
    requires: [
        'Calc.view.laptop.MainView'
    ],

    mainView: 'Calc.view.laptop.MainView',

    isActive: function() {
        return !Ext.is.Desktop;
    }
});