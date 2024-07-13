import fs from 'fs';
import { SaveFile } from './save-file';

describe('SaveFileUseCase', () => {

    afterEach(() => {
        const ouputFolderExist = fs.existsSync('ouputs-test');
        if(ouputFolderExist) fs.rmSync('ouputs-test', { recursive: true });

        const customFolderExist = fs.existsSync('test-ouput')
        if(customFolderExist) fs.rmSync('test-ouput', { recursive: true });
    });

    test('should be save file with default values', () => {
        
        const saveFile = new SaveFile();
        const filePath = 'ouputs/table.txt';
        const options = {
            fileContent: 'test-content'
        }

        const result = saveFile.save(options);

        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
        
        expect(result).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });

    test('should save file with custom values', () => {

        const options = {
            fileContent: 'test content',
            fileDestination: 'test-ouput',
            fileName: 'custom-table-test'
        }

        const saveFile = new SaveFile();
        const filePath = `${options.fileDestination}/${options.fileName}.txt`;

        const result = saveFile.save(options);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        expect(result).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });

    test('should return false if directory could not be created', () => {
        
        const saveFile = new SaveFile();

        //crear spy mock en el file system
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('Custom error testing creting directory'); }
        );

        const result = saveFile.save({ fileContent: 'test content' });

        expect(result).toBe(false);
        
        mkdirSpy.mockRestore();
    });

    test('should return false if file could not be saved', () => {
        
        const saveFile = new SaveFile();

        //crear spy mock en el file system
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('Custom error testing file save'); }
        );

        const result = saveFile.save({ fileContent: 'test content' });

        expect(result).toBe(false);
        
        writeFileSpy.mockRestore();
    });
});