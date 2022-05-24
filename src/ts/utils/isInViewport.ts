const isInViewport = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight - 5 || document.documentElement.clientHeight - 5) &&
        rect.right <= (window.innerWidth - 5 || document.documentElement.clientWidth - 5)
    );
};

export default isInViewport;;