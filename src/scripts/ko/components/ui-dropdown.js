(function (ko) {

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

})(ko);
