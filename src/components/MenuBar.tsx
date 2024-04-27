import { useState } from 'react'
import { IoIosMenu } from 'react-icons/io/index'

export default function Menu() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((current) => !current)
  }

  return (
    <>
      <button
        aria-label='Menu Button'
        className={
          (isActive ? 'bg-transparent' : '') + ' ' + 'group peer z-10 md:hidden'
        }
        onClick={handleClick}
      >
        <IoIosMenu className='h-7 w-7 opacity-100'></IoIosMenu>
      </button>
      <div
        className={
          (isActive ? 'bg-transparent' : '') +
          ' ' +
          'absolute top-0 left-0 hidden h-screen w-screen peer-[.bg-transparent]:block'
        }
        onClick={handleClick}
      ></div>
      <div className='fixed top-0 -left-48 flex h-screen w-48 justify-center bg-gradient-to-b from-black/80 py-20 duration-500 ease-in-out peer-[.bg-transparent]:translate-x-full md:-left-72 md:w-72'>
        <ul className='flex flex-col gap-3 text-right font-display text-sm font-bold text-white md:gap-8 md:text-lg'>
          <li className='duration-200 hover:-translate-x-3'>
            <a href='/'>Home</a>
          </li>
          <li className='duration-200 hover:-translate-x-3'>
            <a href='/ourteam'>Our Team</a>
          </li>
          <li className='duration-200 hover:-translate-x-3'>
            <a href='/achievements'>Achievements</a>
          </li>
          <li className='duration-200 hover:-translate-x-3'>
            <a href='/outreach'>Outreach</a>
          </li>
          <li className='duration-200 hover:-translate-x-3'>
            <a href='/vtxcads'>VTX CADs</a>
          </li>
        </ul>
      </div>
    </>
  )
}
