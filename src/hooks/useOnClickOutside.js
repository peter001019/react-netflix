import React, { useEffect } from 'react'

export default function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)){ /*ref.current가 없거나, 현재 클릭하는 것이 모달에 포함될 때*/
                return;
            }
            handler(); /**클릭하는 것이 모달이 아닐 경우, 모달을 끄는 handler 호출 */
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
}
