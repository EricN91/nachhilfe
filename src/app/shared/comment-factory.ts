import {Comment} from "./comment";

export class CommentFactory {
  static empty() {
    return new Comment(0, 0, "", new Date, 0, 0);
  }

  static fromObject(rawComment: any): Comment {
    return new Comment(
      rawComment.id,
      rawComment.offers_id,
      rawComment.textarea,
      rawComment.date_time,
      rawComment.students_id,
      rawComment.tutors_id,
    );
  }
}
