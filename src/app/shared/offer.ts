import {Appointment} from "./appointment";

export class Offer {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public photo: string,
    public users_id: number,
    public courses_id: number,
    public available: boolean,
    public appointments: Appointment[],
  ) {
  }
}
