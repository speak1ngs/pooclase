// objeto literal
const natalia = {
    name: "Nat",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    // METODOS
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    },
};


// Hacer que natalia apruebe otro cursosAprobados
// natalia.cursosAprobados.push("Curso de Responsive Design");



function Student(name, age , cursosAprobados)
{
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}


Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita",
    26,
["ECMASCRIPT 10",
    "Curso de videojuegos",
]
);