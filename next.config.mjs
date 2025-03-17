import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.module.rules.push(
        {
          test: /\.md$/,
          type: 'asset/source',
        }
      )

      config.externals = [...config.externals, 'hnswlib-node']; 
      return config
    },
    env: {
      appTitle: 'OpenAI Chat Website',
      appName: 'openai-chat',
      appDescription: 'Description here',
      baseApiUrl: 'http://localhost:1337/api',
      OPENAI_API_KEY:'sk-xxxxxxxxx',
      PROJECT_ASSISTANT_ID: 'xxxxxxxxx',
      USER_PROFILE_ASSISTANT_ID: 'xxxxxxxxxxx'
    },
};

export default nextConfig;
