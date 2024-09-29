type Log = {
    id: string;
    actorId: string;
    createdAt: Date;
    updatedAt: Date;
    actorName: string;
    targetName: string;
    action: "CREATED-ORDER" | "UPDATED-ORDER" | "DELETED-ORDER" | "CREATED-PRODUCT" | "UPDATED-PRODUCT" | "DELETED-PRODUCT";
    payload: ActionPayload;
};

type LogActionType = Log['action'];
