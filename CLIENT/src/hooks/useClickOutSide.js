function useClickOutSide(ref, setTrigger) {
  let handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setTrigger(false);
    }
  };
  window.addEventListener("mousedown", handleClickOutside);
  return () => {
    window.removeEventListener("mousedown", handleClickOutside);
  };
}

export default useClickOutSide;