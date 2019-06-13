import { ChildrenModule } from './children.module';

describe('ChildrenModule', () => {
  let childrenModule: ChildrenModule;

  beforeEach(() => {
    childrenModule = new ChildrenModule();
  });

  it('should create an instance', () => {
    expect(childrenModule).toBeTruthy();
  });
});
