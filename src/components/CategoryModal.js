import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addCategory} from '../actions/categoryActions';
import uuid from 'uuid';
class CategoryModal extends Component {
  state= {
      modal: false,
      name: ''
      }
      toggle =() => {
          this.setState({
             modal: !this.state.modal
          });
      }

      onChange=(e)=> {
          this.setState({[e.target.name]: e.target.value});
      }

      onSubmit= (e)=> {
          e.preventDefault();

          const newCategory={
             id:uuid(),
             name: this.state.name
          }
          //add category via addCategory action
          this.props.addCategory(newCategory);

          //close modal
          this.toggle();

      }
      render() {
          return(
              <div>
                  <Button color="dark" 
                          style= {{marginBottom: '2rem'}}
                          onClick={this.toggle}>
                      Add Category
                  </Button>

                  <Modal isOpen={this.state.modal}
                         toggle={this.toggle}
                  >
                   <ModalHeader toggle ={this.toggle}>
                    Add to Categories
                   </ModalHeader>
                   <ModalBody>
                     <Form onSubmit={this.onSubmit}>
                       <FormGroup>
                           <Label for="category">Category</Label>
                           <Input type="text"
                                   name="name"
                                    id="category"
                                    placeholder="Add Category"
                                    onChange={this.onChange}/>
                             <Button color="dark" style={{marginTop: '2rem'}} block>Add Category</Button>
                       </FormGroup>
                     </Form>  
                   </ModalBody>
                  </Modal>
              </div>
          );
      }
}

const mapStateToProps = state => ({
    category: state.category
})
export default connect(mapStateToProps, {addCategory}) (CategoryModal);