"use client";

import { Input } from "@/shadcdn/ui/input";
import {useState} from "react";
import SendMyOrders from "./features/SendMyOrders";

const Form = () => {
    const [email, setEmail] = useState('')

    return (
        <div className="flex gap-[16px] justify-center">
            <Input
                placeholder="Введите email"
                type="email"
                className="w-min"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <SendMyOrders email={email}/>
        </div>
    );
};

export default Form;
