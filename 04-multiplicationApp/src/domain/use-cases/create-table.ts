export interface ICreateTableUseCase {
    create: (options: IOptions) => string;
}

export interface IOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements ICreateTableUseCase {
    constructor() {}

    create({ base, limit = 10 }: IOptions): string {
        let ouputMessage = "";
        for(let i = 1; i <= limit; i++) {
            ouputMessage += `${base} x ${i} = ${base*i}`;
            
            if(i < limit) ouputMessage += '\n';
        }


        return ouputMessage;
    }
}