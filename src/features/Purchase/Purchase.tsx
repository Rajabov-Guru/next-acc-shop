"use client";
import {Button} from "@/shadcdn/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger
} from "@/shadcdn/ui/dialog";
import {Input} from "@/shadcdn/ui/input";
import useStores from "@/lib/hooks/useStores";
import useSubmit from "@/lib/hooks/useSubmit";
import { observer } from "mobx-react-lite";
import {useState} from "react";
import {createOrder} from "@/features/Purchase/api/createOrder";
import { LoadingView } from "@/components/LoadingView";

const Purchase = () => {
    const [dialogOpened, setDialogOpened] = useState(false)
    const {mainStore} = useStores()
    const [email, setEmail] = useState("")

    const reset = () => {
        setEmail("")
    }

    const {submit, isSubmitting} = useSubmit({
        api: createOrder,
        onSuccess: () => {
            reset()
            setDialogOpened(false)
        },
        onFail: () => {}
    })


    const handlePurchase = () => {
        const submitData: OrderRequest = {
            email: email,
            positions: mainStore.basketItems.map((item) => ({
                productId: item.product.id,
                count: item.count
            }))
        }
        submit(submitData)
    }

    const handleCancel = () => {
        reset()
    }

    return (
        <Dialog open={dialogOpened} onOpenChange={(status) => setDialogOpened(status)}>
            <DialogTrigger className="w-full" asChild>
                <Button className="w-min bg-green-600 hover:bg-green-600 text-2xl px-10 py-7">
                    К оплате
                </Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col justify-center">
                <div className="flex flex-col gap-1">
                    <DialogTitle>Укажите вашу почту</DialogTitle>
                    <DialogDescription>Почта необходима для повторного доступа к покупкам</DialogDescription>
                </div>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-1 items-center gap-2">
                        <Input
                            id="email"
                            type="email"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter className="flex justify-between sm:justify-between items-center w-full">
                    <DialogClose asChild>
                        <Button onClick={handleCancel}>
                            Отмена
                        </Button>
                    </DialogClose>
                    <Button
                        disabled={isSubmitting || email === ""}
                        type="submit"
                        className="bg-green-600 hover:bg-green-600"
                        onClick={handlePurchase}>
                        Оплатить
                        {isSubmitting && <LoadingView/>}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default observer(Purchase);
