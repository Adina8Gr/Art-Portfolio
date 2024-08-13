/* eslint-disable prettier/prettier */
//app.module.ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PortfolioModule } from './portfolio/portfolio.module'; // asigură-te că aceste module sunt corect importate
import { FilesModule } from './files/files.module'; // ajustați căile în funcție de structura proiectului

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // asigură-te că directorul 'uploads' este în locația corectă
      serveRoot: '/uploads/', // ruta sub care fișierele vor fi accesibile
    }),
    PortfolioModule, // modulele pe care le folosești deja
    FilesModule, // modulele pe care le folosești deja
    // adaugă alte module dacă mai ai
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

