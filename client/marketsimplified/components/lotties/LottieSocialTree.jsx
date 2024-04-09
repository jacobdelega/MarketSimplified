import React, { useEffect, useRef, useState } from "react";

const LottieSocialTree = ({ src, width, height, ...rest }) => {
    const ref = useRef(null);
    const [animationCreated, setAnimationCreated] = useState(false);

    useEffect(() => {
        if (typeof document !== "undefined" && !animationCreated) {
            import("lottie-web").then((Lottie) => {
                const animation = Lottie.loadAnimation({
                    container: ref.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    ...rest,
                    path: src,
                });
                setAnimationCreated(true);
                return () => animation.destroy();
            });
        }
    }, [src, animationCreated]);

    return <div ref={ref} style={{ width, height }} />;
};

export default LottieSocialTree;
