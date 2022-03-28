class Course {
    constructor({
        name,
        clases = [],
    }){
        this.name = name;
        this.clases = clases;
    }
}
const CourseProgBasica = new Course({
    name:"Curso gratis de programacion basica",
});

const CourseDefinitivoHTML = new Course({
    name:"Curso de HTML y CSS",
});

const CoursePractivoHTML = new Course({
    name:"Curso de HTML y CSS",
});



class LearningPaths{
    constructor({
        name,
        nameCourse= [],
    }){
        this.name = name;
        this.nameCourse = nameCourse;
    }
}

const escuelaWeb = new LearningPaths({
    name : "Escuela web",
    nameCourse: [
        CourseProgBasica,
        CourseDefinitivoHTML,
        CoursePractivoHTML,
    
    ]
});
const escuelaData = new LearningPaths({
    name : "Escuela datascience",
    nameCourse: [
        
        CourseProgBasica,
        "Curso python",
        "Curso dataviz",
        "Curso bigdata",
    ]

});
const escuelaVgs = new LearningPaths({
    name : "Escuela video juegos",
    nameCourse: [
        
        CourseProgBasica,
        "Curso unity",
        "Curso modelado",
        "Curso unreal engine",
    ]
});



class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined, 
        facebook = undefined,
        approveCourses = [],
        learningPaths = [], 
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
        twitter,
        instagram,
        facebook,
        };
        this.approveCourses = approveCourses;
        this.learningPaths  = learningPaths;
    }
}

const juan2 = new Student({
    name: "Juan DC",
    username: "juan dc",
    email: "juanitopelapapa@hotmail.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const miguelito = new Student({
    name: "miguelito DC",
    username: "miguelfc",
    email: "juanimiguelitotopelapapa@hotmail.com",
    twitter: "migulitolp",
    learningPaths: [
        escuelaWeb,
        escuelaData,
        escuelaVgs,
    ],
});