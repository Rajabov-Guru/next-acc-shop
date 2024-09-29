import { House } from 'lucide-react'
import {defaultRoute} from "@/lib/consts/routes";
import Link from 'next/link';

const GoHome = () => {
    return (
        <Link href={defaultRoute} className="flex px-[24px] bg-app_primary h-full flex-col align-middle rounded-l-[6px]">
            <House color={'white'} className="my-auto" size={20}/>
        </Link>
    );
};

export default GoHome;
