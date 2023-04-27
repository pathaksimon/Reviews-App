import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  clickingright = () => {
    const {reviewsList} = this.props
    const lengtha = reviewsList.length - 1
    const {count} = this.state
    if (count < lengtha) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  clickingleft = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  imgUrl2 = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    console.log(count)
    const filtering = reviewsList[count]
    const {imgUrl, username, companyName, description} = filtering
    return imgUrl
  }

  username2 = () => {
    const {reviewsList} = this.props
    const {count} = this.state

    const filtering = reviewsList[count]
    const {imgUrl, username, companyName, description} = filtering
    return username
  }

  company2 = () => {
    const {reviewsList} = this.props
    const {count} = this.state

    const filtering = reviewsList[count]
    const {imgUrl, username, companyName, description} = filtering
    return companyName
  }

  description2 = () => {
    const {reviewsList} = this.props
    const {count} = this.state

    const filtering = reviewsList[count]
    const {imgUrl, username, companyName, description} = filtering
    return description
  }

  render() {
    const {reviewsList} = this.props
    const imgUrl = this.imgUrl2()
    const username2 = this.username2()
    const CompanyName = this.company2()
    const Description = this.description2()
    return (
      <div className="bg-container">
        <div className="card1">
          <h1>Reviews</h1>
          <img src={imgUrl} alt={username2} />

          <div className="centerone">
            <button
              onClick={this.clickingleft}
              testid="leftArrow"
              className="button1"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>

            <p>{username2}</p>
            <button
              onClick={this.clickingright}
              testid="rightArrow"
              className="button1"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <div>
            <p>{CompanyName}</p>
            <p>{Description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
