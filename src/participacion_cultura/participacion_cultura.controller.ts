import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipacionCulturaService } from './participacion_cultura.service';
import { CreateParticipacionCulturaDto } from './dto/create-participacion_cultura.dto';
import { UpdateParticipacionCulturaDto } from './dto/update-participacion_cultura.dto';

@Controller('participacion-cultura')
export class ParticipacionCulturaController {
  constructor(private readonly participacionCulturaService: ParticipacionCulturaService) {}

  @Post()
  create(@Body() createParticipacionCulturaDto: CreateParticipacionCulturaDto) {
    return this.participacionCulturaService.create(createParticipacionCulturaDto);
  }

  @Get()
  findAll() {
    return this.participacionCulturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participacionCulturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticipacionCulturaDto: UpdateParticipacionCulturaDto) {
    return this.participacionCulturaService.update(+id, updateParticipacionCulturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participacionCulturaService.remove(+id);
  }
}
