var form = [
    {
        name: 'Name',
        type: 'input',
        label: true,
        message: 'your adhaar card name',
        setting: {
            type: 'text',
            required: true,
            size: [5, 30],
            example: 'John Doe'//placeholder            
        }
    },
    {
        name: 'Email',
        type: 'input',
        label: true,
        setting: {
            type: 'email',
            required: true,
            size: [5, 30],
            example: 'example@doamin.com'//placeholder            
        }
    },
    {
        name: 'Password',
        type: 'input',
        label: true,
        setting: {
            type: 'password',
            required: true,
            size: [5, 30]
        }
    },
    {
        name: 'Phone',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: true,
            size: [5, 30],
            example: '1234567890'//placeholder            
        }
    },
    {
        name: 'Address',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: true,
            size: [5, 30],
            example: 'House no./SCO no.'//placeholder            
        }
    },
    {
        name: 'City',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: true,
            size: [5, 30],
            example: 'City'//placeholder            
        }
    },{
        name: 'State',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: true,
            size: [5, 30],
            example: 'State'//placeholder            
        }
    },{
        name: 'Country',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: true,
            size: [5, 30],
            example: 'Country'//placeholder            
        }
    },{
        name: 'Zip',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: true,
            size: [5, 30],
            example: 'Zip'//placeholder            
        }
    },
    {
        name: 'AddressQuestion',
        type: 'radio',
        label: true,
        question: 'Is Correspondence address ?',
        list: ['yes','no'],
        setting: {
            required: true,
        }
    },
    {
        name: 'CorrespondenceAddress',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: false,
            size: [5, 30],
            example: 'House no./SCO no.'//placeholder            
        }
    },
    {
        name: 'CorrespondenceCity',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: false,
            size: [5, 30],
            example: 'City'//placeholder            
        }
    },{
        name: 'CorrespondenceState',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: false,
            size: [5, 30],
            example: 'State'//placeholder            
        }
    },{
        name: 'CorrespondenceCountry',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: false,
            size: [5, 30],
            example: 'Country'//placeholder            
        }
    },{
        name: 'CorrespondenceZip',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: false,
            size: [5, 30],
            example: 'Zip'//placeholder            
        }
    },
    {
        name: 'UserTypeQuestion',
        type: 'radio',
        label: true,
        question: 'User Type ?',
        list: ['Buisness','Personal'],
        setting: {
            required: true,
        }
    },
    {
        name: 'Qualification',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: false,
            size: [5, 30],
            example: ''//placeholder            
        }
    },
    {
        name: 'Organisation',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: false,
            size: [5, 30],
            example: ''//placeholder            
        }
    },{
        name: 'Hobbies',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: false,
            size: [5, 30],
            example: ''//placeholder            
        }
    },{
        name: 'FoodChoice',
        type: 'input',
        label: true,
        setting: {
            type: 'text',
            required: false,
            size: [5, 30],
            example: ''//placeholder            
        }
    }
];

