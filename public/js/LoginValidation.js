// // validation.js
// const validateLoginForm = (username, password) => {
//     const errors = {};

//     if (!username) {
//       errors.username = "Username is required";
//     }

//     if (!password) {
//       errors.password = "Password is required";
//     }

//     return errors;
//   };

//   const validateSignupForm = (username, email, password) => {
//     const errors = {};

//     if (!username) {
//       errors.username = "Username is required";
//     }

//     if (!email) {
//       errors.email = "Email is required";
//       console.log('aa');

//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Invalid email address";
//       console.log('invlid');

//     }

//     if (!password) {
//       errors.password = "Password is required";
//     }

//     return errors;
//   };

//   export { validateLoginForm, validateSignupForm };



const validateLoginForm = (username, password) => {
    const errors = {};

    if (!username) {
        errors.username = "Username is required";
    } else if (username.length < 2) {
        errors.username = "Username must contain at least two words";
    }


    if (!password) {
        errors.password = "Password is required";
    } else if (
        !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)
    ) {
        errors.password =
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    }

    return errors;
};

const validateSignupForm = (username, email, password, mobileInput, mobile) => {
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
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    }

    // if (!mobile) {
    //     errors.mobile = "Mobile number is required";
    //   } else {
    //     const numericMobile = mobile.replace(/[^\d]/g, ''); // Remove non-numeric characters
    //     if (!/^[5-9]\d{9}$/.test(numericMobile)) {
    //       errors.mobile =
    //         "Mobile number must start with 5, 6, 7, 8, or 9 and have a total length of 10 digits";
    //     }
    //   }
    console.log('m', mobile);

    if (!mobile) {
        errors.mobile = "Mobile number is required";
    } else {
        // Remove the "+91 " prefix if present
        const numericMobile = mobile.replace("+91 ", "").replace(/[^\d]/g, '');
        console.log('numericMobile-', numericMobile);


        if (!/^[5-9]\d{9}$/.test(numericMobile)) {
            errors.mobile =
                "Mobile number must start with 5, 6, 7, 8, or 9 and have a total length of 10 digits";
        }
    }

    return errors;
};

export { validateLoginForm, validateSignupForm };
