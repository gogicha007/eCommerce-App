import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const mode = "development";
export const devtool = "inline-source-map";
export const devServer = {
    static: path.resolve(__dirname, "../dist"),
    historyApiFallback: true
};