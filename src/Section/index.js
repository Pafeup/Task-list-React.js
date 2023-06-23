import "./style.css"

const Section = ({ title, body, extraHeaderContent}) => (
    <section className="section">
        <header className="section__header">
            <h3 className="section__headerName">{title}</h3>
            {extraHeaderContent}
        </header>
        {body}
    </section>
)

export default Section