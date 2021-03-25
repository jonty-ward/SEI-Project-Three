import mongoose from 'mongoose'
import { dbURI } from '../config/environments.js'
import user from '../models/user.js'
import Park from '../models/parks.js'
import userData from './data/users.js'
import parkData from './data/parks.js'

const seedDatabaase = async () => {
  try {
    // * Connect to database
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('Database has connected succesfully')

    // * Clear the db
    await mongoose.connection.db.dropDatabase()
    console.log('DB dropped')

    // * Add users to db
    const users = await user.create(userData)
    console.log(`DB seeded with ${users.length} users`)

    // * Add owners to parks
    const parksWithUsers = parkData.map(park => {
      park.owner = users[0]._id
      return park
    })

    // * add parks to db
    const parks = await Park.create(parksWithUsers)
    console.log('Parks >', parks)
    console.log(`DB seeded with ${parks.length} parks`)

    // * close the connection
    await mongoose.connection.close()
    console.log('Bye')


  } catch (err) {
    console.log(err)
    await mongoose.connection.close()
    console.log('Bye')
  }
}
seedDatabaase()