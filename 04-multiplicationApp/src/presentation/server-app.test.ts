import { CreateTable } from '../domain/use-cases/create-table';
import { SaveFile } from '../domain/use-cases/save-file';
import { Server } from './server-app';

describe('Server App', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        name: 'test-destination',
        destination: 'test-filename',
    }

    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('should be create server app instance', () => {

        const serverApp = new Server();

        expect(serverApp).toBeInstanceOf(Server);
        expect(typeof Server.run).toBe('function');
    });

    test('should run server with options', () => {

        //spy mock in console.log and other own functions
        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'create');
        const saveTableSpy = jest.spyOn(SaveFile.prototype, 'save');
        
        Server.run(options);

        expect(logSpy).toHaveBeenCalledWith('Server running...');
        expect(logSpy).toHaveBeenLastCalledWith('File created!');

        expect(createTableSpy).toHaveBeenCalledTimes(1);
        expect(createTableSpy).toHaveBeenCalledWith({'base': options.base, 'limit': options.limit});
        
        expect(createTableSpy).toHaveBeenCalledTimes(1);

    });

    test('should run with custom values mocked', () => {
        const logMock = jest.fn();
        const errorLogMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);

        console.log = logMock;
        console.error = errorLogMock;
        CreateTable.prototype.create = createMock;
        SaveFile.prototype.save = saveFileMock;

        Server.run(options);

        expect(logMock).toHaveBeenCalledWith('Server running...');
        expect(createMock).toHaveBeenCalledWith({'base': options.base, 'limit': options.limit});
        expect( saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            fileDestination: options.destination,
            fileName: options.name,
        });
        expect(logMock).toHaveBeenCalledWith('File created!');
        expect(errorLogMock).not.toHaveBeenCalled();

    });

});