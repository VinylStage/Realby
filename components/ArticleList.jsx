"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

/** 게시글 리스트 */
export default function ArticleList({ blog_name: blog_name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/blogs/${blog_name}/detail/`
      );
      const data = response.data.results;

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data &&
        data.map((e) => {
          return (
            <ul key={e.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Link href={`/${blog_name}/articles/${e.id}`}>
                title : {e.title}
              </Link>
              <li>content : {e.content}</li>
              <li>created_at : {e.created_at}</li>
              <li>=================</li>
            </ul>
          );
        })}
      <div>ArticleList</div>
    </>
  );
}
