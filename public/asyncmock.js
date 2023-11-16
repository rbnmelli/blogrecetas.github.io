const recetas =[
    {
        id: '1',
        categoria: 'Carne',
        titulo: 'Lomo a la Pimienta',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse quae aliquid fugit incidunt. Officia obcaecati quisquam ducimus, asperiores laudantium dolorum, beatae itaque iste consectetur inventore cum est qui quasi!',
        imagen: '../public/images/recetas001.jpg'
    },

    {
        id: '2',
        categoria: 'Carne',
        titulo: 'Lomo al Champignon',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse quae aliquid fugit incidunt. Officia obcaecati quisquam ducimus, asperiores laudantium dolorum, beatae itaque iste consectetur inventore cum est qui quasi!',
        imagen: '../public/images/recetas001.jpg'
    },

    {
        id: '3',
        categoria: 'Pollo',
        titulo: 'Suprema a la Suiza',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse quae aliquid fugit incidunt. Officia obcaecati quisquam ducimus, asperiores laudantium dolorum, beatae itaque iste consectetur inventore cum est qui quasi!',
        imagen: '../public/images/recetas001.jpg'
    },

    {
        id: '4',
        categoria: 'Pollo',
        titulo: 'Pechuga al Ajillo',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse quae aliquid fugit incidunt. Officia obcaecati quisquam ducimus, asperiores laudantium dolorum, beatae itaque iste consectetur inventore cum est qui quasi!',
        imagen: '../public/images/recetas001.jpg'
    },

    {
        id: '5',
        categoria: 'Pescado',
        titulo: 'Lenguado a la Vasca',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse quae aliquid fugit incidunt. Officia obcaecati quisquam ducimus, asperiores laudantium dolorum, beatae itaque iste consectetur inventore cum est qui quasi!',
        imagen: '../public/images/recetas001.jpg'
    },

    {
        id: '6',
        categoria: 'Pescado',
        titulo: 'Merluza al Roquefort',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse quae aliquid fugit incidunt. Officia obcaecati quisquam ducimus, asperiores laudantium dolorum, beatae itaque iste consectetur inventore cum est qui quasi!',
        imagen: '../public/images/recetas001.jpg'
    }
];

export const getRecetas = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(recetas)

        }, 2000)
    })
}

export const getRecetasPorCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout (() => {
           const recetasPorCategoria = recetas.filter(rec => rec.categoria === categoria);
           resolve(recetasPorCategoria);

        }, 2000)
    })
}

export const getUnaReceta = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const unaReceta = recetas.find(rec => rec.id === id);
            resolve(unaReceta);
        }, 2000);
    })
}
