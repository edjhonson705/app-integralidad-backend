import { Injectable } from '@nestjs/common';
import { CreateParticipacionDeporteDto } from './dto/create-participacion_deporte.dto';
import { UpdateParticipacionDeporteDto } from './dto/update-participacion_deporte.dto';

@Injectable()
export class ParticipacionDeporteService {
  create(createParticipacionDeporteDto: CreateParticipacionDeporteDto) {
    return 'This action adds a new participacionDeporte';
  }

  findAll() {
    return `This action returns all participacionDeporte`;
  }

  findOne(id: number) {
    return `This action returns a #${id} participacionDeporte`;
  }

  update(id: number, updateParticipacionDeporteDto: UpdateParticipacionDeporteDto) {
    return `This action updates a #${id} participacionDeporte`;
  }

  remove(id: number) {
    return `This action removes a #${id} participacionDeporte`;
  }
}
