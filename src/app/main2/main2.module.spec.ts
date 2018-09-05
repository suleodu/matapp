import { Main2Module } from './main2.module';

describe('Main2Module', () => {
  let main2Module: Main2Module;

  beforeEach(() => {
    main2Module = new Main2Module();
  });

  it('should create an instance', () => {
    expect(main2Module).toBeTruthy();
  });
});
