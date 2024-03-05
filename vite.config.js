import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/react-vite-template/", // Замініть на ім'я вашого репо
    plugins: [react()],
});
