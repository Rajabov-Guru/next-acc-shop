import { Webhook } from "lucide-react";
import {CategoryList} from "@/components/Categories";
const SideBar = () => {
    return (
        <div className="lg:w-1/4 px-[15px] bg-app_section_background rounded-[6px] flex-shrink-0 h-min">
            <div className="flex flex-col gap-[32px] pt-5">
                <div className="flex flex-col px-4">
                    <p className="uppercase font-bold">
                        Аккаунты Фейсбук ᐉ Купить аккаунт Фейсбук для рекламы - Fresh Accounts
                    </p>
                    <p className="text-[13px] text-app_secondary_text">
                        Магазин качественных аккаунтов
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <Webhook size={200}/>
                </div>
                <CategoryList/>
            </div>
        </div>
    );
};

export default SideBar;
