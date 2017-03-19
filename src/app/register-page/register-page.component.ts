import { Component, OnInit } from '@angular/core';

import { Angular2TokenService, RegisterData } from 'angular2-token';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  private _registerData: RegisterData = <RegisterData>{};
  private _output: any;
  constructor(private _tokenService: Angular2TokenService) { }

  ngOnInit() {
  }

  onSubmit(){
  	this._output = null;
  	this._tokenService.registerAccount(this._registerData).subscribe(
  		res 	=> {
  			this._registerData = <RegisterData>{};
  			this._output = res;
  		},
  		error	=> {
  			this._registerData = <RegisterData>{};
  			this._output = error;
  		});
  }

}
