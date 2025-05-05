// Importamos los decoradores necesarios para manejar las rutas HTTP
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// Importamos el servicio que contiene la lógica de negocio para las personas
import { PersonaService } from './persona.service';

// Importamos la entidad Persona, que es nuestro tipo de dato
import { Persona } from './persona.entity';

// Definimos el controlador con la ruta base '/persona'
@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {} // Inyectamos el servicio de Persona

  /**
   * GET /persona
   * Este método maneja la petición GET para obtener todas las personas
   */
  @Get()
  findAll(): Promise<Persona[]> {
    // Llamamos al servicio para obtener todas las personas
    return this.personaService.findAll();
  }

  /**
   * GET /persona/:id
   * Este método maneja la petición GET para obtener una persona por su ID
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Persona | null> {
    // Llamamos al servicio con el ID de la persona y lo convertimos a número
    return this.personaService.findOne(+id);
  }

  /**
   * POST /persona
   * Este método maneja la petición POST para crear una nueva persona
   */
  @Post()
  create(@Body() data: any): Promise<Persona> {
    // Llamamos al servicio para crear la nueva persona con los datos proporcionados
    return this.personaService.create(data);
  }

  /**
   * PATCH /persona/:id
   * Este método maneja la petición PATCH para actualizar una persona existente por su ID
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: any): Promise<void> {
    // Llamamos al servicio para actualizar los datos de la persona por su ID
    return this.personaService.update(+id, updateData);
  }

  /**
   * DELETE /persona/:id
   * Este método maneja la petición DELETE para eliminar una persona por su ID
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    // Llamamos al servicio para eliminar una persona por su ID
    return this.personaService.remove(+id);
  }
}
