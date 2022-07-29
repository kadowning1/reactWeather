import Link from 'next/link';
import React, { SVGProps } from 'react';
import Image from 'next/image';

interface HeaderProps {
  title: string;
  icon: React.FC,
  href: string;
}

export default function HeaderItem({ icon, title, href }: HeaderProps) {
  return (
    <Link href={href}>
      <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white dark:text-slate-500 text-gray-700'>
        <div className='h-8 mb-1 group-hover:animate-bounce'>
          {/* <Image
            // src={icon as string}
            width={24}
            alt={title}
            height={24}
            layout='fixed'
            className='opacity-0 group-hover:opacity-100'
          /> */}
        </div>
        <p className='opacity-100 group-hover:opacity-100 tracking-widest'>
          {title}
        </p>
      </div>
    </Link>
  );
}