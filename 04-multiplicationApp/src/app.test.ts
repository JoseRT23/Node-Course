import { Server } from "./presentation/server-app";

describe('Test app', () => {

    test('Should call server with values', async() => {
        
        const serverMock = jest.fn();
        Server.run = serverMock;

        process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-n', 'test-file', '-d', 'test-desc'];
        await import('./app');

        expect(serverMock).toHaveBeenCalledWith({
            base: 10,
            destination: "test-desc",
            limit: 5,
            name: "test-file",
            showTable: true,
        });
    });
});