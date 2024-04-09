'use client'

import React, { useRef } from "react";

export default function Home() {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <div>
            <main className>
                <lottie-player id='firstLottie' ref={ref} autoplay loop mode='normal' src='https://lottie.host/6ec9450d-4292-4bef-8b52-7c8b8221f46c/GezYe92vJ8.json' style={{ width: "500px", height: "500px" }}></lottie-player>
            </main>
        </div>
    );
}
