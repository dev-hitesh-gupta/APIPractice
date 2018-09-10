$(document).ready(function () {
    form.map(field => {
        if (field.type ==='input') {
            let div = document.createElement('div');
            if (field.label) {
                let label = document.createElement('label');
                label.className = 'col-sm-4 col-form-label';
                label.innerHTML = field.name;
                label.for = field.name + 'Input';
                div.append(label);
            }
            let input = document.createElement('input');
            div.className = 'form-group row';
            div.id = field.name + 'Field';
            if (field.message) div.title = field.message;
            input.className = 'col-sm-7 form-control';
            input.id = field.name + 'Input';
            const {
                type,
                required,
                pattern,
                error,
                size,
                example
            } = field.setting
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
            if (example) input.placeholder = example;

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
            let radio = document.createElement('div');
            radio.className = 'btn-group btn-group-toggle';
            field.list.map(item => {
                let itemRadio = document.createElement('input');
                let itemLabel = document.createElement('label');
                //itemRadio.className = 'form-check-input';
                itemRadio.type = field.type;
                itemRadio.name = field.name;
                itemRadio.required = field.setting.required;
                itemRadio.id = itemLabel.for = field.name + field.list.indexOf(item);
                itemRadio.value = field.name + field.list.indexOf(item);
                itemLabel.className = 'btn btn-secondary';
                itemLabel.append(itemRadio);
                itemLabel.innerHTML += item;
                radio.append(itemLabel);
            });
            div.append(radio);
            $('form').append(div);
        }
    });
    $('form').html($('form').html() +
        `<div class="card-text">
            <input type="submit" class="btn btn-primary" style="margin-top: 5px"> 
            <input type="reset" class="btn btn-dark" style="margin-top: 5px">
        </div>`)

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
    //$('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
    $('.popover-dismiss').popover({
        trigger: 'focus'
      })
      $('.alert').alert()
    getUsers();
    
});