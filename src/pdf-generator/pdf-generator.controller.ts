import { Controller, Post, Body, Req, HttpCode, HttpException, HttpStatus, } from '@nestjs/common';
import { PdfGeneratorService } from './pdf-generator.service';
import { Request, Response } from '@nestjs/common';
import { PdfGenerator } from './entities/pdf-generator.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreatePdfGeneratorDto } from './dto/create-pdf-generator.dto';

@ApiTags('pdf-generator')
@Controller('pdf-generator')
export class PdfGeneratorController {
  constructor(private readonly pdfGeneratorService: PdfGeneratorService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Body() { code },
    @Req() req: Request
  ) {
    try {
      const xChannel = req.headers['x-canal'] 
      const token = req.headers['authorization']

      const createPdfGeneratorDto: CreatePdfGeneratorDto = {token: token.replace("Bearer ", ""), xChannel, code}
    
      const response = await (this.pdfGeneratorService.create(createPdfGeneratorDto))
      return response as PdfGenerator;
    } catch (error) {
      return new HttpException({
        status: error.response.statusText,
        error: error.message
      }, error.response.status)
    }
  }
}
