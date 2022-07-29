export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {
  }
}

export const OfferFormErrorMessages = [
  new ErrorMessage('name', 'required', 'Bitte Namen eingeben!'),
  new ErrorMessage('course', 'required', 'Bitte Fach auswählen!'),
  new ErrorMessage('description', 'required', 'Es muss eine Kursbeschreibung eingegeben werden!')
];
