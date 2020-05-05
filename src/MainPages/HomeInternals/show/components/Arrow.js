/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 2vw` : `left: 2vw`};
      height: 3vw;
      width: 3vw;
      justify-content: center;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;

      &:hover {
        transform: scale(1.1);
      }

      img {
        transform: translateX(${direction === 'left' ? '-.17' : '.17'}vw);

        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? <img height = "50%"alt = "arrow"src={rightArrow} /> : <img height = "50%" alt = "arrow" src={leftArrow} />}
  </div>
)

export default Arrow
