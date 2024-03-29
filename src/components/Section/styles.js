import styled from 'styled-components'

export const Container = styled.section`
  margin: 5rem auto;

  .backdiv {
    width: fit-content;
    font-size: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 0.5px;
  }

  .backdiv svg {
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .backdiv:hover svg {
    transform: rotate(-360deg);
    scale: 1.2;
  }
  > .backdiv h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 4rem;
    font-weight: 500;
  }

  .wrap {
    width: 100%;
    max-width: 1440px;

    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
    height: 80%;

    > img {
      width: clamp(26.4rem, 21.883rem + 11.887vw, 39rem);
      margin-top: 8rem;
      border-radius: 50%;
      aspect-ratio: 1/1;
    }
  }

  h2 {
    text-align: center;
    font-size: clamp(2.7rem, 2.234rem + 1.226vw, 4rem);
    font-weight: 500;
  }

  p {
    text-align: center;
    font-size: clamp(1.6rem, 1.313rem + 0.755vw, 2.4rem);
    font-weight: 400;
    margin: 2.4rem 0;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: left;
    justify-content: center;

    gap: 1.6rem;

    margin: 1.6rem 0;

    flex-wrap: wrap;

    li {
      padding: 0.4rem 0.8rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};

      white-space: nowrap;
    }
  }

  .inputstepper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-top: 4.8rem;

    gap: 1.5rem;

    > svg {
      font-size: clamp(0.625rem, 0.401rem + 0.59vw, 1.25rem);
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: clamp(0.9rem, 0.721rem + 0.472vw, 1.4rem);
      width: fit-content;
      height: 4rem;

      > svg {
        font-size: 2.3rem;
        margin-right: 0.5rem;
      }
    }
  }

  .input-stepper-child {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;

    margin-right: 3rem;

    > span {
      font-family: 'Roboto';
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
    }
  }
  .cursor-hability-pointer {
    cursor: pointer;
    width: 2.7rem;
    height: 2.7rem;

    &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 50%;
    }
  }
  @media (min-width: 700px) {
    .wrap {
      display: flex;
      flex-direction: row;
      gap: 4rem;

      > img {
        margin-top: unset;
      }
    }
    .dish-info {
      flex: 1;
      height: 74%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .section-title {
      display: flex;
    }

    .section-description,
    .section-ingredients,
    .inputstepper {
      flex-wrap: wrap;
      display: flex;
      justify-content: flex-start;
      text-align: left;
    }

    .inputstepper {
      margin-top: 2rem;
    }
    .section-description {
      margin: unset;
      margin-top: 1rem;
      font-size: 1.8rem;
    }
  }
`
