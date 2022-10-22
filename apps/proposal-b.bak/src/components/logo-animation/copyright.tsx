import React from 'react'

const Copyright = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <div className="text-center leading-[1.26] relative">
      <div className={`text-center font-ng text-[74px] font-bold tracking-[-1.48px] ${isDark ? "text-white" : "text-black"}`}>
        Look beyond the border,<br />
        Evolve your life
      </div>
    </div>
  )
}

export default Copyright