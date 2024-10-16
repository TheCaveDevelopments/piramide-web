export const handleScroll = (event, id) => {
  event.preventDefault();

  const section = document.getElementById(id);

  if (section) {
    const finalScrollPosition = Math.ceil(section.offsetTop);

    window.scrollTo({
      top: finalScrollPosition,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
