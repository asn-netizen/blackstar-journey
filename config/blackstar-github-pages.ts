function normalizeBlackstarBasePath(configuredBasePath: string): string {
  if (configuredBasePath === "/") {
    return "";
  }

  return configuredBasePath.startsWith("/")
    ? configuredBasePath
    : `/${configuredBasePath}`;
}

export function isBlackstarGitHubPagesBuild(): boolean {
  return process.env.GITHUB_PAGES === "true";
}

export function resolveBlackstarGitHubPagesBasePath(): string {
  const githubRepositoryName =
    process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
  const isGitHubAccountPagesRepository = githubRepositoryName
    .toLowerCase()
    .endsWith(".github.io");
  const configuredBlackstarBasePath = process.env.SITE_BASE_PATH?.trim();

  if (configuredBlackstarBasePath) {
    return normalizeBlackstarBasePath(configuredBlackstarBasePath);
  }

  return githubRepositoryName && !isGitHubAccountPagesRepository
    ? `/${githubRepositoryName}`
    : "";
}

export function resolveBlackstarAssetBasePath(): string {
  return isBlackstarGitHubPagesBuild()
    ? resolveBlackstarGitHubPagesBasePath()
    : "";
}
