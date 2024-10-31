// import './home.css';

function home(){
    return(
        <div className="ultra_container1">
        <div className="main_route_button1">
            <div className="sub_route_button1">
                <button>
                    <img src="../assets/dashboard_icon.svg" alt=""/>
                    <p>DASHBOARD</p>
                </button>
                <button>
                    <img src="../assets/health_icon.svg" alt=""/>
                    <p>HEALTH</p>
                </button>
                <button>
                    <img src="../assets/info_icon.svg" alt=""/>
                    <p>INFO</p>
                </button>
                <button>
                    <img src="../assets/location_icon.svg" alt=""/>
                    <p>LOCATION</p>
                </button>
                <button>
                    <img src="../assets/message_icon.svg" alt=""/>
                    <p>CONTACT</p>
                </button>
                <button>
                    <img src="../assets/about_icon.svg" alt=""/>
                    <p>ABOUT</p>
                </button>
            </div>
            <section className="button_container1">
                <button className="whole_button1">
                    <div>
                        <img src="../assets/health_icon.svg" alt=""/>
                        <p>COMPUTER HEALTH</p>
                    </div>
                    <div>
                        <p>13</p>
                        <div>
                            <img src="../assets/alert_icon.svg" alt=""/>
                            <p>issue</p>
                        </div>
                        <div>
                            <div>
                                <p>5</p>
                                <p>hardware</p>
                            </div>
                            <div>
                                <p>8</p>
                                <p>software</p>
                            </div>
                        </div>
                    </div>
                </button>
                <button className="half_button1">
                    <div>
                        <img src="../assets/info_icon.svg" alt=""/>
                        <p>COMPUTER INFORMATION</p>
                    </div>
                    <div>
                        <p>72</p>
                        <p>computers</p>
                    </div>
                </button>
                <button className="half_button1">
                    <div>
                        <img src="../assets/location_icon.svg" alt=""/>
                        <p>ROUTER</p>
                    </div>
                    <div>
                        <p>3</p>
                        <p>locations</p>
                    </div>
                </button>
                <button className="half_button1">
                    <div>
                        <img src="../assets/message_icon.svg" alt=""/>
                        <p>CONTACT</p>
                    </div>
                    <div>
                        <p>message technician on duty</p>
                    </div>
                </button>
                <button className="whole_button1">
                    <div>
                        <img src="../assets/about_icon.svg" alt=""/>
                        <p>ABOUT</p>
                    </div>
                    <div>
                        <p>"Computers are powerful tools- <br/>when well-maintained, they <br/> empower to achieve the impossible."</p>
                    </div>
                </button>
            </section>
        </div>
    </div>
    )
};

export default home;