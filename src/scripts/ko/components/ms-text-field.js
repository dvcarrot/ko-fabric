(function (ko) {

    ko.components.register('ms-text-field', {
        viewModel: function (params) {
            this.label = ko.observable(params.label || '');
            this.value = ko.observable(params.value || '');
        },
        template: [
            '<div class="ms-TextField">',
            '<label class="ms-Label" data-bind="text: label"></label>',
            '<input class="ms-TextField-field" placeholder="" data-bind="textInput: value, msTextFieldField: value"/>',
            '</div>'
        ].join('')
    });

})(ko);
