import { CreateTable } from "../domain/use-cases/create-table";
import { SaveFile } from "../domain/use-cases/save-file";

export interface IRunOptions {
    base       : number;
    limit      : number;
    showTable  : boolean;
    name       : string;
    destination: string
}

export class Server {

    static run({ base, limit, showTable, name, destination }: IRunOptions) {
        console.log("Server running...");

        const table = new CreateTable().create({ base, limit });

        const wasCreated = new SaveFile().save({ fileContent: table, fileName: name, fileDestination: destination });

        if(showTable) console.log(table);
        (wasCreated)
            ? console.log("File created!")
            : console.log("File not created!"); 
    }
}