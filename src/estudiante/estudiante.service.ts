import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { ParticipacionCultura } from 'src/participacion_cultura/entities/participacion_cultura.entity';
import { ParticipacionDeporte } from 'src/participacion_deporte/entities/participacion_deporte.entity';

@Injectable()
export class EstudianteService {

  /**
   * Constructor
   * @param estudianteRepository 
   */
  constructor(
    @InjectRepository(Estudiante) private readonly estudianteRepository: Repository<Estudiante>,
    @InjectRepository(ParticipacionCultura) private readonly participacionesCulturalesRepository: Repository<ParticipacionCultura>,
    @InjectRepository(ParticipacionDeporte) private readonly participacionesDeportivasRepository: Repository<ParticipacionDeporte>,

  ) { }

  /**
   * asignarParticipacionesCulturales
   * @param estudianteId 
   * @param participacionIds 
   * @returns 
   */
  async asignarParticipacionesCulturales(estudianteId: number, participacionIds: number[]) {

    const estudiante = await this.estudianteRepository.findOne({
      where: { id: estudianteId },
      relations: ['participacionesCulturales'],
    });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    const participaciones = await this.participacionesCulturalesRepository.findByIds(participacionIds);
    estudiante.participacionesCulturales = [...estudiante.participacionesCulturales, ...participaciones];

    return this.estudianteRepository.save(estudiante);
  }

  /**
   * asignarParticipacionesDeportivas
   * @param estudianteId 
   * @param participacionIds 
   * @returns 
   */
  async asignarParticipacionesDeportivas(estudianteId: number, participacionIds: number[]) {

    const estudiante = await this.estudianteRepository.findOne({
      where: { id: estudianteId },
      relations: ['participacionesDeportivas'],
    });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    const participaciones = await this.participacionesDeportivasRepository.findByIds(participacionIds);
    estudiante.participacionesDeportivas = [...estudiante.participacionesDeportivas, ...participaciones];

    return this.estudianteRepository.save(estudiante);
  }

  /**
   * eliminarParticipacionCultural TODO: Hacer el controlador
   * @param estudianteId 
   * @param participacionId 
   * @returns 
   */
  async eliminarParticipacionCultural(estudianteId: number, participacionId: number) {

    const estudiante = await this.estudianteRepository.findOne({
      where: { id: estudianteId },
      relations: ['participacionesCulturales'],
    });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    estudiante.participacionesCulturales = estudiante.participacionesCulturales.filter(
      p => p.id !== participacionId,
    );

    return this.estudianteRepository.save(estudiante);
  }

  /**
   * eliminarParticipacionDeportiva
   * @param estudianteId 
   * @param participacionId 
   * @returns 
   */
  async eliminarParticipacionDeportiva(estudianteId: number, participacionId: number) {

    const estudiante = await this.estudianteRepository.findOne({
      where: { id: estudianteId },
      relations: ['participacionesDeportivas'],
    });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    estudiante.participacionesDeportivas = estudiante.participacionesDeportivas.filter(
      p => p.id !== participacionId,
    );

    return this.estudianteRepository.save(estudiante);
  }

  /**
   * obtenerParticipacionesCulturales
   * @param estudianteId 
   * @returns 
   */
  async obtenerParticipacionesCulturales(estudianteId: number): Promise<ParticipacionCultura[]> {

    const estudiante = await this.estudianteRepository.findOne({
      where: { id: estudianteId },
      relations: ['participacionesCulturales'],
    });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    return estudiante.participacionesCulturales;
  }

  /**
  * obtenerParticipacionesDeportivas
  * @param estudianteId 
  * @returns 
  */
  async obtenerParticipacionesDeportivas(estudianteId: number): Promise<ParticipacionDeporte[]> {

    const estudiante = await this.estudianteRepository.findOne({
      where: { id: estudianteId },
      relations: ['participacionesDeportivas'],
    });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    return estudiante.participacionesDeportivas;
  }

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

    return this.estudianteRepository.save(estudiante);
  }

  /**
   * 
   * @returns 
   */
  findAll(): Promise<Estudiante[]> {
    return this.estudianteRepository.find({
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
    return this.estudianteRepository.findOneBy({ id });
  }

  /**
   * 
   * @param id 
   * @param updateEstudianteDto 
   * @returns 
   */
  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {

    const estudiante = await this.estudianteRepository.preload({
      id,
      ...updateEstudianteDto,
    });

    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }

    return this.estudianteRepository.save(estudiante);

  }

  /**
   * 
   * @param id 
   * @returns 
   */
  remove(id: number): Promise<DeleteResult> {
    return this.estudianteRepository.delete(id);
  }
}
