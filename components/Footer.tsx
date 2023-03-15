
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
    return (
        <footer className="footer auto-height flex-center flex-column">
            <div className="width-80 flex-center margin-top-40">
                <FontAwesomeIcon className="footer-copyright margin-right-10" icon={faCopyright} />
                <p className="footer-copyright">Kanby { new Date().getFullYear() }</p>
            </div>
           <p className="footer-content margin-vertical-50">Made with care, by Jon Nicholson</p> 
        </footer>
    )
}

export default Footer