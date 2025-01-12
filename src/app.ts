import { envs } from "./config/anvs";
import { Server } from "./server";


(async() => {
    main();
})();


async function main() {
  const server = new Server({
    port: envs.PORT,
  })
  server.start()
}