import { Module } from '@nestjs/common';
//import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteModule } from './estudiante/estudiante.module';
import { Estudiante } from './estudiante/entities/estudiante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'qw',
      username: 'postgres',
      entities: [Estudiante],
      database: 'app-integralidad-v1',
      synchronize: true,
      logging: true,
    }),
   // EstudiantesModule,
    EstudianteModule,
  ],
})
export class AppModule {}
