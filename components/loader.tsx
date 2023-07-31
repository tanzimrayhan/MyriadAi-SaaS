import Image from 'next/image'

const Loader = () => {
  return (
    <div className="page-full flex flex-col gap-y-4 items-center justify-center">
        <div className="w-10 h-10 relative animate-bounce">
            <Image
                alt='logo'
                fill
                src={"/bot.png"}
            />
        </div>
        <p className='text-sm text-muted-foreground'>
            Myriad is thinking...
        </p>
    </div>
  )
}

export default Loader