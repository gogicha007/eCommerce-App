import path from "path";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, "./src/index.ts"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            modules: {
                                localIdentName: "[local]--[hash:base64:5]",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: "asset",
            },
        ],
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // favicon: "./src/assets/favicon.ico",
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
        }),
        // new CleanWebpackPlugin(),
    ],
};

export  default async ({ mode }) => {
    const isProductionMode = mode === "prod";
    const envConfig = isProductionMode
        ? await import("./webpack.prod.config.js")
        : await import("./webpack.dev.config.js");

    return merge(baseConfig, envConfig);
};