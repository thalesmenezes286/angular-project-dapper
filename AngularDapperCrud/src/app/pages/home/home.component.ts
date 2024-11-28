import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  usuarios: UsuarioListar[] = [];
  usuariosGeral: UsuarioListar[] = [];

  constructor(private serviceUsuario:UsuarioService){}

  ngOnInit(): void {
    this.serviceUsuario.GetUsuarios().subscribe(response => {
      this.usuarios = response;
      this.usuariosGeral = response;
      console.log(response)
  })

  }
}
