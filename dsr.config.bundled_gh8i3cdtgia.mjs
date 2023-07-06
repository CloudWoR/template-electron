// dsr.config.ts
import { defineConfig } from "@doubleshot/runner";
var dsr_config_default = defineConfig({
  run: [
    {
      cwd: "packages/renderer",
      name: "renderer",
      prefixColor: "cyan",
      commands: {
        dev: "pnpm dev",
        build: "pnpm build"
      }
    },
    {
      cwd: "packages/electron",
      name: "electron",
      prefixColor: "blue",
      commands: {
        dev: "pnpm dev",
        build: "pnpm build"
      }
    }
  ]
});
export {
  dsr_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZHNyLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFxwcm9qZWN0XFxcXFx1NTNDMlx1ODAwM1x1OTg3OVx1NzZFRVxcXFxub2RlanNcXFxcdGVtcGxhdGUtZWxlY3Ryb24wMlxcXFxkc3IuY29uZmlnLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkQ6XFxcXHByb2plY3RcXFxcXHU1M0MyXHU4MDAzXHU5ODc5XHU3NkVFXFxcXG5vZGVqc1xcXFx0ZW1wbGF0ZS1lbGVjdHJvbjAyXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9wcm9qZWN0LyVFNSU4RiU4MiVFOCU4MCU4MyVFOSVBMSVCOSVFNyU5QiVBRS9ub2RlanMvdGVtcGxhdGUtZWxlY3Ryb24wMi9kc3IuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAnQGRvdWJsZXNob3QvcnVubmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcnVuOiBbXHJcbiAgICB7XHJcbiAgICAgIGN3ZDogJ3BhY2thZ2VzL3JlbmRlcmVyJyxcclxuICAgICAgbmFtZTogJ3JlbmRlcmVyJyxcclxuICAgICAgcHJlZml4Q29sb3I6ICdjeWFuJyxcclxuICAgICAgY29tbWFuZHM6IHtcclxuICAgICAgICBkZXY6ICdwbnBtIGRldicsXHJcbiAgICAgICAgYnVpbGQ6ICdwbnBtIGJ1aWxkJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY3dkOiAncGFja2FnZXMvZWxlY3Ryb24nLFxyXG4gICAgICBuYW1lOiAnZWxlY3Ryb24nLFxyXG4gICAgICBwcmVmaXhDb2xvcjogJ2JsdWUnLFxyXG4gICAgICBjb21tYW5kczoge1xyXG4gICAgICAgIGRldjogJ3BucG0gZGV2JyxcclxuICAgICAgICBidWlsZDogJ3BucG0gYnVpbGQnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLG9CQUFvQjtBQUVqVixJQUFPLHFCQUFRLGFBQWE7QUFBQSxFQUMxQixLQUFLO0FBQUEsSUFDSDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
