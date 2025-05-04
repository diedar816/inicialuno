// Definimos los datos que necesitamos para crear una persona
import { IsString, IsNotEmpty, IsEmail } from 'class-validator'; // Validaciones de class-validator

export class CreatePersonaDto {
  @IsString() // Validamos que sea una cadena de texto
  @IsNotEmpty() // Validamos que no esté vacío
  nombre: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsEmail() // Validamos que sea un correo electrónico válido
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  cargo: string;

  @IsString()
  @IsNotEmpty()
  ubicacion: string;
}
