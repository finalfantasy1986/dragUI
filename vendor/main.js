require.config({
    baseUrl: vendorPath,
    urlArgs:'v='+(new Date()).getTime(),
    paths:{
        'css':'css.min',
        'jquery':"jquery-1.12.4.min",
        'jqueryui':"jquery-ui-1.12.1/jquery-ui.min",
        'bootstrap':'bootstrap-3.3.7/js/bootstrap.min',
        'bootstrapTable':'bootstrap-table-1.12.1/bootstrap-table.min',
        'bootstrapTable_zh':'bootstrap-table-1.12.1/locale/bootstrap-table-zh-CN.min',
        'spectrum':'spectrum/spectrum',
        'spectrum_zh':'spectrum/i18n/jquery.spectrum-zh-cn',
        'base':'dragUI/js/composer/base',
        'util':'dragUI/js/composer/util'
    },
    shim:{
        'jqueryui':{
            deps: ['jquery','css!jquery-ui-1.12.1/jquery-ui.min'],
            exports:'jqueryui'
        },
        'bootstrap':{
            deps: ['jquery','css!bootstrap-3.3.7/css/bootstrap.min'],
            exports:'bootstrap'
        },
        'bootstrapTable':{
            deps: ['bootstrap','css!bootstrap-table-1.12.1/bootstrap-table.min'],
            exports:'bootstrapTable'
        },
        'bootstrapTable_zh':{
            deps:['bootstrapTable'],
            exports:'bootstrapTable_zh'
        },
        'spectrum':{
            deps: ['jquery','css!spectrum'],
            exports:'spectrum'
        },
        'spectrum_zh':{
            deps: ['spectrum'],
            exports:'spectrum_zh'
        },
        'base':{
            deps: ['util','css!dragUI/css/designer_white','css!font-awesome-4.7.0/css/fontawesome-all.min'],
            exports:'base'
        }

    }
});