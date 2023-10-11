import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfGeneratorModule } from './pdf-generator/pdf-generator.module';
import { AxiosModule } from './axios/axios.module';

@Module({
  imports: [PdfGeneratorModule, AxiosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
