import React from 'react'
import { Routes, Route } from "react-router-dom";
import Inbox from './src/components/Inbox';

const Router = () => {
  return (
    <Routes>
    <Route path="/inbox" element={<Inbox />} />

  </Routes>
  )
}

export default Router