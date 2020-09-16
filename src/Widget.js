import React from 'react'
import "./Widget.css"
import SearchIcon from "@material-ui/icons/Search"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
    TwitterFollowButton
} from "react-twitter-embed"

function Widget() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>what's happening</h2>
                <TwitterFollowButton
                    screenName={'resourcesantips'}
                 />
                <TwitterTweetEmbed tweetId={"1288787873743937536"} />

                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="resourcesantips"
                    options={{ height: 400 }}
                />

                <TwitterShareButton 
                    url={"https://estebansanmartin.it"}
                    options={{ text:"React es asombroso", via:"resourcesantips" }}
                />
            </div>
        </div>
    )
}

export default Widget
