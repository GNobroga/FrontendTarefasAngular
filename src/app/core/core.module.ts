import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ErrorComponent } from './components/error/error.component';
import { ModalTaskComponent } from './components/modal-task/modal-task.component';
import { ModalListComponent } from './components/modal-list/modal-list.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LimitStringPipe } from './pipes/limit-string.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    TaskListComponent,
    ErrorComponent,
    ModalTaskComponent,
    ModalListComponent,
    LoginComponent,
    CadastroComponent,
    LimitStringPipe,
  ],
  imports: [CommonModule, CoreRoutingModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class CoreModule {}
