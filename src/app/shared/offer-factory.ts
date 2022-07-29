
//erstellt leere Objekte der Klassen
import {Offer} from "./offer";
import {AppointmentFactory} from "./appointment-factory";

export class OfferFactory {
  static empty() {
    return new Offer(0, "", "", "", 0, 0, true, [AppointmentFactory.empty()]);
  }

  //wandelt Objekt in Course-objekt um
  static fromObject(rawOffer: any): Offer {
    return new Offer(
      rawOffer.id,
      rawOffer.name,
      rawOffer.description,
      rawOffer.photo,
      rawOffer.users_id,
      rawOffer.courses_id,
      rawOffer.available,
      rawOffer.appointments,
    );
  }
}

