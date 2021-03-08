# Practica02

## FUNCIONAMIENTO DEL INTERFACE GRÁFICO

- [x] La pantalla muestra una lista de coches y, para cada uno, muestra diferentes campos de información.
- [x] Si el usuario escribe algo en el campo FILTRO, se mostrarán solo los vehículos cuya Marca empiece por los caracteres escritos por el usuario. Así, en el ejemplo si escribe “R” solo se mostrarán los vehículos Renault.
- [ ] Si pulsamos REBAJAR el precio del vehículo se multiplicará por 0,90.
- [ ] Si pulsamos VENDIDO el vehículo desaparecerá de la lista.
- [x] El PVP es el Precio x 1,21.
- [ ] Si el estado del vehículo es BUENO, el precio se presentará en fondo VERDE. En caso contrario, en ROJO.

## INTRUCCIONES PARA AFRONTAR LAMICROPRÁCTICA

- [x] Crear una nueva aplicación Angular (en repositorio local en tu PC):

  - ng new micropractica02

- [x] El modelo de datos, en esta ocasión, lo vamos a almacenar en una CLASS personalizada llamada Coche. Esta clase se definirá en un archivo llamado: coche.ts.

 Para crearlo: ng g class coche

- [ ] Campos de Coche:

  - [x] marca, modelo y foto (puede ser =””) → tipo string.
  - [x] fecha_modelo y fecha_venta → date
  - [x] precio → number
  - [ ] estado → EstadoCoche
  - [ ] getPVP():number → devuelve precio * 1,21
  - [ ] enum EstadoCoche {BUENO, MALO}

- [x] Trabajando con PIPEs:

  - [x] Marca se presentará siempre en MAYUSCULAS.
  - [x] Modelo siempre en MINUSCULAS.
  - [x] Año (solo presentará el AÑO de la fecha de compra).
  - [x] En venta desde (presentará MES y AÑO de la fecha en que se pone en venta).
  - [ ] Precio y PVP se presentarán sin decimales, y con “,” de millares. Seguido de €.

- [ ] Trabajando con directivas Angular: ngIf, ngClass y ngFor

  - Si coche.foto==’’ → presentar texto: (sin foto!)
  - Si coche.estado==CocheEstado.BUENO →fondo verde (esto se hace con ngClass).  

## SUGERENCIA

- Para implementar el FILTRADO se puede hacer de diferentes formas. Una fácil, es crear una función que devuelva una lista de ID (números, índices de coches en la lista de coches) que cumplan la condición de que su campo Marca empiece por la subcadena que escriba el usuario en Filtro.
- Así, el TEMPLATE tendría esta pinta: <tr *ngFor=’let id of getFiltrados();’> e, iríamos accediendo a cada elemento así: {{coches[id].marca}}, etc...
- De esta forma, tendríamos disponible para procesar los botones VENDIDO y REBAJAR, el campo ID que es el índice de la lista de coches totales (sin filtrar). Esto nos puede ser muy útil para saber cual borrar o rebajar.

## INICIALIZACIÓN DEL MODELO

Como mínimo, hay que definir dos variables en el modelo:

public EstadoCoche:any = EstadoCoche; // ESTA LINEA SOLO SIRVE PARA PODER USAR EstadoCoche en el TEMPLATE.

public coches:Array<Coche>=[ new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'coche01.jpg',EstadoCoche.BUENO),  new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'coche01.jpg',EstadoCoche.BUENO), new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'coche01.jpg',EstadoCoche.BUENO)]

Se define un array de tipo Coche, con valores introducidos “hard code”.  

## Deploy en GitHub Pages

No hace falta crear la rama, se crea sola.

Una vez creado el repositorio con todo en GitHub.

```terminal
ng add angular-cli-ghpages
ng deploy --base-href=/<repositoryname>/
```
