import React from "react";

function Login({ login_description, handleShowPassword, hide }) {
    return (
        <div className={`mainBoxLogin commonBoxShadow ${hide ? "d-none" : ""}`}>
            <div className="section-title-p text-center loginBox">
                <p className="wid100">{login_description}</p>
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
                <span className="d-block forgotLink" onClick={handleShowPassword}>
                    Forgot Password?{" "}
                </span>
            </div>
        </div>
    )
}

export default Login;