import Link from 'next/link';

interface HeaderItemProps {
  icon?: any;
  title?: string;
  href: string;
}

export default function HeaderItem({ icon, title, href }: HeaderItemProps) {
  return (
    <Link href={href}>
      <div className='flex flex-col items-center cursor-pointer group hover:text-gray-700 dark:text-slate-500 text-black'>
        <div>
          {icon && <svg className='h-8 mb-1 group-hover:animate-bounce' />}
        </div>
        <p className='opacity-100 group-hover:opacity-100 tracking-widest'>
          {title}
        </p>
      </div>
    </Link>
  );
}