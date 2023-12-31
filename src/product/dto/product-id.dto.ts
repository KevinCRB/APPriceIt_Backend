import { IsNumber, IsNotEmpty } from "class-validator";

export default class ProductIdResponseDto {
    @IsNumber()
    @IsNotEmpty()
    readonly product_id: number;
}