export class CreateProductDto {
  @IsString()
  name: string;
  pricing: number;
}
