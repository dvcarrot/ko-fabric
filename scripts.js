/**
 * Bindings
 */
(function (ko, fabric, $) {

    ko.bindingHandlers.msDropdownSelect = {
        after: ['options'],
        init: function(element, valueAccessor) {
            var $dropdown = $(element).closest('.ms-Dropdown');
            new fabric['Dropdown']($dropdown[0]);
            valueAccessor().subscribe(function () {
                $dropdown.find('.ms-Dropdown-title, .ms-Dropdown-items').remove();
                new fabric['Dropdown']($dropdown[0]);
            });
        },
        update: function(element) {
            var $dropdown = $(element).closest('.ms-Dropdown');
            $dropdown.find('.ms-Dropdown-title, .ms-Dropdown-items').remove();
            new fabric['Dropdown']($dropdown[0]);
        }
    };

})(ko, fabric, jQuery);


/**
 * Components
 */
(function (ko, $, fabric) {

    ko.components.register('ui-view-field', {
        viewModel: function (params) {
            this.label = ko.observable(params.label || '');
            this.value = ko.observable(params.value || '');
        },
        template: [
            '<div class="wpes-field">',
            '<div class="wpes-field__label" data-bind="text: label"></div>',
            '<div class="wpes-field__value" data-bind="text: value"></div>',
            '</div>'
        ].join('')
    });

    ko.components.register('ms-text-field', {
        viewModel: function (params) {
            this.label = ko.observable(params.label || '');
            this.value = ko.observable(params.value || '');
        },
        template: [
            '<div class="ms-TextField">',
            '<label class="ms-Label" data-bind="text: label"></label>',
            '<input class="ms-TextField-field" placeholder="" data-bind="value: value"/>',
            '</div>'
        ].join('')
    });

    ko.components.register('ui-text-field', {
        viewModel: function (params) {
            this.label = params.label || '';
            this.value = params.value || '';
            this.isView = params.isView || false;
        },
        template: [
            '<!-- ko if: isView -->',
            '<ui-view-field params="label: label, value: value"></ui-view-field>',
            '<!-- /ko -->',
            '<!-- ko ifnot: isView -->',
            '<ms-text-field params="label: label, value: value"></ms-text-field>',
            '<!-- /ko -->'
        ].join('')
    });

    ko.components.register('ms-dropdown', {
        viewModel: function (params) {
            this.label = params.label || '';
            this.value = params.value || '';
            this.options = params.options || [];
        },
        template: [
            '<div class="ms-Dropdown" tabindex="0">',
            '<label class="ms-Label" data-bind="text: label"></label>',
            '<i class="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown"></i>',
            '<select class="ms-Dropdown-select" data-bind="options: options, value: value, msDropdownSelect: options"></select>',
            '</div>'
        ].join('')
    });

    ko.components.register('ui-dropdown', {
        viewModel: function (params) {
            this.label = params.label || '';
            this.value = params.value || '';
            this.options = params.options || [];
            this.isView = params.isView || false;
        },
        template: [
            '<!-- ko if: isView -->',
            '<ui-view-field params="label: label, value: value"></ui-view-field>',
            '<!-- /ko -->',
            '<!-- ko ifnot: isView -->',
            '<ms-dropdown params="label: label, options: options"></ms-dropdown>',
            '<!-- /ko -->'
        ].join('')
    });

    ko.components.register('ui-button', {
        viewModel: function (params) {
            this.text = params.text || '';
            this.mode = params.mode || '';
        },
        template: [
            '<button class="ms-Button" data-bind="text: text, css: {\'ms-Button--primary\': mode == \'primary\'}"></button>'
        ].join('')
    });

})(ko, jQuery, fabric);


