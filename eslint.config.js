// @ts-check

import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  prettierConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/no-base-to-string": "off",
      "@typescript-eslint/restrict-template-expressions": "off",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],

      "no-duplicate-imports": "error",
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: true,
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
    },
  },

  {
    ignores: [
      "**/node_modules/**",
      "/.pnp",
      ".pnp.js",
      "/coverage",
      "/prisma/db.sqlite",
      "/prisma/db.sqlite-journal",
      "**/.next/**",
      "/out/",
      "next-env.d.ts",
      "**/build/**",
      "npm-debug.log*",
      "yarn-debug.log*",
      "yarn-error.log*",
      ".pnpm-debug.log*",
      "e2e.log*",
      ".env",
      ".env*.local",
      ".vercel",
      "*.tsbuildinfo",
      "pnpm-lock.yaml*",
      "yarn.lock*",
      "package-lock.json*",
      ".eslintcache",
      ".scannerwork/",
      "/test-results/",
      "/playwright-report/",
      "/blob-report/",
      "/playwright/.cache/",
      "/playwright/.auth",
      "*.swp",
      "*.swo",
      ".idea/",
      "*.txt",
      "*.md",
      "CODEOWNERS",
      ".DS_Store",
      "*.pem",
    ],
  },
);
