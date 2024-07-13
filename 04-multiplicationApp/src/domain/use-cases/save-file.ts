import fs from 'fs';

export interface ISaveFileUseCase {
    save: (options: IOptions) => boolean;
}

export interface IOptions {
    fileContent     : string;
    fileDestination?: string;
    fileName       ?: string
}

export class SaveFile implements ISaveFileUseCase {

    save({ fileContent, fileDestination = "ouputs/", fileName = "table" }: IOptions): boolean {

        try {
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true;
            
        } catch (error) {
            // console.error(error);
            return false;
        }
    };

}