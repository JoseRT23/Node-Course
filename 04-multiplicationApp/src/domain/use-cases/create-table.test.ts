import { CreateTable } from './create-table';

describe('CreateTableUseCase', () => { 

    test('should create table with default values', () => {

        const createTable = new CreateTable();
        const table = createTable.create({ base: 2 });
        const rows = table.split('\n').length;
    
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2');
        expect(table).toContain('2 x 10 = 20');
        expect(rows).toBe(10);
    });

    test('should create table with custom valuest', () => {

        const createTable = new CreateTable();
        const options = {
            base: 4,
            limit: 20
        }

        const table = createTable.create(options);
        const rows = table.split('\n').length;

        expect(table).toContain('4 x 1 = 4');
        expect(table).toContain('4 x 10 = 40');
        expect(table).toContain('4 x 20 = 80');

        expect(rows).toBe(options.limit);
    });
});