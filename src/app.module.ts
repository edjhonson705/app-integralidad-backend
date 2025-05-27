import { Module } from '@nestjs/common';
//import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteModule } from './estudiante/estudiante.module';
import { Estudiante } from './estudiante/entities/estudiante.entity';
import { ParticipacionCulturaModule } from './participacion_cultura/participacion_cultura.module';
import { ParticipacionCultura } from './participacion_cultura/entities/participacion_cultura.entity';
import { ParticipacionDeporteModule } from './participacion_deporte/participacion_deporte.module';
import { ParticipacionDeporte } from './participacion_deporte/entities/participacion_deporte.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'qw',
      username: 'postgres',
      entities: [Estudiante, ParticipacionCultura, ParticipacionDeporte],
      database: 'app-integralidad-v1',
      synchronize: true,
      logging: true,
    }),
    // EstudiantesModule,
    EstudianteModule,
    ParticipacionCulturaModule,
    ParticipacionDeporteModule,
  ],
})
export class AppModule { }
