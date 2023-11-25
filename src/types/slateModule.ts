import { BaseEditor } from 'slate'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'

type CustomText = { text: string }
type CustomElement = { type: string; children: CustomText[] }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}