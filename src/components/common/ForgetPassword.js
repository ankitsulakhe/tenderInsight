export default function ForgetPassword({ forget_password, show, handleShowPassword }) {
    return (
        <div
            className={`mainBoxLogin commonBoxShadow ${show ? "" : "d-none"}`}
        >
            <div className="section-title-p text-center loginBox">
                <p className="wid100">
                    {forget_password}
                </p>
                <form
                    method="post"
                    className="php-email-form"
                >
                    <div className="row">
                        <div className="form-group mb-40">
                            <label>Email</label>
                            <input
                                type="email"
                                name="name"
                                className="form-control"
                                id="forget-email"
                                placeholder="Your Name"
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
                    Back to login{" "}
                </span>
            </div>
        </div>
    )
}