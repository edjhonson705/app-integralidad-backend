import {
    IsEnum,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

/*const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;*/

export class CreateEstudianteDto {

    @IsString()
    @IsNotEmpty()
    anno_academico: string;

    @IsString()
    @IsNotEmpty()
    grupo: string;

    @IsString()
    @IsNotEmpty()
    primer_apellido: string;

    @IsString()
    segundo_apellido: string;

    @IsString()
    @IsNotEmpty()
    primer_nombre: string;

    @IsString()
    segundo_nombre: string;

    @IsString()
    @IsNotEmpty()
    via_ingreso: string;

    @IsString()
    @IsNotEmpty()
    situacion_escolar: string;

    @IsString()
    observaciones: string;

    @IsString()
    @IsEnum(['f', 'm', 'u'])
    sexo: string;
}
