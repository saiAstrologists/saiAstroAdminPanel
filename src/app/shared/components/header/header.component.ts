import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'menuBar', [
        transition(':enter', 
          [
            style({ left: -250 }),
            animate('200ms ease-out', 
                    style({ left: 0 }))
          ]
        ),
        transition(':leave', 
          [
            style({ left: 0 }),
            animate('200ms ease-in', 
                    style({ left: -250 }))
          ]
        )
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {
  viewMenuBar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuSlide(){
    this.viewMenuBar = !this.viewMenuBar;
  }

}
