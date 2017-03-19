import { Component, OnInit } from '@angular/core';

import { Angular2TokenService, SignInData } from 'angular2-token';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) { }

  private _signInData: SignInData = <SignInData>{};
  private _output: any;

  ngOnInit() {
  }

  onSubmit(){
  	this._output = null;
  	this._tokenService.signIn(this._signInData).subscribe(
  		res 	=> {
  			this._signInData = <SignInData>{};
  			this._output = res;
  		},
  		error => {
    		this._signInData = <SignInData>{};
        this._output = error;
  		});
  }

}
