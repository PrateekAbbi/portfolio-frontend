import React, { useEffect, useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, Card, TextInput } from "@mantine/core";
import {
  DeviceFloppy,
  BrandLinkedin,
  BrandGithub,
  BrandInstagram,
} from "tabler-icons-react";

const SocialMediaLinks = () => {
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://portfolio-backend-7oyj6co60-prateekabbi-ufledu.vercel.app/socialMediaApi/socialMediaLinksDetails"
      )
      .then((data) => {
        setLinkedIn(data.data.linkedIn);
        setGithub(data.data.github);
        setInstagram(data.data.instagram);
      });
  }, []);

  const handleSave = () => {
    axios
      .put(
        "https://portfolio-backend-7oyj6co60-prateekabbi-ufledu.vercel.app/socialMediaApi/socialMediaLinks",
        {
          linkedIn,
          github,
          instagram,
        }
      )
      .then((data) => {
        toast(`Updated successfully!`, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "success",
        });
      });
  };

  return (
    <div style={{ padding: "26px 16px" }}>
      <Card
        shadow="lg"
        p="lg"
        style={{ backgroundColor: "#2a3748", marginBottom: 15 }}
      >
        <TextInput
          label="LinkedIn"
          icon={<BrandLinkedin />}
          labelProps={{ color: "red" }}
          styles={{
            defaultVariant: { backgroundColor: "#2a3748" },
            input: { color: "#fff" },
            label: { color: "#f4c427" },
          }}
          value={linkedIn}
          onChange={(event) => setLinkedIn(event.target.value)}
        />
      </Card>

      <Card
        shadow="lg"
        p="lg"
        style={{ backgroundColor: "#2a3748", marginBottom: 15 }}
      >
        <TextInput
          label="Git Hub"
          icon={<BrandGithub />}
          styles={{
            defaultVariant: { backgroundColor: "#2a3748" },
            input: { color: "#fff" },
            label: { color: "#f4c427" },
          }}
          value={github}
          onChange={(event) => setGithub(event.target.value)}
        />
      </Card>

      <Card
        shadow="lg"
        p="lg"
        style={{ backgroundColor: "#2a3748", marginBottom: 15 }}
      >
        <TextInput
          label="Instagram"
          icon={<BrandInstagram />}
          styles={{
            defaultVariant: { backgroundColor: "#2a3748" },
            input: { color: "#fff" },
            label: { color: "#f4c427" },
          }}
          value={instagram}
          onChange={(event) => setInstagram(event.target.value)}
        />
      </Card>

      <Button
        variant="outline"
        style={{
          color: "#f4c427",
          border: "2px solid #2a3748",
        }}
        rightIcon={<DeviceFloppy />}
        sx={() => ({
          zIndex: 3,
          float: "right",
          "&:hover": {
            backgroundColor: "#2a3748",
          },
        })}
        onClick={handleSave}
      >
        Save
      </Button>
      <ToastContainer />
    </div>
  );
};

export default SocialMediaLinks;
