
import {Appointment} from "./appointment";

export class AppointmentFactory {
  static empty() {
    return new Appointment(0, new Date(), false, 0, 0, 0);
  }

  //wandelt Objekt in Course-objekt um
  static fromObject(rawAppointment: any): Appointment {
    return new Appointment(
      rawAppointment.id,
      rawAppointment.date_time,
      rawAppointment.accepted,
      rawAppointment.offers_id,
      rawAppointment.students_id,
      rawAppointment.tutors_id,
    );
  }
}
