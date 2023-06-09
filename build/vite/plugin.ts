import type { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";

export function createVitePlugins(viteEnv, isDev: boolean) {
  const vitePlugins: Plugin | Plugin[] = [
    vue({
      reactivityTransform: true,
    }),
  ];
  return vitePlugins;
}
