import { Test, TestingModule } from '@nestjs/testing';
import { ParticipacionDeporteController } from './participacion_deporte.controller';
import { ParticipacionDeporteService } from './participacion_deporte.service';

describe('ParticipacionDeporteController', () => {
  let controller: ParticipacionDeporteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipacionDeporteController],
      providers: [ParticipacionDeporteService],
    }).compile();

    controller = module.get<ParticipacionDeporteController>(ParticipacionDeporteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
