import React from 'react'
import { airbnb, men } from '../Assests';
import { Avatar, Stack } from '@mui/material';
import Bottomheader from './Bottomheader';

function Header() {
  return (
    <div>
      <div className=" redLi sticky top-0 border-b-2 border-gray-300 flex justify-between items-center">
        <div className="px-10 py-10">
          <img className="w-36" src={airbnb} alt="airbnb" />
        </div>
        <div>
          <ul className="flex ">
            <li className="px-10 font-sans font-semibold text-2xl ">Stays</li>
            <li className="px-10 font-sans text-2xl text-slate-500 cursor-pointer hover:text-zinc-700 ">
              Experiences
            </li>
            <li className="px-10 font-sans text-2xl text-slate-500 cursor-pointer hover:text-zinc-700 ">
              Online Experiences
            </li>
          </ul>
        </div>

        <div className="px-8 w-28">
          <Stack>
            <Avatar alt="Remy Sharp" src={men} />
          </Stack>
        </div>
      </div>
      <Bottomheader />
    </div>
  );
}

export default Header
