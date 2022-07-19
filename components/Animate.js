import { gsap } from 'gsap';

export const onEnter = ({ currentTarget }) => {
  // setIsHovering(true);
  gsap.to(currentTarget, {
    scale: 1.16
  })
}

export const onLeave = ({ currentTarget }) => {
  // setIsHovering(false);
  gsap.to(currentTarget, {
    scale: 1
  });
}