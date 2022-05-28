// export const trainingTexts: [string, number][] = [
//     ['t1 t1 t2 t2', 0],
//     ['t1 t1 t3', 0],
//     ['t1 t2 t3 t6', 0],
//     ['t4 t4 t5', 1],
//     ['t4 t4 t4 t5', 1],
//     ['t3 t5 t5 t6', 1],
// ]

// export const testingText: string = "t1 t1 t2 t2 t3 t6 t7"

export const trainingTexts: [string, number][] = [
  ['where did he graduate', 0],
  ['where did he study', 0],
  ['he graduated and studies where', 0],
  ['what is his major', 0],
  ['what is his degree', 0],
  ['what is his course', 0],

  ['what does he want to research about', 1],
  ['what is his academic interest', 1],
  ['what does he like to study or specialize in', 1],
  ['what is his field of expertise', 1],
  ['what does he specialized in', 1],

  ['what does he enjoy to do in his free time', 2],
  ['what is his hobby or hobbies', 2],
  ['what anime does he like to watch', 2],
  ['which hololive member does he like or is his favourite', 2],
  ['what does he like and enjoy to do at home', 2],

  ['what is his strength or strengths', 3],
  ['what is his good personality or personalities like', 3],
  ['how does his colleague describe him', 3],

  ['what is his weakness or weaknesses', 4],
  ['what is his bad personality or personalities like', 4],

  ['what does he like to become', 5],
  ['what is his future goal in life', 5],
  ['where does he see himself in 5 five 10 ten 3 three years from now', 5],
  ['what does he want to become a leader or lead in', 5],
  ['what is his end goal in his career', 5],

  ['what is his favourite food', 6],
  ['what is one food or drink you cannot go without', 6],
  ['what does he like to eat', 6],
  ['what food does he love to eat', 6],
  ['what does he eat the most', 6],

  ['how to contacted or contact him', 7],
  ['what is his email, phone number, github, linkedin', 7],
  ['can I speak meet talk to him', 7],

  ['tell me more about him', 8],
  ['who are you', 8],
  ['share describe more about him', 8],

  ['does he have a girlfriend or partner in life', 9],
  ['who does he love or is he married marry', 9],
  ['i love him you and can go out together', 9],

  ['what is his favourite song', 10],
  ['what does he like to listen to', 10],
  ['does he listen to music while studying study', 10],
  ['what music does he like enjoy listening to', 10],
  ['who is his favourite music artist', 10],

  ['is he looking look searching search for a job', 11],

  ['top 3 three traits characters', 12],

  ['what did he do for FYP final year project', 13],
  ['what is his proud proudest achievement or achievements', 13],
  ['what is his most memorable thing in NUS college education', 13],

  ['what kind type of girlfriend is he looking for', 14],

  ['what is one thing he wish to change', 15],
  ['what does he want to improve', 15],

  ['how would you describe NUS college life', 16],

  ['where is he working work at and as now', 17],
  ['what is his currently job', 17],

  ['any advice to your juniors', 18],
  ['any suggestion on how to become smart good like you', 18],
  ['i want to study at nus any advice on how to do well', 18],
];

export const responsesList: { [label: string]: string } = {
  '0': 'I graduated from NUS with a degree in Computer Engineering.',
  '1': 'My research interests are in NLP, RecSys, and CV.',
  '2': 'I like Anime and Hololive. My favourite anime is The Slient Voice and my favourite Hololive member is Sakamata Chloe.',
  '3': 'I am very determined and passionate',
  '4': 'I does not know when to give up.',
  '5': 'I wants to become a ML expert in NLP and RecSys.',
  '6': 'My favourite food is Sushi',
  '7': 'I can be contacted through my email at nwjbrandon@gmail.com.',
  '8': 'I am a techie who likes to build system and products for the greater good.',
  '9': 'I am single and is looking for a girlfriend.',
  '10': 'My favourite song is Final Phase by Flipside',
  '11': 'I am looking for a job in a tech company in Japan.',
  '12': 'Smart, Fun, Cool.',
  '13': 'Building a telerobot arm using pose estimation',
  '14': 'I want a girlfriend who is pretty, smart, and independent, but occasionally an airhead like Yor Forger.',
  '15': 'If I could change one thing, I will change my habit of procrastinating.',
  '16': 'NUS is very competitve, but you learn a lot if you put your mind to it.',
  '17': 'I am currently working on the AICET project under AISG.',
  '18': 'Stay hungry for knowledge.',
};
