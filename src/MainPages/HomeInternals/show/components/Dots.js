/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => (
  <span
    css={css`
      padding: .6vw;
      margin-right: .5vw;
      border-radius: 50%;
      opacity: 70%;
      background: ${active ? 'black' : 'white'};
    `}
  />
)

const Dots = ({ slides, activeSlide }) => (
  <div
    css={css`
      position: absolute;
      bottom: 2vw;
      width: 100%;
      display: flex;
      align-items: center;
      
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i} />
    ))}
  </div>
)

export default Dots
