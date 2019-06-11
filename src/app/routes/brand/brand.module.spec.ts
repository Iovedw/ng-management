import { BrandModule } from './brand.module';

describe('BrandModule', () => {
  let brandModule: BrandModule;

  beforeEach(() => {
    brandModule = new BrandModule();
  });

  it('should create an instance', () => {
    expect(brandModule).toBeTruthy();
  });
});
