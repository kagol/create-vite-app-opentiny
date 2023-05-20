import { createApp } from "vue";
import { setupRouter } from "@/router";
import TinyVue from "@opentiny/vue";
import {
  setupCustomComponents,
  setupGlobalMethods,
  setupDirectives,
  setupAssets,
} from "@/plugins";
import App from "./App.vue";

import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { tinySmbTheme } from '@opentiny/vue-theme/theme' // 极客黑主题
console.log('tinySmbTheme', tinySmbTheme);

const theme = new TinyThemeTool(tinySmbTheme, 'tinyStyleSheetId') // 初始化极客黑主题
console.log('theme', theme);

async function bootStrap() {
  // 设置样式加载
  setupAssets();
  // 创建vue
  const app = createApp(App);
  app.use(TinyVue);
  // 全局加载

  // 注册全局常用的 组件
  setupCustomComponents(app);

  // 注册全局方法
  setupGlobalMethods(app);

  // 注册全局自定义指令
  setupDirectives(app);

  // 挂载状态管理

  // 挂载路由
  await setupRouter(app);

  app.mount("#app");
}
bootStrap();
