Ext.define('Calc.view.main.View', {
    extend: 'Ext.Panel',
    requires: [
        'Calc.view.main.ViewController',
        'Calc.view.main.ViewModel'
    ],

    alias: 'widget.calc_main',

    controller: 'calc_main',

    viewModel: {
        type: 'calc_main'
    },

    layout: 'vbox',

    items: [
        {
            xtype: 'textfield',
            reference: 'input',
            cls: 'calculator-input',
            clearable: false,
            editable: false,
            bind: {
                value: '{visibleValue}'
            }
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            flex: 1,
            defaults: {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                }
            },
            items: [
                {
                    flex: 3,
                    defaults: {
                        flex: 1
                    },
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'AC',
                                    ui: 'decline',
                                    action: Calc.Const.RESET_ACTION,
                                    bubbleEvents: ['tap'],
                                    flex: 1
                                },
                                {
                                    xtype: 'container',
                                    flex: 2
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaults: {
                                xtype: 'button',
                                flex: 1,
                                action: Calc.Const.NUMBER_ACTION,
                                bubbleEvents: ['tap']
                            },
                            items: [
                                {text: '7', val: '7'},
                                {text: '8', val: '8'},
                                {text: '9', val: '9'},
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaults: {
                                xtype: 'button',
                                flex: 1,
                                action: Calc.Const.NUMBER_ACTION,
                                bubbleEvents: ['tap']
                            },
                            items: [
                                {text: '4', val: '4'},
                                {text: '5', val: '5'},
                                {text: '6', val: '6'},
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaults: {
                                xtype: 'button',
                                flex: 1,
                                action: Calc.Const.NUMBER_ACTION,
                                bubbleEvents: ['tap']
                            },
                            items: [
                                {text: '1', val: '1'},
                                {text: '2', val: '2'},
                                {text: '3', val: '3'},
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaults: {
                                xtype: 'button',
                                flex: 1,
                                bubbleEvents: ['tap']
                            },
                            items: [
                                {text: '0', val: '0', action: Calc.Const.NUMBER_ACTION},
                                {bind: {text: '{decimalSeparator}'}, val: '.', action: Calc.Const.NUMBER_ACTION},
                                {text: '<', val: '', action: Calc.Const.DELETE_ACTION},
                            ]
                        }
                    ],
                    listeners: {
                        tap: 'onBtnClick'
                    }
                },
                {
                    defaults: {
                        xtype: 'button',
                        bubbleEvents: ['tap'],
                        flex: 1
                    },
                    flex: 1,
                    items: [
                        {text: '/', action: Calc.Const.DIVISION_ACTION},
                        {text: '*', action: Calc.Const.POWER_ACTION},
                        {text: '-', action: Calc.Const.MINUS_ACTION},
                        {text: '+', action: Calc.Const.PLUS_ACTION},
                        {text: '=', ui: 'action', action: Calc.Const.CALC_ACTION},
                    ],
                    listeners: {
                        tap: 'onActionClick'
                    }
                }
            ]
        }
    ]
});