import { Variant } from '../types';

const icons: { [key: string]: { [key in Variant]?: React.ComponentType<React.SVGProps<SVGSVGElement> & { color?: string }> } } = {
  'ai': {
    color: require('../icons/color/AiIconColor').default,
    single_color: require('../icons/single_color/AiIconSingleColor').default,
    grayscale: require('../icons/grayscale/AiIconGrayscale').default,
  },
  'avi': {
    color: require('../icons/color/AviIconColor').default,
    single_color: require('../icons/single_color/AviIconSingleColor').default,
    grayscale: require('../icons/grayscale/AviIconGrayscale').default,
  },
  'bmp': {
    color: require('../icons/color/BmpIconColor').default,
    single_color: require('../icons/single_color/BmpIconSingleColor').default,
    grayscale: require('../icons/grayscale/BmpIconGrayscale').default,
  },
  'crd': {
    color: require('../icons/color/CrdIconColor').default,
    single_color: require('../icons/single_color/CrdIconSingleColor').default,
    grayscale: require('../icons/grayscale/CrdIconGrayscale').default,
  },
  'csv': {
    color: require('../icons/color/CsvIconColor').default,
    single_color: require('../icons/single_color/CsvIconSingleColor').default,
    grayscale: require('../icons/grayscale/CsvIconGrayscale').default,
  },
  'dll': {
    color: require('../icons/color/DllIconColor').default,
    single_color: require('../icons/single_color/DllIconSingleColor').default,
    grayscale: require('../icons/grayscale/DllIconGrayscale').default,
  },
  'doc': {
    color: require('../icons/color/DocIconColor').default,
    single_color: require('../icons/single_color/DocIconSingleColor').default,
    grayscale: require('../icons/grayscale/DocIconGrayscale').default,
  },
  'docx': {
    color: require('../icons/color/DocxIconColor').default,
    single_color: require('../icons/single_color/DocxIconSingleColor').default,
    grayscale: require('../icons/grayscale/DocxIconGrayscale').default,
  },
  'dwg': {
    color: require('../icons/color/DwgIconColor').default,
    single_color: require('../icons/single_color/DwgIconSingleColor').default,
    grayscale: require('../icons/grayscale/DwgIconGrayscale').default,
  },
  'eps': {
    color: require('../icons/color/EpsIconColor').default,
    single_color: require('../icons/single_color/EpsIconSingleColor').default,
    grayscale: require('../icons/grayscale/EpsIconGrayscale').default,
  },
  'exe': {
    color: require('../icons/color/ExeIconColor').default,
    single_color: require('../icons/single_color/ExeIconSingleColor').default,
    grayscale: require('../icons/grayscale/ExeIconGrayscale').default,
  },
  'flv': {
    color: require('../icons/color/FlvIconColor').default,
    single_color: require('../icons/single_color/FlvIconSingleColor').default,
    grayscale: require('../icons/grayscale/FlvIconGrayscale').default,
  },
  'gif': {
    color: require('../icons/color/GifIconColor').default,
    single_color: require('../icons/single_color/GifIconSingleColor').default,
    grayscale: require('../icons/grayscale/GifIconGrayscale').default,
  },
  'html': {
    color: require('../icons/color/HtmlIconColor').default,
    single_color: require('../icons/single_color/HtmlIconSingleColor').default,
    grayscale: require('../icons/grayscale/HtmlIconGrayscale').default,
  },
  'iso': {
    color: require('../icons/color/IsoIconColor').default,
    single_color: require('../icons/single_color/IsoIconSingleColor').default,
    grayscale: require('../icons/grayscale/IsoIconGrayscale').default,
  },
  'java': {
    color: require('../icons/color/JavaIconColor').default,
    single_color: require('../icons/single_color/JavaIconSingleColor').default,
    grayscale: require('../icons/grayscale/JavaIconGrayscale').default,
  },
  'jpg': {
    color: require('../icons/color/JpgIconColor').default,
    single_color: require('../icons/single_color/JpgIconSingleColor').default,
    grayscale: require('../icons/grayscale/JpgIconGrayscale').default,
  },
  'mdb': {
    color: require('../icons/color/MdbIconColor').default,
    single_color: require('../icons/single_color/MdbIconSingleColor').default,
    grayscale: require('../icons/grayscale/MdbIconGrayscale').default,
  },
  'mid': {
    color: require('../icons/color/MidIconColor').default,
    single_color: require('../icons/single_color/MidIconSingleColor').default,
    grayscale: require('../icons/grayscale/MidIconGrayscale').default,
  },
  'mov': {
    color: require('../icons/color/MovIconColor').default,
    single_color: require('../icons/single_color/MovIconSingleColor').default,
    grayscale: require('../icons/grayscale/MovIconGrayscale').default,
  },
  'mp3': {
    color: require('../icons/color/Mp3IconColor').default,
    single_color: require('../icons/single_color/Mp3IconSingleColor').default,
    grayscale: require('../icons/grayscale/Mp3IconGrayscale').default,
  },
  'mp4': {
    color: require('../icons/color/Mp4IconColor').default,
    single_color: require('../icons/single_color/Mp4IconSingleColor').default,
    grayscale: require('../icons/grayscale/Mp4IconGrayscale').default,
  },
  'mpeg': {
    color: require('../icons/color/MpegIconColor').default,
    single_color: require('../icons/single_color/MpegIconSingleColor').default,
    grayscale: require('../icons/grayscale/MpegIconGrayscale').default,
  },
  'pdf': {
    color: require('../icons/color/PdfIconColor').default,
    single_color: require('../icons/single_color/PdfIconSingleColor').default,
    grayscale: require('../icons/grayscale/PdfIconGrayscale').default,
  },
  'png': {
    color: require('../icons/color/PngIconColor').default,
    single_color: require('../icons/single_color/PngIconSingleColor').default,
    grayscale: require('../icons/grayscale/PngIconGrayscale').default,
  },
  'ppt': {
    color: require('../icons/color/PptIconColor').default,
    single_color: require('../icons/single_color/PptIconSingleColor').default,
    grayscale: require('../icons/grayscale/PptIconGrayscale').default,
  },
  'ps': {
    color: require('../icons/color/EpsIconColor').default,
    single_color: require('../icons/single_color/EpsIconSingleColor').default,
    grayscale: require('../icons/grayscale/EpsIconGrayscale').default,
  },
  'psd': {
    color: require('../icons/color/PsdIconColor').default,
    single_color: require('../icons/single_color/PsdIconSingleColor').default,
    grayscale: require('../icons/grayscale/PsdIconGrayscale').default,
  },
  'pub': {
    color: require('../icons/color/PubIconColor').default,
    single_color: require('../icons/single_color/PubIconSingleColor').default,
    grayscale: require('../icons/grayscale/PubIconGrayscale').default,
  },
  'rar': {
    color: require('../icons/color/RarIconColor').default,
    single_color: require('../icons/single_color/RarIconSingleColor').default,
    grayscale: require('../icons/grayscale/RarIconGrayscale').default,
  },
  'raw': {
    color: require('../icons/color/RawIconColor').default,
    single_color: require('../icons/single_color/RawIconSingleColor').default,
    grayscale: require('../icons/grayscale/RawIconGrayscale').default,
  },
  'rss': {
    color: require('../icons/color/RssIconColor').default,
    single_color: require('../icons/single_color/RssIconSingleColor').default,
    grayscale: require('../icons/grayscale/RssIconGrayscale').default,
  },
  'svg': {
    color: require('../icons/color/SvgIconColor').default,
    single_color: require('../icons/single_color/SvgIconSingleColor').default,
    grayscale: require('../icons/grayscale/SvgIconGrayscale').default,
  },
  'tiff': {
    color: require('../icons/color/TiffIconColor').default,
    single_color: require('../icons/single_color/TiffIconSingleColor').default,
    grayscale: require('../icons/grayscale/TiffIconGrayscale').default,
  },
  'txt': {
    color: require('../icons/color/TxtIconColor').default,
    single_color: require('../icons/single_color/TxtIconSingleColor').default,
    grayscale: require('../icons/grayscale/TxtIconGrayscale').default,
  },
  'wav': {
    color: require('../icons/color/WavIconColor').default,
    single_color: require('../icons/single_color/WavIconSingleColor').default,
    grayscale: require('../icons/grayscale/WavIconGrayscale').default,
  },
  'wma': {
    color: require('../icons/color/WmaIconColor').default,
    single_color: require('../icons/single_color/WmaIconSingleColor').default,
    grayscale: require('../icons/grayscale/WmaIconGrayscale').default,
  },
  'xml': {
    color: require('../icons/color/XmlIconColor').default,
    single_color: require('../icons/single_color/XmlIconSingleColor').default,
    grayscale: require('../icons/grayscale/XmlIconGrayscale').default,
  },
  'xsl': {
    color: require('../icons/color/XslIconColor').default,
    single_color: require('../icons/single_color/XslIconSingleColor').default,
    grayscale: require('../icons/grayscale/XslIconGrayscale').default,
  },
  'zip': {
    color: require('../icons/color/ZipIconColor').default,
    single_color: require('../icons/single_color/ZipIconSingleColor').default,
    grayscale: require('../icons/grayscale/ZipIconGrayscale').default,
  },
};

export const getIconComponent = (extension: string, variant: Variant = 'color'): React.ComponentType<React.SVGProps<SVGSVGElement> & { color?: string }> | null => {
  const ext = extensionMapping[extension.toLowerCase()] || extension.toLowerCase();
  const iconVariants = icons[ext];
  return iconVariants ? iconVariants[variant] || null : null;
};
