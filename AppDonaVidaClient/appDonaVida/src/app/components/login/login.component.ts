import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LogingDTO } from '../../interfaces/logingDto';
import { UserService } from '../../services/user.service';
import { LogingResponse } from '../../interfaces/responses/logingResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: any = null;
  loginForm: FormGroup;
  private returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

    localStorage.clear();
  }

  private assertInputsProvided(): void {
    if (!this.loginForm) {
      throw new Error('The required input [userId] was not provided');
    }
  }

  ngOnInit(): void {
    this.assertInputsProvided();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  validateControl = (controlName: string) => {
    return (
      this.loginForm.get(controlName).invalid &&
      this.loginForm.get(controlName).touched
    );
  };

  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName).hasError(errorName);
  };

  loginUser = (loginFormValue: any) => {
    const login = { ...loginFormValue };
    const userForAuth: LogingDTO = {
      userName: login.userName,
      password: login.password,
    };
    this.userService.postLoging(userForAuth).subscribe({
      next: (res: LogingResponse) => {
                localStorage.setItem('token', res.token);
        console.log(res);
        this.userService.sendAuthStateChangeNotification(res.isAuthSuccessful);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error;
        this.router.navigate(['/login'], {
          queryParams: { returnUrl: this.router.url },
        });
      },
    });
  };
}
