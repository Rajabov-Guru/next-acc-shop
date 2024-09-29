"use client"
import { LoaderCircle } from "lucide-react";


const LoadingView = (props: IconProps) => {
    return (
        <LoaderCircle {...props} className={'animate-spin'} />
    );
};

export default LoadingView;
