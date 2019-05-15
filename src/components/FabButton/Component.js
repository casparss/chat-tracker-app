import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import SaveIcon from '@material-ui/icons/Save'
import CheckIcon from '@material-ui/icons/Check'
import Fab from '@material-ui/core/Fab'
import CircularProgress from '@material-ui/core/CircularProgress'
import './Style.scss'

const states = {
  initial: <AddIcon />,
  loading: <SaveIcon />,
  complete: <CheckIcon />
}

export default ({
  onClick,
  isLoading,
  buttonState = 'initial',
  disabled,
  createNewChatSuccess,
  resetUI
}) => {
  const onClickStub = () => {
    onClick();
    setTimeout(() => createNewChatSuccess(), 2000)
    setTimeout(() => resetUI(), 3500)
  }

  return (
    <div className="FabButton">
      <Fab
        data-loading-state={buttonState}
        onClick={onClickStub}
        disabled={disabled}
        className="FabButton-addButton"

        size="small"
        color="secondary"
        aria-label="Add"
      >
        {states[buttonState]}
      </Fab>
      {isLoading && <CircularProgress className='FabButton-progress' size={50} />}
    </div>
  )
}
