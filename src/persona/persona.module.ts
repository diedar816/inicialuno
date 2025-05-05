import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaService } from './persona.service'; // Importamos el servicio
import { PersonaController } from './persona.controller'; // Importamos el controlador
import { Persona } from './persona.entity'; // Importamos la entidad Persona

@Module({
  imports: [TypeOrmModule.forFeature([Persona])], // Registramos la entidad Persona en TypeORM
  controllers: [PersonaController], // Registramos el controlador de Persona
  providers: [PersonaService], // Registramos el servicio de Persona
})
export class PersonaModule {}
