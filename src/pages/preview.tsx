import React, { useState } from 'react'


interface PreviewProps{
    message : string
}
export default function Preview(props : PreviewProps) {
    const [loading, setLoading] = useState<boolean>(true)

    
  return (
    <div>preview</div>
  )
}
