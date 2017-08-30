(function (ko) {

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

})(ko);
