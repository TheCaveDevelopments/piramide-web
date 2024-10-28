export const handleScroll = (event, id, idSection = null) => {
    event.preventDefault();
    const section = document.getElementById(id);
    console.log("scrolling to section", section);
  
    if (!idSection){ 
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
    }
    else{
      const sectionContain = document.getElementById(idSection);
      if (sectionContain && section) {
        const finalScrollPosition = Math.ceil(section.offsetTop + sectionContain.offsetTop);
    
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
    }
  };