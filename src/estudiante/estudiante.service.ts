import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudianteService {

  /**
   * Constructor
   * @param userRepository 
   */
  constructor(
    @InjectRepository(Estudiante) private readonly userRepository: Repository<Estudiante>,
  ) { }

  /**
   * 
   * @param createEstudianteDto 
   * @returns 
   */
  create(createEstudianteDto: CreateEstudianteDto) {

    const estudiante: Estudiante = new Estudiante();

    estudiante.anno_academico = createEstudianteDto.anno_academico;
    estudiante.grupo = createEstudianteDto.grupo;
    estudiante.primer_nombre = createEstudianteDto.primer_nombre;
    estudiante.segundo_nombre = createEstudianteDto.segundo_nombre;
    estudiante.primer_apellido = createEstudianteDto.primer_apellido;
    estudiante.segundo_apellido = createEstudianteDto.segundo_apellido;
    estudiante.situacion_escolar = createEstudianteDto.situacion_escolar;
    estudiante.via_ingreso = createEstudianteDto.via_ingreso;
    estudiante.observaciones = createEstudianteDto.observaciones;
    estudiante.sexo = createEstudianteDto.sexo;

    return this.userRepository.save(estudiante);
  }

  /**
   * 
   * @returns 
   */
  findAll(): Promise<Estudiante[]> {
    return this.userRepository.find({
      order: {
        id: 'ASC', // Orden ascendente
      },
    });
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  findOne(id: number): Promise<Estudiante | null> {
    return this.userRepository.findOneBy({ id });
  }

  /**
   * 
   * @param id 
   * @param updateEstudianteDto 
   * @returns 
   */
  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    
    const estudiante = await this.userRepository.preload({
      id,
      ...updateEstudianteDto,
    });

    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }

    return this.userRepository.save(estudiante);

  }

  /**
   * 
   * @param id 
   * @returns 
   */
  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
