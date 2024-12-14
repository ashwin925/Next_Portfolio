import React from 'react'

function Navbar() {
  return (
    <div>
      <div
        className=" w-[500px] h-[46px] mt-[0px] ml-[-250px] overflow-hidden absolute z-50"
        style={{
          background: "linear-gradient(60deg, rgba(0, 0, 255, 0.6), rgba(0, 255, 255, 0.5), rgba(0, 0, 255, 0.6))",
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
          boxShadow: '0 0 20px rgba(0, 162, 255, 0.5), inset 0 0 20px rgba(0, 162, 255, 0.3)',
          // backdropFilter: 'blur(5px)',
          border: '3px solid white',
          filter: 'drop-shadow(5px 20px 10px blue)',
          transform: 'rotate(180deg)',
        }}
      >
      <button className='but_1 z-50 text-[20px] mt-[3px] px-[8px] py-[2px] ml-[340px] rounded-xl absolute' style={{transform: 'rotate(180deg)'}}>About</button>
      <button className='but_1 z-50 text-[20px] mt-[3px] px-[8px] py-[2px] ml-[270px] rounded-xl absolute' style={{transform: 'rotate(180deg)'}}>Skills</button>
      <button className='but_1 z-50 text-[20px] mt-[3px] px-[8px] py-[2px] ml-[175px] rounded-xl absolute' style={{transform: 'rotate(180deg)'}}>Projects</button>
      <button className='but_1 z-50 text-[20px] mt-[3px] px-[8px] py-[2px] ml-[85px] rounded-xl absolute' style={{transform: 'rotate(180deg)'}}>Contact</button>
      </div>
      <div
        style={{height: '45px',backgroundColor: 'white',width: '8px',position: 'absolute',transform: 'skew(60deg)',marginLeft: '-215px',marginTop: '0px', zIndex: 50,}}>
      </div>
      <div
      className="w-[387px] h-[20px] mt-[3px] ml-[-606px] relative z-10"
      style={{
        background: "linear-gradient(60deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.6), rgba(0, 0, 255, 0.2))",
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 2% 100%)',
        border: '3px solid white',
        boxShadow: '0 0 20px rgba(0, 162, 255, 0.5)',
        transform: 'rotate(180deg)',
      }}
    />
    <div
        style={{height: '45px',backgroundColor: 'white',width: '8px',position: 'absolute',transform: 'skew(-60deg)',marginLeft: '208px',marginTop: '-20px', zIndex: 50,}}>
      </div>
    <div
      className="poly w-[387px] h-[20px] mt-[-20px] ml-[219px] relative z-10"
      style={{
        background: "linear-gradient(60deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.6), rgba(0, 0, 255, 0.2))",
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 2% 100%)',
        border: '3px solid white',
        boxShadow: '0 0 20px rgba(0, 162, 255, 0.5)',
        transform: 'rotateX(180deg)',
        marginRight: '-800px',
      }}
    />
    </div>
  )
}

export default Navbar;