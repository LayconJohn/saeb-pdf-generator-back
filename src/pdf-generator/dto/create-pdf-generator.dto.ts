import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePdfGeneratorDto {
    @ApiProperty({
        example: '4699',
        description: `Esse será o código do serviço. Será passado pelo body`,
    })
    @IsString()
    code: string;

    @ApiProperty({
        example: 'Bearer token123',
        description: `Será enviado para autorização da api do sac digital, será passado pelo header`,
    })
    @IsString()
    token: string;

    @ApiProperty({
        example: 'WhatsApp',
        description: `Será enviado para indicar o canal pelo header através do "x-canal"`,
    })
    @IsString()
    xChannel: string;
}
