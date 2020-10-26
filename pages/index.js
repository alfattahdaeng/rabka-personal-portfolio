import React from 'react'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  </Layout>
)

export default Index
