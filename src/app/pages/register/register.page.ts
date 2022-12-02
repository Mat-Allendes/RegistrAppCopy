import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
/* Con la linea 11 de codigo hacemos que el FormularioRegistro sea reconocido como un
Grupo de Formularios que manejara varios campos para estos se importa FormGroup */
  formularioRegistro: FormGroup;

/* Este constructor hace la funcion de FormBuild, osea, que es un constructor del
formulario que requerie de campos para su funcion (ingresarle variables form) */
  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      //Para validar que dentro del FormGroup se encuentren los campos rellenados importamos Validators
      nombre: new FormControl('',Validators.required,),
      password: new FormControl('',Validators.required),
      confirmacionPassword: new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
  }

  async guardar(){
    console.log('Boton Guardar Funciona');
    const f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Tienes un error en los campos!!',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    const usuario = {
      nombre: f.nombre,
      password: f.password
    };

    localStorage.setItem('usuario',JSON.stringify(usuario));
    console.log('Si guarde al usuario');
  }


}
