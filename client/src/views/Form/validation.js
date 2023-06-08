const Validation = (form) => {
    const errors = {}
    if (!form.name) {
        errors.name = 'You must type a name';
    } else if (form.name.length > 50) {
        errors.name = 'Name must have less than 20 characters';
    }
    if (!form.description) {
        errors.description = 'You have to write a description'
    }
    else if (form.description.length < 30) {
        errors.description = 'Description too short'
    }
    else if (form.description.length > 2000) {
        errors.description = 'Description up to 2000 characters'
    }
    if (!/^(https:|http:|www\.)\S*/.test(form.background_image)) {
        errors.background_image = 'Invalid URL. https:...'
    }
    if (!/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/.test(form.released)) {
        errors.released = 'Invalid format. Use dd-mm-yyyy'
    }
    if (form.genres.length === 0) {
        errors.genres = 'You must select at least one genre'
    }
    if (form.platforms.length === 0) {
        errors.platforms = 'You must select at least one platform'
    }
    if (form.rating < 1 || form.rating > 5) {
        errors.rating = 'The number must be from 1 to 5'
    }
    return errors
}

export default Validation;
