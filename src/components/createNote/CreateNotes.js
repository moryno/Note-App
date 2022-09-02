import React from "react";
import "./Create.css"

const CreateNotes = () => {
  return (
    <div>
          <form className="data">
              <div className="textForm">
              <label className="inputs">
                      <input className="inputField" type="text" name="name" placeholder="Heading" />
                      <input className="formBody" type="text" name="name" placeholder="body" />
                      <button>Submit</button> 
              </label>
              
              </div>
      </form>
    </div>
  );
};

export default CreateNotes;

