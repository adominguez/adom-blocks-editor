import { FC } from 'react'
import { DefaultIconProps } from "@/types/definitions"

export const SunIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, className, strokeWidth = 1 }) => <svg className={`icon icon-tabler icon-tabler-sun-filled ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" strokeWidth="0" fill="currentColor"></path>
  <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" strokeWidth="0" fill="currentColor"></path>
  <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" strokeWidth="0" fill="currentColor"></path>
  <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" strokeWidth="0" fill="currentColor"></path>
  <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" strokeWidth="0" fill="currentColor"></path>
  <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" strokeWidth="0" fill="currentColor"></path>
  <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" strokeWidth="0" fill="currentColor"></path>
  <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" strokeWidth="0" fill="currentColor"></path>
  <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor"></path>
</svg>

export const MoonIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, className, strokeWidth = 1 }) => <svg className={`icon icon-tabler icon-tabler-moon-filled ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" strokeWidth="0" fill="currentColor"></path>
</svg>

export const BoldIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, className, strokeWidth = 2 }) => <svg className={`icon icon-tabler icon-tabler-bold ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z"></path>
  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"></path>
</svg>

export const ItalicIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, className, strokeWidth = 1 }) => <svg className={`icon icon-tabler icon-tabler-italic ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M11 5l6 0"></path>
  <path d="M7 19l6 0"></path>
  <path d="M14 5l-4 14"></path>
</svg>

export const LinkIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, className, strokeWidth = 1 }) => <svg className={`icon icon-tabler icon-tabler-link ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M9 15l6 -6"></path>
  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
</svg>

export const ListNumberedIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, className, strokeWidth = 1 }) => <svg className={`icon icon-tabler icon-tabler-list-numbers ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M11 6h9"></path>
  <path d="M11 12h9"></path>
  <path d="M12 18h8"></path>
  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"></path>
  <path d="M6 10v-6l-2 2"></path>
</svg>

export const ListBulletsIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, className, strokeWidth = 1 }) => <svg className={`icon icon-tabler icon-tabler-list ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M9 6l11 0"></path>
  <path d="M9 12l11 0"></path>
  <path d="M9 18l11 0"></path>
  <path d="M5 6l0 .01"></path>
  <path d="M5 12l0 .01"></path>
  <path d="M5 18l0 .01"></path>
</svg>

export const SaveIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, className, strokeWidth = 1 }) => <svg className={`icon icon-tabler icon-tabler-device-floppy ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
  <path d="M14 4l0 4l-6 0l0 -4"></path>
</svg>

export const CodeIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, className, strokeWidth = 1 }) => <svg className={`icon icon-tabler icon-tabler-code ${className}`} width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M7 8l-4 4l4 4"></path>
  <path d="M17 8l4 4l-4 4"></path>
  <path d="M14 4l-4 16"></path>
</svg>

export const ParagraphIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-pilcrow" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M13 4v16"></path>
  <path d="M17 4v16"></path>
  <path d="M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5"></path>
</svg>

export const HeadingIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-heading" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M7 12h10"></path>
  <path d="M7 5v14"></path>
  <path d="M17 5v14"></path>
  <path d="M15 19h4"></path>
  <path d="M15 5h4"></path>
  <path d="M5 19h4"></path>
  <path d="M5 5h4"></path>
</svg>

export const HeadingH1Icon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-h-1" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M19 18v-8l-2 2"></path>
  <path d="M4 6v12"></path>
  <path d="M12 6v12"></path>
  <path d="M11 18h2"></path>
  <path d="M3 18h2"></path>
  <path d="M4 12h8"></path>
  <path d="M3 6h2"></path>
  <path d="M11 6h2"></path>
</svg>

export const HeadingH2Icon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-h-2" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"></path>
  <path d="M4 6v12"></path>
  <path d="M12 6v12"></path>
  <path d="M11 18h2"></path>
  <path d="M3 18h2"></path>
  <path d="M4 12h8"></path>
  <path d="M3 6h2"></path>
  <path d="M11 6h2"></path>
</svg>

export const HeadingH3Icon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-h-3" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M19 14a2 2 0 1 0 -2 -2"></path>
  <path d="M17 16a2 2 0 1 0 2 -2"></path>
  <path d="M4 6v12"></path>
  <path d="M12 6v12"></path>
  <path d="M11 18h2"></path>
  <path d="M3 18h2"></path>
  <path d="M4 12h8"></path>
  <path d="M3 6h2"></path>
  <path d="M11 6h2"></path>
</svg>

export const HeadingH4Icon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-h-4" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M20 18v-8l-4 6h5"></path>
  <path d="M4 6v12"></path>
  <path d="M12 6v12"></path>
  <path d="M11 18h2"></path>
  <path d="M3 18h2"></path>
  <path d="M4 12h8"></path>
  <path d="M3 6h2"></path>
  <path d="M11 6h2"></path>
</svg>

export const HeadingH5Icon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-h-5" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4"></path>
  <path d="M4 6v12"></path>
  <path d="M12 6v12"></path>
  <path d="M11 18h2"></path>
  <path d="M3 18h2"></path>
  <path d="M4 12h8"></path>
  <path d="M3 6h2"></path>
  <path d="M11 6h2"></path>
</svg>

export const HeadingH6Icon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-h-6" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z"></path>
  <path d="M21 12a2 2 0 1 0 -4 0v4"></path>
  <path d="M4 6v12"></path>
  <path d="M12 6v12"></path>
  <path d="M11 18h2"></path>
  <path d="M3 18h2"></path>
  <path d="M4 12h8"></path>
  <path d="M3 6h2"></path>
  <path d="M11 6h2"></path>
</svg>

export const TrashIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-trash" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 7l16 0"></path>
  <path d="M10 11l0 6"></path>
  <path d="M14 11l0 6"></path>
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
</svg>

export const ArrowMoveUpIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-arrow-bar-up" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 4l0 10"></path>
  <path d="M12 4l4 4"></path>
  <path d="M12 4l-4 4"></path>
  <path d="M4 20l16 0"></path>
</svg>

export const ArrowMoveDownIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-arrow-bar-down" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 20l0 -10"></path>
  <path d="M12 20l4 -4"></path>
  <path d="M12 20l-4 -4"></path>
  <path d="M4 4l16 0"></path>
</svg>

export const QuoteIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-quote" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
  <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
</svg>

export const AlignLeftIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-align-left" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 6l16 0"></path>
  <path d="M4 12l10 0"></path>
  <path d="M4 18l14 0"></path>
</svg>

export const AlignCenterIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-align-center" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 6l16 0"></path>
  <path d="M8 12l8 0"></path>
  <path d="M6 18l12 0"></path>
</svg>

export const AlignRightIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-align-right" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 6l16 0"></path>
  <path d="M10 12l10 0"></path>
  <path d="M6 18l14 0"></path>
</svg>

export const ExternalLinkIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-external-link" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
  <path d="M11 13l9 -9"></path>
  <path d="M15 4h5v5"></path>
</svg>

export const UnlinkIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-unlink" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M17 22v-2"></path>
  <path d="M9 15l6 -6"></path>
  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
  <path d="M20 17h2"></path>
  <path d="M2 7h2"></path>
  <path d="M7 2v2"></path>
</svg>

export const PhotoIcon: FC<DefaultIconProps> = ({ width = 24, height = 24, strokeWidth = 1 }) => <svg className="icon icon-tabler icon-tabler-photo" width={width} height={height} viewBox={`0 0 ${width} ${height}`} strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M15 8h.01"></path>
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
</svg>