// Definimos los datos que necesitamos para actualizar una persona
import { IsString, IsOptional, IsEmail } from 'class-validator'; // Validaciones de class-validator

export class UpdatePersonaDto {
  @IsString() // Validamos que sea una cadena de texto
  @IsOptional() // Este campo es opcional en la actualización
  nombre?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsEmail() // Validamos que sea un correo electrónico válido
  @IsOptional()
  correo?: string;

  @IsString()
  @IsOptional()
  cargo?: string;

  @IsString()
  @IsOptional()
  ubicacion?: string;
}
