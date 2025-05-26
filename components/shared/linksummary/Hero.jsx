"use client";
import React, { useState } from "react";

import { github_icon, logoai } from "@/public/assets";

const Hero = () => {
 
  return (
    <header className='w-full pt-24 flex justify-center items-center flex-col'>

      <h1 className='head_text gap-2'>
      لخص مقالك بإستخدام  <br className='max-md:hidden' />
        <span className='orange_gradient  mt-1'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      قم بتبسيط قراءتك باستخدام Summize، وهو برنامج تلخيص المقالات مفتوح المصدر والذي يحول المقالات الطويلة إلى ملخصات واضحة وموجزة      </h2>
    </header>
  );
};

export default Hero;
