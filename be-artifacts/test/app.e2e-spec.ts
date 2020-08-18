import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ProjectModule } from 'src/domain/projects/project.module';
import * as request from 'supertest';

describe('ProjectController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProjectModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/projects (GET)', () => {
    return request(app.getHttpServer())
      .get('/hello')
      .expect(200)
      .expect('Hello World!');
  });
});
