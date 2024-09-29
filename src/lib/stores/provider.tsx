"use client";
import React, { createContext, ReactNode } from "react";
import {mainStore} from "@/lib/stores/main/store";
import {userStore} from "@/lib/stores/user/store";

const AppStores = {
    mainStore: mainStore,
    user: userStore,
}
export const StoreContext = createContext(AppStores);

export const StoreWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <StoreContext.Provider value={AppStores}>{children}</StoreContext.Provider>
    );
};
