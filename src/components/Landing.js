import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
    <div className="jumbotron">
        <h1 className="display-4">
            Create your BloG !<span className="full-stop">.</span>
        </h1>
        <main>
            Hi There! This is a blogging platform .
            <br />
            Blogger app is a helpful tool for anyone who wants to update their blog on the go
            <br /> Want to write an awesome blog post?
            <br /> 
        </main>
        <hr className="my-4 gold-hr" />
        <p>Hit the below icon and dive in it!</p>
        <Link
            className="btn btn-outline-primary btn-lg"
            to="/posts"
            role="button"
        >
            Blog Posts
        </Link>
    </div>
);

export default Landing;
