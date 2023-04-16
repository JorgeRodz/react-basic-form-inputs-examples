import React from 'react'
import { useRef} from 'react'

const ReactFormUC = () => {
  const input = useRef(null)
  const file = useRef(null)
  const submit = () => {
    console.log('This is what you type: ', input.current.value)
    console.log('This is what you type: ', file.current.files[0])

    const form = new FormData()
    form.append('campo', input.current.value)
      form.append('file', file.current.files[0])
    fetch('/lala', { method: 'POST', body: form })
  }

  return (
    <div>
      <div>
        <span>Lala</span>
        <input type="text" name='campo' ref={input}/>
        <input type="file" ref={file}/>
      </div>
      <input type="submit" value='Enviar' onClick={submit}/>
    </div>
  )
}

export default ReactFormUC
