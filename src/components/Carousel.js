import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';
import styled from 'styled-components';
SwiperCore.use([Pagination]);

const Wrapper = styled.div`
  flex: 1;
  padding: 6rem 0 6rem 4rem;
  width: 50%;
  min-height: 100vh;
  max-height: 140vh;
  .swiper {
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .swiper-pagination {
      bottom: 0;
      span {
        height: 36px;
        width: 36px;
        background: ${({ theme }) => theme.colors.secondary_yellow};
        opacity: 1;
        margin: 0 0.5rem;
        &.swiper-pagination-bullet-active {
          background: ${({ theme }) => theme.colors.main_yellow};
        }
      }
    }
  }
`;

export const Carousel = () => {
  return (
    <Wrapper>
      <Swiper pagination={{ clickable: true }} className="mySwiper">
        <SwiperSlide>
          <img src="/img/04.png" alt="kids04" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/05.png" alt="kids05" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/06.png" alt="kids06" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
