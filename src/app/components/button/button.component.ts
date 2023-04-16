import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {

  // Por default va ser de tipo button y primary
  // string = 'button'; El string lo cambiamos por los 3 tipos, para que no me reciba algo diferente a eso y así evitamos errores
  @Input() type: 'button' | 'reset' | 'submit' = 'button';
  @Input() color:string = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  // Colores permitidos
  get colors() {
    return {
      'bg-success-600': this.color === "success",
      'hover:bg-success-500': this.color === "success",
      'focus:ring-success-300': this.color === "success",
      'bg-danger-600': this.color === "danger",
      'hover:bg-danger-500': this.color === "danger",
      'bg-primary-600': this.color === "primary",
      'hover:bg-primary-500': this.color === "primary",
      'bg-warning-500': this.color === "warning",
      'hover:bg-warning-600': this.color === "warning",
    }
  }

}
