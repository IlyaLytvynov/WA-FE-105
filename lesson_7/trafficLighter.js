const ACTIVE_CLASS_NAME = 'active';

const createLighter = (container, delayTime = 2000) => {
  const lights = container.querySelectorAll('.traffic-light__item');

  let intervalId = null;
  let isDirect = true;
  let activeIndex = 0;

  const deactivateLights = () => {
    for (let light of lights) {
      light.classList.remove(ACTIVE_CLASS_NAME);
    }
  };

  const activateLight = () => {
    deactivateLights();
    lights[activeIndex].classList.add(ACTIVE_CLASS_NAME);
  };

  const increaseIndex = () => {
    if (activeIndex < lights.length - 1) {
      activeIndex += 1;
    } else {
      isDirect = false;
      activeIndex = 1;
    }
  };

  const decreaseIndex = () => {
    if (activeIndex > 0) {
      activeIndex -= 1;
    } else {
      isDirect = true;
      activeIndex = lights.length - 2;
    }
  };

  const changeActive = () => {
    if (isDirect) {
      increaseIndex();
    } else {
      decreaseIndex();
    }
  };

  const switchLight = () => {
    deactivateLights();
    changeActive();
    activateLight();
  };

  const startInterval = () => {
    clearInterval(intervalId);
    intervalId = setInterval(switchLight, delayTime);
  };

  const handleEvents = () => {
    for (let i = 0; i < lights.length; i++) {
      lights[i].addEventListener('click', (e) => {
        activeIndex = i;
        activateLight();
        startInterval();
      });
    }
  };

  activateLight();
  handleEvents();
  startInterval();
};

export { createLighter }



