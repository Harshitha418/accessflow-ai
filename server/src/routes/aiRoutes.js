const express = require("express");

const axios = require("axios");

const router = express.Router();

router.post("/summarize", async (req, res) => {

  try {

    const { text } = req.body;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "openai/gpt-3.5-turbo",

        messages: [

          {
            role: "system",

            content:
              "You simplify public-service and official documents into easy-to-understand explanations.",
          },

          {
            role: "user",

            content: `Summarize this document:\n\n${text}`,
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