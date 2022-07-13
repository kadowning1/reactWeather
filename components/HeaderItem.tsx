

interface HeaderItemProps {
  Icon?: React.ComponentProps<'svg'>
  title?: string
}

export default function HeaderItem({ Icon, title }: HeaderItemProps) {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
      <div>

      </div>
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
        {title}
      </p>
    </div>
  );
}