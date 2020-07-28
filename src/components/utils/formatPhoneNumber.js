export const formatPhoneNumber = (phone) => {
    let cleaned = ('' + phone).replace(/\D/g, '');

    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if(match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };

    return null;
}