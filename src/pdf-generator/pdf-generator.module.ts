import { Module } from '@nestjs/common';
import { PdfGeneratorService } from './pdf-generator.service';
import { PdfGeneratorController } from './pdf-generator.controller';
import { AxiosService } from 'src/axios/axios.service';

@Module({
  controllers: [PdfGeneratorController],
  providers: [PdfGeneratorService, AxiosService]
})
export class PdfGeneratorModule {}
