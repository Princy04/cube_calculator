import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Background from "./assests/images/cubeBackground.png";
import "./App.css";
const regex = /^\d+(\.\d{1,20})?$/;
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

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  Enter = e => {
    if (e.key === "Enter") {
      this.Calculate(e);
    }
  }

  Calculate = e => {
    e.preventDefault();
    var isValidNumber =
      (regex.test(this.state.Length) && regex.test(this.state.Width) && regex.test(this.state.Height))
        || (regex.test(this.state.Length_Inches) && regex.test(this.state.Width_Inches) && regex.test(this.state.Height_Inches))
        ? true
        : false;
    if (this.state.Length === '') {
      this.setState({ LengthErrorMessages: "This field is required" });
    }
    else {
      this.setState({ LengthErrorMessages: "" });
    }
    if (this.state.Width === '') {
      this.setState({ WidthErrorMessages: "This field is required" });
    }
    else {
      this.setState({ WidthErrorMessages: "" });
    }
    if (this.state.Height === '') {
      this.setState({ HeightErrorMessages: "This field is required" });
    }
    else {
      this.setState({ HeightErrorMessages: "" });
    }
    if (isValidNumber) {
      var lengthInches = this.state.Length_Inches / 12;
      var widthInches = this.state.Width_Inches / 12;
      var heightInches = this.state.Height_Inches / 12;
      this.state.Result = ((parseFloat(this.state.Length) + lengthInches) * (parseFloat(this.state.Width) + widthInches) * (parseFloat(this.state.Height) + heightInches)).toFixed(2);
      this.setState({ ...this.state.Result })
    };
  }

  Reset = () => {
    this.setState({
      Length: "", Width: "", Height: "", Length_Inches: "", Width_Inches: "", Height_Inches: "",
      Result: "", LengthErrorMessages: "", WidthErrorMessages: "", HeightErrorMessages: ""
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol className="col-md-5 mx-auto">
            <MDBCard className="cardBody" style={backgroundImage}>
              <MDBCardBody>
                <form>
                  <p className="cyan-text h5 text-center py-3">Cubic Feet Calculator</p>
                  <div className="grey-text">
                    <div>
                      <div className="row">
                        <div className="col">
                          <div className="md-form mt-0">
                            <i className="fas fa-ruler prefix"></i>
                            <input type="text" className="form-control" placeholder="Length"
                              autoFocus={true} value={this.state.Length} name="Length"
                              onChange={this.changeHandler}
                              label="Length"
                              onBlur={() => {
                                this.setState({ LengthErrorMessage: "Enter a valid number" });
                              }}
                              onKeyPress={this.Enter}
                            />
                            {this.state.Length && !regex.test(this.state.Length) ? (
                              <div className="errorMessage">
                                {this.state.LengthErrorMessage}
                              </div>
                            ) : (<div className="errorMessage">
                              {this.state.LengthErrorMessages}
                            </div>)}
                          </div>
                        </div>
                        <div className="col">
                          <div className="md-form mt-0">
                            <input type="text" className="form-control" name="Length_Inches" placeholder="Inches"
                              value={this.state.Length_Inches}
                              onChange={this.changeHandler}
                              label="Length_Inches"
                              onBlur={() => {
                                this.setState({ Length_InchesErrorMessage: "Enter a valid number" });
                              }}
                              onKeyPress={this.Enter}
                            />
                            {this.state.Length_Inches && !regex.test(this.state.Length_Inches) ? (
                              <div className="errorMessage">
                                {this.state.Length_InchesErrorMessage}
                              </div>
                            ) : ("")}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col">
                          <div className="md-form mt-0">
                            <i className="fas fa-ruler prefix"></i>
                            <input type="text" className="form-control" placeholder="Width"
                              value={this.state.Width} name="Width"
                              label="Width"
                              onChange={this.changeHandler}
                              onBlur={() => {
                                this.setState({ WidthErrorMessage: "Enter a valid number" });
                              }}
                              onKeyPress={this.Enter}
                            />
                            {this.state.Width && !regex.test(this.state.Width) ? (
                              <div className="errorMessage">
                                {this.state.WidthErrorMessage}
                              </div>
                            ) : (<div className="errorMessage">
                              {this.state.WidthErrorMessages}
                            </div>)}
                          </div>
                        </div>
                        <div className="col">
                          <div className="md-form mt-0">
                            <input type="text" className="form-control" name="Width_Inches" placeholder="Inches"
                              value={this.state.Width_Inches}
                              label="Width_Inches"
                              onChange={this.changeHandler}
                              onBlur={() => {
                                this.setState({ Width_InchesErrorMessage: "Enter a valid number" });
                              }}
                              onKeyPress={this.Enter}
                            />
                            {this.state.Width_Inches && !regex.test(this.state.Width_Inches) ? (
                              <div className="errorMessage">
                                {this.state.Width_InchesErrorMessage}
                              </div>
                            ) : ("")}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col">
                          <div className="md-form mt-0">
                            <i className="fas fa-ruler prefix"></i>
                            <input type="text" className="form-control" placeholder="Height"
                              value={this.state.Height} name="Height"
                              onChange={this.changeHandler}
                              onBlur={() => {
                                this.setState({ HeightErrorMessage: "Enter a valid number" });
                              }}
                              onKeyPress={this.Enter}
                            />
                            {this.state.Height && !regex.test(this.state.Height) ? (
                              <div className="errorMessage">
                                {this.state.HeightErrorMessage}
                              </div>
                            ) : (<div className="errorMessage">
                              {this.state.HeightErrorMessages}
                            </div>)}
                          </div>
                        </div>
                        <div className="col">
                          <div className="md-form mt-0">
                            <input type="text" className="form-control" name="Height_Inches" placeholder="Inches"
                              label="Height_Inches"
                              value={this.state.Height_Inches}
                              onChange={this.changeHandler}
                              onBlur={() => {
                                this.setState({ Height_InchesErrorMessage: "Enter a valid number" });
                              }}
                              onKeyPress={this.Enter}
                            />
                            {this.state.Height_Inches && !regex.test(this.state.Height_Inches) ? (
                              <div className="errorMessage">
                                {this.state.Height_InchesErrorMessage}
                              </div>
                            ) : ("")}
                          </div>
                        </div>
                      </div>
                    </div>
                    <MDBInput
                      icon="cube"
                      type="text"
                      value={(isNaN(this.state.Result)) ? (0 + "ft3") : this.state.Result === "" ? ("") : this.state.Result + " ft3"}
                      label="Result">
                    </MDBInput>
                  </div>
                  <div className="col">
                    <div className="md-form mt-0">
                      <div className="text-center py-4 mt-3">
                        <MDBBtn icon="cube" color="cyan" onClick={this.Calculate}>
                          Calculate
                       </MDBBtn>
                        <MDBBtn icon="cube" color="cyan" onClick={this.Reset}>
                          Reset
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
