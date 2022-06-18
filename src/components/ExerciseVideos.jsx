import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";

  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p='20px'>
      <Typography variant='h4' mb='33px'>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0px" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <Box>
            <a
              key={index}
              className='exercise-video'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                className='image-video'
              />
              <Box>
                <Typography variant='h6' color='#000' mb='10px'>
                  {item.video.title}
                </Typography>
                <Typography variant='h7' color='#000'>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
