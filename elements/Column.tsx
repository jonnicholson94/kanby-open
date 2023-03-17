
import { data } from "../data"
import Card from "./Card"

const Column = () => {
    return (
        <div className="card-column height-90 width-27 flex-center flex-column margin-vertical-30">
            <div className="height-10 flex-center width-100 auto-height">
                <h2 className="width-95">Title</h2>
            </div>
            <div className="height-90 width-95 flex-start flex-column">
                { data.map(x => {
                    return <Card key={x.id} />
                })}
            </div>
        </div>
    )
}

export default Column