import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Header2Component } from '../header2/header2.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    Header2Component,
    DatePickerComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    Header2Component,
    DatePickerComponent
  ]
})
export class MainModule { }
