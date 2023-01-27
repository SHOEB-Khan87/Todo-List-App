import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import {  Grid, Switch, Typography, Paper, FormControl } from '@mui/material';

import { connect } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import { Add_item, Delete_item, Remove_item, check } from '../Actions/index';



class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { input: "", toggle: false, count: 0 }
  }


  Add = (event) => {
    if (this.state.input === "") {
    } else {
      this.props.Add_item(this.state.input)
      this.setState({ input: "" })
    }
    event.preventDefault();

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

  check = (data) => {
    this.props.check(data)
    console.log(this.props.mainState)
    this.setState({ count: this.state.count + 1 })
  }

  render() {

    return (
      <>
        <Grid style={{ marginTop: "50px" }} container justifyContent="center">
          <Paper sx={{ width: "600px" }} elevation={3} >
            <Grid container >

              <Typography style={{ fontFamily: "URW Chancery L, cursive", marginBottom: "5px", textIndent: "13px",marginTop:"25px" }} variant='h6'>Todo List App</Typography>
            </Grid>

            <form onSubmit={this.Add}>
              <FormControl fullWidth variant="filled">

                <TextField sx={{ margin: "10px" }}
                  label="Add Todo"
                  onChange={this.handleChange} value={this.state.input}
                />
              </FormControl>
            </form>
            <Grid container justifyContent="center">
              {this.props.mainState.map(elem => {
                return <Grid style={{ marginBottom: "20px" }} key={elem.id} item xs={12} sm={12} md={12} lg={12}>
                  <div className='list'>
                    <span className='display'>
                      <span className='check' ><Switch color="default" size='small' checked={elem.done} onChange={() => this.check(elem.id)} />
                        <Typography className='text' style={{ textDecoration: elem.done ? "line-through" : "none", fontFamily: "URW Chancery L, cursive",fontSize:"20px" }} >{elem.data} </Typography></span>
                      <span style={{marginRight:"15px",color:"darkgray"}} className='del' onClick={() => this.Delete(elem.id)} ><DeleteIcon color='default' /></span>
                    </span>

                  </div>
                </Grid>
              })}
            </Grid>

          </Paper>
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

export default connect(mapStateToProps, { Add_item, Delete_item, Remove_item, check })(Todo)
{/* <Grid container className='remove' justifyContent="center">
          <Button style={{backgroundColor:"white",color:"black"}}
           onClick={this.Remove} variant='contained'>Remove all</Button>
        </Grid> */}