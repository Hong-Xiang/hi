import { File } from '../../file.model';

export interface IGeneralFile {
  name: string;
  path: string;
  children?: IGeneralFile[];
}
export class Directory implements IGeneralFile {
  name: string;
  path: string;
  children: IGeneralFile[];
  expanded: boolean;
  constructor(
    path: string,
    name: string,
    expanded?: boolean,
    children?: any[]
  ) {
    this.path = path;
    this.name = name;
    if (!expanded) this.expanded = false;
    else this.expanded = true;
    if (!children) this.children = undefined;
    else {
      this.children = [];
      for (let c of children) {
        if (c.is_dir)
          this.children.push(new Directory(c.path, c.name, false, undefined));
        else this.children.push(new File(c.path, c.name, undefined));
      }
    }
  }

  mayHasDescendant(d: Directory): Boolean {
    return this.path.indexOf(d.path) == 0 && this.path.length < d.path.length;
  }

  getSubDirectories(): Directory[] | undefined {
    if (!this.children) return undefined;
    return <Directory[]>this.children.filter(
      (x: IGeneralFile) => x instanceof Directory
    );
  }

  getFiles(): File[] {
    if (!this.children) return undefined;
    return <File[]>this.children.filter((x: IGeneralFile) => x instanceof File);
  }

  hasChild(path: string): Boolean | undefined {
    if (!this.children) return undefined;
    return this.children.map((x: IGeneralFile) => x.path).indexOf(path) >= 0;
  }
}
