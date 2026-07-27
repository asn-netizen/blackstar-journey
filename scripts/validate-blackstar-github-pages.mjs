import { access, readFile } from "node:fs/promises";
import path from "node:path";

const BLACKSTAR_REQUIRED_EXPORT_FILES = [
  "index.html",
  "about/index.html",
  "journal/index.html",
  "chapters/index.html",
  "projects/index.html",
  "contact/index.html",
  ".nojekyll",
];

const blackstarExportDirectory = path.resolve("out");
const missingBlackstarExportFiles = [];

for (const requiredFilePath of BLACKSTAR_REQUIRED_EXPORT_FILES) {
  try {
    await access(path.join(blackstarExportDirectory, requiredFilePath));
  } catch {
    missingBlackstarExportFiles.push(requiredFilePath);
  }
}

if (missingBlackstarExportFiles.length > 0) {
  console.error(
    `Missing Blackstar GitHub Pages files: ${missingBlackstarExportFiles.join(", ")}`,
  );
  process.exit(1);
}

const BLACKSTAR_PAGE_CONTENT_CHECKS = new Map([
  ["index.html", "Start your journey"],
  ["about/index.html", "Come closer"],
  ["journal/index.html", "Stay a while"],
  ["chapters/index.html", "Every place"],
  ["projects/index.html", "An idea becomes real"],
  ["contact/index.html", "We’ve talked enough"],
]);
const missingBlackstarPageText = [];

for (const [
  blackstarPagePath,
  expectedBlackstarPageText,
] of BLACKSTAR_PAGE_CONTENT_CHECKS) {
  const blackstarPageHtml = await readFile(
    path.join(blackstarExportDirectory, blackstarPagePath),
    "utf8",
  );
  if (!blackstarPageHtml.includes(expectedBlackstarPageText)) {
    missingBlackstarPageText.push(
      `${blackstarPagePath}: ${expectedBlackstarPageText}`,
    );
  }
}

if (missingBlackstarPageText.length > 0) {
  console.error(
    `Generated Blackstar pages are missing expected text: ${missingBlackstarPageText.join(", ")}`,
  );
  process.exit(1);
}

console.log("GitHub Pages build verified: all six pages and required assets are ready.");
