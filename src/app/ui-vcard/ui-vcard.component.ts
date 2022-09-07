import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-ui-vcard',
  templateUrl: './ui-vcard.component.html',
  styleUrls: ['./ui-vcard.component.css']
})
export class UiVcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() Name:string = '';
}
