import { Test, TestingModule } from '@nestjs/testing';
import { ParticipacionDeporteService } from './participacion_deporte.service';

describe('ParticipacionDeporteService', () => {
  let service: ParticipacionDeporteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipacionDeporteService],
    }).compile();

    service = module.get<ParticipacionDeporteService>(ParticipacionDeporteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
