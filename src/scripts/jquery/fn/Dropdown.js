/**
 * jquery widget
 */

(function ($, fabric) {

    $.fn.Dropdown = function () {

        return this.each(function () {

            var self = this;
            var $self = $(self);

            function refresh() {

                $self.find('.ms-Dropdown-title, .ms-Dropdown-items').remove();

                if ($self.find('option').length > 0) {
                    new fabric['Dropdown'](self);
                }

            }

            refresh();

            $(this).on('refresh', refresh);

        });

    };

})(jQuery, fabric);
