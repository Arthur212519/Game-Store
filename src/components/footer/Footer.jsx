import "./footer.css"
import { RxDiscordLogo } from "react-icons/rx";
import { AiFillFacebook } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
const Footer = () => {
    return (
        <div className="footer">
            <div className="contacts">
                <RxDiscordLogo className="icons-style"/>
                <AiFillFacebook className="icons-style" />
                <ImTwitter className="icons-style" />
            </div>
            <div className="footer-text">
                <h2>Created by</h2>
                <p>Arthur Santos</p>
            </div>
        </div>

    )
}

export { Footer }