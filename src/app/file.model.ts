export class File {
  public name: string;
  public path: string;
  public contents: string;

  constructor(path: string, name: string, contents?: string) {
    this.name = name;
    this.path = path;
    if (!contents) this.contents = undefined;
    else this.contents = contents;
  }
}
