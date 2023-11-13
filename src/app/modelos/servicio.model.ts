import { IUsuario } from "./usuario.model";

export interface IServicios {
    id:                        number;
    cuil_cuit:                 string;
    descripcion:               string;
    fotos_trabajos_realizados: null | string;
    horarios_atencion:         string;
    disponibilidad:            boolean;
    radio_cobertura:           string;
    usuario_Id:                number;
    createdAt:                 Date;
    updatedAt:                 Date;
    usuario:                   IUsuario;
}
