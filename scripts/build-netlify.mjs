import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = resolve(root, "site/index.html");
const outputDirectory = resolve(root, "out");
const output = resolve(outputDirectory, "index.html");
const fallbackCalendly = "https://calendly.com/tu-usuario/diagnostico";
const calendlyUrl = process.env.CALENDLY_URL || fallbackCalendly;

if (!/^https:\/\/calendly\.com\//.test(calendlyUrl)) {
  throw new Error("CALENDLY_URL debe comenzar con https://calendly.com/");
}

mkdirSync(outputDirectory, { recursive: true });
const html = readFileSync(source, "utf8").replaceAll(fallbackCalendly, calendlyUrl);
writeFileSync(output, html);

if (existsSync(resolve(root, "site/_redirects"))) {
  copyFileSync(resolve(root, "site/_redirects"), resolve(outputDirectory, "_redirects"));
}
