import { Test, TestingModule } from '@nestjs/testing';
import { ActionController } from './action.controller';
import { ActionService } from './action.service';

describe('Action Controller', () => {
  let controller: ActionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActionController],
      providers: [ActionService]
    }).compile();

    controller = module.get<ActionController>(ActionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    expect(controller.getHello()).toBe('Hello World!');
  });
});
