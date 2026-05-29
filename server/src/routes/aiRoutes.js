const express = require("express");

const axios = require("axios");

const router = express.Router();

router.post("/summarize", async (req, res) => {

  try {

    const { text } = req.body;
    const MAX_CHARS=4000;
    const truncatedText=
      text.length>MAX_CHARS
        ? text.slice(0,MAX_CHARS)
        : text;
    console.log(
      `Original Length: ${text.length}`
    );
    console.log(
      `Sent Length: ${truncatedText.length}`
    );

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "microsoft/phi-3-mini-128k-instruct:free",

        messages: [

          {
            role: "system",

            content:
              "You are an accessibility assistant. Explain documents in simple language. Give a short summary, key points, and important actions the user should take.",
          },

          {
            role: "user",

            content: `Summarize this document in simple language:
            
            ${truncatedText}
            
            Format:
            1.summary
            2.key points
            3.actions required`,
          },
        ],
      },

      {
        headers: {

          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);

    res.json({

      success: true,

      summary: response.data.choices[0].message.content,
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({

      success: false,

      message: "AI summarization failed",
    });

  }

});

module.exports = router;