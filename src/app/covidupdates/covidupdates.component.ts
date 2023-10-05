import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-covidupdates',
  templateUrl: './covidupdates.component.html',
  styleUrls: ['./covidupdates.component.css']
})
export class CovidupdatesComponent {
 constructor(private router:Router){}

  next(){
    this.router.navigate(['/covid'])
  }
  prev(){
    this.router.navigate(['/stats'])
  }
}
