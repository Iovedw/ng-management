import { HolderModule } from './holder.module';

describe('HolderModule', () => {
  let holderModule: HolderModule;

  beforeEach(() => {
    holderModule = new HolderModule();
  });

  it('should create an instance', () => {
    expect(holderModule).toBeTruthy();
  });
});
