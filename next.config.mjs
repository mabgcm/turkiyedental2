// next.config.mjs
import createMDX from '@next/mdx';

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    images: {
        // harici görseller kullanacaksanız domain ekleyin
        // domains: ['cdn.example.com'],
    },
};

export default withMDX(nextConfig);
