import React from 'react';

class LoginTab extends React.Component {
    state = {
      email: '',
      password: ''
    }

    update(key, e) {
      this.setState({
        [key]: e.currentTarget.value
      })
    }

    componentDidMount() {
      this.props.hideLoadingSpinner()
    }

    render() {
        return (
          <form onSubmit={(e) => {
            e.preventDefault()
            this.props.loginAttempt(this.state)
          }}>
            <div>
                <div>
                    <div container spacing={8} alignItems="flex-end">
                        <div item>

                        </div>
                        <div item md={true} sm={true} xs={true}>
                            <input
                              onChange={e => this.update('email', e)}
                              value={this.state.email}
                              id="username"
                              label="Username"
                              type="email"
                              fullWidth
                              autoFocus
                              required
                            />
                        </div>
                    </div>
                    <div container spacing={8} alignItems="flex-end">
                        <div>

                        </div>
                        <div>
                            <input
                              onChange={e => this.update('password', e)}
                              label="Password"
                              type="password"
                              fullWidth
                              required
                            />
                        </div>
                    </div>
                    <div container alignItems="center" justify="space-between">

                        <div>
                            <button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</button>
                        </div>
                    </div>
                    <div container justify="center" style={{ marginTop: '10px' }}>
                        <button type='submit' variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</button>
                    </div>
                </div>
            </div>
          </form>
        );
    }
}

export default LoginTab;
