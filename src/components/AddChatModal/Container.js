import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = ({ ui }) => ui

export default connect(
  mapStateToProps
)(Component)
