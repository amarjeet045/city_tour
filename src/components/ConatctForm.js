import React, { Component } from "react";
class ContactForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
              Name:
            <input type="text" name="name" placeholder="Name" />
          </label>
          <br />
          <label>
              Email :
            <input type="email" name="email" placeholder="Email" />
          </label>
          <br />
          <label>
              Phone :
            <input type="phone" name="phone" placeholder="Phone" />
          </label>
          <br />
          <label>
              Message :
            <textarea type="text" name="message" placeholder="Message" />
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default ContactForm;
