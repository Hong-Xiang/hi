import { Task } from './task.model';

export const tasksMock: Task[] = [
  new Task({
    id: 20,
    desc: 'test task 0',
    worker: 'Slurm',
    workdir: '/tmp/test',
    type: 'Script',
    dependency: [],
    timeStamp: {
      create: '2017-10-08 10:42:10.233333',
      start: null,
      end: null
    },
    state: 'BeforeSubmit',
    data: {
      file: 'run.sh'
    }
  }),
  new Task({
    id: 1,
    desc: 'test task 1',
    worker: 'Slurm',
    workdir: '/tmp/test',
    type: 'Script',
    dependency: [],
    timeStamp: {
      create: '2017-10-08 10:43:10.233333',
      start: null,
      end: null
    },
    state: 'BeforeSubmit',
    data: {
      file: 'run.sh'
    }
  }),
  new Task({
    id: 2,
    desc: 'test task 2',
    worker: 'Slurm',
    workdir: '/tmp/test',
    type: 'Script',
    dependency: [],
    timeStamp: {
      create: '2017-10-08 10:44:10.233333',
      start: null,
      end: null
    },
    state: 'BeforeSubmit',
    data: {
      file: 'run.sh'
    }
  })
];
