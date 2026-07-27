import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const blackstarModuleLoader = createRequire(import.meta.url);
const blackstarNextCommandPath = blackstarModuleLoader.resolve(
  "next/dist/bin/next",
);

const blackstarBuildResult = spawnSync(
  process.execPath,
  [blackstarNextCommandPath, "build"],
  {
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
  },
  stdio: "inherit",
  },
);

if (blackstarBuildResult.error) {
  console.error(blackstarBuildResult.error.message);
  process.exit(1);
}

process.exit(blackstarBuildResult.status ?? 1);
