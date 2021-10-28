import { useEffect } from "react";

function useScroll(setTrigger) {
    useEffect(() => {
        let handleScroll = function () {
            let scroll = this.scrollY;
            if (scroll >= 70) {
                setTrigger(true);
            } else {
                setTrigger(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })
} 

export default useScroll;