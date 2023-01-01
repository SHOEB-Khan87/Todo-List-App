import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { connect } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import { Add_item, Delete_item, Remove_item } from '../Actions/index';
class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { input: "" }
  }


  Add = () => {
    if (this.state.input === "") {
    } else {
      this.props.Add_item(this.state.input)
      this.setState({ input: "" })
    }

  }



  Delete = (data) => {
    this.props.Delete_item(data)
  }



  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }


  Remove = () => {
    this.props.Remove_item();
  }


  render() {

    return (
      <>

        <Grid container justifyContent="center">
          <Typography color="primary"><h1>Todo List App</h1></Typography>
        </Grid>
        <Grid style={{ marginTop: "50px" }} container justifyContent="center">
          <TextField className='TextField' onChange={this.handleChange} value={this.state.input} size='small' label="Add text" color="primary" variant='filled' />
          <Button color='primary' variant='outlined' onClick={this.Add} size='small'><AddIcon /></Button>
        </Grid>
        {this.props.mainState.map(elem => {
          return <div key={elem.id} className='list'>
            <p className='text' onClick={() => this.Delete(elem.id)}>{elem.data}<Button color='secondary' endIcon={<DeleteIcon />}></Button></p>
          </div>
        })}
        <Grid container className='remove' justifyContent="center">
          <Button color='primary' onClick={this.Remove} variant='contained'>Remove all</Button>
        </Grid>
      </>
    )
  }
}
function mapStateToProps(state) {
  return {
    mainState: state.todoReducer.list
  }
}

export default connect(mapStateToProps, { Add_item, Delete_item, Remove_item })(Todo)