/* eslint-disable prettier/prettier */
//app.module.ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PortfolioModule } from './portfolio/portfolio.module'; 
import { FilesModule } from './files/files.module'; 

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), 
      serveRoot: '/uploads/', 
    }),
    PortfolioModule, 
    FilesModule, 
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

