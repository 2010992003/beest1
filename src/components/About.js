import React from "react";

const About = () => {
    return (
        <div className="about">
            <h1>
                About<span className="full-stop">.</span>
            </h1>
            <main>
                <p>
                    Blogging app that lets a user dig
                    into a topic of choice and write a blog post, or read one of
                    the already uploaded Blog posts.
                </p>
                <p>
                    one can write his/her own blog post , you can go to login using one of your social account and start penning your thoughts!
                </p>
                <p>
                    you can edit your Blog post at any time, as long as you're
                    logged in. If you ever feel like your post is no longer a
                    valid representation of your thoughts, you can also delete
                    it at any instant of time.
                </p>
                <p>
                   
                    <br />
                   
                </p>
                <hr className="gold-hr" />
                <p>
                    If you ever feel the need to  drop a
                    suggestion , feel free
                    to contact me using the links in the footer.
                    <span className="full-stop">.</span>
                </p>
            </main>
        </div>
    );
};

export default About;
