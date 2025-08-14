import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Task[];
    findOne(id: number): Task;
    create(createTaskDto: CreateTaskDto): Task;
    update(id: number, updateTaskDto: UpdateTaskDto): Task;
    remove(id: number): void;
}
