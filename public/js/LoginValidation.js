// Login and signup Validation :- 
const validateLoginForm = (username, password) => {
    const errors = {};

    if (!username) {
        errors.username = "Username is required";
    } else if (username.length < 2) {
        errors.username = "Username must contain at least two words";
    }


    if (!password) {
        errors.password = "Password is required";
    }
    // else if (
    //     !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password) ||
    //     password.length < 8
    // ) {
    //     errors.password =
    //         "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long";
    // }

    return errors;
};

const validateSignupForm = (username, email, mobile, password) => {
    const errors = {};

    if (!username) {
        errors.username = "Username is required";
    } else if (username.length < 2) {
        errors.username = "Username must contain at least two words";
    }

    if (!email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Invalid email address";
    }

    if (!password) {
        errors.password = "Password is required";
    } else if (
        !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)
    ) {
        errors.password =
            "To ensure a strong password, please fulfill all the following conditions.";
    }


    if (!mobile) {
        errors.mobile = "Mobile number is required";
    } else {
        // Remove the "+91 " prefix if present
        const numericMobile = mobile.replace("+91 ", "").replace(/[^\d]/g, '');

        if (!/^[5-9]\d{9}$/.test(numericMobile)) {
            errors.mobile =
                "Mobile number must start with 5, 6, 7, 8, or 9 and have a total length of 10 digits";
        }
    }

    return errors;
};

export { validateLoginForm, validateSignupForm };
