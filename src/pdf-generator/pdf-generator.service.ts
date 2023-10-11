import { Injectable } from '@nestjs/common';
import { CreatePdfGeneratorDto } from './dto/create-pdf-generator.dto';
import { AxiosService } from 'src/axios/axios.service';

@Injectable()
export class PdfGeneratorService {
  constructor(private readonly axiosService: AxiosService){}

  async create({token, xChannel, code}: CreatePdfGeneratorDto) {
    return await this.axiosService.getServiceCharter({token, xChannel, code});
  }
}
