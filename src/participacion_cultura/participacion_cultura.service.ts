import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateParticipacionCulturaDto } from './dto/create-participacion_cultura.dto';
import { UpdateParticipacionCulturaDto } from './dto/update-participacion_cultura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParticipacionCultura } from './entities/participacion_cultura.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ParticipacionCulturaService {

  /**
   * Constructor
   * @param userRepository 
   */
  constructor(
    @InjectRepository(ParticipacionCultura) private readonly userRepository: Repository<ParticipacionCultura>,
  ) { }

  /**
   * 
   * @param createParticipacionCulturaDto 
   * @returns 
   */
  create(createParticipacionCulturaDto: CreateParticipacionCulturaDto) {


    const participacionCultura: ParticipacionCultura = new ParticipacionCultura();

    participacionCultura.nombre_numero_cultural = createParticipacionCulturaDto.nombre_numero_cultural;
    participacionCultura.categoria_cultural = createParticipacionCulturaDto.categoria_cultural;
    participacionCultura.resultado = createParticipacionCulturaDto.resultado;
    participacionCultura.fecha = createParticipacionCulturaDto.fecha;
    participacionCultura.curso = createParticipacionCulturaDto.curso;

    return this.userRepository.save(participacionCultura);
  }

  /**
   * 
   * @returns 
   */
  findAll(): Promise<ParticipacionCultura[]> {
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
  findOne(id: number): Promise<ParticipacionCultura | null> {
      return this.userRepository.findOneBy({ id });
  }

  /**
   * 
   * @param id 
   * @param updateParticipacionCulturaDto 
   * @returns 
   */
  async update(id: number, updateParticipacionCulturaDto: UpdateParticipacionCulturaDto) {
    
    const participacionCultura = await this.userRepository.preload({
          id,
          ...updateParticipacionCulturaDto,
        });
    
        if (!participacionCultura) {
          throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
        }
    
        return this.userRepository.save(participacionCultura);
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
