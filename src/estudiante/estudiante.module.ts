import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { ParticipacionCultura } from 'src/participacion_cultura/entities/participacion_cultura.entity';
import { ParticipacionDeporte } from 'src/participacion_deporte/entities/participacion_deporte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante,ParticipacionCultura,ParticipacionDeporte])],
  controllers: [EstudianteController],
  providers: [EstudianteService],
})
export class EstudianteModule {}
