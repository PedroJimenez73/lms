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