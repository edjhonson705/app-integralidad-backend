import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Estudiante {
  
   /**
   * this decorator will help to auto generate id for the table.
   */
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
  /**
   * m - male
   * f - female
   * u - unspecified
   */
  sexo: string;
}