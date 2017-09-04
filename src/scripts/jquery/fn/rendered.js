/**
 * Обертка $.rendered функции
 */

(function ($) {

    $.fn.rendered = function () {
        return $.rendered(this);
    };

})(jQuery);