import React from 'react'

const hello = (req, res) => {
  res.status(200).send([ 'h1', 3, 'g4'])
}

export default hello