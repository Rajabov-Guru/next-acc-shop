'use client'

import {cn} from "@/lib/utils";

interface GeneralErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function GlobalError({error}: GeneralErrorProps) {
    const tgLink = "https://t.me/afros_rajabov";

    return (
        <div className={cn('h-svh w-full')}>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                <h1 className='text-[7rem] font-bold leading-tight'>500</h1>
                <span className='font-medium'>Упс, что-то пошло не так {`:')`}</span>
                <span className='font-medium'>{error.message}</span>
                <p className='text-center text-muted-foreground'>
                    Кто виноват? <br />
                    Напиши мне <a href={tgLink} className="text-blue-600">@afros-rajabov</a>  если F5 не поможет
                </p>
            </div>
        </div>
    )
}
