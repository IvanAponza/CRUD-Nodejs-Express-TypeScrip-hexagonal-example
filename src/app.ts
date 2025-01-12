import { Server } from "./server";


(async() => {
    main();
})();


async function main() {
  new Server().start()
}