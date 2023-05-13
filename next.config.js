module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self' https://public.flourish.studio/ https://datawrapper.dwcdn.net/ https://flo.uri.sh/; script-src 'self' https://public.flourish.studio/ https://datawrapper.dwcdn.net/ https://flo.uri.sh/ 'unsafe-inline' 'unsafe-eval'; style-src 'self' https://public.flourish.studio/ https://datawrapper.dwcdn.net/ https://flo.uri.sh/ 'unsafe-inline';",
            },
          ],
        },
      ];
    },
  };
  