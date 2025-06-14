import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiante')
export class EstudianteController {

  constructor(private readonly estudianteService: EstudianteService) { }

  /**
   * asignarParticipacionesCulturales
   * @param id 
   * @param body 
   * @returns 
   */
  @Post(':id/participaciones-culturales')
  async asignarParticipacionesCulturales(
    @Param('id') id: number,
    @Body() body: { participacionIds: number[] }
  ) {
    return this.estudianteService.asignarParticipacionesCulturales(id, body.participacionIds);
  }

  /**
   * asignarParticipacionesDeportivas
   * @param id 
   * @param body 
   * @returns 
   */
  @Post(':id/participaciones-deportivas')
  async asignarParticipacionesDeportivas(
    @Param('id') id: number,
    @Body() body: { participacionIds: number[] }
  ) {
    return this.estudianteService.asignarParticipacionesDeportivas(id, body.participacionIds);
  }

  /**
   * eliminarParticipacionesCulturales
   * @param id 
   * @param body 
   * @returns 
   */
  @Delete(':id/participaciones-culturales')
  async eliminarParticipacionesCulturales(
    @Param('id') id: number,
    @Body() body: { participacionId: number }
  ) {
    return this.estudianteService.eliminarParticipacionCultural(id, body.participacionId);
  }

  /**
   * eliminarParticipacionesDeportivas
   * @param id 
   * @param body 
   * @returns 
   */
  @Delete(':id/participaciones-deportivas')
  async eliminarParticipacionesDeportivas(
    @Param('id') id: number,
    @Body() body: { participacionId: number }
  ) {
    return this.estudianteService.eliminarParticipacionDeportiva(id, body.participacionId);
  }

  /**
   * getParticipacionesCulturales
   * @param id 
   * @returns 
   */
  @Get(':id/participaciones-culturales')
  async getParticipacionesCulturales(@Param('id') id: number) {
    return this.estudianteService.obtenerParticipacionesCulturales(id);
  }

  @Get(':id/participaciones-deportivas')
  async getParticipacionesDeportivas(@Param('id') id: number) {
    return this.estudianteService.obtenerParticipacionesDeportivas(id);
  }

  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteService.create(createEstudianteDto);
  }

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudianteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudianteService.update(+id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteService.remove(+id);
  }
}
