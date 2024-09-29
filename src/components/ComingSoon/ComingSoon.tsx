import {PlaneIcon} from "lucide-react";

export default function ComingSoon() {
    return (
        <div className='h-full py-[45px]'>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                <PlaneIcon size={72} />
                <h1 className='text-4xl font-bold leading-tight'>Скоро буит 👀</h1>
                <p className='text-center text-muted-foreground'>
                    Эта страницу мы делаем (точнее я делаю) прямо сейчас. <br />
                    Терпение!
                </p>
            </div>
        </div>
    )
}
