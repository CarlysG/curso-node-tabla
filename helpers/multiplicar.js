const fs = require('fs'); // Documentacion: https://nodejs.org/docs/latest-v16.x/api/fs.html#fswritefilefile-data-options-callback
const colors = require('colors'); // https://www.npmjs.com/package/colors

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    // Mostrar tabla de multiplicar del 5
    // 5 x 1 = 5
    // 5 x 2 = 10
    // ...

    try {
    
        let salida = '', consola = '';
    
        for( let i = 1; i <= hasta; i++ ) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }
    
        if( listar ){
            console.log('================'.green);
            console.log(' TABLA DEL'.blue,  colors.yellow( base ) );
            console.log('================'.green);
            console.log( consola );
        }
    
        // Se almacena en servidor de archivos
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        
        return `tabla-${ base }.txt creada!`;

    } catch(err) {

        throw err;
    }


}

module.exports = {
    crearArchivo
}