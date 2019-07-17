class Alumno {
    _id: {};
    nombre: string;
    email: string;
    password: string;
    rol: string;
    cursos: [
        {
            codigo: string,
            unidades: [
                {
                    numero: number,
                    pagina: number,
                    puntuacion: number,
                    aprobada: boolean,
                    completada: boolean,
                    tiempo: number
                }
            ],
            fechaSesiones: {},
        }
    ]
}

class Curso {
    _id: {};
    codigo: string;
    titulo: string;
    tutor: string;
    categoria: string;
    fechaInicio: object;
    fechaFinalizacion: object;
    horas: number;
    imagen: string;
    unidades: {
        titulo: string;
        urlScorm: string;
    }
}