import { Test, TestingModule } from '@nestjs/testing';
import { ParticipacionCulturaService } from './participacion_cultura.service';

describe('ParticipacionCulturaService', () => {
  let service: ParticipacionCulturaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipacionCulturaService],
    }).compile();

    service = module.get<ParticipacionCulturaService>(ParticipacionCulturaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
