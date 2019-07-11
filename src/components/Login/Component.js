import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

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
        const { classes } = this.props;
        return (
          <form onSubmit={(e) => {
            e.preventDefault()
            this.props.loginAttempt(this.state)
          }}>
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>

                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                              onChange={e => this.update('email', e)}
                              value={this.state.email}
                              id="username"
                              label="Username"
                              type="email"
                              fullWidth
                              autoFocus
                              required
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>

                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                              onChange={e => this.update('password', e)}
                              label="Password"
                              type="password"
                              fullWidth
                              required
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button type='submit' variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
            </Paper>
          </form>
        );
    }
}

export default withStyles(styles)(LoginTab);
