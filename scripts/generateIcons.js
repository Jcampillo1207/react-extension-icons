const fs = require("fs");
const path = require("path");
const svgr = require("@svgr/core").default;
const camelCase = require("lodash.camelcase");
const fsExtra = require("fs-extra");

const variants = ["color", "single_color", "grayscale"];
const svgPath = path.join(__dirname, "../svg");
const iconsPath = path.join(__dirname, "../src/icons");
const componentsPath = path.join(__dirname, "../src/components");
const typesPath = path.join(__dirname, "../src/types");
const utilsPath = path.join(__dirname, "../src/utils");
const indexPath = path.join(__dirname, "../src/index.ts");
const getIconComponentPath = path.join(utilsPath, "getIconComponent.ts");
const typesFilePath = path.join(typesPath, "index.ts");
const iconComponentPath = path.join(componentsPath, "Icon.tsx");
const indexDtsPath = path.join(__dirname, "../dist/index.d.ts");

// Mapping for extensions with multiple variations
const extensionMapping = {
  ai: "ai",
  avi: "avi",
  bmp: "bmp",
  crd: "crd",
  csv: "csv",
  dll: "dll",
  doc: "doc",
  docx: "doc",
  dwg: "dwg",
  dxf: "dwg",
  eps: "eps",
  exe: "exe",
  flv: "flv",
  gif: "gif",
  html: "html",
  htm: "html",
  iso: "iso",
  java: "java",
  jar: "java",
  jpg: "jpg",
  jpeg: "jpg",
  jpe: "jpg",
  jif: "jpg",
  jfif: "jpg",
  jfi: "jpg",
  mdb: "mdb",
  mid: "mid",
  midi: "mid",
  mov: "mov",
  qt: "mov",
  mp3: "mp3",
  mp4: "mp4",
  m4a: "mp4",
  m4p: "mp4",
  mpeg: "mpeg",
  mpg: "mpeg",
  mp2: "mpeg",
  mpe: "mpeg",
  mpv: "mpeg",
  pdf: "pdf",
  png: "png",
  ppt: "ppt",
  pptx: "ppt",
  pps: "ppt",
  ppsx: "ppt",
  potx: "ppt",
  potm: "ppt",
  ppsm: "ppt",
  ppam: "ppt",
  sldx: "ppt",
  sldm: "ppt",
  ps: "ps",
  psd: "psd",
  pub: "pub",
  rar: "rar",
  raw: "raw",
  rss: "rss",
  svg: "svg",
  tiff: "tiff",
  tif: "tiff",
  txt: "txt",
  wav: "wav",
  wma: "wma",
  wmv: "wma",
  xml: "xml",
  xsl: "xsl",
  zip: "zip",
  xlsx: "xls",
  xls: "xls",
  xlt: "xls",
  xlm: "xls",
  xla: "xls",
  xlc: "xls",
  xlw: "xls",
  xll: "xls",
  xlb: "xls",
};

// Ensure all necessary directories exist
const ensureDirectoriesExist = () => {
  const directories = [
    svgPath,
    iconsPath,
    componentsPath,
    typesPath,
    utilsPath,
    ...variants.map((variant) => path.join(svgPath, variant)),
    ...variants.map((variant) => path.join(iconsPath, variant)),
  ];

  directories.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const generateComponentName = (fileName, variant) => {
  const name = fileName.replace(".svg", "");
  return `${capitalize(camelCase(name))}Icon${capitalize(camelCase(variant))}`;
};

const generateReactComponent = async (filePath, componentName, variant) => {
  const svgCode = fs.readFileSync(filePath, "utf-8");
  const tsCode = await svgr(
    svgCode,
    {
      typescript: true,
      icon: true,
      replaceAttrValues:
        variant === "single_color"
          ? {
              "#5659E9": '{props.color || "#4690FF"}',
              currentColor: '{props.color || "currentColor"}',
            }
          : undefined,
    },
    { componentName }
  );
  return tsCode;
};

const generateIcons = async () => {
  const icons = {
    color: [],
    single_color: [],
    grayscale: [],
  };

  for (const variant of variants) {
    const variantPath = path.join(svgPath, variant);
    const files = fs
      .readdirSync(variantPath)
      .filter((file) => file.endsWith(".svg"));

    for (const file of files) {
      const componentName = generateComponentName(file, variant);
      const componentCode = await generateReactComponent(
        path.join(variantPath, file),
        componentName,
        variant
      );
      const componentPath = path.join(
        iconsPath,
        variant,
        `${componentName}.tsx`
      );

      fs.writeFileSync(componentPath, componentCode);
      icons[variant].push(componentName);
    }
  }

  return icons;
};

const generateIndexFile = (icons) => {
  let content =
    "export { default as Icon } from './components/Icon';\nexport type { IconProps, Variant } from './types';\n\n";

  for (const variant in icons) {
    for (const icon of icons[variant]) {
      content += `export { default as ${icon} } from './icons/${variant}/${icon}';\n`;
    }
  }

  fs.writeFileSync(indexPath, content);
};

const generateGetIconComponentFile = (icons) => {
  let content = `import { Variant } from '../types';\n\n`;

  const iconNames = new Set();
  for (const variant in icons) {
    for (const icon of icons[variant]) {
      const iconName = icon
        .replace("IconColor", "")
        .replace("IconSingleColor", "")
        .replace("IconGrayscale", "")
        .toLowerCase();
      iconNames.add(iconName);
    }
  }

  content += `const extensionMapping: { [key: string]: string } = ${JSON.stringify(
    extensionMapping,
    null,
    2
  )};\n\n`;
  content += `const icons: { [key: string]: { [key in Variant]?: React.ComponentType<React.SVGProps<SVGSVGElement> & { color?: string }> } } = {\n`;

  for (const iconName of iconNames) {
    content += `  '${iconName}': {\n`;
    for (const variant of variants) {
      const iconComponent = icons[variant].find((icon) =>
        icon.toLowerCase().includes(iconName)
      );
      if (iconComponent) {
        content += `    ${variant}: require('../icons/${variant}/${iconComponent}').default,\n`;
      }
    }
    content += "  },\n";
  }

  content +=
    "};\n\nexport const getIconComponent = (extension: string, variant: Variant = 'color'): React.ComponentType<React.SVGProps<SVGSVGElement> & { color?: string }> | null => {\n";
  content +=
    "  const ext = extensionMapping[extension.toLowerCase()] || extension.toLowerCase();\n";
  content += "  const iconVariants = icons[ext];\n";
  content += "  return iconVariants ? iconVariants[variant] || null : null;\n";
  content += "};\n";

  fs.writeFileSync(getIconComponentPath, content);
};

const generateTypesFile = (icons) => {
  let content =
    "export type Variant = 'color' | 'single_color' | 'grayscale';\n\n";
  content += "export interface IconProps {\n";
  content += "  extension: string;\n";
  content += "  variant?: Variant;\n";
  content += "  size?: number;\n";
  content += "  className?: string;\n";
  content += "  color?: string; // Color prop for single_color variant\n";
  content += "}\n";

  fs.writeFileSync(typesFilePath, content);
};

const generateIndexDtsFile = (icons) => {
  let content = `declare module 'react-extension-icons' {\n`;
  content += `  import * as React from 'react';\n\n`;
  content += `  export type Variant = 'color' | 'single_color' | 'grayscale';\n\n`;
  content += `  export interface IconProps {\n`;
  content += `    extension: string;\n`;
  content += `    variant?: Variant;\n`;
  content += `    size?: number;\n`;
  content += `    className?: string;\n`;
  content += `    color?: string;\n`;
  content += `  }\n\n`;
  content += `  export const Icon: React.FC<IconProps>;\n\n`;

  for (const variant in icons) {
    for (const icon of icons[variant]) {
      content += `  export const ${icon}: React.FC<React.SVGProps<SVGSVGElement> & { color?: string }>;\n`;
    }
  }

  content += `}\n`;

  fs.writeFileSync(indexDtsPath, content);
};

const generateIconComponent = () => {
  const content = `
import React from 'react';
import { IconProps } from '../types';
import { getIconComponent } from '../utils/getIconComponent';

const Icon: React.FC<IconProps> = ({ extension, variant = 'color', size = 24, className, color }) => {
  const IconComponent = getIconComponent(extension, variant);

  if (!IconComponent) {
    return null; // Return null if no matching icon component is found
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      color={color} // Pass color prop to the icon component
    />
  );
};

export default Icon;
`;

  fs.writeFileSync(iconComponentPath, content);
};

const cleanDist = () => {
  fsExtra.emptyDirSync(path.join(__dirname, "../dist"));
};

const run = async () => {
  ensureDirectoriesExist();
  cleanDist();
  generateIconComponent();
  const icons = await generateIcons();
  generateIndexFile(icons);
  generateGetIconComponentFile(icons);
  generateTypesFile(icons);
  generateIndexDtsFile(icons);
};

run();
