import {Component, OnInit} from '@angular/core';
import {User} from "../shared/user";
import {UserService} from "../shared/user-service";
import {Offer} from "../shared/offer";
import {OfferService} from "../shared/offer-service";
import {Appointment} from "../shared/appointment";
import {AppointmentService} from "../shared/appointment-service";
import {ActivatedRoute} from "@angular/router";
import {OfferFactory} from "../shared/offer-factory";
import {UserFactory} from "../shared/user-factory";
import {AuthenticationService} from "../shared/authentication-service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  user: User = UserFactory.empty();
  //Factory statt neuem objekt, damit bei einer Änderung alles an einer Stelle geändert wird, übersichtlicher ist und für alle geändert wird.
  //
  offer: Offer = OfferFactory.empty();
  appointments: Appointment[] = [];
  offer_id: number = 0;

  constructor(private us: UserService, private os: OfferService, private as: AppointmentService, private route: ActivatedRoute, private auth : AuthenticationService) {
    this.offer_id = Number(route.snapshot.params['offer_id']);
  }

  ngOnInit(): void {
    //bekommen observable zurück und subscriben auf das Ergebnis
    this.os.getById(this.offer_id).subscribe(res => {
      this.offer = res;
      console.log(res);
      console.log(Number(res.users_id));
      this.us.getById(Number(this.offer.users_id)).subscribe(res => {
        this.user = res;
        console.log(res)
      });
    });

    this.as.getByOffer(this.offer_id).subscribe(res => {
      this.appointments = res;
      console.log(res)
    });

  }

  isLoggedIn(){
    return this.auth.isLoggedIn();
  }


}


//TODO

//Buttons für Appointment annehmen und Comment senden
//Comment -> Button für absenden
