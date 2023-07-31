import React from 'react';
import Image from 'next/image';
import { XSquare  } from 'lucide-react';

interface EmptyProps {
    label:string;
}

const Empty = ({label}:EmptyProps) => {
  return (
    <div className='h-full p-20 flex flex-col items-center justify-center'>
        <div className="relateve h-72 w-72">
            <XSquare  className='h-full w-full text-muted-foreground'/>
        </div>
        <p className='text-muted-foreground text-sm text-center'>
            {label}
        </p>
    </div>
  )
}

export default Empty