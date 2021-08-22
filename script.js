const projectBoxes = function(gridName) {
  const mainImg = document.querySelector(gridName);
  const projectImg = document.querySelector(`${gridName} > .projectDescription`);
  const projectButton = document.querySelector(`${gridName} .viewProjectButton`);
  const projectFullDetails = document.querySelector(
    `${gridName} > .projectDescription > .projectDetails`
  );
  const projectFullDetailsRemove = document.querySelector(
    `${gridName} .removeDescription`
  );

  mainImg.addEventListener("mouseover", () => {
    projectButton.style.visibility = "visible";
  });

  mainImg.addEventListener("mouseout", () => {
    projectButton.style.visibility = "hidden";
  });

  projectButton.addEventListener("click", () => {
    projectImg.style.visibility = "visible";
  });

  projectFullDetailsRemove.addEventListener("click", () => {
    projectImg.style.visibility = "hidden";
  });
}

projectBoxes(".grid11");
projectBoxes(".grid12");
projectBoxes(".grid21");