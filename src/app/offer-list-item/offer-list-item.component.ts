import {Component, Input, OnInit} from '@angular/core';
import {Offer} from "../shared/offer";

@Component({
  selector: 'div.app-offer-list-item',
  templateUrl: './offer-list-item.component.html',
  styleUrls: ['./offer-list-item.component.scss']
})
export class OfferListItemComponent implements OnInit {
  @Input() offer: Offer | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
