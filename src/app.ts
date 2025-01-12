import { envs } from "./config/anvs";
import { AppRoutes, Server } from "./presentation";


(async() => {
    main();
})();


async function main() {
   const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
   });
   server.start();
}