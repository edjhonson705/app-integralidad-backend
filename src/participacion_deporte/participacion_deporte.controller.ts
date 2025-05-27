import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipacionDeporteService } from './participacion_deporte.service';
import { CreateParticipacionDeporteDto } from './dto/create-participacion_deporte.dto';
import { UpdateParticipacionDeporteDto } from './dto/update-participacion_deporte.dto';

@Controller('participacion-deporte')
export class ParticipacionDeporteController {
  constructor(private readonly participacionDeporteService: ParticipacionDeporteService) {}

  @Post()
  create(@Body() createParticipacionDeporteDto: CreateParticipacionDeporteDto) {
    return this.participacionDeporteService.create(createParticipacionDeporteDto);
  }

  @Get()
  findAll() {
    return this.participacionDeporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participacionDeporteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticipacionDeporteDto: UpdateParticipacionDeporteDto) {
    return this.participacionDeporteService.update(+id, updateParticipacionDeporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participacionDeporteService.remove(+id);
  }
}
