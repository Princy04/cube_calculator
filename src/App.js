import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Background from "./assests/images/cubeBackground.png"
var cardStyle = {
  display: 'block',
  width: '30vw',
  height: '58vw',
  backgroundImage: `url(${Background})`
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Length: "",
      Width: "",
      Height: "",
      Length_Inches: "",
      Width_Inches: "",
      Height_Inches: "",
      Value: "",
    }
  }
  Calculate = e => {
    e.preventDefault();
    this.state.Value = ((this.state.Length + (this.state.Length_Inches / 12)) * (this.state.Width + (this.state.Width_Inches / 12)) * (this.state.Height + (this.state.Height_Inches / 12)));
    console.log("answer", this.state.Value)
  };
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol className="col-md-5 mx-auto">
            <MDBCard style={cardStyle}>
              <MDBCardBody>
                <form>
                  <p color="cyan" className="h4 text-center py-4">CFT Calculator</p>
                  <div className="grey-text">
                    <MDBInput
                      onChange={e => {
                        this.state.Length = e.target.value;
                      }}
                      icon="ruler"
                      type="text"
                      name="Length"
                      label="Length"
                      required
                    >
                    </MDBInput>
                    <MDBInput
                      onChange={e => {
                        this.state.Length_Inches = e.target.value;
                      }}
                      type="text"
                      name="Length_Inches"
                      label="Length_Inches"
                      required
                    >
                    </MDBInput>
                    <MDBInput
                      onChange={e => {
                        this.state.Width = e.target.value;
                      }}
                      icon="ruler"
                      type="text"
                      name="Width"
                      label="Width"
                      required
                    >
                    </MDBInput>
                    <MDBInput
                      onChange={e => {
                        this.state.Width_Inches = e.target.value;
                      }}
                      type="text"
                      name="Width_Inches"
                      label="Width_Inches"
                      required
                    >
                    </MDBInput>
                    <MDBInput
                      onChange={e => {
                        this.state.Height = e.target.value;
                      }}
                      icon="ruler"
                      type="text"
                      name="Height"
                      label="Height"
                      required
                    >
                    </MDBInput>
                    <MDBInput
                      onChange={e => {
                        this.state.Height_Inches = e.target.value;
                      }}
                      type="text"
                      name="Height_Inches"
                      label="Height_Inches"
                      required
                    >
                    </MDBInput>
                    <MDBInput
                      icon="cube"
                      type="text"
                      name="Result"
                      value={this.state.Value}
                    // label="Result"
                    >
                    </MDBInput>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn icon="cube" color="cyan" type="submit" onClick={this.Calculate}>
                      Calculate
                 </MDBBtn>
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
export default App;
