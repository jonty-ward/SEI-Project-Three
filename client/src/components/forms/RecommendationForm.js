import React from 'react'


// parkName: { type: String, required: true },
// activity: { type: String, required: true },
// text: { type: String, required: true },
// image: { type: String },
// owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }

const RecommendationForm = () => {
  return (

    <form  className="Form-field">
      <div>
        <label className="label">Select a Park</label>
        <select 
          name="parkName"
          id="parkName"
        >
          <option> Please Select a Park </option>
          <option> Park 1</option>
          <option> Park 2</option>
          <option> Park 3</option>
          <option>This might be best if the park is done automaticaly when submitting being taken to the submit</option>
        </select>
      </div>
      <div>
        <label className="label">Select an activity </label>
        <select 
          name="parkName"
          id="parkName"
        >
          <option> Please Select an activity  </option>
          <option> activity 1</option>
          <option> activity  2</option>
          <option> activity 3</option>
          <option>activity 4</option>
        </select>
      </div>
      <div className="field">
        <label className="label">Your recommendation</label>
        <div className="control">
          <input
            className="input"
            placeholder="Add your reccomendation here ... "
            name="text"
            value={FormData.text}
            // onChange={handleChange}

          />
        </div>
      </div>


      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            placeholder="Image URL"
            name="image"
            value={FormData.image}
            // onChange={handleChange}

          />
        </div>
      </div>


      <div className="field">
        <label className="label">Blurb</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Blurb ..."
            name="blurb"
            value={FormData.blurb}
            // onChange={handleChange}

          />
        </div>
      </div>
      <div className="field">
        <button type="submit" className="button is-link  is-fullwidth">
          Submit
        </button>
      </div>
    </form>
  
  )
}

export default RecommendationForm
