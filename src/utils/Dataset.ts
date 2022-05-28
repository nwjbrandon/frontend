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

  ['what is his favourite song', 9],
  ['what does he like to listen to', 9],
  ['does he listen to music while studying study', 9],
  ['what music does he like enjoy listening to', 9],
  ['who is his favourite music artist', 9],

  ['is he looking look searching search for a job', 10],

  ['top 3 three traits characters', 11],

  ['what did he do for FYP final year project', 12],
  ['what is his proud proudest achievement or achievements', 12],
  ['what is his most memorable thing in NUS college education', 12],

  ['what is one thing he wish to change', 13],
  ['what does he want to improve', 13],

  ['how would you describe NUS college life', 14],

  ['where is he working work at and as now', 15],
  ['what is his currently job', 15],

  ['any advice to your juniors', 16],
  ['any suggestion on how to become smart good like you', 16],
  ['i want to study at nus any advice on how to do well', 16],
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
  '9': 'My favourite song is Final Phase by Flipside',
  '10': 'I am looking for a job in a tech company in Japan.',
  '11': 'Smart, Fun, Cool.',
  '12': 'Building a telerobot arm using pose estimation',
  '13': 'If I could change one thing, I will change my habit of procrastinating.',
  '14': 'NUS is very competitve, but you learn a lot if you put your mind to it.',
  '15': 'I am currently working on the AICET project under AISG.',
  '16': 'Stay hungry for knowledge.',
};

export const stopWordsList: string[] = [
  'a',
  'about',
  'above',
  'after',
  'again',
  'against',
  'ain',
  'all',
  'am',
  'an',
  'and',
  'any',
  'are',
  'aren',
  "aren't",
  'as',
  'at',
  'be',
  'because',
  'been',
  'before',
  'being',
  'below',
  'between',
  'both',
  'but',
  'by',
  'can',
  'couldn',
  "couldn't",
  'd',
  'did',
  'didn',
  "didn't",
  'do',
  'does',
  'doesn',
  "doesn't",
  'doing',
  'don',
  "don't",
  'down',
  'during',
  'each',
  'few',
  'for',
  'from',
  'further',
  'had',
  'hadn',
  "hadn't",
  'has',
  'hasn',
  "hasn't",
  'have',
  'haven',
  "haven't",
  'having',
  'he',
  'her',
  'here',
  'hers',
  'herself',
  'him',
  'himself',
  'his',
  'how',
  'i',
  'if',
  'in',
  'into',
  'is',
  'isn',
  "isn't",
  'it',
  "it's",
  'its',
  'itself',
  'just',
  'll',
  'm',
  'ma',
  'me',
  'mightn',
  "mightn't",
  'more',
  'most',
  'mustn',
  "mustn't",
  'my',
  'myself',
  'needn',
  "needn't",
  'no',
  'nor',
  'not',
  'now',
  'o',
  'of',
  'off',
  'on',
  'once',
  'only',
  'or',
  'other',
  'our',
  'ours',
  'ourselves',
  'out',
  'over',
  'own',
  're',
  's',
  'same',
  'shan',
  "shan't",
  'she',
  "she's",
  'should',
  "should've",
  'shouldn',
  "shouldn't",
  'so',
  'some',
  'such',
  't',
  'than',
  'that',
  "that'll",
  'the',
  'their',
  'theirs',
  'them',
  'themselves',
  'then',
  'there',
  'these',
  'they',
  'this',
  'those',
  'through',
  'to',
  'too',
  'under',
  'until',
  'up',
  've',
  'very',
  'was',
  'wasn',
  "wasn't",
  'we',
  'were',
  'weren',
  "weren't",
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'won',
  "won't",
  'wouldn',
  "wouldn't",
  'y',
  'you',
  "you'd",
  "you'll",
  "you're",
  "you've",
  'your',
  'yours',
  'yourself',
  'yourselves',
];
