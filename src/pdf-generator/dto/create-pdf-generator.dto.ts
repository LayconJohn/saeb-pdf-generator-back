import { IsString } from "class-validator";

export class CreatePdfGeneratorDto {
    @IsString()
    code: string;

    @IsString()
    token: string;

    @IsString()
    xChannel: string;
}
