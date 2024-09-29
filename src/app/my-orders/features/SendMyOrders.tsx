"use client";

import {Button} from "@/shadcdn/ui/button";
import { myOrders } from "./api/myOrders";
import { useState } from "react";
import useSubmit from "@/lib/hooks/useSubmit";

type Props = {
    email: string
}

const SendMyOrders = ({ email }: Props) => {
    const [sended, setSended] = useState(false)

    const {submit} = useSubmit({
        api: myOrders,
        onSuccess: () => {
            setSended(true)
        },
        onFail: (error) => {
            console.log('fail', error);
        }
    })

    const handleSend = () => {
        submit(email)
    }

    return (
        <Button disabled={sended} onClick={handleSend}>Отправить</Button>
    );
};

export default SendMyOrders;
