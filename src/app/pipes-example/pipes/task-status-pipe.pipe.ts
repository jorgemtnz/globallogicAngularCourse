import { Pipe, PipeTransform } from '@angular/core';
import { ITaskModel } from '../model/itask-model';

@Pipe({
  name: 'taskStatusPipe'
})
export class TaskStatusPipePipe implements PipeTransform {

  transform(task: ITaskModel, ...args: unknown[]): unknown {
    return task.title.toUpperCase();
  }

}
