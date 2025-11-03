import { serve } from "bun";
import {Board} from "./BoardLib/board.ts"
import { idAbsent, idPresent } from "./BoardLib/helpers.ts";

import index from "./index.html";
import err from "./err.html";



var boards:Board[] = []

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/" : index,

    "/api/board/:id": {
      async GET(req) {
        console.log(req)
      const id = req.params.id;
      if (idAbsent( id, boards)){ // non existent id
          return Response.json({
          message: "Requested board does not exist. Try creating it!",
          method: "GET",
        }, {status: 404});
      }
      else{
        return Response.json({message:req.params.id}, {status:200})
      }

      },
      async POST(req) {
      const id = req.params.id;
      if (idPresent(id, boards)){ // non existent id
          return Response.json({
            message: "Requested board already exists! Try joining it!",
            method: "POST",
        }, {status: 409});
      }
      else{
        boards.push(new Board(id))
        return Response.json({
          message: " Created",
        }, {status: 201})
      }
    }
    },

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    // let react handle this... ping the server and kick the user out of non existent boards.
    "/board/:id" :index,
    // "404" page
    "/*":err
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
