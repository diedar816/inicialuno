import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { Persona } from './persona/persona.entity'; // <- Esta línea corrige el error

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root', // Ajusta esto
      password: '', // Ajusta esto
      database: 'personas', // Asegúrate de que esta base exista
      entities: [Persona], // <- Aquí usamos Persona, así que debe estar importada
      synchronize: true,
    }),
    PersonaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



