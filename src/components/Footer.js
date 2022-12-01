import React from "react";

const Footer = () => (
    <footer>
        Created by <span id="rajat">Kalpana</span>
        <br />
        <span>
            <i
                className="fab fa-github"
                onClick={() =>
                    window.open("https://github.com/2010992003", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fa-hackerrank"
                onClick={() =>
                    window.open("https://www.hackerrank.com/kochharkalpana64", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fa-linkedin"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/rajat--m",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-stack-overflow"
                onClick={() =>
                    window.open(
                        "https://stackoverflow.com/users/20658255/kalpana-kochhar",
                        "_blank"
                    )
                }
            ></i>{" "}
            <i
                className="fab fa-twitter"
                onClick={() =>
                    window.open("https://stackoverflow.com/users/20658255/kalpana-kochhar", "_blank")
                }
            ></i>
        </span>
    </footer>
);

export default Footer;
