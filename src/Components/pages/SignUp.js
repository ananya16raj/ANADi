
import './SignUp.css';
import '../../App.css';


const SignUp = () => {
    return(
        <><div className='sign-up'>
            <form className='form'>
                <h1>
                    Get started with us today!
                    
                </h1>
                <div id="box">
                    <div className='form-inputs'>
                        {/* <label htmlFor='username'
                            className='form-label'>

                            Username:  
                        </label> */}
                        <span class = "fa fa-user"></span>
                        <input
                            id='username'
                            type='text'
                            name='username'
                            className='form-input'
                            placeholder='Enter your username' />
                    </div>
                    <div className='form-inputs'>
                        <span class ="fa fa-envelope"></span>
                        <input
                            id='email'
                            type='email'
                            name='email'
                            className='form-input'
                            placeholder='Enter your email' />
                    </div>

                    <div className='form-inputs'>
                        <span class ="fa fa-lock"></span>
                        <input
                            // id='password'
                            type='password'
                            name='password'
                            class='pass-key'
                            className='form-input'
                            placeholder='Enter your password'/ >
                        <span class="show">SHOW</span>
                        {/* </input> */}
                    </div>
                    <div class="space"></div>
                    <button className="form-input-btn"
                        type="submit">
                        Sign Up
                    </button><br></br>
                    
                    <span className="form-input-login">
                        Already have an account?Login <a href="#">here</a>
                    </span>
                    <div class ="login">Or login with</div>
                    <div class = "links">
                        <div class ="facebook">
                            <i class = "fab fa-facebook-f"><span>Facebook</span></i>
                        </div>
                        <div class = "gmail">
                            <i class = "fab fa-google"><span>Gmail</span></i>
                        </div>
                    </div>
                
                </div>
                    </form>
           
        </div>
        </>
    )

    const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click",function(){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#3498db";

    }
    else{
        pass_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#222";
    }
})
}


export default SignUp;
    
