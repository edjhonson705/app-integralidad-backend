import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipacionCulturaDto } from './create-participacion_cultura.dto';

export class UpdateParticipacionCulturaDto extends PartialType(CreateParticipacionCulturaDto) {}
