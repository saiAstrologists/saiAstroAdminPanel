import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
//   MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
//   MatSlideToggleModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorcontrolMessageComponent } from './shared/components/errorcontrol-message/errorcontrol-message.component';




@NgModule({
  declarations: [
    HeaderComponent,
    ErrorcontrolMessageComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MatAutocompleteModule,
     MatButtonModule,
     MatCheckboxModule,
     MatDatepickerModule,
     MatFormFieldModule,
     MatInputModule,
     MatRadioModule,
     MatSelectModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatCardModule,
     MatIconModule,
     MatDialogModule,
     MatPaginatorModule,
     ReactiveFormsModule,
  ],
  exports: [
     MatAutocompleteModule,
     MatTableModule,
     MatTabsModule,
     MatButtonModule,
     MatCheckboxModule,
     MatDatepickerModule,
     MatFormFieldModule,
     MatInputModule,
     MatRadioModule,
     MatSelectModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatCardModule,
     MatIconModule,
     MatDialogModule,
     MatPaginatorModule,
     ReactiveFormsModule,
     HeaderComponent,
     ErrorcontrolMessageComponent

  ]
})
export class SharedModuleModule { }
