import { Module } from '@nestjs/common';
import { ParticipacionCulturaService } from './participacion_cultura.service';
import { ParticipacionCulturaController } from './participacion_cultura.controller';
import { ParticipacionCultura } from './entities/participacion_cultura.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ParticipacionCultura])],
  controllers: [ParticipacionCulturaController],
  providers: [ParticipacionCulturaService],
})
export class ParticipacionCulturaModule { }
