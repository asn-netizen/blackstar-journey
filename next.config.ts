import type { NextConfig } from "next";
import {
  isBlackstarGitHubPagesBuild,
  resolveBlackstarGitHubPagesBasePath,
} from "./config/blackstar-github-pages";

const blackstarGitHubPagesBasePath =
  resolveBlackstarGitHubPagesBasePath();

const blackstarNextConfiguration: NextConfig = isBlackstarGitHubPagesBuild()
  ? {
      output: "export",
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
      basePath: blackstarGitHubPagesBasePath,
      assetPrefix: blackstarGitHubPagesBasePath || undefined,
    }
  : {};

export default blackstarNextConfiguration;
