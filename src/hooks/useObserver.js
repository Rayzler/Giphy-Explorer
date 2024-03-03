import {useEffect, useRef, useState} from "react";

export function useObserver({distance = "100px", disconnect = true} = {}) {
    const [show, setShow] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onChange = (entries, observer) => {
            if (entries[0].isIntersecting) {
                setShow(true);
                disconnect && observer.disconnect();
            }
            else
                setShow(false);
        }

        const observer = new IntersectionObserver(onChange, {
            "rootMargin": distance
        });
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [disconnect, distance]);

    return [show, ref];
}