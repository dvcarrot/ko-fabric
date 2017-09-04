/**
 * Биндинг подписывается на изменения объекта и DOM
 * В качестве аргумента передаётся observable объект
 * Генерирует jQuery событие refresh, если после изменения объекта был изменен DOM
 */

(function (ko, $) {

    ko.bindingHandlers.listen = {
        after: ['each', 'options'],
        init: function (element, valueAccessor) {
            var $elem = $(element);
            var trigger = function () {
                $elem.trigger('refresh');
            };
            $elem.rendered().done(trigger);
            valueAccessor().subscribe(function () {
                $elem.rendered().done(trigger);
            });
        }
    }

})(ko, jQuery);
