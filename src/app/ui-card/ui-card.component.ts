import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.css']
})
export class UiCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() image:string="";
  @Input() address:string="";
  @Input() name:string="";

}
