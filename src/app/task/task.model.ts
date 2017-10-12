// function datef(dateJS: string | null): string {
//   if (dateJS) {
//     const d = new Date(dateJS);
//     return `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDay()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}.${d.getUTCMilliseconds()}"`;
//   } else return 'null';
// }

// function datep(s: string | null): Date {
//   if (s) return new Date(s + '+0000');
//   else return null;
// }

export class Task {
  public id: number;
  public desc: string;
  public worker: string;
  public workdir: string;
  public type: string;
  public dependency: number[];
  public timeStamp: {
    create: Date;
    start: Date;
    end: Date;
  };
  public state: string;
  public data: any;
  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.desc = (obj && obj.desc) || null;
    this.worker = (obj && obj.worker) || null;
    this.workdir = (obj && obj.workdir) || null;
    this.type = (obj && obj.type) || null;
    this.dependency = (obj && obj.dependency) || null;
    this.timeStamp = {
      create: null,
      start: null,
      end: null
    };
    this.timeStamp.create =
      (obj && obj.time_stamp && obj.time_stamp.create) || null;
    this.timeStamp.start =
      (obj && obj.time_stamp && obj.time_stamp.start) || null;
    this.timeStamp.end = (obj && obj.time_stamp && obj.time_stamp.end) || null;
    this.state = obj.state;
    this.data = obj.data;
  }
}

// function toJSON(): any {
//   return {
//     id: this.id,
//     desc: this.desc
//   };
// }
