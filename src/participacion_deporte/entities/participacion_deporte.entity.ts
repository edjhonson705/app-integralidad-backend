import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
/**
 * 
 */
export class ParticipacionDeporte {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre_numero_deportivo: string;

  @Column({ type: 'enum', enum: ['combate', 'atletismo', 'fuerza','equipos'] })
  categoria_deportiva: string;

  @Column({ type: 'varchar', length: 100 })
  resultado: string; 
}
