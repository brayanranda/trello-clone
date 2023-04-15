import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {

  // Por default va ser de tipo button
  // @Input() typeBtn: string = 'button'; El string lo cambiamos por los 3 tipos, para que no me reciba algo diferente a eso y así evitamos errores
  @Input() type: 'button' | 'reset' | 'submit' = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
