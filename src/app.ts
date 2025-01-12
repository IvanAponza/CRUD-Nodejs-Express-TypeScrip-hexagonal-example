import { envs } from "./config/anvs";
import { AppRoutes } from "./routes";
import { Server } from "./server";


(async() => {
    main();
})();


async function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  })
  server.start()
}