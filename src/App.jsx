import React from 'react'


function opentab() {
  document.getElementById('mydiv').style.width = "275px";
}

function closetab() {
  document.getElementById('mydiv').style.width = "0";

}

const mystyle = {
  fontSize: "20px",
  paddingTop: "10px",
  paddingLeft: "30px",
  cursor: "pointer"
}

const mydivstyle = {
  position: "relative",
  top: "240px",
  right: "250px",
  fontSize: "20px"
}


const App = () => {
  return (
    <>

      {/* ***************Sidemenu section************************ */}

      <div className='maindiv'>
        <div id='mydiv'>

          <div className="mydiv1">
            <i class="ri-grid-fill"></i>
            <p style={mystyle}>Dashboard</p>
          </div>

          <div className="mydiv1">
            <i class="ri-account-circle-line"></i>
            <p style={mystyle}>Users</p>
          </div>

          <div className='xdiv' onClick={closetab}><i class="ri-close-line"></i></div>

        </div>


        {/* ***************Navbar Section**************** */}




        <div className='navbar'>
            <span onClick={opentab} id='sidemenu'><i class="ri-menu-fill"></i></span>

            <div className='dash'>
              <p>Dashboard</p>
            </div>

            <div className='btn'>
              <div className='btn1'>
                <button className='ctn'>C</button>
              </div>
            </div>
        </div>

        <div className='homediv'>
          <i class="ri-reactjs-line"></i>
          <p style={mydivstyle}>"First solve the problem then write the <span style={{ color: "red" }}>Code !</span> "</p>
        </div>

      </div>
    </>
  )
}

export default App;
