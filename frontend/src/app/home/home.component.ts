import { Component, Inject, OnInit } from '@angular/core';
import { INavigation } from '../models/INavigation';
import {NAVIGATION} from '../models/navigation.injection'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = true;
  constructor(
    @Inject(NAVIGATION)
    public nav: INavigation[]
  ) { }

  ngOnInit(): void {
  }

}
