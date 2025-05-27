import { Module } from '@nestjs/common';
import { ParticipacionDeporteService } from './participacion_deporte.service';
import { ParticipacionDeporteController } from './participacion_deporte.controller';
import { ParticipacionDeporte } from './entities/participacion_deporte.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ParticipacionDeporte])],
  controllers: [ParticipacionDeporteController],
  providers: [ParticipacionDeporteService], 
})
export class ParticipacionDeporteModule { }
