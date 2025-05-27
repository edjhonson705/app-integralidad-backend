import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateParticipacionDeporteDto } from './dto/create-participacion_deporte.dto';
import { UpdateParticipacionDeporteDto } from './dto/update-participacion_deporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParticipacionDeporte } from './entities/participacion_deporte.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ParticipacionDeporteService {

  /**
   * Constructor
   * @param userRepository 
   */
  constructor(
    @InjectRepository(ParticipacionDeporte) private readonly userRepository: Repository<ParticipacionDeporte>,
  ) { }

  /**
   * 
   * @param createParticipacionDeporteDto 
   * @returns 
   */
  create(createParticipacionDeporteDto: CreateParticipacionDeporteDto) {

    const participacionDeporte: ParticipacionDeporte = new ParticipacionDeporte();

    participacionDeporte.nombre_numero_deportivo = createParticipacionDeporteDto.nombre_numero_deportivo;
    participacionDeporte.categoria_deportiva = createParticipacionDeporteDto.categoria_deportiva;
    participacionDeporte.resultado = createParticipacionDeporteDto.resultado;

    return this.userRepository.save(participacionDeporte);
  }

  /**
   * 
   * @returns 
   */
  findAll(): Promise<ParticipacionDeporte[]> {
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
  findOne(id: number): Promise<ParticipacionDeporte | null> {
    return this.userRepository.findOneBy({ id });
  }

  /**
   * 
   * @param id 
   * @param updateParticipacionDeporteDto 
   * @returns 
   */
  async update(id: number, updateParticipacionDeporteDto: UpdateParticipacionDeporteDto) {

    const participacionDeporte = await this.userRepository.preload({
      id,
      ...updateParticipacionDeporteDto,
    });

    if (!participacionDeporte) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }

    return this.userRepository.save(participacionDeporte);
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
