
let users = [];

const showCorrespondence = () => {
    $('#CorrespondenceAddressField').show();
    $('#CorrespondenceCityField').show();
    $('#CorrespondenceStateField').show();
    $('#CorrespondenceCountryField').show();
    $('#CorrespondenceZipField').show();
    $('#AddressQuestion0').parent().removeClass();
    $('#AddressQuestion1').parent().removeClass();
    $('#AddressQuestion0').parent().addClass('btn btn-secondary active');
    $('#AddressQuestion1').parent().addClass('btn btn-secondary');
}
const hideCorrespondence = () => {
    $('#CorrespondenceAddressField').hide();
    $('#CorrespondenceCityField').hide();
    $('#CorrespondenceStateField').hide();
    $('#CorrespondenceCountryField').hide();
    $('#CorrespondenceZipField').hide();
    $('#AddressQuestion0').parent().removeClass();
    $('#AddressQuestion1').parent().removeClass();
    $('#AddressQuestion1').parent().addClass('btn btn-secondary active');
    $('#AddressQuestion0').parent().addClass('btn btn-secondary');
}

const showPersonal = () => {
    $('#QualificationField').hide();
    $('#OrganisationField').hide();
    $('#HobbiesField').show();
    $('#FoodChoiceField').show();
    $('#UserTypeQuestion1').parent().removeClass();
    $('#UserTypeQuestion0').parent().removeClass();
    $('#UserTypeQuestion1').parent().addClass('btn btn-secondary active');
    $('#UserTypeQuestion0').parent().addClass('btn btn-secondary');
}

const showBuisness = () => {
    $('#QualificationField').show();
    $('#OrganisationField').show();
    $('#HobbiesField').hide();
    $('#FoodChoiceField').hide();
    $('#UserTypeQuestion1').parent().removeClass();
    $('#UserTypeQuestion0').parent().removeClass();
    $('#UserTypeQuestion1').parent().addClass('btn btn-secondary');
    $('#UserTypeQuestion0').parent().addClass('btn btn-secondary active');
}



const addUserToTable = (user) => {
    let per = 'NA';
    if(user.permanentAddress)
    {
        const {address , city, state, country, zip} = user.permanentAddress;
        per = address+', '+city+', '+state+', '+country+' '+zip
    }
    let cor = 'NA';
    if(user.corAddress)
        cor = user.corAddress.address+', '+user.corAddress.city+', '+user.corAddress.state+', '+user.corAddress.country+' '+user.corAddress.zip;
    
    let extraDetail = '';
    if(user.qualification)
        extraDetail += ' qualification :'+user.qualification;
    if(user.exp_years)
        extraDetail += ' exp_years :'+user.exp_years;
    if(user.hobbies)
        extraDetail += ' hobbies :'+user.hobbies;
    if(user.foodchoice)
        extraDetail += ' foodchoice :'+user.foodchoice;
    
        $('#tableBody').html( $('#tableBody').html()+ `<tr>   
                        <td>`+user.name+`
                            <button type="button" id="`+user.id+`" name="name" class="btn btn-default" style="background: url(icons/edit.svg);height:1.75rem;background-size:cover;" data-toggle="modal" data-target="#updateModal"></button>
                        </td>
                        <td>`+user.email+`</td>
                        <td>`+user.phone+`</td>
                        <td>`+user.password+`
                            <button type="button" if="password" class="btn btn-default" style="background: url(icons/edit.svg);height:1.75rem;background-size:cover;" data-toggle="modal" data-target="#updateModal"></button>
                        </td>
                        <td>`+user.userType+`</td>
                        <td>`+per+`
                            <button type="button" class="btn btn-default" style="background: url(icons/edit.svg);height:1.75rem;background-size:cover;" data-toggle="modal" data-target="#updateModal"></button>
                        </td>
                        <td>`+cor+`
                            <button type="button" class="btn btn-default" style="background: url(icons/edit.svg);height:1.75rem;background-size:cover;" data-toggle="modal" data-target="#updateModal"></button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-default" style="background: url(icons/info.svg);height:1.65rem;background-size:cover;" data-toggle="popover" data-trigger="focus" data-placement="auto" title="Extra Info" data-content="`+extraDetail+`"></button>
                            <button type="button" class="btn btn-default" style="background: url(icons/delete.svg);height:1.75rem;background-size:cover;" data-toggle="modal" data-target="#deleteModal"></button>
                        </td>
                    </tr>`);
    $('[data-toggle="popover"]').popover()
    $('.popover-dismiss').popover({
        trigger: 'focus'
      })
}


formSubmit = (evt) => {
    evt.preventDefault();
    let addressValue = $('input[name=AddressQuestion]:checked').val(); 
    let userType = $('input[name=UserTypeQuestion]:checked').val(); 
    let correspondenceAddress = null;
    let address = new Address($('#AddressInput').val(),$('#CityInput').val(),$('#StateInput').val(),$('#CountryInput').val(),$('#ZipInput').val());
    if(addressValue == 'AddressQuestion0')
    {   
        correspondenceAddress = new Address($('#CorrespondenceAddressInput').val(),$('#CorrespondenceCityInput').val(),$('#CorrespondenceStateInput').val(),$('#CorrespondenceCountryInput').val(),$('#CorrespondenceZipInput').val());
    }
    let user = null;
    if(userType == 'UserTypeQuestion0'){
        user =  new BuisnessUser($('#NameInput').val(),$('#PasswordInput').val(),address,correspondenceAddress,$('#EmailInput').val(),$('#PhoneInput').val(),$('#QualificationInput').val(),$('#OrganisationInput').val());
        let data = {
                name:$('#NameInput').val(),
                password:$('#PasswordInput').val(),
                email:$('#EmailInput').val(),
                userType:'B',
                phone:$('#PhoneInput').val()
            }
        postUser(data);
    }
    else{
        user = new PersonalUser($('#NameInput').val(),$('#PasswordInput').val(),address,correspondenceAddress,$('#EmailInput').val(),$('#PhoneInput').val(),$('#HobbiesInput').val(),$('#FoodChoiceInput').val());
    }

    //users.push(user);
    getUsers();
}