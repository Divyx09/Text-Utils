import React from "react";

export default function ContactUs(props) {
  return (
    <div>
    <div className="container">
      <h2 style={{color:props.mode==='light'?'black':'white'}}>Contact Us</h2>
      <form>
        <div class="form-group col-md-6">
          <label for="inputPassword4" style={{color:props.mode==='light'?'black':'white'}}>Name</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            placeholder="Name"
            style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='light'?'black':'white'}}
          />
        </div>
        <div class="form-row ">
          <div class="form-group col-md-6">
            <label for="inputEmail4" style={{color:props.mode==='light'?'black':'white'}}>Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
              style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='light'?'black':'white'}}
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity" style={{color:props.mode==='light'?'black':'white'}}>Contact Number</label>
            <input type="number" class="form-control" id="inputCity" style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='light'?'black':'white'}} />
          </div>
          <div class="form-group col-md-6">
            <label for="text" style={{color:props.mode==='light'?'black':'white'}}>State</label>
            <input type="text" class="form-control" id="inputZip" style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='light'?'black':'white'}}/>
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="inputAddress" style={{color:props.mode==='light'?'black':'white'}}>Description</label>
          <textarea className="form-control" rows="5" placeholder="....."style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button type="submit" class="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
