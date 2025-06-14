import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { ParticipacionCultura } from '../../participacion_cultura/entities/participacion_cultura.entity';
import { ParticipacionDeporte } from '../../participacion_deporte/entities/participacion_deporte.entity';


@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  anno_academico: string;

  @Column({ type: 'varchar', length: 30 })
  grupo: string;

  @Column({ type: 'varchar', length: 30 })
  primer_apellido: string;

  @Column({ type: 'varchar', length: 30 })
  segundo_apellido: string;

  @Column({ type: 'varchar', length: 30 })
  primer_nombre: string;

  @Column({ type: 'varchar', length: 30 })
  segundo_nombre: string;

  @Column({ type: 'varchar', length: 30 })
  via_ingreso: string;

  @Column({ type: 'varchar', length: 30 })
  situacion_escolar: string;

  @Column({ type: 'varchar', length: 250 })
  observaciones: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
  sexo: string;

  //Cultura
  @ManyToMany(() => ParticipacionCultura, participacion => participacion.estudiantes, {
    cascade: true,
  })
  @JoinTable()
  participacionesCulturales: ParticipacionCultura[];

  //Deportes
  @ManyToMany(() => ParticipacionDeporte, participacion => participacion.estudiantes, {
    cascade: true,
  })
  @JoinTable()
  participacionesDeportivas: ParticipacionDeporte[];
}
