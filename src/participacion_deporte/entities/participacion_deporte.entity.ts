import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Estudiante } from '../../estudiante/entities/estudiante.entity';

@Entity()
/**
 * 
 */
export class ParticipacionDeporte {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre_numero_deportivo: string;

  @Column({ type: 'enum', enum: ['combate', 'atletismo', 'fuerza', 'equipos'] })
  categoria_deportiva: string;

  @Column({ type: 'varchar', length: 100 })
  resultado: string;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'varchar', length: 9 })
  curso: string;

  @ManyToMany(() => Estudiante, estudiante => estudiante.participacionesDeportivas)
  estudiantes: Estudiante[];
}
