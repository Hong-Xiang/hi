import { Task } from './task.model';

export const tasks: Task[] = [
  new Task({
    id: 0,
    desc: 'test task 0',
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
    id: 1,
    desc: 'test task 0',
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
    desc: 'test task 0',
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
  })
];
