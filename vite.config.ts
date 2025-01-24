import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // Ajoute un fichier d'entrée `index.d.ts` pour les types
      outDir: "dist", // Répertoire de sortie pour les types
      rollupTypes: false, // Désactive la génération de types par Rollup
      compilerOptions: {
        declarationMap: false, // Ne pas générer de cartes de déclaration
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "",
      },
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "DataTable", // Nom de votre bibliothèque (global)
      fileName: (format) => `datatable.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
