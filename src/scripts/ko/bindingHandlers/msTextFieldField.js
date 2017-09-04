/**
 * Вспомогательный биндинг для компонентов
 */

(function (ko, fabric, $) {

    ko.bindingHandlers.msTextFieldField = {
        init: function(element, valueAccessor) {
            var $textfield = $(element).closest('.ms-TextField');
            new fabric['TextField']($textfield[0]);
            if ($textfield.hasClass('.ms-TextField--placeholder') && !!element.value) {
                $textfield.find('.ms-Label').hide();
            }
        }
    };

})(ko, fabric, jQuery);
