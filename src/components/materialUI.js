import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors'
import { Delete } from '@material-ui/icons';
import {
  Button, 
  Paper,
  Typography, 
  TextField,
  List, 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  MuiThemeProvider,
 } from '@material-ui/core';


const Wrapper = styled.div`
  padding: 2em;
`;

const styles = {
  root: {
    margin: 20,
    padding: 30,
    maxWidth: 400,
    borderRadius: '10px',
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
  }
}


let theme  = createMuiTheme({
  palette: {
    primary: {
      light: orange[200], // same as '#FFCC80',
      main: '#FB8C00', // same as orange[600]
      dark: '#EF6C00',
      contrastText: 'rgb(0,0,0)'
    }
  }
});




const MyTextField =  withStyles(styles)(
  class MyTextField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        exercises: [
          { id: 1, title: 'Bench Press' },
          { id: 2, title: 'Deadlift' },
          { id: 3, title: 'Squats' }
        ],
        title: ''
      }
    }
  
    _handleChange = ({ target: { name, value }}) => 
      this.setState({
        [name]: value,
      })
    _handleCreate = e => {
      e.preventDefault();
  
      if(this.state.title) {
        this.setState(({ exercises, title }) => ({
          exercises: [
            ...exercises, {
              title,
              id: Date.now()
            },
          ],
          title: '',
        }));
      }
    }
    _handleDelete = id => {
      this.setState(({ exercises }) => ({
        exercises: exercises.filter(exc => exc.id !== id),
      }))
    }
  
    render() {
      const { title, exercises } = this.state;
      const { classes } = this.props;
      return (
        <Paper className={classes.root}>
          <Typography variant="display1" align='center' gutterBottom >
            Exercise!
          </Typography>
          <form onSubmit={this._handleCreate} className={classes.form}>
            <TextField
              name="title"
              label="Exercise"
              value={title}
              onChange={this._handleChange}
              margin='normal'
            />
            <Button
              type="submit"
              color="primary"
              variant="raised"
            >
              Create
            </Button>
          </form>
          <List>
            {exercises.map(({ id, title}) => 
              <ListItem key={id}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <IconButton
                    color='primary'
                    onClick={() => this._handleDelete(id)}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
        </Paper>
      );
    }
  }
)
const multiColor = () => {
  let colors = [];
  for (let i = 1; i < 10; i++) {
    colors = [...colors, {
      backgroundColor: blue[i * 100],
      width: 100,
      height: 40,
    }]
  }
  return colors;
};

const Colors = () => (
  multiColor().map(color => (
    <div style={color}>{color.backgroundColor}</div>
  ))
  
);


export function MaterialUI() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Hi, I'm Button!
        </Button>
        
        <hr />
        <MyTextField />
        <Colors />
      </MuiThemeProvider>
    </React.Fragment>
  );
}