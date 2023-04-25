import './index.css'

const cardContainer = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default cardContainer
