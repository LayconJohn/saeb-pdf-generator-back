import { Injectable } from '@nestjs/common';
import { CreatePdfGeneratorDto } from './dto/create-pdf-generator.dto';
import { AxiosService } from 'src/axios/axios.service';
import * as PDFDocument from "pdfkit"
import * as fs from 'fs';

@Injectable()
export class PdfGeneratorService {
  constructor(private readonly axiosService: AxiosService){}

  async create({token, xChannel, code}: CreatePdfGeneratorDto) {
    const response = await this.axiosService.getServiceCharter({token, xChannel, code});
    const { data } = response

    const doc = new PDFDocument({ bufferPages: true });

    doc.fontSize(16).font('./public/Roboto-Black.ttf').text('Sobre');
    doc.fontSize(12).font('./public/Roboto-Regular.ttf').text(`${data.nome}`);

    doc.fontSize(16).font('./public/Roboto-Black.ttf').text("Documentos Necessários")
    doc.fontSize(12).font('./public/Roboto-Regular.ttf').text(`${data.documentacaoSAC}`)

    doc.fontSize(16).font('./public/Roboto-Black.ttf').text("Observações")
    doc.fontSize(12).font('./public/Roboto-Regular.ttf').text(`${data.observacoes}`)

    doc.fontSize(16).font('./public/Roboto-Black.ttf').text("Taxas")
    doc.fontSize(12).font('./public/Roboto-Regular.ttf').text(`${data.valorTaxa}`)

    doc.end();

    doc.pipe(
      fs.createWriteStream(`files/${data.codigo}.pdf`),
    );

    return data
  }
}
