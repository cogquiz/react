export const smoothScrollToElement = (elementId: any) => {
  const targetElement = document.getElementById(elementId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};
