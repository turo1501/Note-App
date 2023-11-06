import React, { useEffect, useState } from 'react'
import {ContentState, EditorState} from 'draft-js'
import {draftToHtml} from 'draftjs-to-html'
import {Editor} from 'react-draft-wysiwyg'
import { convertFromHTML, convertToRaw  } from 'draft-js'
import {blocksFromHTML} from 'draftjs-to-html'

export default function Note() {

  

    const note ={
        id: '999',
        content : '<p>This is new note</p>'
    }

    const[editorState,setEditorState] = useState(()=>{
      return EditorState.createEmpty()
    })

    const[rawHTML , setRawHTML] = useState(note.content)
    useEffect(()=>{
      const blocksFromHTML= convertFromHTML(note.content)
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      )
      setEditorState(EditorState.createWithContent(state))
    },[note.id])

    useEffect(()=>{
        setRawHTML(note.content)
    },[note.content])

    const handleOnChange = (e)=>{
      setEditorState(e)
      setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())))
    }

  return (
    <Editor 
      editorState={editorState}
      onEditorStateChange={handleOnChange}
      placeholder='Write something!'
    />
  )
}
