import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-body',
  templateUrl: './ui-body.component.html',
  styleUrls: ['./ui-body.component.css']
})
export class UiBodyComponent implements OnInit {
items:any[]=[{"Name":"5 Tips to make your site easier to find on Google"},
{"Name":"Setting up your first theme on Wordpress "},
{"Name":"3 Ways to increase ad traffic to your online store"}];

image:any[]=[{"image":"../../assets/1.png","Name":"Wordpress"},{"image":"../../assets/2.png","Name":"Weebly"},{"image":"../../assets/3.png","Name":"Wordpress"}];

table1:any[]=[{"invoice":63151067,"package":"CS-2670271 Cloud Hatchling","date":"2018-04-18","total":"$2.99"},
{"invoice":63118878,"package":"PA-2798043 Find,1 Month","date":"2018-04-18","total":"$2.99"},
{"invoice":63118769,"package":"PA-2795616 Find,1 Month","date":"2018-04-18","total":"$2.99"}
]

table2:any[]=[{"domain":"treehouseclub.com","expiration":"2020-02-26 >"},
{"domain":"snowflakewarrior.com","expiration":"2020-05-26 >"},
{"domain":"jamesbond.org","expiration":"2020-05-26 >"}
]

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }
  
}
