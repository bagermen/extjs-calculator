Ext.define('Calc.view.main.ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.calc_main',
    requires: [
        'Calc.model.Expression'
    ],

    data: {
        thousandSeparator: ',',
        decimalSeparator: '.',

        activePosition: 'strLeft',
        visiblePosition: 'strLeft'
    },

    links: {
        expression: {
            type: 'Calc.model.Expression',
            create: true
        }
    },

    formulas: {
        visibleValue: get => {
            let thousandSeparator = get('thousandSeparator'),
                decimalSeparator = get('decimalSeparator'),
                curThousandSeparator = Ext.util.Format.thousandSeparator,
                curDecimalSeparator = Ext.util.Format.decimalSeparator,
                value, numberStr , number;

            if (get('expression.result') !== null) {
                number = get('expression.result');
                numberStr = number.toString();
            } else {
                numberStr = get('visiblePosition') === 'strLeft' ? get('expression.strLeft') : get('expression.strRight');
                number = get('expression').strToNumber(numberStr);
            }

            Ext.util.Format.thousandSeparator = thousandSeparator;
            Ext.util.Format.decimalSeparator = decimalSeparator;

            value = Ext.util.Format.number(number, `0${thousandSeparator}000${decimalSeparator}/i`);

            if (numberStr && numberStr.includes('.')) {
                value += decimalSeparator + numberStr.slice(numberStr.indexOf('.') + 1);
            }

            Ext.util.Format.thousandSeparator = curThousandSeparator;
            Ext.util.Format.decimalSeparator = curDecimalSeparator;

            return value || '0';
        }
    }
});