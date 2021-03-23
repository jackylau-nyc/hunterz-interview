import { createServer } from "http";
import { parse } from "url";
import { getSearchResult, listenForOpening } from "./controller.js";

export default createServer((req, res) => {
  const reqUrl = parse(req.url, true);
  // GET endpoint
  if (reqUrl.pathname == "/search" && req.method === "GET") {
    getSearchResult(req, res);
  }
  if (reqUrl.pathname == "/appcheck" && req.method === "GET") {
    listenForOpening(req, res);
  }
});
