import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";

class UploadVideoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      url: "",
      video_title: "",
    };
    this.UploadVideoSubmit = this.UploadVideoSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUploadChange = this.handleUploadChange.bind(this);
  }

  handleChange(e) {
    //one is for input text value
    this.setState({ [e.target.name]: e.target.value });
  }
  handleUploadChange(e) {
    //file handling
    if (e.target.files[0]) {
      let uploadVideo = e.target.files[0];
      this.setState({ video: uploadVideo });
    }
  }

  UploadVideoSubmit(e) {
    e.preventDefault();
    let { video, video_title } = this.state;
    let UploadTask = firebase.storage().ref(`/videos/${video.name}`).put(video);
    //events
    UploadTask.on(
      "state_changed",
      () => {
        //progress
      },
      () => {
        //err handling
      },
      () => {
        //complete you can store in firebase storage
        firebase
          .storage()
          .ref("videos")
          .child(video.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url }, () => {
              //store into firebase database
              let videoData = this.state;
              firebase
                .database()
                .ref("videos")
                .push({
                  ...videoData,
                });
            });
          })
          .catch((err) => console.log(err));
      }
    );
  }

  render() {
    return (
      <Fragment>
        <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className=" col-md-3 mx-auto">
            <img src="logo1.png" alt="logo" className="inside_logo my-4" />

            <div className="card-body card">
              <h1 className="h4">Upload Video</h1>
              <p style={{ fontSize: "12px" }}>
                upload the video on firebase associated with your Amazon
                account.
              </p>
              <form onSubmit={this.UploadVideoSubmit}>
                <div className="form-group">
                  <input
                    type="file"
                    name="upload_video"
                    className="form-control"
                    onChange={this.handleUploadChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="video_title"
                    className="form-control"
                    placeholder="Enter Video title"
                    value={this.state.video_title}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <button className="a-button-primary btn-block my-4">
                    continue
                  </button>
                </div>
                <hr />
                <p>
                  <Link to="/login">login</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default UploadVideoForm;
