class User {
    constructor(fullname, password, permanentAddress, corAddress, email, phone) {
        this.fullname = fullname;
        this.password = password;
        this.phone = phone;
        this.email = email;
        this.permanentAddress = permanentAddress;
        this.corAddress = corAddress;
    }
}

class PersonalUser extends User{
    constructor(fullname, password, permanentAddress, corAddress, email, phone, hobbies, food) {
        super(fullname,password,permanentAddress, corAddress, email, phone);
        this.hobbies = hobbies;
        this.food = food;
    }
}

class BuisnessUser extends User{
    constructor(fullname, password, permanentAddress, corAddress, email, phone, qualification, organisation) {
        super(fullname,password,permanentAddress, corAddress, email, phone);
        this.qualification = qualification;
        this.organisation = organisation;
    }
}

class Address {
    constructor(address, city, state, country, zip) {
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zip = zip;
    }
}