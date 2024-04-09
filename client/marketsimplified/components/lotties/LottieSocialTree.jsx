import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const LottieSocialTree = ({ src, width, height, ...rest }) => {
    const ref = useRef(null);

    useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: ref.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            ...rest,
            path: src,
        });
        return () => animation.destroy();
    }, [src, rest]);

    return <div ref={ref} style={{ width, height }} />;
};

export default LottieSocialTree