import { Controller, Post, Body, Get, Put } from '@nestjs/common';
import { MensajesDto } from './dto/mensajes-dto';

@Controller('mensajes')
export class MensajesController {
  @Post()
  create(@Body() createMensajeDto: MensajesDto) {
    return 'mensaje creado';
  }
  
  @Get()
  getAll(){

  }

  @Put(':id')
  updte(@Body() updateMensajeDto:MensajesDto){
      
  }
}
