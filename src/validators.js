const validators = {
    text: (value, validation) => {
        let valid = true;
        let errorMessage = "";

        if (!!validation) {
            if (!value) {
                if (validation.required === true) {
                    valid = false;
                    errorMessage = "This field is required."
                }
            } else {
                if (!!validation.min) {
                    if ((!value && validation.min > 0) || (!!value && value.length < validation.min)) {
                        valid = false;
                        errorMessage = "Min length: " + validation.min + "."
                    }
                }

                if (!!validation.max) {
                    if (!!value && value.length > validation.max) {
                        valid = false;
                        errorMessage = "Max length: " + validation.max + "."
                    }
                }
            }
        }

        return {valid, errorMessage}
    },
    number: (value, validation) => {
        let valid = true;
        let errorMessage = "";

        if (!!validation) {
            if (!value) {
                if (validation.required === true) {
                    valid = false;
                    errorMessage = "This field is required."
                }
            } else {
                if (!!validation.min) {
                    if (!!value && value < validation.min) {
                        valid = false;
                        errorMessage = "Min value: " + validation.min + "."
                    }
                }

                if (!!validation.max) {
                    if (!!value && value > validation.max) {
                        valid = false;
                        errorMessage = "Max value: " + validation.max + "."
                    }
                }
            }
        }

        return {valid, errorMessage}
    },
    select: (value, validation) => {
        let valid = true;
        let errorMessage = "";

        if (!!validation && validation.required === true) {
            if (!value) {
                valid = false;
                errorMessage = "This field is required."
            }
        }

        return {valid, errorMessage}
    }
};

export default validators