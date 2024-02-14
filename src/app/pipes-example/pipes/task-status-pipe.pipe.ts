import { Pipe, PipeTransform } from '@angular/core';
import { ITaskModel } from '../model/itask-model';

@Pipe({
  name: 'taskStatusPipe'
})
export class TaskStatusPipePipe implements PipeTransform {
//evalua una sola vez la directiva, no cada vez que se presiona el boton y cambia el status, por eso antes no cambiaba nunca el valor.
  transform(task: ITaskModel): string {
    return task.title.toUpperCase();
  }

}
