import * as path from "path";

import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// @ts-ignore
export default ({ mode })=>{
    process.env = {...process.env, ...loadEnv(mode, path.resolve(".."))};
    console.log()
    return defineConfig({
        plugins: [react()],
        preview: {
            port:  parseInt(process.env.VITE_CLIENT_PORT!),
            strictPort: true,
        },
        server: {
            watch: {
                usePolling: true,
            },
            port:  parseInt(process.env.VITE_CLIENT_PORT!),
            strictPort: true,
            host: true,
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        }
    })
}
