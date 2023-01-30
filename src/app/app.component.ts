import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray  } from '@angular/forms';

export interface Subject {
 id: number;
 name: string;
}
@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss']
})
export class AppComponent {
    title = 'GetLitwithFin'
}
