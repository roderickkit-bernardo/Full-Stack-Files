// Developer: Roderick Bernardo
// Purpose: React quiz app

import { useState, useRef } from "react";

function Admin() {
  const [fileContents, setFileContents] = useState(null);
  const formRef = useRef(null);

  const fileHandler = (event) => {
    setFileContents(event.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fileUpload", fileContents);
    const url = `${process.env.REACT_APP_SERVER_END_POINT}${process.env.REACT_APP_UPLOAD}`;

    const uploadFile = async () => {
      const options = {
        method: "POST",
        body: formData,
      };
      const fetchResponse = await fetch(url, options);
      console.log(fetchResponse);
      let uploadMessage = "File upload failed, please try again.";

      if (
        typeof fetchResponse != "undefined" &&
        fetchResponse?.ok &&
        fetchResponse?.status === 200
      ) {
        // Reset the form via useRef
        formRef.current.reset();
        uploadMessage = "File successfully uploaded.";
      }

      alert(uploadMessage);
    };

    uploadFile();
  };

  return (
    <section className="hero">
      <div className="hero-body has-background-light">
        <form ref={formRef} onSubmit={submitHandler}>
          <div className="box">
            <div className="field">
              <label className="label">Quiz File:</label>
              <div className="control">
                <input
                  className="input"
                  onChange={fileHandler}
                  type="file"
                  name="fileUpload"
                />
              </div>
            </div>

            <div className="control">
              <input
                className="button"
                type="submit"
                value="Upload Quiz File"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Admin;
