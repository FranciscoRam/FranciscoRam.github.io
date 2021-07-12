export { messages };
let messages = [
    {
        code: "ERR-001",
        description: (value) => `EL valor debe ser un string para el atributo ${value} del elemento`
    },
    {
        code: "ERR-020",
        description: (value) => `No se encontro ningun elemento con el id ${value}`
    }
];
// {
//     attribute: {
//         errorAttribute: "Atributo no encontrado",
//         onlyAttribute: "Solo recibe un valor el atributo"
//     }
// };