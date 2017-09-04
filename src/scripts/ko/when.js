/**
 * Use an observable as a jQuery promise
 * @source https://github.com/knockout/knockout/wiki/Use-an-observable-as-a-jQuery-promise
 */

(function (ko, $) {

    ko.when = function (observable) {
        var deferred = $.Deferred(), value = observable.peek(), subs;
        if (value) {
            deferred.resolve(value);
        } else {
            subs = observable.subscribe(function (newValue) {
                if (newValue) {
                    subs.dispose();
                    deferred.resolve(newValue);
                }
            });
        }
        return deferred;
    };

})(ko, jQuery);