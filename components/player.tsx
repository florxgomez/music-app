import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
  RangeSliderFilledTrack,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            icon={<MdShuffle />}
          />
        </ButtonGroup>
        <ButtonGroup>
          <IconButton
            outline="none"
            variant="link"
            aria-label="skip"
            fontSize="24px"
            icon={<MdSkipPrevious />}
          />
          <ButtonGroup>
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="40px"
              icon={<MdOutlinePlayCircleFilled />}
              color="white"
            />
            <ButtonGroup>
              <IconButton
                outline="none"
                variant="link"
                aria-label="pause"
                fontSize="40px"
                color="white"
                icon={<MdOutlinePauseCircleFilled />}
              />
              <ButtonGroup>
                <IconButton
                  outline="none"
                  variant="link"
                  aria-label="next"
                  fontSize="24px"
                  icon={<MdSkipNext />}
                />
                <ButtonGroup>
                  <IconButton
                    outline="none"
                    variant="link"
                    aria-label="shuffle"
                    fontSize="24px"
                    icon={<MdOutlineRepeat />}
                  />
                </ButtonGroup>
              </ButtonGroup>
            </ButtonGroup>
          </ButtonGroup>
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="x-small">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              aria-label={["min, max"]}
              step={0.1}
              min={0}
              max={321}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="x-small">321</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
