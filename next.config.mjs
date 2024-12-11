/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.reuters.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "thehill.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "sportshub.cbsistatic.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "ichef.bbci.co.uk",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "media.cnn.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.washingtonpost.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "nbcsports.brightspotcdn.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "gizmodo.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "image.cnbcfm.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "randomuser.me",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
