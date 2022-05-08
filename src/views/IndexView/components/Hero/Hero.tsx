import React, { useState } from "react";
import Typed from "react-typed";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import HeroBG from "svg/illustrations/HeroBG";
import { renderToStaticMarkup } from "react-dom/server";
import Container from "components/Container";

const images = [
  {
    group: [
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img1.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img4.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png",
      },
    ],
  },
  {
    group: [
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img13.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img10.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img7.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png",
      },
    ],
  },
  {
    group: [
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img6.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img6--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img24.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img17.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png",
      },
      {
        cover:
          "https://assets.maccarianagency.com/screenshots/the-front/img12.png",
        coverDark:
          "https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png",
      },
    ],
  },
];

const Hero = (): JSX.Element => {
  const [walletAddy, setWalletAddy] = useState("");
  async function requestAccount() {
    console.log("Requesting Account");
    //Check if metamask extension is installed
    if (window.ethereum) {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts, "accounts");
        setWalletAddy(accounts[0]);
      } catch (error) {
        console.log("Error connecting", error);
      }
    } else {
      console.log("Metamask Not Detected");
    }
  }
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  // convert component to string useable in data-uri
  const svgString = encodeURIComponent(renderToStaticMarkup(<HeroBG />));

  return (
    <Box
      sx={{
        backgroundImage: `url("data:image/svg+xml,${svgString}")`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        position: "relative",
      }}
    >
      <Box paddingY={{ xs: 0, sm: "4rem", md: "8rem" }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: "50%" }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              FirepotSwap 🍲
            </Typography>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: 400 }}
            >
              The very first Dex & DeFi platform on the Ambrosus blockchain.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}
              marginTop={5}
              marginBottom={2}
            >
              <Button
                component={"a"}
                variant="contained"
                color="primary"
                size="large"
                onClick={requestAccount}
                fullWidth={isMd ? false : true}
              >
                Connect Wallet
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: "100%", md: "auto" }}
              >
                <Button
                  component={"a"}
                  href={"/docs/introduction"}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Connect Email
                </Button>
              </Box>
            </Box>
            <Typography
              component="p"
              color="text.primary"
              sx={{ fontWeight: 400 }}
            >
              Connect your wallet or email to receive an upcoming early access
              utility NFT.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
        component={"svg"}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: "100%",
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.level1}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
