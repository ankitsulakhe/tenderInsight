export default function ForgetPassword() {
    return (
        <div
            className="mainBoxLogin commonBoxShadow d-none"
            id="forgotBox"
        >
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
                <span className="d-block forgotLink" id="backloginbtn">
                    Back to login{" "}
                </span>
            </div>
        </div>
    )
}