import React, { Component } from 'react';
import firebase from 'firebase';

export default class FileUploaderPage extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp({
      apiKey: "",
      authDomain: "mapsocial-file-upload.firebaseapp.com",
      databaseURL: "https://mapsocial-file-upload.firebaseio.com",
      projectId: "mapsocial-file-upload",
      storageBucket: "mapsocial-file-upload.appspot.com"
    });

    this.state = {
      images: []
    }
  }

  render() {
    return (
      <div>
        <input id="fileInput" ref={node => this.fileInput = node} type="file" multiple />
        <button onClick={this.submit}>Submit</button>
        {this.state.images.map(this.renderImage)}
      </div>
    );
  }

  renderImage(image) {
    return <img src={image} />;
  }

  submit = () => {
    Array.from(this.fileInput.files).forEach(this.uploadFile);
  }

  uploadFile = file => {
    const storageRef = firebase.storage().ref();
    const task = storageRef.child('/uploads/' + file.name).put(file).then(snapshot => {
      const { images } = this.state;
      images.push(snapshot.downloadURL);
      this.setState({ images });
    });
  }
}
