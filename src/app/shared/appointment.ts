export class Appointment {
  constructor(
    public id: number,
    public date_time: Date,
    public accepted: boolean,
    public offers_id: number,
    public students_id: number,
    public tutors_id: number,
  ) {
  }
}
