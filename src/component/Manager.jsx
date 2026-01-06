import React from 'react'
import express from 'express'
import { getManagerScopedMetrics } from '../controllers/analyticsController.js'

const router = express.Router();

router.get( '/manager-analytics/:userId' , getManagerScopedMetrics )



function Manager() {
  return (
    <div>Manager</div>
  )
}

export default Manager