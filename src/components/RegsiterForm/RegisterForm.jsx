import './registerForm.scss';

function RegisterForm(){
  return (<section className="registerForm">
    <div className='registerForm__card'>
          <div className="registerForm__card-header">
            <h1 className='registerForm__heading'>Register</h1>
          </div>
          <div className="registerForm__card-body">
            <form className="registerForm__form">
              <div className="form__section">
              <div className="input__group">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Name' name="name" className='registerForm__input'/>
              </div>

              <div className="input__group">
                <label htmlFor="">Email</label>
                <input type="text" name="email" placeholder='Email' className='registerForm__input'/>
              </div>
              
              <div className="input__group">
                <label htmlFor="">Food</label>
                <select className='registerForm__input' name="food" />
              </div>
              
              </div>
              
            </form>
          </div>
          <div className="registerForm__card-footer">
            <button className='registerForm__button--cancel'>Cancel</button>
            <button className='registerForm__button--save'>Register</button>
          </div>
        </div>
  </section>)
}

export default RegisterForm