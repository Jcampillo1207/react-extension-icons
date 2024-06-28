
# React Extension Icons

## Description
A library for rendering file extension icons in React. This package provides SVG icons for various file extensions with three variants: color, single_color, and grayscale.

## Installation
```bash
npm install react-extension-icons
```

## Usage

### Basic Usage
You can use the `Icon` component to render icons based on file extensions.

```tsx
import React from 'react';
import { Icon } from 'react-extension-icons';

const App: React.FC = () => {
  return (
    <div>
      <Icon extension="pdf" variant="color" size={48} className="custom-class" />
      <Icon extension="docx" variant="single_color" size={48} color="blue" />
      <Icon extension="jpg" variant="grayscale" size={48} />
    </div>
  );
};

export default App;
```

### Individual Icons
You can also use individual icon components if you prefer to import them directly.

```tsx
import React from 'react';
import { PdfIconColor, DocxIconSingleColor, JpgIconGrayscale } from 'react-extension-icons';

const App: React.FC = () => {
  return (
    <div>
      <PdfIconColor width={48} height={48} className="custom-class" />
      <DocxIconSingleColor width={48} height={48} color="blue" />
      <JpgIconGrayscale width={48} height={48} />
    </div>
  );
};

export default App;
```

## Props

### Icon
| Prop       | Type                       | Default   | Description                                    |
|------------|----------------------------|-----------|------------------------------------------------|
| extension  | `string`                   |           | The file extension to render the icon for.     |
| variant    | `'color' \| 'single_color' \| 'grayscale'` | `'color'` | The variant of the icon to render.             |
| size       | `number`                   | `24`      | The size of the icon.                          |
| className  | `string`                   | `''`      | Additional CSS classes to apply to the icon.   |
| color      | `string`                   | `''`      | The color of the icon (applies only to `single_color` variant).   |

### Individual Icon Components
All individual icon components accept the following props:
| Prop       | Type       | Default   | Description                                    |
|------------|------------|-----------|------------------------------------------------|
| width      | `number`   | `24`      | The width of the icon.                         |
| height     | `number`   | `24`      | The height of the icon.                        |
| className  | `string`   | `''`      | Additional CSS classes to apply to the icon.   |
| color      | `string`   | `''`      | The color of the icon (applies only to `single_color` variant).   |

## Supported Extensions
This package supports the following file extensions:

| Variants | Icon |
|----------|------|
| ai | ![Icon](svg/color/AI.svg) |
| avi | ![Icon](svg/color/AVI.svg) |
| bmp | ![Icon](svg/color/BMP.svg) |
| crd | ![Icon](svg/color/CRD.svg) |
| csv | ![Icon](svg/color/CSV.svg) |
| dll | ![Icon](svg/color/DLL.svg) |
| doc, docx | ![Icon](svg/color/DOC.svg) |
| dwg, dxf | ![Icon](svg/color/DWG.svg) |
| eps | ![Icon](svg/color/EPS.svg) |
| exe | ![Icon](svg/color/EXE.svg) |
| flv | ![Icon](svg/color/FLV.svg) |
| gif | ![Icon](svg/color/GIF.svg) |
| html, htm | ![Icon](svg/color/HTML.svg) |
| iso | ![Icon](svg/color/ISO.svg) |
| java, jar | ![Icon](svg/color/JAVA.svg) |
| jpg, jpeg, jpe, jif, jfif, jfi | ![Icon](svg/color/JPG.svg) |
| mdb | ![Icon](svg/color/MDB.svg) |
| mid, midi | ![Icon](svg/color/MID.svg) |
| mov, qt | ![Icon](svg/color/MOV.svg) |
| mp3 | ![Icon](svg/color/MP3.svg) |
| mp4, m4a, m4p | ![Icon](svg/color/MP4.svg) |
| mpeg, mpg, mp2, mpe, mpv | ![Icon](svg/color/MPEG.svg) |
| pdf | ![Icon](svg/color/PDF.svg) |
| png | ![Icon](svg/color/PNG.svg) |
| ppt, pptx, pps, ppsx, potx, potm, ppsm, ppam, sldx, sldm | ![Icon](svg/color/PPT.svg) |
| ps | ![Icon](svg/color/PS.svg) |
| psd | ![Icon](svg/color/PSD.svg) |
| pub | ![Icon](svg/color/PUB.svg) |
| rar | ![Icon](svg/color/RAR.svg) |
| raw | ![Icon](svg/color/RAW.svg) |
| rss | ![Icon](svg/color/RSS.svg) |
| svg | ![Icon](svg/color/SVG.svg) |
| tiff, tif | ![Icon](svg/color/TIFF.svg) |
| txt | ![Icon](svg/color/TXT.svg) |
| wav | ![Icon](svg/color/WAV.svg) |
| wma, wmv | ![Icon](svg/color/WMA.svg) |
| xml | ![Icon](svg/color/XML.svg) |
| xsl | ![Icon](svg/color/XSL.svg) |
| zip | ![Icon](svg/color/ZIP.svg) |

## Credits
Icons are sourced from [this Figma file](https://www.figma.com/community/file/1113398399853613530/40-file-type-file-extension-icon) created by [Graphy](https://www.figma.com/@graphy918).

## License
This project is licensed under the ISC License.
