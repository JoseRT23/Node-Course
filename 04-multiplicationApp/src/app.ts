import { yarg } from "./config/plugins/yargs.plugin";
import { Server } from "./presentation/server-app";

(async () => {
    main();
})();

async function main() {
    const { b:base, l:limit, s:showTable, n:name, d: destination } = yarg;
    Server.run({ base, limit, showTable, name, destination });
}