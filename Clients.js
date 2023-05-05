import React, { useState } from "react";
import Axios from "axios";
import { Form, Button, Container, Table } from "react-bootstrap";
// import "./Client.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBRadio,
} from "mdb-react-ui-kit";

class Admin_Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      place: "",
      sector: "",
      file: "",
      mylist: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:4200/showproperty").then((res) =>
      this.setState({ mylist: res.data })
    );
    Axios.get("http://localhost:4200/feedback").then((res) =>
      this.setState({ mylist: res.data })
    );
  }
  change1 = (e) => {
    this.setState({ name: e.target.value });
  };
  change2 = (e) => {
    this.setState({ price: e.target.value });
  };

  change3 = (e) => {
    this.setState({ file: e.target.files[0] });
  };
  change4 = (e) => {
    this.setState({ place: e.target.value });
  };
  change5 = (e) => {
    this.setState({ sector: e.target.value });
  };
  mysubmit = () => {
    const formData = new FormData();
    formData.append("property_name", this.state.name);
    formData.append("price", this.state.price);
    formData.append("city", this.state.place);
    formData.append("sector", this.state.sector);
    formData.append("file", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    Axios.post("http://localhost:4200/saveData", formData, config).then((res) =>
      this.setState({ mylist: res.data })
    );
  };

  myupdate = () => {
    const data = { ...this.state };
    console.log(data);
    Axios.post("http://localhost:4200/update", data).then((res) =>
      this.setState({ mylist: res.data })
    );
  };
  onDelete = (e) => {
    e.preventDefault();
    const id = e.target.id;
    console.log(id);
    Axios.get(`http://localhost:4200/propertydelete/${id}`).then((res) => {
      this.setState({ mylist: res.data });
    });
  };
  onEdit = (e) => {
    e.preventDefault();
    const id = e.target.id;

    console.log(id);
    Axios.get(`http://localhost:4200/propertyedit/${id}`).then((res) => {
      this.setState({
        name: res.data[0].property_name,
        price: res.data[0].property_price,
        id: res.data[0].property_id,
        place: res.data[0].place,
        sector: res.data[0].sector,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <h2
                align="center"
                style={{
                  color: "#041533",
                  font: "normal 30px 'Cookie',cursive",
                }}
              >
                {" "}
                Start posting your property, it’s free{" "}
              </h2>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p
                    classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 "
                    style={{
                      marginTop: "30px",
                      color: "#041533",
                      font: "normal 20px 'Cookie',cursive",
                    }}
                  >
                    Add basic details
                  </p>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      placeholder="Porperty Name"
                      id="form1"
                      type="text"
                      className="w-100"
                      onChange={this.change1}
                      value={this.state.name}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      id="form1"
                      type="file"
                      style={{ width: "225px" }}
                      onChange={this.change3}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      id="form2"
                      placeholder="Property price"
                      onChange={this.change2}
                      value={this.state.price}
                    />
                  </div>
                  <span
                    style={{
                      color: "#041533",
                      font: "normal 20px 'Cookie',cursive",
                    }}
                  >
                    Your City Name!
                  </span>
                  <select
                    value={this.state.place}
                    onChange={this.change4}
                    className="form-select my-3"
                    aria-label="Default select example"
                    style={{ width: "222px" }}
                  >
                    <option>--select city--</option>
                    {this.state.mylist.map((item, index) => {
                      return <option>{item.place}</option>;
                    })}
                  </select>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      placeholder="Sector Name"
                      id="form3"
                      type="text"
                      value={this.state.sector}
                      onChange={this.change5}
                    />
                  </div>
                  <div></div>
                  <br />
                  <MDBBtn className="mb-4" size="lg" onClick={this.mysubmit}>
                    Submit
                  </MDBBtn>
                  &nbsp;
                  {/* <Button
                    variant="success"
                    className="mb-4 "
                    size="lg"
                    onClick={this.myupdate}
                  >
                    Update
                  </Button> */}
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://static.99acres.com/universalapp/img/Desktop_Animation_compress.gif"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        <br />
        <Table striped bordered hover>
          <thead>
            <th>Image</th>
            <th> Name </th> <th> Price </th>
            <th> City </th>
            <th> Sector </th>
            <th>Delete</th>
          </thead>
          <tbody>
            {this.state.mylist.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.property_image} width="100" height="100" />
                  </td>

                  <td>{item.property_name}</td>
                  <td>{item.property_price}</td>
                  <td>{item.place}</td>
                  <td>{item.sector}</td>
                  <td>
                    <Button
                      variant="danger"
                      id={item.property_id}
                      onClick={this.onDelete}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Admin_Home;
