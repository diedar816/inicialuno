// Importamos los decoradores necesarios desde TypeORM
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Indicamos que esta clase es una entidad de base de datos (una tabla)
@Entity()
export class Persona {

  // Esta columna será la clave primaria y se generará automáticamente (autoincremental)
  @PrimaryGeneratedColumn()
  id: number;

  // Columna de texto para el nombre de la persona
  @Column()
  nombre: string;

  // Columna de texto para el número de teléfono
  @Column()
  telefono: string;

  // Columna de texto para el correo electrónico
  @Column()
  correo: string;

  // Columna de texto para el cargo de la persona en la empresa
  @Column()
  cargo: string;

  // Columna de texto para la ubicación de la persona dentro de la empresa
  @Column()
  ubicacion: string;
}

