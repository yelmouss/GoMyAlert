import React from 'react'

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer({ children }) {
    return (
        <div >
            <div style={phantom}  />

            <div style={style} class="mt-auto bg-dark">
                {children}
                <footer class="footer mt-auto bg-dark">
                    <div class="container">
                        <span class="text-muted">Made with love ❤️ By Yelmouss.</span>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Footer