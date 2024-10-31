// import './login.css';
import mail_icon from '../../assets/user/mail_icon.svg';
import lock_icon from '../../assets/user/lock_icon.svg';
import psau_logo from '../../assets/user/psau_logo.png';
import left_icon from '../../assets/admin/arrow_left_icon.svg';
import right_icon from '../../assets/admin/arrow_right_icon.svg';

function login(){
    return(
        <div className="ultra_container">
        <section>
            <div className="main_container1">
                <div className="caption_box1">
                    <p>
                        <span className="h-1">Realtime</span> <br/>
                        <span className="h-2">Maintenance Report System</span> <br/>
                        <span className="tl-1">Maximizing Uptime, <br/>
                        Minimizing Disruptions in Computer Labs</span> 
                    </p>
                </div>
                <div className="form_group1">
                    <div className="input1">
                        <img src={mail_icon} alt="mail"/>
                        <input type="text" placeholder="User"/>
                    </div>
                    <div className="input1">
                        <img src={lock_icon} alt="lock"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <hr/>
                    <button>Log In</button>
                </div>
            </div>
        </section>
        <section>
            <div className="main_container2">
                <div className="logo_box2">
                    <img src={psau_logo} alt="logo" height="550" width="550"/>
                </div>
                <div className="caption_box2">
                    <p>Ensuring a Smooth<br/> 
                    Learning Experience,<br/> 
                    Optimizing Lab Effeciency</p>
                    <button className="button2">
                        <img src={left_icon} alt="left-button"/>
                    </button>
                    <button className="button2">
                        <img src={right_icon} alt="right-button"/>
                    </button>
                </div>
            </div>
        </section>
    </div>
    )
};
export default login;