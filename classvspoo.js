class Comment{
    constructor({
        content,
        studentName,
        StudentRole ="estudiantes",
    }){
        this.content = content;
        this.studentName = studentName;
        this.StudentRole = StudentRole;
        this.likes= 0;
    } 

    publicar(){
        console.log(this.studentName + " (" + this.StudentRole + ")");
        console.log(this.likes + " Likes");
        console.log(this.content);
    }
}




function videoPlay(id){
    const urlSecreta ="https://plaziultrasecretomasquelanasa.com/"+ id; 
    console.log("se esta reproduciendesde desde la url : " +urlSecreta);
}

function videoStop(id){
    const urlSecreta ="https://plaziultrasecretomasquelanasa.com/"+ id; 
    console.log("Pausamos la url : "  + urlSecreta);
}



//export
class PlatziClass {
    constructor({
        name,
        videoID,
    }){
    this.name = name;
    this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}



class Course {
    constructor({
        name,
        clases = [],
        isFree= false,
        lang = "spanish",

    }){
        // modo "privado" _
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }
    set name(nuevoNombre){
        if(nuevoNombre === "Curso Malito de Programacion Basica"){
            console.error("Web...xd");
        }else{
            this._name = nuevoNombre;
        }
    }
}


const CourseProgBasica = new Course({
    name:"Curso gratis de programacion basica",
    isFree: true,
});

const CourseDefinitivoHTML = new Course({
    name:"Curso de HTML y CSS",
});

const CoursePractivoHTML = new Course({
    name:"Curso de HTML y CSS",
    lang: "English",
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
        approvedCourses = [],
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
        this.approvedCourses = approvedCourses;
        this.learningPaths  = learningPaths;
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });

        comment.publicar();
    }
}

class freeStudent extends Student{
    constructor(props){
        super(props);
    }
    
    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class basicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "English"){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
        }
    }
}

class expertStudent extends Student{
    constructor(props){
        super(props);
    }

    
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
} 

class TeacherStudent  extends Student{

constructor(props){
    super(props);
}


approveCourse(newCourse){
    this.approvedCourses.push(newCourse);
}

publicarComentario(commentContent){
    const comment = new Comment({
        conent: commentContent,
        studentName: this.name,
        StudentRole: "profesor",
    });

    comment.publicar();
}
}

const juan2 = new freeStudent({
    name: "Juan DC",
    username: "juan dc",
    email: "juanitopelapapa@hotmail.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const miguelito = new basicStudent({
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

const freddy = new TeacherStudent({
    name: "freddy vega",
    username: "fredpafdsa",
    email: "fred.gol@hotmail.com",
    twitter: "fred.lgh",

});