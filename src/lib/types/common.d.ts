type ErrorModel = {
    errors: Record<string, string[]>;
    type: string;
    title: string;
    status: number;
    traceId: string;
};

type Tokens = {
    accessToken: string;
    refreshToken: string;
};


type AuthNavigationState = {
    prevRoute: string;
};

type IconProps = {
    size?: number;
    color?:string;
    strokeWidth?: number;
    absoluteStrokeWidth?: boolean;
}

type ColumnIdMap<T> = Record<keyof T, string>;
