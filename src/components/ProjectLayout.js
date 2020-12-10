import React from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'


const ProjectLayout = ({children}) => {
    return (
        <>
      <Header />

        <div className="container mx-auto max-w-4xl font-sans w-11/12 md:w-full ">
            {children}
        </div>
      <Footer />
        </>
    )

}

export default ProjectLayout;