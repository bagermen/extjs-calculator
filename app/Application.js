Ext.define('Calc.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'Calc.Const'
    ],

    name: 'Calc',
    profiles: ['Laptop', 'Desktop'],

    controllers: [
        'Calculator'
    ],

    showCalculator: function() {
        this.getMainView().show();
    }
});