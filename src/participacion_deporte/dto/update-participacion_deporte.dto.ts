import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipacionDeporteDto } from './create-participacion_deporte.dto';

export class UpdateParticipacionDeporteDto extends PartialType(CreateParticipacionDeporteDto) {}
