
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

type Props = {
    iconBackground: string
    color?: string,
    icon: IconProp,
    heading: string,
    content: string,
    img: string
}

const InfoSection = ({ iconBackground, color, icon, heading, content, img }: Props) => {
    return (
        <section className="auto-height flex-center">
            <div className="height-95 width-95 flex-around wrap margin-vertical-100">
                <div className="height-100 width-47 flex-center flex-column margin-vertical-30">
                    <div className="width-80">
                        <div className="info-bubble flex-center" style={{backgroundColor: `${iconBackground}`}}>
                            <FontAwesomeIcon color={color} icon={icon} />
                        </div>
                    </div>
                    <h4 className="auto-height width-80 margin-vertical-10">{heading}</h4>
                    <p className="medium-paragraph auto-height width-80 margin-vertical-10">{content}</p>
                </div>
                <div className="height-100 width-47 flex-center flex-column relative">
                    <img className="auto-height width-100 flex-center" src={img} />
                </div>
            </div>
        </section>
    )
}

export default InfoSection