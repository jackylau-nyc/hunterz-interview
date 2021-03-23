import fs from "fs";
import querystring from "querystring";
import { exec } from "child_process";
import util from "util";
let exec_prom = util.promisify(exec);

export function getSearchResult(req, res) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };
  let linkedInURL = Object.values(querystring.parse(req.url));
  exec_prom("node crawler/googleCrawler/index.js " + linkedInURL[0]).then(
    () => {
      try {
        res.writeHead(200, headers);
        res.write(writeImage());
        res.end();
      } catch (e) {
        res.writeHead(500);
        res.end();
      }
    }
  );
}

export function listenForOpening(req, res) {
  const headers = {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };

  exec_prom("node crawler/appointmentCrawler/index.js").then(
    ({ stdout, stderr }) => {
      try {
        res.writeHead(200, headers);
        let output = JSON.stringify({
          stdout: stdout.replaceAll(new RegExp("[[]\n]"), ""),
        });
        res.write(output);
        res.end();
      } catch (e) {
        res.writeHead(500);
        res.end(stderr);
      }
    }
  );
}

function writeImage() {
  let stream =
    "data:image/png;base64," +
    fs.readFileSync("./images/screenshot.png", {
      encoding: "base64",
    });
  return JSON.stringify({ image: stream });
}
