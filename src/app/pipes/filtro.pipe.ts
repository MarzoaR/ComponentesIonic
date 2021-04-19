import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( 
            arreglo: any[], 
            texto: string = '',
            columna: string = 'title'
            ): any[] {

    console.log(arreglo);
    console.log(texto);

    switch (texto) {
      case '': return arreglo;
      case '!arreglo': return arreglo;
    
      default:
        break;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(
      item => item[columna].toLowerCase().includes(texto)
    );
  }

}
