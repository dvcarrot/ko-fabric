(function (ko) {

    ko.components.register('ui-button', {
        viewModel: function (params) {
            this.text = params.text || '';
            this.mode = params.mode || '';
        },
        template: [
            '<button class="ms-Button" data-bind="text: text, css: {\'ms-Button--primary\': mode == \'primary\'}"></button>'
        ].join('')
    });

})(ko);
