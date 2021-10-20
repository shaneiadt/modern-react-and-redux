import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { BoldPlugin, BoldButton } from '@slate-editor/bold-plugin'
import { ItalicPlugin, ItalicButton } from '@slate-editor/italic-plugin'
import { FontSizePlugin, FontSizeInput } from '@slate-editor/font-size-plugin'
import { LinkPlugin, LinkButton } from '@slate-editor/link-plugin'

const fontSizePluginOptions = { initialFontSize: 16 }

const plugins = [BoldPlugin(), ItalicPlugin(), LinkPlugin(), FontSizePlugin(fontSizePluginOptions)]

const SlateRichTextEditor = () => (
    <SlateEditor plugins={plugins}>
        <SlateToolbar>
            <BoldButton />
            <ItalicButton />
            <LinkButton />
            <FontSizeInput {...fontSizePluginOptions} />
        </SlateToolbar>

        <SlateContent />
    </SlateEditor>
)

export default SlateRichTextEditor