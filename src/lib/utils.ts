export const scrollToView = (targetRef: React.RefObject<HTMLDivElement>) => {
    if (targetRef.current) {
        targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}