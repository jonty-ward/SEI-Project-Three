import React from 'react'

const CommentsForm = ({ handleChange, handleSubmit, formData }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Comment</label>
          <div className="control">
            <input
              className="input"
              placeholder="Add your comment here.."
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Rating</label>
          <div className="control">
            <input
              className="input"
              placeholder="Rating out of 5"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link is-fullwidth" type="submit">
      Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CommentsForm
