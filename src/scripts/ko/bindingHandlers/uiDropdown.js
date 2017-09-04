/**
 * UI бинюинг контейнер
 */

(function (ko, fabric) {

    ko.bindingHandlers.uiDropdown = {

        init: function (element, valueAccessor) {
            var list = ko.unwrap(valueAccessor());
            createDropdown(element, list);
        },
        update: function (element, valueAccessor) {

            var list = ko.unwrap(valueAccessor());
            createDropdown(element, list);
        }

    };

    function createDropdown(container, values) {
        var html = '';
        html += '<div class="ms-Dropdown" tabindex="0">';
        html += '<label class="ms-Label">Dropdown label</label>';
        html += '<i class="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown"></i>';
        html += '<select class="ms-Dropdown-select">';
        console.log(values);
        values.forEach(function (value) {
            html += '<option>' + value + '</option>';
        });
        html += '</select>';
        html += '</div>';

        container.innerHTML = html;
        new fabric['Dropdown'](container.childNodes[0]);
    }

})(ko, fabric);