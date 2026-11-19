type AssetsBinding = {
  fetch(input: Request | URL | string, init?: RequestInit): Promise<Response>;
};

export default {
  async fetch(request: Request, env: { ASSETS: AssetsBinding }): Promise<Response> {
    const url = new URL(request.url);

    // For direct file requests, let static assets handle it first.
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    // SPA-style fallback for extensionless routes.
    if (!url.pathname.includes(".")) {
      const indexRequest = new Request(new URL("/index.html", url), request);
      return env.ASSETS.fetch(indexRequest);
    }

    return assetResponse;
  },
};
