import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskDto } from '../dto/taskDto.dto';
import { TaskInfo } from '../entitys/taskInfo.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskInfo)
    private TaskRepo: Repository<TaskInfo>,
  ) {}

  getTask(): any {
    return this.TaskRepo.find();
  }

  insertTask(taskdto: TaskDto): any {
    const task = new TaskInfo();
    task.courseId = taskdto.courseId;
    task.subject = taskdto.subject;
    task.Details = taskdto.Details;
    return this.TaskRepo.save(task);
  }

  updateTask(taskdto, id): any {
    return this.TaskRepo.update(id, taskdto);
  }

  updateTaskById(taskdto, id): any {
    return this.TaskRepo.update(id, taskdto);
  }

  deleteTask(id): any {
    return this.TaskRepo.delete(id);
  }
}
