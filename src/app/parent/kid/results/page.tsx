'use client'

import React, { useState } from 'react';
import Resultbar from '../../components/class/result/Resultbar';
import {Upload} from '../../components/class/result/Upload';
import Texam from '../../components/class/result/Texam';
import KidsResult from '../../components/parent/results/KidsResults';

const Page = () => {

  return (
    <div>
      <Resultbar />
      <div className="w-full mt-0 md:mt-8 bg-white py-0 md:py-5 px-0 md:px-9">
          <KidsResult />
       
      </div>
    </div>
  );
};

export default Page;
