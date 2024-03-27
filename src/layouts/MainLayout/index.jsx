import React from 'react'

const MainLayout = () => {
  return (
    <MainContextProvider>
        <AuthContextProvider>
            <div className="page-wrapper">
                <Header />
                <Outlet />
                <Footer />
            </div>
            <ScrollTop />
            <MobileMenu />
            <AuthenModal />
        </AuthContextProvider>
    </MainContextProvider>
  )
}

export default MainLayout