import React from 'react'

const [formData, setFormData] = useState({
  text: '',
  rating: ''
})

const handleChange = event => {
  const newFormData = { ...formData, [event.target.name]: event.target.value }
  setFormData(newFormData)
}


const ParkCommentForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Comment</label>
        <div>
          <input
            placeholder="Add your comment here.."
            name="Comment"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label>Rating</label>
        <div>
          <input
            placeholder="Rating out of 5"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button type="submit">
      Submit
        </button>
      </div>
    </form>
  )
}

export default ParkCommentForm
