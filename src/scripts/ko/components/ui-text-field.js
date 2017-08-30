(function (ko) {

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

})(ko);
