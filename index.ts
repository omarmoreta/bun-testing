import figlet from "figlet";
import index from "./index.html";

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": index,
    "/404": () => {
      const body = figlet.textSync("404 Not Found");
      return new Response(body, { status: 404 });
    },
    "/figlet": () => {
      const body = figlet.textSync("Bun!");
      return new Response(body);
    },
    "/*": () => Response.redirect("/404"),
  },
});

console.log(`Listening on ${server.url}`);
