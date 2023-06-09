import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  public isUserAuthenticated: boolean;
  public isUserAdmin: boolean;

  constructor(
    private fb: FormBuilder,
    private matdialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {
    this.userService.authChanged.subscribe((res) => {
      this.isUserAuthenticated = res;
    });
  }

  sweetAlert() {
    Swal.fire({
      title: 'Estas seguro?',
      text: '¿Quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesión',
    cancelButtonText: 'Cancelar'
    }).then((logut) => {
      if (logut.isConfirmed) {
        localStorage.clear();
                this.userService.logout();
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.userService.authChanged.subscribe((res) => {
      this.isUserAuthenticated = res;
    });
    this.isUserAdmin = this.userService.isUserAdmin();
  }
}
