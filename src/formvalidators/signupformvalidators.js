export const signUpFormValidators = {
    firstname: {
        required: "Please enter firstname",
        pattern: {
            value: "^[A-Za-z]*$",
            message: "Numbers and special characters are not allowed",
        },
    },
    lastname: {
        required: "Please enter lastname",
        pattern: {
            value: "^[A-Za-z]*$",
            message: "Numbers and special characters are not allowed",
        },
    },
    mobile: {
        required: "Please enter mobile number",
    },
    email: {
        required: "Please enter email",
        pattern: {
            value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            message: "Please enter valid email address",
        },
    },
    password: {
        required: "Please enter password",
    },
};