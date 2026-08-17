# React Extension Icons

File extension icons for React, in three variants: `color`, `single_color` and `grayscale`.
Ships ESM and CommonJS builds, TypeScript types, and works in React 18 and 19.

## Installation

```bash
npm install react-extension-icons
```

`react` is a peer dependency (`^18 || ^19`). The package has no runtime dependencies.

## Usage

### Lookup by extension

```tsx
import { Icon } from 'react-extension-icons';

export default function App() {
  return (
    <div>
      <Icon extension="pdf" variant="color" size={48} className="custom-class" />
      <Icon extension="docx" variant="single_color" size={48} color="blue" />
      <Icon extension="jpg" variant="grayscale" size={48} />
    </div>
  );
}
```

Extensions are case insensitive and a leading dot is optional, so `pdf`, `PDF` and `.pdf`
all resolve to the same icon. An unrecognised extension renders nothing.

### Individual icons

```tsx
import { PdfIconColor, DocxIconSingleColor, JpgIconGrayscale } from 'react-extension-icons';

export default function App() {
  return (
    <div>
      <PdfIconColor width={48} height={48} className="custom-class" />
      <DocxIconSingleColor width={48} height={48} color="blue" />
      <JpgIconGrayscale width={48} height={48} />
    </div>
  );
}
```

Each icon can also be imported on its own, which skips the barrel entirely:

```tsx
import PdfIconColor from 'react-extension-icons/icons/color/PdfIconColor';
```

### Bundle size

`<Icon>` looks icons up by string at runtime, so it has to reference the whole set —
importing it pulls in roughly 200 KB gzipped. Named and subpath imports are tree-shaken:
a single icon costs about 2 KB gzipped. Reach for `<Icon>` when the extension is only
known at runtime, and for direct imports when it is not.

### Accessibility

Icons are decorative by default (`aria-hidden="true"`). Pass `title` (with a `titleId`)
or an `aria-label` to expose one to assistive technology:

```tsx
<Icon extension="pdf" title="PDF document" titleId="pdf-title" />
<Icon extension="pdf" aria-label="PDF document" />
```

## Props

### `Icon`

| Prop        | Type                                          | Default   | Description                                             |
|-------------|-----------------------------------------------|-----------|---------------------------------------------------------|
| `extension` | `string`                                      | —         | File extension, with or without a leading dot.          |
| `variant`   | `'color' \| 'single_color' \| 'grayscale'`    | `'color'` | Which artwork to render.                                |
| `size`      | `number \| string`                            | `24`      | Width and height. Overridden by explicit `width`/`height`. |
| `color`     | `string`                                      | —         | Accent color. Applied to the `single_color` variant only. |
| `title`     | `string`                                      | —         | Accessible name. Pair it with `titleId`.                |
| `titleId`   | `string`                                      | —         | id for the `<title>`, wired up via `aria-labelledby`.   |
| `ref`       | `Ref<SVGSVGElement>`                          | —         | Forwarded to the underlying `<svg>`.                    |

Any other `svg` prop (`className`, `style`, `onClick`, `data-*`, …) is forwarded as well.

### Individual icon components

The same props minus `extension`, `variant` and `size` — use `width` and `height` directly.
`color` only has an effect on the `SingleColor` components.

### `getIconComponent`

```tsx
import { getIconComponent } from 'react-extension-icons';

const PdfIcon = getIconComponent('pdf', 'color'); // null when unsupported
```

`extensionMapping` is exported too, if you need to know which extensions resolve where.

## Supported Extensions

40 icons, each available in all three variants.

| Extensions | Icon |
|----------|------|
| ai | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/AI.svg) |
| avi | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/AVI.svg) |
| bmp | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/BMP.svg) |
| crd | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/CRD.svg) |
| csv | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/CSV.svg) |
| dll | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/DLL.svg) |
| doc | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/DOC.svg) |
| docx | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/DOCX.svg) |
| dwg, dxf | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/DWG.svg) |
| eps | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/EPS.svg) |
| exe | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/EXE.svg) |
| flv | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/FLV.svg) |
| gif | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/GIF.svg) |
| html, htm | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/HTML.svg) |
| iso | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/ISO.svg) |
| java, jar | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/JAVA.svg) |
| jpg, jpeg, jpe, jif, jfif, jfi | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/JPG.svg) |
| mdb | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/MDB.svg) |
| mid, midi | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/MID.svg) |
| mov, qt | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/MOV.svg) |
| mp3 | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/MP3.svg) |
| mp4, m4a, m4p | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/MP4.svg) |
| mpeg, mpg, mp2, mpe, mpv | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/MPEG.svg) |
| pdf | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/PDF.svg) |
| png | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/PNG.svg) |
| ppt, pptx, pps, ppsx, potx, potm, ppsm, ppam, sldx, sldm | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/PPT.svg) |
| ps | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/PS.svg) |
| psd | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/PSD.svg) |
| pub | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/PUB.svg) |
| rar | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/RAR.svg) |
| raw | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/RAW.svg) |
| rss | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/RSS.svg) |
| svg | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/SVG.svg) |
| tiff, tif | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/TIFF.svg) |
| txt | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/TXT.svg) |
| wav | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/WAV.svg) |
| wma, wmv | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/WMA.svg) |
| xml | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/XML.svg) |
| xsl | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/XSL.svg) |
| zip | ![Icon](https://raw.githubusercontent.com/Jcampillo1207/react-extension-icons/12d01a415b63cf18e176d7b0596884b02e303775/svg/color/ZIP.svg) |

There is no spreadsheet artwork yet, so `xls` and `xlsx` are unsupported and return `null`.

The table above is enforced by a test: an extension listed here that does not resolve,
or a mapping entry that is not listed here, fails the build.

## Contributing

Everything under `src/` is generated from the SVGs in `svg/`. Edit the artwork, not the
components:

```bash
npm run generate-icons   # svg/ -> src/
npm run typecheck
npm run build            # src/ -> dist/{cjs,esm,types}
npm test
```

`npm run verify` runs all four. Adding an icon means dropping `NAME.svg` into each of
`svg/color/`, `svg/single_color/` and `svg/grayscale/`, then adding the extension to
`extensionMapping` in `scripts/generateIcons.js` and to the table above.

The `single_color` artwork must use `#5659E9` as its accent — that is the value swapped
for the `color` prop, and generation fails if an icon does not contain it.

### Releasing

```bash
npm run release   # verify, version patch, push with tags, publish
```

## Credits

Icons are sourced from [this Figma file](https://www.figma.com/community/file/1113398399853613530/40-file-type-file-extension-icon)
created by [Graphy](https://www.figma.com/@graphy918).

## License

ISC — see [LICENSE](./LICENSE).
