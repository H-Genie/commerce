import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import CustomEditor from '@/components/Editor'

export default function CommentEdit() {
  const router = useRouter()
  const [rate, setRate] = useState(5)
  const { orderItemId } = router.query
  const [editorState, setEditorState] = useState<EditorState | undefined>(
    undefined
  )

  useEffect(() => {
    if (orderItemId !== undefined) {
      fetch(`/api/get-comment?orderItemId=${orderItemId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.items.contents) {
            setEditorState(
              EditorState.createWithContent(
                convertFromRaw(JSON.parse(data.items.contents))
              )
            )
            setRate(data.items.rate)
          } else {
            setEditorState(EditorState.createEmpty())
          }
        })
    }
  }, [orderItemId])

  const handleSave = () => {
    if (editorState && orderItemId != null) {
      fetch(`/api/update-comment`, {
        method: 'post',
        body: JSON.stringify({
          orderItemId,
          rate,
          contents: JSON.stringify(
            convertToRaw(editorState.getCurrentContent())
          ),
          images: [],
        }),
      })
        .then((res) => res.json())
        .then(() => alert('Success'))
    }
  }

  return (
    <div>
      {editorState !== undefined && (
        <CustomEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onSave={handleSave}
        />
      )}
    </div>
  )
}
