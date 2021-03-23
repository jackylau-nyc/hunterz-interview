const hostname = "127.0.0.1";
const port = 5000;
import server from "./route.js"; // imports the routing file
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
