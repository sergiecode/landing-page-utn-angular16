export interface IUsuario {
    id:               number;
    nombre:           string;
    apellido:         string;
    email:            string;
    password:         string;
    dni:              string;
    telefono:         string;
    tipo_dni:         string;
    tipo_id:          number;
    fecha_nacimiento: Date;
    foto_perfil:      string;
    createdAt:        Date | null;
    updatedAt:        Date | null;
}