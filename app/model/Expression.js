Ext.define('Calc.model.Expression', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'strLeft', type: 'string'},
        {name: 'strRight', type: 'string'},
        {name: 'action'},
        {name: 'result', type: 'number', allowNull: true}
    ],
    proxy: 'memory',

    strToNumber: function(strVal) {
        return strVal.includes('.') ? Number.parseFloat(strVal) : Number.parseInt(strVal, 10);
    },

    fillFromResult: function() {
        this.set({
            strLeft: this.get('result'),
            result: null
        });
    }
});