import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { TextEditorContainer } from './TextEditor.styled'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }
  return (
    <>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active paragraph' : 'paragraph'}
      >
        P
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        H
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        L
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        C
      </button>
    </>
  )
}

const TextEditor = ({text, setText}) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, 
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        history: true,
        italic: false,
        heading:{
          levels: [1],
        }
      }),
    ],
    content: text,
    onUpdate: (({editor}) => {
      const html = editor.getHTML()
      setText(html)
    })
  })

  return (
    <TextEditorContainer>
      <div className="menuBar">
        <MenuBar editor={editor} />
      </div>
      <EditorContent editor={editor} />
    </TextEditorContainer>
  )
}

export default TextEditor;