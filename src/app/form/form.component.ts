import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Course} from "../shared/course";
import {Offer} from "../shared/offer";
import {OfferFactory} from "../shared/offer-factory";
import {CourseService} from "../shared/course-service";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferService} from "../shared/offer-service";
import {OfferFormErrorMessages} from "./OfferFormErrorMessages";
import {AppointmentFactory} from "../shared/appointment-factory";
import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  offerForm: FormGroup;
  userid: number = 0;
  courses: Course[] = [];
  offer: Offer = OfferFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdating = false;
  appointments: FormArray;

  constructor(private fb: FormBuilder, private cs: CourseService, private route: ActivatedRoute, private os: OfferService, private router: Router, private toastr:ToastrService) {
    this.offerForm = this.fb.group({});
    this.appointments = this.fb.array([]);
    this.userid = Number(sessionStorage.getItem('userId'));
  }

  ngOnInit(): void {
    this.cs.getAll().subscribe(res => this.courses = res);
    const id = this.route.snapshot.params['id'];
    if (id != undefined) {
      console.log("is updating!");
      this.isUpdating = true;
      this.os.getById(Number(id)).subscribe(offer => {
        this.offer = offer;
        this.init();
      });
    }
    this.init();
  }

  init() {
    this.buildAppointmentArray();
    this.offerForm = this.fb.group({
      id: this.offer.id,
      users_id: Number(this.offer.users_id),
      available: this.offer.available,
      courses_id:[ this.offer.courses_id, Validators.required],
      name: [this.offer.name, Validators.required],
      description: [this.offer.description, Validators.required],
      photo: this.offer.photo,
      appointments: this.appointments
    });
    this.offerForm.statusChanges.subscribe(() => {
      this.updateErrorMessages();
    });
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of OfferFormErrorMessages) {
      const control = this.offerForm.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  buildAppointmentArray() {
    if (this.offer.appointments) {
      this.appointments = this.fb.array([]);
      for (let appointment of this.offer.appointments) {
        let fg = this.fb.group(
          {
            id: new FormControl(appointment.id),
            date_time: new FormControl(appointment.date_time, [Validators.required]),
          }
        );
        this.appointments.push(fg);
      }
    }
  }

  addDate() {
    this.appointments.push(this.fb.group(AppointmentFactory.empty()));
  }

  submitOffer() {
    let offer: Offer = OfferFactory.fromObject(this.offerForm.value);
    offer.users_id = this.offer.users_id;

    for (let appointment of offer.appointments) {
      appointment.accepted = false
      appointment.offers_id = this.offer.id;
      appointment.students_id = 0;
      appointment.tutors_id = this.userid;
    }

    offer.users_id = this.userid;


    if (this.isUpdating) {
      this.os.update(offer).subscribe(res => {
        this.router.navigate(["../"], {relativeTo: this.route});
      })

    } else {
      offer.users_id = Number(sessionStorage['userId']);
      this.os.create(offer).subscribe(res => {
        this.offer = OfferFactory.empty();
        this.toastr.success("Das Angebot " + this.offer.name + "wurde gespeichert!");
        this.offerForm.reset(offer);
        this.router.navigate(["../"], {relativeTo: this.route});
      });
    }
  }
}

//comments
//buchung annehmen
//(profilbereich)
//löschen appointments, offers(button)
//bearbeiten(button,route)
//authentifizierung


