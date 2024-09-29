import { Button } from '@/shadcdn/ui/button'
import {useRouter} from "next/router";

export default function NotFoundError() {
    const router = useRouter()
    return (
        <div className='h-svh'>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                <h1 className='text-[7rem] font-bold leading-tight'>404</h1>
                <span className='font-medium'>Опаа! Куда это ты хочешь попасть?</span>
                <p className='text-center text-muted-foreground'>
                    Похоже такой страницы нету <br/>
                    или она была закрыта
                </p>
                <div className='mt-6 flex gap-4'>
                    <Button variant='outline' onClick={() => router.back()}>
                        Назад
                    </Button>
                    <Button onClick={() => router.push('/')}>Главная</Button>
                </div>
            </div>
        </div>
    )
}
