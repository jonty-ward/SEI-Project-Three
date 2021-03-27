import React from 'react'

const CommentsForm = ({ handleChange, handleSubmit, formData }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comment</label>
          <div>
            <input
              placeholder="Add your comment here.."
              name="text"
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
    </div>
  )
}

export default CommentsForm
