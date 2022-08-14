Ext.define('Calc.controller.Calculator', {
    extend: 'Ext.app.Controller',
    id: 'calculator',

    init: function() {
        let calcMainListeners = {};
        calcMainListeners[Calc.Const.CALCULATE_EVENT] = 'onCalculateValue'
        this.control({
            calc_main: calcMainListeners
        });
    },

    onCalculateValue: function(calc, expression) {
        expression.set('result', this.calculate(
            expression.strToNumber(expression.get('strLeft')),
            expression.strToNumber(expression.get('strRight')),
            expression.get('action')
        ));
    },

    calculate: function(left, right, action) {
        switch (action) {
            case Calc.Const.POWER_ACTION:
                return left * right;
            case Calc.Const.DIVISION_ACTION:
                return left / right;
            case Calc.Const.PLUS_ACTION:
                return left + right;
            case Calc.Const.MINUS_ACTION:
                return left - right;
        }
        return 0;
    }
});