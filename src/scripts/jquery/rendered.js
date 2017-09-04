(function ($) {

    $.rendered = function (element) {
        var deferred = $.Deferred();
        var $elem = $(element);
        var html = $elem.html();
        var refresh = function () {
            if ($elem.html() != html) {
                deferred.resolve();
            }
        };
        var refreshDebounce = _.debounce(refresh);
        $elem.on('DOMSubtreeModified', refreshDebounce);
        return deferred;
    };

})(jQuery);