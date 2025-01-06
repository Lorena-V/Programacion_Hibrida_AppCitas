import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection  } from '@capacitor-community/sqlite';


@Injectable({
  providedIn: 'root', // Hace que el servicio sea accesible en toda la aplicación
})

export class CitasService {
  
  sqlite:SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  db!: SQLiteDBConnection;

  plataforma:string       = ""
  DB_NAME: string         = "lista_citas";
  DB_ENCRIPTADA: boolean  = false;
  DB_MODE: string         = "no-encryption";
  DB_VERSION: number      = 1;
  DB_READ_ONLY: boolean   = false;
  COL_TEXTO: string       = "texto"
  COL_AUTOR: string       = "autor"
  TABLE_NAME: string      = "lista_citas"
  DB_SQL_TABLAS: string   = `
    CREATE TABLE IF NOT EXIST ${this.TABLE_NAME} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ${this.COL_TEXTO} TEXT NOT NULL,
      ${this.COL_AUTOR} TEXT NOT NULL
    ); 
  `;
  

  
  // private _citas: Cita[] = [
  //   new Cita("esta es una cita", "este es un autor")
  // ]

  constructor() {}

  private async _iniciarPluginWeb(): Promise<void> {
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteE1 = document.querySelector("jeep-sqlite")  // recupera la etiqueta desde el DOM
    if( jeepSqliteE1 != null ) {
      await this.sqlite.initWebStore()
    }
  }

  async iniciarPlugin() {
    this.plataforma = Capacitor.getPlatform()
    if( this.plataforma == "web" ) {
      await this._iniciarPluginWeb()
  }
  await this.abrirConexion()
  await this.db.execute(this.DB_SQL_TABLAS)

  await this.agregarCita({texto: "El éxito consiste en obtener lo que se desea...", autor: "Ralph Waldo Emerson"})
  await this.agregarCita({texto: "Las personas no son recordadas por el numero de veces que fracasan...", autor: "Thomas Edison"})
  await this.agregarCita({texto: "Ningún viento es bueno para el barco que no sabe a donde va...", autor: "Séneca"})
}


//  METODO PARA ABRIRI LA CONEXION
async abrirConexion() {                   
    const ret = await this.sqlite.checkConnectionsConsistency() 
    const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result
    if(ret.result && isConn) {
      this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY)      
    } else {
      this.db = await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRIPTADA,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      )
    }
    await this.db.open()
}



  // getCitas(): Cita[] {    // Programar metodos
  //   return this._citas
  // } 
  async agregarCita(cita: Cita) {  
    const sql = `INSERT INTO ${this.TABLE_NAME}(${this.COL_TEXTO}, ${this.COL_AUTOR}) VALUES (?, ?)`
    await this.db.run(sql, [cita.texto, cita.autor])
  }


  async getCitas(): Promise<Cita[]> {  
    const sql =  `SELECT * FROM ${this.TABLE_NAME}`
    const resultado = await this.db.query(sql)
      return resultado?.values ?? []
   } 

  // agregarCita(c:Cita) {   // Para agregar producto a la lista
  //   this._citas.push(c);
  // } 
}
