Ext.define('Calc.view.main.ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.calc_main',

    onBtnClick: function(btn) {
        let vm = this.getViewModel(),
            expression = vm.get('expression'),
            activePosition, strNumber;

        if (expression.get('result') !== null) {
            expression = this.resetView();
        }

        activePosition = vm.get('activePosition');
        vm.set('visiblePosition', vm.get('activePosition'));
        strNumber = expression.get(activePosition);

        switch (btn.action) {
            case Calc.Const.NUMBER_ACTION:
                expression.set(activePosition, this.appendNumber(strNumber, btn.val));
                break;
            case Calc.Const.DELETE_ACTION:
                expression.set(activePosition, this.popNumber(strNumber));
                break;
            case Calc.Const.RESET_ACTION:
                this.resetView();
        }
    },

    appendNumber: function(strNumber, value) {
        if (value === '.' && strNumber.includes('.')) {
            return strNumber;
        } else if (strNumber === '0' || strNumber === '') {
            strNumber = value;
        } else if (strNumber === '-' && value === '.') {
            strNumber += '0' + value;
        } else {
            strNumber += value;
        }

        return strNumber;
    },

    popNumber: function(strNumber) {
        return strNumber.slice(0, strNumber.length - 1) || '0';
    },

    resetView: function() {
        let vm = this.getViewModel();

        vm.linkTo('expression', {
            type: 'Calc.model.Expression',
            create: true
        });

        vm.set({
            activePosition: 'strLeft',
            visiblePosition: 'strLeft',
        });

        return vm.get('expression');
    },

    onActionClick: function(btn) {
        let vm = this.getViewModel(),
            expression = vm.get('expression'),
            result = expression.get('result');

        switch (btn.action) {
            case Calc.Const.DIVISION_ACTION:
            case Calc.Const.POWER_ACTION:
            case Calc.Const.MINUS_ACTION:
            case Calc.Const.PLUS_ACTION:
                if (result !== null) {
                    expression = this.resetView();
                    expression.set('strLeft', result);
                }
                expression.set('action', btn.action);
                vm.set('activePosition', 'strRight');
                vm.set('visiblePosition', 'strLeft');
                break;
            case Calc.Const.CALC_ACTION:
                if (!expression.get('action')) {
                    return;
                }

                if (result !== null) {
                    expression.fillFromResult();
                } else if (vm.get('visiblePosition') === 'strLeft') {
                    expression.set('strRight', expression.get('strLeft'))
                }

                this.fireViewEvent(Calc.Const.CALCULATE_EVENT, expression);
            break;
        }
    }
});