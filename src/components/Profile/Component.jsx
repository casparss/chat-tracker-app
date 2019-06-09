import React, { component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const style = {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  flexDirection: 'column'
}

export default ({ logout }) => (
  <div style={style}>
    <Button onClick={logout} variant="contained" color="secondary">
      Signout
      <DeleteIcon />
    </Button>
  </div>
)
