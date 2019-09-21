import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Background from "./assests/images/cubeBackground.png";

var backgroundImage = {
  backgroundImage: `url(${Background})`
}
class CubicCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Length: "",
      Width: "",
      Height: "",
      Length_Inches: "",
      Width_Inches: "",
      Height_Inches: "",
      Result: ""
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Calculate = e => {
    e.preventDefault();
    var lengthInches = this.state.Length_Inches / 12;
    var widthInches = this.state.Width_Inches / 12;
    var heightInches = this.state.Height_Inches / 12;
    this.state.Result = ((parseInt(this.state.Length) + lengthInches) * (parseInt(this.state.Width) + widthInches) * (parseInt(this.state.Height) + heightInches)).toFixed(2);
    this.setState({ ...this.state.Result })
  };

  Reset = () => {
    this.setState({
      Length: "",
      Width: "",
      Height: "",
      Length_Inches: "",
      Width_Inches: "",
      Height_Inches: "",
      Result: "",
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol className="col-md-5 mx-auto">
            <MDBCard className="cardBody" style={backgroundImage}>
              <MDBCardBody>
                <form className="needs-validation"
                  onSubmit={this.Calculate}
                  noValidate>
                  <p className="cyan-text h5 text-center py-3">Cubic Feet Calculator</p>
                  <div className="grey-text">
                    <div>
                      <div className="row">
                        <div className="col">
                          <div className="md-form mt-0">
                            <i className="fas fa-ruler prefix"></i>
                            <input type="number" className="form-control" placeholder="Length"
                              autoFocus={true} value={this.state.Length} name="Length" pattern="^[0-9]\d*(\.\d+)?$"
                              required
                              onChange={this.changeHandler}
                              onKeyPress={e => {
                                if (e.key === "Enter") {
                                  this.Calculate(e);
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="md-form mt-0">
                            <input type="number" className="form-control" name="Length_Inches" placeholder="Inches"
                              value={this.state.Length_Inches} pattern="^[0-9]\d*(\.\d+)?$"
                              required
                              onChange={this.changeHandler}
                              onKeyPress={e => {
                                if (e.key === "Enter") {
                                  this.Calculate(e);
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col">
                          <div className="md-form mt-0">
                            <i className="fas fa-ruler prefix"></i>
                            <input type="number" className="form-control" placeholder="Width"
                              value={this.state.Width} name="Width" pattern="^[0-9]\d*(\.\d+)?$"
                              required
                              onChange={this.changeHandler}
                              onKeyPress={e => {
                                if (e.key === "Enter") {
                                  this.Calculate(e);
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="md-form mt-0">
                            <input type="number" className="form-control" name="Width_Inches" placeholder="Inches"
                              value={this.state.Width_Inches} pattern="^[0-9]\d*(\.\d+)?$"
                              required
                              onChange={this.changeHandler}
                              onKeyPress={e => {
                                if (e.key === "Enter") {
                                  this.Calculate(e);
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col">
                          <div className="md-form mt-0">
                            <i className="fas fa-ruler prefix"></i>
                            <input type="number" className="form-control" placeholder="Height"
                              value={this.state.Height} name="Height" pattern="^[0-9]\d*(\.\d+)?$"
                              required
                              onChange={this.changeHandler}
                              onKeyPress={e => {
                                if (e.key === "Enter") {
                                  this.Calculate(e);
                                }
                              }}
                            />

                          </div>
                        </div>
                        <div className="col">
                          <div className="md-form mt-0">
                            <input type="number" className="form-control" name="Height_Inches" placeholder="Inches"
                              value={this.state.Height_Inches}
                              required
                              onChange={this.changeHandler}
                              onKeyPress={e => {
                                if (e.key === "Enter") {
                                  this.Calculate(e);
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <MDBInput
                      icon="cube"
                      type="text"
                      name="Result"
                      value={(isNaN(this.state.Result)) ? (0 + " ft3") : this.state.Result === "" ? '' : this.state.Result + " ft3"}
                      label="Result">
                    </MDBInput>
                  </div>
                  <div className="col">
                    <div className="md-form mt-0">
                      <div className="text-center py-4 mt-3">
                        <MDBBtn icon="cube" color="cyan" type="submit" onClick={this.Calculate}>
                          Calculate
                </MDBBtn>
                      </div>
                    </div>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer >
    );
  }
}
export default CubicCalculator;
