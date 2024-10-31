// import './register.css';
import arrow_left from '../../assets/admin/arrow_left_icon.svg';
import arrow_right from '../../assets/admin/arrow_right_icon.svg';
import dcs_logo from '../../assets/admin/dcs_logo.png';

function register(){
    return(
        <section>
            <div class="ultra_container">
                <section>
                    <div class="main_container1">
                        <div class="logo-pic">
                            <img src={dcs_logo} alt="logo" height="550" width="550"/>
                        </div>
                        <div class="caption1">
                            <p>Ensuring a Smooth<br/>
                            Learning Experience,<br/> 
                            Optimizing Lab Effeciency</p>
                            <button class="button2">
                                <img src={arrow_left} alt="left-button"/>
                            </button>
                            <button class="button2">
                                <img src={arrow_right} alt="right-button"/>
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="main_container2">
                        <div class="heading2">
                            <h6>Laboratory<br/> 
                            Maintenance</h6>
                            <h5>Registration</h5>
                        </div>
                        <div class="registration2">
                            <input type="text" placeholder="Name"/>
                            <div class="selection2">
                                <label for="role">Choose a role:</label>
                                <select id="role" name="role">
                                    <option value="faculty">Faculty</option>
                                    <option value="student">Student</option>
                                </select>
                            </div>
                            <input type="text" placeholder="ID Number"/>
                            <input type="text" placeholder="User"/>
                            <input type="text" placeholder="Password"/>
                            <input type="text" placeholder="Confirm Password"/>
                            <button>Register</button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
};

export default register;