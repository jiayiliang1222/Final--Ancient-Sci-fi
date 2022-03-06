# Topic: Ancient Sci-fi
- This project is an improved version of my second project —— Ancient Sci-fi. It is a collection of science-fictional short stories generated by GPT2. The context is that people know that aliens are going to earth. Then people decide to ask ancient intelligent philosophers how to treat those aliens. The dialogue goes depend on the players' attitude towards the aliens. If they regard aliens as good, then it will go to the disucssion about how to treat aliens as humans' new friends. If the attitude is negative, then the militarists will talk about wars between aliens and human beings. The art work is the output displayed on the interactive webpage.
- [Link to Colab](https://colab.research.google.com/drive/1FsXGkDRw8_2EqxsnJx6B3Aj1pmj9usYi?usp=sharing)
- [Link to Webpage ](https://jl10902nyuedu.itch.io/final-ancient-sci-fi)
# Conceptual background
- I find that machine learning, to some extent, enables those great talent who were gone to be brought back to life. Their thinking patterns are hidden inside the quotes/pieces they left to us. And machine learning could study this kind of thinking pattern in an efficient way. 
- As is written in the last writing, this novel is a mix of futuristic alien topic and ancient human wisdom. I try to achieve a balance or a sense of duality when letting the ancient minds answer the questions about the future. I choose four ancient philosophers and assign them into two pairs. The first is two militarists —— Sun Tzu and Napoleon. The second is two philosophers about humanity —— Confucius and Aristotle. The two pairs also display the duality of the West and the East, as well as peace and war.  
# How the Algorithm works
- In order to generate the three paragraphs with GPT2, I created 5 models. The first model is trained by the sci-fi novel <The Dark Forest>. For the second model, I upload Sun Tzu's <The Art of War>. For the third model, I scrape down Napoleon's quotes from a website. I replace words like "enemies" and "opponents" with aliens for the 2nd and 3rd models. 
- Then I upload Confucius's quotes about friendship for the forth model. Finally, I scrape down Aristotle's friendship quotes from another website. For these two groups I replace words like "friends" and "junzi" (which means good people in Chinese) with "aliens". 
- The story structure: 
   - (1) I ask the question to the players —— “How do you think about aliens?”. Then the players can type down the adjective. The code will analyze the sentiment of this adjective. 
   - (2) I begin the story with a line "The alien is coming to earth", and let gpt2 generate the first paragraph with the model of Three Body. 
    - (3) The second paragraph has two directions according to the sentiment of the adjective the player type. If the sentiment is larger than 0 (positive), the paragrapgh will start with the line "To face this new strange guest, people turn to the oldest and the brightest minds for help. \nThe Official:"Masters, how should we fight with the alien?", then the code will generate a saying of Sun Tzu. After that, the code will use the Sun Tzu's saying as a prompt to generate Napoleon's sayings. Thus, a discussion is formed through this kind of repetitive generation. However, if the sentiment is negative, the official will ask: "The Official:"Masters, how should we treat the alien?" Then the dialogue will be generated through the model of Aristotle and Confucius. 
  -(4) Using pyttsx3 library, the code will generate the audio of the dialogues with male voice to simulate the conversation between two philosophers. 
  - (5) Finally, the code will generate an ending using the previous paragraphs as a prompt and a beginning sentence "the alien finally comes" using the Three Body model to talk about what happens when the alien finally arrives.
# Exploring Topics and Difficulties (New Improvements)
- Here are what I add to this projects based on the previous version:
  - I try to give the players a few rights to determine how the story goes. Therefore, I let them type(or select in my final webpage) their attitudes towards the aliens. Their attitude represents the attitudes of human beings in these sci-fi stories.
  - I add another pair of philosophers which represent the side that treat aliens peacefully. Most sci-fi novels depict aliens as an evil image. However, I believe there are still possibilities that aliens are just like friendly exchange scholars and they can teach humans new technologies. That's the reason why I use Confucius and Aristotle as models —— they are all famous for philosophical ideas about peace and friendship. 
  - I try to generate voices to make the dialogue sounds more vivid, which is one of the most difficult parts. The class example is using gtts to make texts speak. However, it can only generate female voice. Therefore, I search on the internet and find the pyttsx3 library. Although the voice library sounds too machine-like in a way, I think it fits with the vibe of sci-fi novels well.
  - I develop the visual aesthetic of the interactive webpage with designed layout and backgrounds.
# How the Presentation Shapes the Readers' Response
- The reason why I choose the interactive webpage as presentation because it gives the player a sense of engagement while reading the novel stories and selecting options. I offer the player a certain amount of right in changing the storylines. Also, the webpage is able to integrate the voice audio with texts, so that the players could have a more immersived experience when reading/listening to the dialogues between ancient philosophers.   
