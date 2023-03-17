
import Link from "next/link"

const Card = () => {
    return (
        <Link className="auto-height width-95 flex-center flex-column margin-vertical-10 card" href="/">
            <div className="height-45 width-90 flex-center margin-vertical-10">
                <h2 className="width-100">Example title</h2>
            </div>
            <div className="height-45 width-90 flex-around margin-vertical-10">
                <div className="">
                    <p>Category</p>
                </div>
                <div>
                    <p>Date</p>
                </div>
            </div>
        </Link>
    )
}

export default Card