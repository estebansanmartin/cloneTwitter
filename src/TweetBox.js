import React, { useState } from 'react'
import "./TweetBox.css"
import { Button, Avatar, Input } from '@material-ui/core'
import db from "./firebase"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "estebaaaan",
            username:"estebbb",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"
        });
        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                <Avatar src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"></Avatar>
                <Input 
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="C'osa accade?" 
                    type="text"
                />
                </div>
                <Input 
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox_imageInput"
                    placeholder="optional: upload image" 
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>    
        </div>
    )
}

export default TweetBox
