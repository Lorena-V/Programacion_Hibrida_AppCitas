// export class Cita {
//     constructor(
//         public texto: string = "",      // Atributos d ela clase
//         public autor: string = ""
//     ) {}
// } 

export interface Cita {
    id?: number
    texto: string
    autor: string
}