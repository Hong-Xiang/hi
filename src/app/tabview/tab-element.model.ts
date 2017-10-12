import { Observable, Subject } from 'rxjs';
export class TabId {
  key: string;
  componentName: string;
}
export interface IContent {
  label: string;
  data?: any;
}
export class TabElement {
  id: TabId;
  content: Observable<IContent>;
  activated: Observable<boolean>;
  private newContent: Subject<IContent> = new Subject<IContent>();
  private newActiveState: Subject<boolean> = new Subject<boolean>();
  constructor(id: TabId, content: any, activated?: boolean) {
    this.id = id;
    this.content = this.newContent
      .startWith(content)
      .publishReplay(1)
      .refCount();
    this.activated = this.newActiveState
      .startWith(false)
      .publishReplay(1)
      .refCount();
    if (activated) this.active();
    else this.deactive();
  }

  updateContent(content: any) {
    this.newContent.next(content);
  }
  active() {
    this.newActiveState.next(true);
  }
  deactive() {
    this.newActiveState.next(false);
  }
}
