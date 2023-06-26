"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

/** 게시물 작성 */
export default function Posts({ blog_name: blog_name }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [blog_name]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/blogs/${blog_name}/category/`
      );
      const data = response.data;

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  async function hanldePosts() {
    try {
      const token = localStorage.getItem("access");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);

      if (image) {
        formData.append("image", image);
      }

      if (topic) {
        formData.append("topic", topic);
      }

      if (category) {
        formData.append("category", category);
      }

      const response = await axios.post(
        `http://127.0.0.1:8000/blogs/${blog_name}/write/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <section>
        <form action={`/${blog_name}`}>
          <div className="board_wrap">
            <div className="board_write">
              <div className="select_cate">
                <Select
                  name="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                >
                  <MenuItem>카테고리없음</MenuItem>
                  {data &&
                    data.map((e) => {
                      return (
                        <MenuItem value={e.id} key={e.id}>
                          {e.category}
                        </MenuItem>
                      );
                    })}
                </Select>
                <Select
                  name="topic"
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Topic"
                >
                  <MenuItem>토픽없음</MenuItem>
                  <MenuItem value="CULTURE">문화</MenuItem>
                  <MenuItem value="LIFE">일상</MenuItem>
                  <MenuItem value="SPORTS">스포츠</MenuItem>
                  <MenuItem value="TRAVEL">여행</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                </Select>
              </div>
              <div class="title">
                <textarea
                  id="outlined-basic"
                  label="title"
                  variant="outlined"
                  placeholder="title"
                  name="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                ></textarea>
              </div>
              <div class="cont">
                <textarea
                  id="filled-basic"
                  label="content"
                  variant="filled"
                  placeholder="content"
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                ></textarea>
              </div>
              {/* <div className="title">
                <TextField
                  id="outlined-basic"
                  label="title"
                  variant="outlined"
                  name="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="cont">
                <TextField
                  id="filled-basic"
                  label="content"
                  variant="filled"
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                />
              </div> */}
              <input
                type="file"
                accept="image/*"
                onChange={(event) => setImage(event.target.files[0])}
              />
              <Button
                className="bt_submit"
                onClick={hanldePosts}
                type="submit"
                endIcon={<SendIcon />}
                variant="contained"
              >
                작성
              </Button>
            </div>
          </div>
          <br />
        </form>
      </section>
    </>
  );
}
