/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    webpack(config) {
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        )
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dl2.apexteam.net',
                port: '',
                pathname: '/apexteamWeb/**',
            },
        ],
    },
};

export default nextConfig;
