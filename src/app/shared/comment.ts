export class Comment {
  constructor(
    public id: number,
    public offers_id: number,
    public textarea: string,
    public date_time: Date,
    public students_id: number,
    public tutors_id: number,
  ) {
  }
}
