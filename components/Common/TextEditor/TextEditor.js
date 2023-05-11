import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ImageModalContainer, TextEditorContainer } from './TextEditor.styled'
import Placeholder from '@tiptap/extension-placeholder'

export const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }
  const [showImageModal, setShowImageModal] = useState(false)
  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <Image src='/codeIcon.png' alt='Code Icon' width={20} height={20}/>
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active paragraph' : 'paragraph'}
      >
        <Image src='/paragraphIcon.png' alt='Paragraph Icon' width={20} height={20}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <Image src='/headingIcon.png' alt='Heading Icon' width={20} height={20}/>
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
        <Image src='/boldIcon.png' alt='Bold Icon' width={20} height={20}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <Image src='/listIcon.png' alt='Bullet List Icon' width={20} height={20}/>
      </button>
      <button
        onClick={() =>{
            setShowImageModal(true)
        }}
        className={editor.isActive('addImage') ? 'is-active' : ''}
      >
        <Image src='/imageIcon.png' alt='Image Icon' width={20} height={20}/>
      </button>
      {/* Image Modal */}
        <ImageModal showImageModal={showImageModal} setShowImageModal={setShowImageModal} addFn={(url)=>{editor.chain().focus().setImage({ src: url }).run()}}/>
    </>
  )
}

const ImageModal = ({showImageModal, setShowImageModal, addFn}) => {
    if(!showImageModal) return null;
    const [url, setUrl] = useState(null)
    const addImage = () => {
       addFn(url)
       setShowImageModal(false)
    }
    return (
        <ImageModalContainer>
            <div className="modal">
                <h3>Insert Image</h3>
                <input type="text" placeholder='Image/GIF URL' onChange={(e)=>{setUrl(e.target.value)}}/>
                <div className="controls">
                    <button className="submit" onClick={addImage}>Add</button>
                    <button className="cancel" onClick={()=>setShowImageModal(false)}>Cancel</button>
                </div>
            </div>
        </ImageModalContainer>
    )
}

// deprecated
const TextEditor = ({text, setText, isEditable, placeholder, clearEditor}) => {
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
      Placeholder.configure({
        placeholder: placeholder,
      }),
    ],
    content: text,
    onUpdate: (({editor}) => {
      if(!isEditable) return;
      const html = editor.getHTML()
      setText(html)
    }),
    editable: isEditable,
  })
  useEffect(()=>{
    editor?.commands.clearContent(true)
  }, [clearEditor])
  return (
    <TextEditorContainer>
      <EditorContent editor={editor} placeholder={"What's on your mind?"} required={true}/>
      {
        isEditable
        ? (
          <div className="menuBar">
            <MenuBar editor={editor} />
          </div>
        ) 
        : null
      }
    </TextEditorContainer>
  )
}

export default TextEditor;