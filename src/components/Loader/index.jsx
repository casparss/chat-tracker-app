import React from 'react'

const style = {
  zIndex: 90000,
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default () =>
  <div style={style}>
    <p>Loader</p>
  </div>
