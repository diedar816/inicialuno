// Hacemos que esta clase se pueda inyectar como servicio en otros componentes
import { Injectable } from '@nestjs/common';

// Permite inyectar repositorios de TypeORM en el constructor
import { InjectRepository } from '@nestjs/typeorm';

// Repositorio genérico que nos da acceso a métodos como find(), save(), delete(), etc.
import { Repository } from 'typeorm';

// Importamos la entidad que representa la tabla "persona" en la base de datos
import { Persona } from './persona.entity';

@Injectable()
export class PersonaService {
  // Inyectamos el repositorio de la entidad Persona
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>, // Este repositorio maneja todas las operaciones CRUD
  ) {}

  /**
   * Crear una nueva persona.
   * Por ahora, usamos `any` como tipo de dato, pero luego lo reemplazaremos por un DTO.
   * Devuelve una promesa que resuelve en el objeto Persona guardado.
   */
  create(data: Partial<Persona>): Promise<Persona> {
    // Validación para evitar que se envíe un arreglo de personas
    if (Array.isArray(data)) {
      throw new Error('Solo se permite crear una persona a la vez.');
    }
  
    const persona = this.personaRepository.create(data);
    return this.personaRepository.save(persona);
  }
  

  /**
   * Obtener todas las personas de la base de datos.
   * Devuelve una promesa que resuelve en un arreglo de objetos Persona.
   */
  findAll(): Promise<Persona[]> {
    return this.personaRepository.find(); // SELECT * FROM persona
  }

  /**
   * Buscar una persona por su ID.
   * Devuelve una promesa que resuelve en Persona o null si no existe.
   */
  findOne(id: number): Promise<Persona | null> {
    return this.personaRepository.findOneBy({ id }); // SELECT * FROM persona WHERE id = ...
  }

  /**
   * Actualizar una persona por ID con los datos proporcionados.
   * No devuelve nada, solo realiza la operación.
   */
  async update(id: number, updateData: any): Promise<void> {
    await this.personaRepository.update(id, updateData); // UPDATE persona SET ... WHERE id = ...
  }

  /**
   * Eliminar una persona por ID.
   * No devuelve nada, solo realiza la operación.
   */
  async remove(id: number): Promise<void> {
    await this.personaRepository.delete(id); // DELETE FROM persona WHERE id = ...
  }
}
