import { Injectable } from '@nestjs/common';
import axios from "axios"
import { CreatePdfGeneratorDto } from 'src/pdf-generator/dto/create-pdf-generator.dto';

@Injectable()
export class AxiosService {
    private URL_SAC() {
        return "https://servicosaocidadao.ba.gov.br/api/conteudo/v1/catalogo/servicos"
    }

    getServiceCharter({token, xChannel, code}: CreatePdfGeneratorDto) {

        const optionsRequest = {
            method: "GET",
            url: `${this.URL_SAC()}/${code}`,
            headers: {
                "x-canal": xChannel,
                "Authorization": `Bearer ${token}`
            }
        };
    
        return axios.request(optionsRequest)
    }
}


