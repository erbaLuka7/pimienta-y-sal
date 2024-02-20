module.exports = (req,res) => {
    const detalleProduct = [
        {
            id: 1,
            nombre: "Carpaccio Fresco",
            detalle: "Entrada Carpaccio de salmón con cítricos",
            precio: 5000
        },
        {
            id: 2,
            nombre: "Risotto de Berenjena",
            detalle: "Risotto de berenjena y queso de cabra",
            precio: 7000
        },
        {
            id: 3,
            nombre: "Mousse de Arroz",
            detalle: "Mousse de arroz con leche y aroma de azahar",
            precio: 10000
        },
        {
            id: 4,
            nombre: "Espárragos Blancos",
            detalle: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
            precio: 3000
        }
    ];
    res.render('index', {"detalleProduct":detalleProduct})
}