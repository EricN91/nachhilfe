import {Course} from "./course";
//erstellt leere Objekte der Klassen
export class CourseFactory {
  static empty() {
    return new Course(0, "", "", "");
  }

  //wandelt Objekt in Course-objekt um
  static fromObject(rawCourse: any): Course {
    return new Course(
      rawCourse.id,
      rawCourse.name,
      rawCourse.description,
      rawCourse.photo,
    );
  }
}


