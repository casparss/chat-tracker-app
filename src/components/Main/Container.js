import { connect } from 'react-redux'
import { Creators } from '../../state/Core'
import Component from './Component'

const mapDispatchToProps = Creators

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
