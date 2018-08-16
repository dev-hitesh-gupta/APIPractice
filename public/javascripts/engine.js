
$(document).ready(function () {
    form.map(field => {

        if (field.type === 'input') {
            let div = document.createElement('div');
            if (field.label) {
                let label = document.createElement('label');
                label.className = 'form-control';
                label.innerHTML = field.name;
                label.for = field.name + 'Input';
                div.append(label);
            }
            let input = document.createElement('input');
            div.className = 'form-group';
            div.id = field.name + 'Field';
            input.className = 'form-control';
            input.id = field.name + 'Input';
            const { type, required, pattern, error, size, example } = field.setting
            input.type = type;
            input.required = required;
            if (pattern && error) {
                input.pattern = pattern;
                input.title = error;
            }
            if (size) {
                input.min = size[0];
                input.max = size[1];
            }
            if (example) {
                input.placeholder = example;
            }
            div.append(input);
            $('form').append(div);
        }

        if (field.type === 'radio') {
            let div = document.createElement('div');
            div.id = field.name + 'Field';
            if (field.label) {
                let label = document.createElement('label');
                label.className = 'form-control';
                label.innerHTML = field.question;
                label.for = field.name + 'Input';
                div.append(label);
            }
            div.className = 'form-group';
            field.list.map(item => {
                let radio = document.createElement('div');
                let itemRadio = document.createElement('input');
                let itemLabel = document.createElement('label');
                radio.className = 'form-check';
                itemRadio.className = 'form-check-input';
                itemRadio.type = field.type;
                itemRadio.name = field.name;
                itemRadio.required = field.setting.required;
                itemRadio.id = itemLabel.for = field.name + field.list.indexOf(item);
                itemRadio.value = field.name + field.list.indexOf(item);
                itemLabel.className = 'form-check-label';
                itemLabel.innerHTML = item;
                radio.append(itemRadio);
                radio.append(itemLabel);
                div.append(radio);
            });
            $('form').append(div);
        }

    });
    $('form').html($('form').html() + `<input type="submit" class="btn btn-primary" style="margin-top: 5px"> <input type="reset" class="btn btn-primary" style="margin-top: 5px">`)

    $('#AddressQuestion0').click(showCorrespondence);
    $('#AddressQuestion1').click(hideCorrespondence);
    $('#CorrespondenceAddressField').hide();
    $('#CorrespondenceCityField').hide();
    $('#CorrespondenceStateField').hide();
    $('#CorrespondenceCountryField').hide();
    $('#CorrespondenceZipField').hide();
    $('#UserTypeQuestion1').click(showPersonal);
    $('#UserTypeQuestion0').click(showBuisness);
    $('#QualificationField').hide();
    $('#OrganisationField').hide();
    $('#HobbiesField').hide();
    $('#FoodChoiceField').hide();
        
});




