import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TarefaService } from '../../services/tarefa.service';
import { ToastrService } from 'ngx-toastr';
import { Lista } from '../../models/lista';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss']
})
export class ModalTaskComponent implements OnChanges {

  @Input() public listSelected: Lista | undefined;

  @Input() public modeEditTask: boolean = true;

  @Input() public taskSelected: Tarefa | undefined;

  @Output() public closeModalEvent: EventEmitter<any> = new EventEmitter();

  @Output() public updateAreaTasks: EventEmitter<any> = new EventEmitter();

  public formGroup: FormGroup = this._formBuilder.group({
    titulo: [''],
    descricao: [''],
    dataPrevisao: ['']
  });

  constructor(
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder,
    private _taskService: TarefaService
  ) {}

  public ngOnChanges(): void {
    if (this.taskSelected && this.listSelected) {
      this.taskSelected.listaId = this.listSelected.codigo as number;
      this.setTask(this.taskSelected);
    }
  }

  public close(): void {
    this.closeModalEvent.emit();
  }

  // Editar a tarefa
  public edit(): void {
    console.log(this.taskSelected);
  }

  public save(): void {
    const titulo: string = this.formGroup.get("titulo")?.value.trim();
    const descricao: string = this.formGroup.get("descricao")?.value.trim();
    const dataPrevisao: string = this.formGroup.get("dataPrevisao")?.value.trim();

    if (this.canSave(titulo, dataPrevisao) && this.listSelected) {
      const listaId = this.listSelected.codigo as number;

      this._taskService.create({ titulo, descricao, dataPrevisao, listaId })
        .subscribe({
          next: value => {
            console.log("Tarefa", value);
            this._toastr.success("Tarefa adicionada", "Operação");
            this.close();
            this.updateAreaTasks.emit();
          },
          error: error => {
            console.log(error);
            this._toastr.error("Não foi possível adicionar a tarefa", "Operação");
          }
        })
    }
  }

  private canSave(titulo: string, dataPrevisao: string): boolean {
    let can: boolean = true;

    if (titulo === "") {
      this._toastr.warning("Preencha o título", "Tarefa");
      can = false;
    }

    const datePrev = new Date(dataPrevisao);
    const dateCur = new Date();

    datePrev.setUTCHours(0, 0, 0, 0);
    datePrev.setHours(0, 0, 0, 0);
    dateCur.setUTCHours(0,0,0,0);
    dateCur.setHours(0,0,0,0);

    if (dataPrevisao === "") {
      this._toastr.warning("Preencha a data de previsão", "Tarefa");
      can = false;
    } else if (datePrev.getTime() < dateCur.getTime()) {
      this._toastr.warning("A Data da previsão é menor que a data atual", "Tarefa");
      can = false;
    }

    return can;
  }

  // Usado para setar a tarefa que sera editada
  public setTask(task: Tarefa): void {
    this.formGroup.get("titulo")?.setValue(task.titulo);
    this.formGroup.get("descricao")?.setValue(task.descricao);
    this.formGroup.get("dataPrevisao")?.setValue(task.dataPrevisao);
  }
}
