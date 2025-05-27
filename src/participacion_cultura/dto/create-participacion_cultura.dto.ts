import {
    IsEnum,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateParticipacionCulturaDto {

    @IsString()
    @IsNotEmpty()
    nombre_numero_cultural: string;

    @IsString()
    @IsNotEmpty()
    categoria_cultural: string;

    @IsString()
    @IsNotEmpty()
    resultado: string;
}
