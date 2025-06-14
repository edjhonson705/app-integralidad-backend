import {
    IsDateString,
    IsNotEmpty,
    IsString,
} from 'class-validator';

/**
 * 
 */
export class CreateParticipacionDeporteDto {

    @IsString()
    @IsNotEmpty()
    nombre_numero_deportivo: string;

    @IsString()
    @IsNotEmpty()
    categoria_deportiva: string;

    @IsString()
    @IsNotEmpty()
    resultado: string;

    @IsDateString()
    @IsNotEmpty()
    fecha: Date;

    @IsString()
    @IsNotEmpty()
    curso: string;
}
