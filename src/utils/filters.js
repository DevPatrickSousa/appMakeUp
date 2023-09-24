export function validateName(name) {
    if (name && name.length >= 2) {
        return true;
    }
    return false;
}

export function validateAge(age) {
    if (age && !isNaN(age) && age.length <= 2) {
        return true;
    }
    return false;
}

export function validateEmail(email) {
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    return false;
}

export function validateNumber(phoneNumber) {
    if (phoneNumber && phoneNumber.length === 11) {
       return true;
    }
    return false;
}
