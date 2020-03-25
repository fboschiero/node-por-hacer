const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Comando crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;

    case 'listar':
        console.log('Comando listar');

        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=============== POR HACER ==========================='.green);
            console.log(tarea.descripcion);
            console.log('ESTADO: ', tarea.completado);
            console.log('=============== POR HACER ==========================='.green);
        }

        break;

    case 'actualizar':
        console.log('Comando actualizar');

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);

        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;

    default:
        console.log('Comando no reconocido');



}