export { messages };
let messages = {
  ERR001: (value) => `EL valor debe ser un string para el atributo ${value} del elemento`,
  ERR020: (value) => `No se encontro ningun elemento con el id ${value}`,
  NFD001: (value) => `El archivo ${value} JSON no se encontro`,
  NFD002: (value) => `No se encontro el atributo ${value} en el objeto`,
  NFD003: (value) => `No se encontro la pagina ${value}`
};
// let messages = [
//     {
//         code: "ERR-001",
//         description: (value) => `EL valor debe ser un string para el atributo ${value} del elemento`
//     },
//     {
//         code: "ERR-020",
//         description: (value) => `No se encontro ningun elemento con el id ${value}`
//     }
// ];
// {
//     attribute: {
//         errorAttribute: "Atributo no encontrado",
//         onlyAttribute: "Solo recibe un valor el atributo"
//     }
// };