import React, { useEffect, useState } from "react";
import { Text, Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";

const Carousel = () => {
  const slides = [
    {
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 5000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, []);

  return (
    <Flex
      w="full"
      overflow="hidden"
      style={{ borderRadius: `25px` }}
      boxShadow="2xl"
    >
      <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
        {slides.map((slide, sid) => (
          <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
            <Text
              color="white"
              fontSize="xs"
              p="8px 12px"
              pos="absolute"
              top="0"
              whiteSpace="nowrap"
            >
              {sid + 1} / {slidesCount}
            </Text>
            <Image src={slide.img} boxSize="full" backgroundSize="cover" />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Carousel;
