import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatusPipe'
})
export class TaskStatusPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
