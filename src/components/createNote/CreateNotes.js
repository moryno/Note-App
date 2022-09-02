import React from "react";
import "./Create.css"

const CreateNotes = () => {
  return (
    <div>
          <form className="data">
              <div className="textForm">
              <label className="inputs">
                      <input type="text" name="name" placeholder="Write your note here........." />
                      <button>Submit</button> 
              </label>
              
              </div>
      </form>
    </div>
  );
};

export default CreateNotes;

