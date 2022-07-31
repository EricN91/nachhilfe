import {Component, OnInit} from '@angular/core';
import {User} from "../shared/user";
import {Offer} from "../shared/offer";
import {Course} from "../shared/course";
import {Appointment} from "../shared/appointment";
import {Comment} from "../shared/comment";
import {UserService} from "../shared/user-service";
import {OfferService} from "../shared/offer-service";
import {CommentService} from "../shared/comment-service";
import {AppointmentService} from "../shared/appointment-service";
import {CourseService} from "../shared/course-service";
import {AuthenticationService} from "../shared/authentication-service";
import {UserFactory} from "../shared/user-factory";
import {OfferFactory} from "../shared/offer-factory";
import {CourseFactory} from "../shared/course-factory";
import {CommentFactory} from "../shared/comment-factory";
import {AppointmentFactory} from "../shared/appointment-factory";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  users: User[] = [];
  offers: Offer[] = [];
  courses: Course[] = [];
  appointments: Appointment[] = [];
  comments: Comment[] = [];

  constructor(private us: UserService, private os: OfferService, private cs: CommentService, private as: AppointmentService, private cos: CourseService, public auth:AuthenticationService) {
  }

  ngOnInit(): void {
    this.cs.getAll().subscribe(res => this.comments = res);
    this.us.getAll().subscribe(res => this.users = res);
    this.os.getAll().subscribe(res => this.offers = res);
    this.as.getAll().subscribe(res => this.appointments = res);
    this.cos.getAll().subscribe(res => this.courses = res);
  }

  getUser(id: number):User {
    for (let user of this.users) {
      if (user.id === id) return user;
    }
    return UserFactory.empty();
  }

  getOffer(id: number):Offer {
    for (let offer of this.offers) {
      if (offer.id === id) return offer;
    }
    return OfferFactory.empty();
  }

  getComment(id: number):Comment {
    for (let comment of this.comments) {
      if (comment.id === id) return comment;
    }
    return CommentFactory.empty();
  }

  getAppointment(id: number):Appointment {
    for (let appointment of this.appointments) {
      if (appointment.id === id) return appointment;
    }
    return AppointmentFactory.empty();
  }

  getCourse(id: number):Course {
    for (let course of this.courses) {
      if (course.id === id) return course;
    }
    return CourseFactory.empty();
  }
}

//Terminübersicht
  //Tutor
  //Student
