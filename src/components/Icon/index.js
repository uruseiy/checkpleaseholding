import React, {Component} from 'react'
import IconFactory from 'react-icon-factory'

// http://dmfrancisco.github.io/react-icons/ for more
var IconF = IconFactory({
    'local-restaurant': (
      <g><path d="M8.1 13.34l2.83-2.83-7.02-7.01c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27l-9.76 9.76 1.41 1.41 6.89-6.87 6.88 6.88 1.41-1.41-6.88-6.88 1.47-1.47z"></path></g>
    ),

    'people': (
      <g><path d="M16 11c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5v2.5h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45v2.5h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
    )
})

const Icon = ({name, size}) => (
    <IconF name={name} size={size} />
)    

export default Icon