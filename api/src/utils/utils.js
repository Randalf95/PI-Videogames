const cleanArray = (array) =>
    array.map(vg => {
        return {
            id: vg.id,
            name: vg.name,
            background_image: vg.background_image,
            genres: vg.genres,
            rating: vg.rating,
            created: false,
        }
    });


module.exports = cleanArray 