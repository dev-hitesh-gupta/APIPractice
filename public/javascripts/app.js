
let users = [];

const showCorrespondence = () => {
    $('#CorrespondenceAddressField').show();
    $('#CorrespondenceCityField').show();
    $('#CorrespondenceStateField').show();
    $('#CorrespondenceCountryField').show();
    $('#CorrespondenceZipField').show();
}
const hideCorrespondence = () => {
    $('#CorrespondenceAddressField').hide();
    $('#CorrespondenceCityField').hide();
    $('#CorrespondenceStateField').hide();
    $('#CorrespondenceCountryField').hide();
    $('#CorrespondenceZipField').hide();
}

const showPersonal = () => {
    $('#QualificationField').hide();
    $('#OrganisationField').hide();
    $('#HobbiesField').show();
    $('#FoodChoiceField').show();
}

const showBuisness = () => {
    $('#QualificationField').show();
    $('#OrganisationField').show();
    $('#HobbiesField').hide();
    $('#FoodChoiceField').hide();
}

const addUserToTable = (user) => {
    const {address , city, state, country, zip} = user.permanentAddress;
    let cor = 'NA';
    if(user.corAddress)
        cor = user.corAddress.address+', '+user.corAddress.city+', '+user.corAddress.state+', '+user.corAddress.country+' '+user.corAddress.zip;
    $('#tableBody').html( $('#tableBody').html()+ `<tr>   
                        <td>`+user.fullname+`</td>
                        <td>`+user.email+`</td>
                        <td>`+user.phone+`</td>
                        <td>`+user.password+`</td>
                        <td>`+user.constructor.name+`</td>
                        <td>`+address+', '+city+', '+state+', '+country+' '+zip+`</td>
                        <td>`+cor+`</td>
                     <td><button type="button" class="btn btn-danger">Del</button></td>
                     <td><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Update</button>
                     </td>
                        </tr>`);
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
    }
    else{
        user = new PersonalUser($('#NameInput').val(),$('#PasswordInput').val(),address,correspondenceAddress,$('#EmailInput').val(),$('#PhoneInput').val(),$('#HobbiesInput').val(),$('#FoodChoiceInput').val());
    }

    users.push(user);
    console.log(users);
    $('#tableBody').html('');
    users.map(user => addUserToTable(user));
}