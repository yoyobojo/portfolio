const Contact = () => {
  return (
    <div className="section contacts section_" id="contact">
      <div className="content pb-4">
        <div className="title">
          <div className="title_inner">Contact</div>
        </div>
        <div className="contact_form">
          <form id="cform" method="post">
            <div className="group-val">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="group-val">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="group-val ct-gr">
              <textarea
                name="message"
                placeholder="Message"
                defaultValue={''}
              />
            </div>
            <a href="#" className="btn fill" data-text="Send Message">
              Send Message
            </a>
          </form>
          <div className="alert-success">
            <p>
              Thanks, your message is sent successfully. We will contact you
              shortly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
