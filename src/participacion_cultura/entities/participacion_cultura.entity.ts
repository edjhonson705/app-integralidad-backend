import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ParticipacionCultura {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre_numero_cultural: string;

  @Column({ type: 'enum', enum: ['danza', 'musica', 'teatro','pintura'] })
  categoria_cultural: string;

  @Column({ type: 'varchar', length: 100 })
  resultado: string;

  @Column({ type: 'date'})
  fecha: Date;

  @Column({ type: 'varchar', length: 9 })
  curso: string;

}
