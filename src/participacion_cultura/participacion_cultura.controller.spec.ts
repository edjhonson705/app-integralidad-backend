import { Test, TestingModule } from '@nestjs/testing';
import { ParticipacionCulturaController } from './participacion_cultura.controller';
import { ParticipacionCulturaService } from './participacion_cultura.service';

describe('ParticipacionCulturaController', () => {
  let controller: ParticipacionCulturaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipacionCulturaController],
      providers: [ParticipacionCulturaService],
    }).compile();

    controller = module.get<ParticipacionCulturaController>(ParticipacionCulturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
