/**
 * Вспомогательный биндинг для компонентов
 */

(function (ko, fabric, $) {

    ko.bindingHandlers.msDropdownSelect = {
        after: ['options'],
        init: function (element, valueAccessor) {
            var $dropdown = $(element).closest('.ms-Dropdown');
            new fabric['Dropdown']($dropdown[0]);
            valueAccessor().subscribe(function () {
                $dropdown.find('.ms-Dropdown-title, .ms-Dropdown-items').remove();
                new fabric['Dropdown']($dropdown[0]);
            });
        },
        update: function (element) {
            var $dropdown = $(element).closest('.ms-Dropdown');
            $dropdown.find('.ms-Dropdown-title, .ms-Dropdown-items').remove();
            new fabric['Dropdown']($dropdown[0]);
        }
    };

})(ko, fabric, jQuery);
