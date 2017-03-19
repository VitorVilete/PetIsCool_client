import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) { }

  ngOnInit() {
  }

  signOut(){
  	this._tokenService.signOut().subscribe(
  		res => console.log(res),
  		error => console.log(error)
  	);
  }

}
