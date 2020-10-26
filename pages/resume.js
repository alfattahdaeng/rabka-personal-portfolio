import React from 'react'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Resume from '../components/Resume'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <div>
      <Header />
      <Resume />
      <Footer />
    </div>
  </Layout>
)

export default Index
