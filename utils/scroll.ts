import React from 'react';

export const smoothScrollTo = (e: React.MouseEvent<HTMLElement> | React.MouseEvent, href: string) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);

  if (element) {
    const navHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};