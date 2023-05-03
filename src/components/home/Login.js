import React from "react";

function Login() {
    return (
        <div className="mainBoxLogin commonBoxShadow" id="loginBox">
            <div className="section-title-p text-center loginBox">
                <p className="wid100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod.
                </p>
                <form
                    method="post"
                    className="php-email-form"
                >
                    <div className="row">
                        <div className="form-group mb-40">
                            <label>Username</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required=""
                            />
                        </div>
                        <div className="form-group mb-40">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Your Password"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="commonBtn loginBtn">
                            Login
                        </button>
                    </div>
                </form>
                <span className="d-block forgotLink" id="fogotLoginbtn">
                    Forgot Password?{" "}
                </span>
            </div>
        </div>
    )
}

export default Login;