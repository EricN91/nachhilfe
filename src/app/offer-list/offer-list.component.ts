import {Component, OnInit} from '@angular/core';
import {OfferService} from "../shared/offer-service";
import {Offer} from "../shared/offer";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../shared/course-service";
import {Course} from "../shared/course";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
  temp_offers: Offer[] = [];
  offers: Offer[] = [];
  courses: Course[] = [];
  course_name: string = "";
  course_id: number = 0;

  //activated route ist die aktive rout von der der Course name extrahiert werden soll
  constructor(private of: OfferService, private route: ActivatedRoute, private cs: CourseService) {
    this.course_name = route.snapshot.params['course_name'];
  }

  ngOnInit(): void {
    //bekommen observable zurück und subscriben auf das Ergebnis
    this.of.getAll().subscribe(res => {
      this.temp_offers = res;
      this.cs.getAll().subscribe(res => {
        this.courses = res;
        for (let course of this.courses) {
          if (course.name === this.course_name) {
            this.course_id = course.id;
            break;
          }
        }
        for (let offer of this.temp_offers) {
          if (offer.courses_id === this.course_id) this.offers.push(offer);
        }
      });
    });
  }
}
