(function (ko) {

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


})(ko);
