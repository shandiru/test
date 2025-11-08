// preRenderRoutes.js
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const routes = [
  "/",
  "/Earwaxremovalpage",
  "/symptoms",
  "/terms-conditions",
  "/privacy-policy",
  "/earwax-removal-nottingham"
];

console.log("🧭 Building static HTML pages...");

routes.forEach((route) => {
  const safeRoute = route === "/" ? "index" : route.replace(/\//g, "_");
  const outputDir = path.join("dist", safeRoute);
  fs.mkdirSync(outputDir, { recursive: true });

  const html = fs.readFileSync("dist/index.html", "utf8");
  fs.writeFileSync(path.join(outputDir, "index.html"), html);
});

console.log("✅ Static HTML placeholders created successfully!");
