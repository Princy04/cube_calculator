import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Background from "./assests/images/cubeBackground.png"
var cardStyle = {
  display: 'block',
  width: '30vw',
  height: '44vw',
  backgroundImage: `url(${Background})`
}
const App = () => {
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
                    label="Length"
                    icon="ruler"
                    group
                    type="number"
                    required
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Width"
                    icon="ruler"
                    group
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Height"
                    icon="ruler"
                    group
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn icon="cube" color="cyan" type="submit">
                    Calculate
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default App;