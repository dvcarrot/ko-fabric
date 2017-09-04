/**
 * Биндинг инициализирует jQuery плагин для элемента, на который он назачается
 * в качестве аргумента передаётся название виджета
 */

(function (ko, $) {

    ko.bindingHandlers.widget = {
        init: function (element, valueAccessor) {
            var widgetName = ko.unwrap(valueAccessor());
            if ($.fn[widgetName]) {
                $(element)[widgetName]()
            }
        }
    };

})(ko, jQuery);
