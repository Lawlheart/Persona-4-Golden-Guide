var list = ["fool","magician","priestess","empress","emperor","hierophant","lovers","chariot","justice","hermit","fortune","strength","hangedman","death","temperance","devil","tower","star","moon","sun","judgement","aeon","jester"];

function Slink(arcana, name, rank1, notes) {
	this.arcana = arcana;
	this.name = name;
	this.notes = notes;
	this.rank = [rank1];
	this.img = arcana.toLowerCase();
}
function Dialog(question, answers) {
	this.question = question;
	this.answers = answers;
}
// 0.   Fool Arcana
	var fool = new Slink("Fool","Investigation Group","Automatic upon clearing Yukiko's Castle", "The Fool Social Link progresses automatically as you complete the story")
	fool.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"Automatic on April 30th",
		dialog:[]
	}
	fool.rank[2] = {
		rank:"Rank 3",
		points:0,
		notes:"Automatic on May 18th",
		dialog:[]
	}
	fool.rank[3] = {
		rank:"Rank 4",
		points:0,
		notes:"Automatic on June 6th",
		dialog:[]
	}
	fool.rank[4] = {
		rank:"Rank 5",
		points:0,
		notes:"Automatic on July 7th",
		dialog:[]
	}
	fool.rank[5] = {
		rank:"Rank 6",
		points:0,
		notes:"Automatic on July 7th",
		dialog:[]
	}
	fool.rank[6] = {
		rank:"Rank 7",
		points:0,
		notes:"Automatic on July 27th",
		dialog:[]
	}
	fool.rank[7] = {
		rank:"Rank 8",
		points:0,
		notes:"Automatic on October 6th",
		dialog:[]
	}
	fool.rank[8] = {
		rank:"Rank 9",
		points:0,
		notes:"Automatic on November 6th",
		dialog:[]
	}
	fool.rank[9] = {
		rank:"Rank 10",
		points:0,
		notes:"Automatic on December 3rd",
		dialog:[]
	}
// I.   Magician Arcana
	var magician = new Slink("Magician", "Yosuke Hanamura", "Automatic on April 16th", "")
	magician.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"",
		dialog:[
			new Dialog("Yosuke: Sorry about that. You know me, i'm infamous around here.",[["It must be tough.",3,3],["You're bragging about it?",0,0],["Why are you infamous?",0,0]])
	]}
	magician.rank[2] = {
		rank:"Rank 3",
		points:2,
		notes:"",
		dialog:[
			new Dialog("Yosuke: Wait a minute... Am I starting to sound like Teddie?",[["He's sounding like you too.",0,0],["Teddie's cute.",1,2],["Hmm, you're looking hairier.",3,3]]),
			new Dialog("Yosuke: Looks like someone got my address. I get a lot of spam.",[["You don't block them?",0,0],["Why, not change addresses?",0,0],["Eh, what can you do.",0,0]])
	]}
	magician.rank[3] = {
		rank:"Rank 4",
		points:3,
		notes:"",
		dialog:[
			new Dialog("Yosuke: Phew, i'm beat... i am not the complaints department...",[["That must be hard.",1,1],["Don't strain yourself.",1,2],["You're incredible.",2,3]]),
			new Dialog("Yosuke:I have to do what i can...",[["That's the spirit!",2,3],["Don't get too excited.",0,0],["What can you do?",0,0]])
	]}
	magician.rank[4] = {
		rank:"Rank 5",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Yosuke: So...? You keep the goods under your futon?",[["Of course.",3,3],["Huh?",3,3],["What, don't you?",2,3]]),
			new Dialog("Yosuke: So, you ever invited a girl in here?",[["I have.",2,3],["I haven't.",2,3],["I will Soon.",3,3]])
	]}
	magician.rank[5] = {
		rank:"Rank 6",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Yosuke: But hey, I'm glad you were there! Thanks.",[["No Problem.",3,3],["Tell me next time!",2,3],["It was fun.",2,3]]),
			new Dialog("Yosuke: So... there's no need to bother with outsiders.",[["You're right.",3,3],["Man, you're mature.",2,3],["No need to hold back.",2,2]])
	]}
	magician.rank[6] = {
		rank:"Rank 7",
		points:6,
		notes:"",
		dialog:[
			new Dialog("They started to badmouth Saki-senpai",[["Shut up!",0,0],["Calm down man... (Level 3 Understanding Required",0,0],["I feel bad for Saki-senpai",0,0]]),
			new Dialog("Yosuke: I just blurted out a buncha crap, huh?",[["You were just upset.",0,0],["Feel better now?",0,0],["I know how it is.",0,0]])
	]}
	magician.rank[7] = {
		rank:"Rank 8",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Yosuke: But then...",[["She dumped you?",0,0],["She died?",0,0]]),
			new Dialog("Yosuke I'm sorry... Saki-senpai. I'm sorry... Main Character.",[["Just take it slow.",0,0],["I understand.",0,0],[".Don't apologize.",0,0]]),
			new Dialog("Main Character... I think i'm all cried out... (Only Available if you pick the Pick the 3rd Choice then the 1st Choice on the Rank 6 to 7)",[["Pat his head.",0,0],["Hug him.",0,0],["Leave him be.",0,0]])
	]}
	magician.rank[8] = {
		rank:"Rank 9",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Yosuke is smiling sadly...",[["Cheer Up.",2,2],["Still sad about Saki-senpai?",0,0],["Be a man. Stand up straight.",0,0]]),
			new Dialog("Yosuke: Just being born, living your life... Before you know it, you're already special to someone.",[["You're right.",3,3],["That's not true.",2,3],["I don't get it.",2,3]])
	]}
	magician.rank[9] = {
		rank:"Rank 10",
		points:8,
		notes:"",
		dialog:[
			new Dialog("Yosuke: I like you for that, and I'm proud of you... But  I guess I was jealous at the same time.",[["I didn't know.",0,0],["It can't be helped.",0,0],["I guess?",0,0]]),
			new Dialog("Will hitting Yousuke make you and him equal...?",[["Hitting you won't do that.",0,0],["Then let's get equal.",0,0]])
	]}
// II.  Priestess Arcana
	var priestess = new Slink("Priestess", "Yukiko Amagi", "Automatic on May 17th", "");
	priestess.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"",
		dialog:[
			new Dialog("Yukiko: Sensei recommended this book to me because it has details on a bunch of different job licenses...",[["Going to apply for one?",2,3],["Sensei?",2,2]]),
			new Dialog("Yukiko: I was thinking something along the lines of an interior decorator... what you think?",[["Sounds good.",3,3],["What's that?",2,2],["Your decide.",0,0]])
	]}
	priestess.rank[2] = {
		rank:"Rank 3",
		points:2,
		notes:"",
		dialog:[
			new Dialog("Yukiko: Even eggs come in so many varieties...",[["Making dinner at the inn?",2,3],["On a errand?",2,2]]),
			new Dialog("Yukiko: So i'm going to get some practice while i can!",[["Good luck.",3,3],["There's no point.",0,0],["Any other skills?",0,0]]),
			new Dialog("Yukiko: W-Will...you?",[["Count me in!  (Level 4 Courage Required)",3,3],["I don't mind.",2,2],["I dunno.",0,0]])
	]}
	priestess.rank[3] = {
		rank:"Rank 4",
		points:2,
		notes:"",
		dialog:[
			new Dialog("For some reason, an unusually pungent smell hangs in the air.",[["Let's Eat! (Level 3 Courage Required)",3,3],["Hold on, my stomach...",2,2],["Have you tried it?",2,2]]),
			new Dialog("Yukiko looks sad...",[["There's always next time.",3,3],["This won't cut it",0,0],["Can I toss this?",0,0]]),
			new Dialog("Yukiko: Umm ... I'm sorry to drag you around...",[["Its okay.",2,2],["It was fun.",3,3],["Just don't feed me.",2,2]])
	]}
	priestess.rank[4] = {
		rank:"Rank 5",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Yukiko: Then the furniture department. I want to look at the desk. Those and the lamps...",[["What's all this for?",2,3],["Can you carry all that?",0,0]]),
			new Dialog("Yukiko:  Those people are from some TV station. They wanted to cover the Amagi Inn.",[["Sounds good to me.",0,0],["You said no?",0,0]]),
			new Dialog("Yukiko: ...I'd feel better about leaving.",[["Are you serious?",0,0],["That's Selfish.",0,0]])
	]}
	priestess.rank[5] = {
		rank:"Rank 6",
		points:5,
		notes:"",
		dialog:[
			new Dialog("Yukiko: I wrote down everything I need, so this shouldn't take that long.",[["What are you making?",0,0],["Gotten any better yet?",2,2]]),
			new Dialog("Yukiko: But it's not turning out quite like it does in the book, even though I'm following the directions.",[["Get someone to teach you.",0,0],["Keep practicing.",2,3],["Want me to teach you?",0,0]]),
			new Dialog("Yukiko: Are they that worried about my cooking...?",[["You're pretty bad.",0,0],["If you started a fire...",0,0],["They care about you.",3,3]])
	]}
	priestess.rank[6] = {
		rank:"Rank 7",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Yukiko: Once I leave this town... I won't be able to come here again,will I...?",[["You're not coming back?",0,0],["You're really leaving?",0,0]]),
			new Dialog("Yukiko: They all have the wrong idea... I'm really sorry...",[["It's okay.",2,3],["They're not mistaken.",2,3]])
	]}
	priestess.rank[7] = {
		rank:"Rank 8",
		points:7,
		notes:"",
		dialog:[
			new Dialog("Yukiko: I'm sorry, I have to go.",[["An interview?",0,0],["You're going to be on TV?",0,0]]),
			new Dialog("Yukiko: W-Was I scary?",[["Yeah you were.",0,0],["You were cool.",3,3],["You should've said more.",2,3]])
	]}
	priestess.rank[8] = {
		rank:"Rank 9",
		points:8,
		notes:"",
		dialog:[
			new Dialog("Yukiko: Are you going to wish for something, Main Character-kun?",[["For everyone...",2,3],["For me.",1,2],["For you...",2,3],["It's a Secret.",0,0]]),
			new Dialog("Yukiko: I-is it okay... for me to ask...?",[["You're my classmate.",0,0],["You're my friend.",0,0],["I really like you. (Lovers Relationship)",0,0]])
	]}
	priestess.rank[9] = {
		rank:"Rank 10 (lovers)",
		points:8,
		notes:"",
		dialog:[
			new Dialog("Yukiko: Umm, sorry... I don't know what to talk about...",[["The futon good with you?",0,0],["The sofa good with you?",0,0],["The floor good with you?",0,0]]),
			new Dialog("Yukiko: That's why... I'm going to stay here. By my own will.",[["That's good.",0,0],["Did you think it over?",0,0],["Good luck.",0,0]]),
			new Dialog("Yukiko: It's a charm from that shrine... To protect you.",[["Thank you.",0,0],["You'll protect me.",0,0]])
	]}
	priestess.rank[10] = {
		rank:"Rank 10 (friends)",
		points:8,
		notes:"",
		dialog:[
			new Dialog("Yukiko: That's why... I'm going to stay here. By my own will.",[["That's good.",0,0],["Did you think it over? ",0,0],["Good luck.",0,0]]),
			new Dialog("Yukiko: It's the charm from that shrine... To protect you. well.",[["Thank you.",0,0],["Relying on the gods?",0,0]])
	]}
// III. Empress Arcana
	var empress = new Slink("Empress", "Margaret", "Starting from May 19, enter the Velvet Room to access the Empress's Social Link. (Level 3 Knowledge is required)", "")
	empress.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"Make a Ippon-datara (Hermit) with the Skill Sukukaja",
		dialog:[]
	}
	empress.rank[2] = {
		rank:"Rank 3",
		points:0,
		notes:"Make a Matador (Death) with the Skill Mahama",
		dialog:[]
	}
	empress.rank[3] = {
		rank:"Rank 4",
		points:0,
		notes:"Make a Gdon (Sun) with the Skill Rampage",
		dialog:[]
	}
	empress.rank[4] = {
		rank:"Rank 5",
		points:0,
		notes:"Make a Neko-shogun(Star) with the skill Bufula",
		dialog:[]
	}
	empress.rank[5] = {
		rank:"Rank 6",
		points:0,
		notes:"Make a Black Frost(Fool) with the skill Auto-Sukukaja",
		dialog:[]
	}
	empress.rank[6] = {
		rank:"Rank 7",
		points:0,
		notes:"Make a Yatagarusu(Sun) with the skill Megido",
		dialog:[]
	}
	empress.rank[7] = {
		rank:"Rank 8",
		points:0,
		notes:"Make a Yatsufusa(Hanged-Man) with the skill Mediarama",
		dialog:[]
	}
	empress.rank[8] = {
		rank:"Rank 9",
		points:0,
		notes:"Make a Ganesha(Star) with the skill Tetrakam",
		dialog:[]
	}
	empress.rank[9] = {
		rank:"Rank 10",
		points:0,
		notes:"Make a Trumpeter(Judgement) with the skill Mind Charge",
		dialog:[]
	}
// IV.  Emperor Arcana
	var emperor = new Slink("Emperor", "Kanji Tatsumi", "Starting from June 9th, go to the school, on Learning Building 2F, there's a female student located near the middle Staircase. She'll mention about Kanji Threatening people. After you have spoken to her. Go find Kanji at Practice Building 1F. Speak to him and pick the first choice 'Yes I do.' to activate the Social Link.","" )
	emperor.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"",
		dialog:[
	  new Dialog("Kanji: She's always apologizing for me. She's been sprouting more and more white hairs...",[["Apologize to her.",2,3],["You just need to change.",3,3],["That's what kids do.",2,2]])
	]}
	emperor.rank[2] = {
		rank:"Rank 3",
		points:2,
		notes:"",
		dialog:[
	  new Dialog("Kanji: ... ...",[["Get ahold of yourself.", 0, 0],["Let's hurry. ", 0, 0],["What happened?", 0, 0]]),
	   new Dialog("Kanji: Sorry. Looks like it was no big deal..",[["That's good. ", 0,, 0],[" I don't blame you.", 0, 0], ["You wuss.    ", 0, 0]]),
	   new Dialog("Kanji's Mother: He's always had trouble getting along with people. He didn't have any friends like you before.",[["Because of his hobbies? ", 0, 0],["Because of his looks?", 0, 0],["Because of his attitude? ", 0, 0]])
	]} 
	emperor.rank[3] = {
		rank:"Rank 4",
		points:2,
		notes:"",
		dialog:[
			new Dialog("Kanji: Ughh... When you met Ma at the Hospital... She say anything about me?",[["Plenty. ", 3, 3],["Nothing in particular", 2, 2],["I forget.", 0, 0]]),
			new Dialog("Kanji: Oh, uhh... I'm gonna go now.",[["Violence isn't the answer.", 2, 3],["I'll go with you. ", 3, 3]]),
			new Dialog("Kanji: Oh... Anyways, sorry 'bout dragging you into this...",[[" Too bad that you didn't find it", 0, 0],["That was boring", 0,0],["you're giving him a new one? ", 2, 3]])
	]}
	emperor.rank[4] = {
		rank:"Rank 5",
		points:4,
		notes:"",
		dialog:[
		 new Dialog("Kanji: Er...",[["Just tell him the truth.  ", 0,0],["This old man here made it. ", 0, 0]]),
		 new Dialog("Kanji: Hah, he said I'm cool...",[["It was pretty amazing.", 3,3],["Don't get cocky.", 0, 2]])
	]}
	emperor.rank[5] = {
		rank:"Rank 6",
		points:6,
		notes:"",
		dialog:[
		new Dialog("Kanji: Strange situation I got myself into, ain't it?",[["Its good for you.", 0, 0],["You're not happy?", 0, 0],["Looks like a pain... ", 0, 0]])
	]}
	emperor.rank[6] = {
		rank:"Rank 7",
		points:4,
		notes:"",
		dialog:[
		new Dialog("Kanji: That okay with you 'big bro'?",[["Don't call me bro.", 0, 3],["Yeah go ahead.", 0, 3],["I want to learn too", 3, 3]]),
		 new Dialog("Kanji: There's something else I gotta confront too, ain't there?",[["1.Your weak heart.", 0, 0],["Your past.", 0, 0],["I'm drawing a blank.", 0, 0]])
	]}
	emperor.rank[7] = {
		rank:"Rank 8",
		points:5,
		notes:"",
		dialog:[
		new Dialog("Police Officer: ... Come with me.",[["On what charges? ", 0, 0],["Kanji didn't do anything.", 0, 3],["You got a warrant? ", 3, 3]]),
		new Dialog("Police Officer: Hmph, so you admit it. Not a shread of remorse, either.",[["it's a misunderstanding. ", 0, 0],["He was just being nice", 0, 0]]),
		 new Dialog("Police Officer: What a load of... There's no way you're getting me to believe that.",[["Believe it!", 0, 3],["The truth is the truth.", 0, 2],["Tell him, Kanji.", 3, 3]])
	]}
	emperor.rank[8] = {
		rank:"Rank 9",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Kanji: Its the first time I went on my own... Well, I had a lot to tell him.",[["Tell him?", 2, 2],["Why didn't you go before?", 2, 3],["How was it?", 3, 3]]),
			new Dialog("Kanji: As long as there's someone like that snot-nosed kid to accept me, I ain't afraid of nothing!",[["Good for you.", 3, 2],["Find more of them.", 2, 3],["Your own self? ", 0, 0]])
	]}
	emperor.rank[9] = {
	rank:"Rank 10",
	points:6,
	notes:"",
	dialog:[
	]}
// V.   Hierophant Arcana
	var hierophant = new Slink("Hierophant", "Ryotaro Dojima","Talk to Dojima starting from May 6th.","Dojima's social link advances at night, and his availability is determined by the current dungeon. If it's finished, Dojima gets his ")
	hierophant.rank[1] = {
		rank:"Rank 2 (Requires LV 2 Expression)",
		points:0,
		notes:"",
		dialog:[
			new Dialog("Dojima: So... What have you been doing after school?",[["Hanging with Friends.",1,2],["Club meetings.",0,0],["Working.",3,3],["Nothing.",0,0]]),
			new Dialog("Dojima: But its not as if we have much in common... except for the murders.",[["Do you still suspect me?",0,0],["Not good at talking?",1,2],["Tell me about yourself.",2,3]]),
			new Dialog("Dojima: You're more like a very young brother to me then a son.",[["That's stretching it.",3,3],["Should i call you big bro?",2,3]])
	]}
	hierophant.rank[2] = {
		rank:"Rank 3",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Dojima: When is always, huh...?",[["Why not play with her?",0,0],["I feel sorry for her.",0,0],["Not good with kids?",0,0]]),
			new Dialog("Dojima: Plus... I'm not fit to be her family.",[["Why?",0,0],["Fit or not, you're family.",2,3],["I don't get it.",2,3]])
	]}
	hierophant.rank[3] = {
		rank:"Rank 4 (Requires Lv 3 Expression)",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Dojima: All we've got is instant, though. How do you take it?",[["Black",2,3],["With cream.",3,3],["Cream and sugar.",2,3],["Surprise me.",2,3]]),
			new Dialog("Dojima: Go watch TV with Nanako. I'll bring it to you when it's ready.",[["You don't have to do that.",2,3],["Thank you.",1,2]])
	]}
	hierophant.rank[4] = {
		rank:"Rank 5 (Requires Lv 4 Expression)",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Dojima: Oh...Sorry, I wasn't talking about you.",[["Looking for something?",0,0],["Can I help?",2,3],["Working at home? ",1,2]]),
			new Dialog("Dojima: Its Late. Go to Sleep",[["Are you okay?",2,3],["What was that about?",1,2],["But Nanako?",2,3]])
	]}
	hierophant.rank[5] = {
		rank:"Rank 6",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Dojima: Let's stop there.",[["Let's not.",1,2],["Even if its about family?",1,2],["Then let's go outside.",2,3]]),
			new Dialog("Dojima: I don't need a private life to do that. ...Nanako will understand.",[["You're right.",0,0],["Is that what she wants?",0,0],["That's just an excuse.",0,0]])
	]}
	hierophant.rank[6] = {
		rank:"Rank 7",
		points:5,
		notes:"",
		dialog:[
			new Dialog("Dojima: I can do that anytime.",[["When is 'anytime'?",0,0],["This is more important, huh?",1,2]])
	]}
	hierophant.rank[7] = {
		rank:"Rank 8",
		points:5,
		notes:"",
		dialog:[
			new Dialog("Dojima: Sorry, but my hands are full here.",[["Working at home again?",0,0],["Buying a new car?",0,0],["Want some coffee?",2,3]]),
			new Dialog("Dojima: Do you understand why?",[["Because of Nanako.",1,2],["Because her killer's loose.",1,2],["Because you're a coward.(LV 5 Courage Required)",3,3]])
	]}
	hierophant.rank[8] = {
		rank:"Rank 9",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Dojima: Er... Sorry about making you go along with this today.",[["I don't mind.",1,2],["It was fun.",2,3],["Ask me next time.",1,2]]),
			new Dialog("Dojima: That's why I used revenge as an excuse to spend time away from her...",[["Was it hard?",3,3],["Do you regret it now?",1,2],["You've stopped running?",2,3]])
	]}
	hierophant.rank[9] = {
		rank:"Rank 10",
		points:8,
		notes:"",
		dialog:[
			new Dialog("Dojima: This is your personal mug. Write your name on it later.",[["Thank you.",2,3],["What am I using now?",1,2],["My name? That's okay.",2,3]]),
			new Dialog("Dojima: Main Character, take care of Nanako.",[["Go get'em.",3,3],["Be careful.",3,3],["Leave it to me.",3,3]])
	]}
// VI.  Lovers Arcana
	var lovers = new Slink("Lovers", "Rise Kujikawa", "Automatic on July 23rd", "");
	lovers.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"",
		dialog:[
			new Dialog("Rise: But it's a little embarrassing to show up alone, you know?",[["Why?",1,2],["So you don't eat out?",2,3],["Just order takeout.",3,3]])
	]}
	lovers.rank[2] = {
		rank:"Rank 3",
		points:2,
		notes:"",
		dialog:[
			new Dialog("Rise: It'll take time to get back, so let's walk around quick!",[["You come here often?",3,3],["Can't you shop in Inaba...?",2,3],["What are you looking for?",2,3]])
	]}
	lovers.rank[3] = {
		rank:"Rank 4",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Rise is worried...",[["Yell.",0,0],["Call the police.",2,3],["Grab her hand and run.",3,3]]),
			new Dialog("Rise looks desperate...",[["Go along with her.",3,3],["Deny it.",0,0]]),
			new Dialog("Rise: I'm sorry...  Lying about marrying you and all...",[["I don't mind.",3,3],["Lying is wrong.",0,0],["It... It was a lie?",2,3]])
	]}
	lovers.rank[4] = {
		rank:"Rank 5",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Rise: Senpai, have you ever thought that you're pushing yourself too far, or that you were just acting...?",[["All the time.",3,3],["Sometimes...",2,3],["Not really.",1,2]]),
			new Dialog("Rise: You're with me right now because i am Risette, yeah?",[["That's right.",0,0],["No.",2,3],["I don't know.",3,3]])
	]}
	lovers.rank[5] = {
		rank:"Rank 6",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Inoue: A fan letter came, you see...",[["Give it to her yourself.",0,0],["Does she even need them?",0,0],["Why so interested in her?",0,0]]),
			new Dialog("Rise: To think i trusted him... I feel betrayed!",[["That's not nice.",0,0],["He's worried about you.",0,0],["You're really quitting?",0,0]]),
			new Dialog("Rise: I gave up on being Risette. I can't meet her expectations...",[["Having second thoughts?",2,3],["This was your decision.",0,0],["She'll understand. (Requires LV 5 Understanding)",2,3]]),
			new Dialog("Rise: Doesn't that sound fun? H-How about it? Haha...Ha...",[["Sounds great.",2,3],["If you're serious...",3,3],["I can't decide that now.",0,0]])
	]}
	lovers.rank[6] = {
		rank:"Rank 7",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Rise: ... She was cute, so i figured she would sell.",[["She's cute huh?",0,0],["Jealous?",0,0],["That's good isn't it?",0,0]]),
			new Dialog("Rise: You like having such a cute underclassman, right? I'm an ex-idol, after all.",[["I'm happy.",1,2],["I'm miserable.",0,0],["That part doesn't matter.",2,3]]),
			new Dialog("Rise looks helpless...",[["Cheer her up.",2,3],["Move closer to her.",3,3],["Laugh it off. (Requires LV 5 Courage)",3,3]])
	]}
	lovers.rank[7] = {
		rank:"Rank 8",
		points:8,
		notes:"",
		dialog:[
			new Dialog("Rise: Senpai... I... I don't know why I'm crying...",[["You mustn't cry!",0,0],["Cry all you want.",0,0]]),
			new Dialog("...You sense this is an important moment. There's no turning back.",[["Hold her. (Lovers Relationship)",0,0],["Stand there.",0,0]])
	]}
	lovers.rank[8] = {
		rank:"Rank 9",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Rise: And yet... I felt so angry about it... Why do you think that is?",[["You regret leaving.",2,3],["You're selfish.",2,3],["Risette is Rise, too.",3,3]])
	]}
	lovers.rank[9] = {
		rank:"Rank 10 (Lovers)",
		points:9,
		notes:"",
		dialog:[
			new Dialog("Rise: I'll ask the man himself! So-where do you hide them!?",[["What do you mean?",0,0],["You want to see?",0,0],["I don't have any.",0,0]])
	]}
	lovers.rank[9] = {
		rank:"Rank 10 (Friends)",
		points:9,
		notes:"No choices available",
		dialog:[
	]}
// VII. Chariot Arcana
	var chariot = new Slink("Chariot", "Chie Satonaka", "Automatic on April 18th","")
	chariot.rank[1] = {
		rank:"Rank 2",
		points: 0,
		notes:"",
		dialog:[
			new Dialog("Chie: Still, now's the time to train right?", [["Right.",3,3], ["For what?",0,0]]), 
			new Dialog("Chie: ...no?", [["I'm cool with it.",2,3], ["I guess so...",1,2], ["What a pain",0,0]])
	]};
	chariot.rank[2] = {
		rank:"Rank 3",
		points:3,
		notes:"",
		dialog:[
			new Dialog("Chie: But me, I totally lose it. kinda funny, huh?", [["It's Cute (Requires LV 3 Courage)",3,3],["It's very feminine",2,3],["What a pain.",0,0]])
	]};
	chariot.rank[3] = {
		rank:"Rank 4",
		points:3,
		notes:"",
		dialog:[
			new Dialog("Chie: W-Well...",[["Exactly.",0,0],["None of Your business.",2,2],["Quit bagging on her(Requires LV 3 Courage)",3,3]]),
			new Dialog("What Should you do?",[["Crack a joke",2,3],["Badmouth about Takeshi",2,2],["Hold Chie's hand (Requires Courage)",3,3]])
	]};
	chariot.rank[4] = {
		rank:"Rank 5",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Chie: Mmmm... The meat and rice just flow through my veins...",[["Wolfing it down, huh? ",2,3],["Looks delicious.",3,3],["You look so happy.",3,3]]),
			new Dialog("Chie: I hope she's not straining herself. Makes you worry, huh?",[["I'll look out for her.",3,3],["Yukiko isn't that weak.",2,3],["I worry more for you.",3,3]])
	]};
	chariot.rank[5] = {
		rank:"Rank 6",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Chie: What cowards, ganging up on the weak like that!",[["Exactly.",3,3],["It's eat or be eaten.",0,0]]),
			new Dialog("Chie: We'll grab'em and make them apologize! Right, Leader?",[["Of course.",3,3],["Let the police handle it.",0,0],["What a pain.",0,0]])
	]};
	chariot.rank[6] = {
		rank:"Rank 7",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Things aren't looking good...",[["Hold Chie back.(requires LV 4 Courage)",0,0],["Fight them yourself.",0,0]]),
			new Dialog("Chie: I charged in by myself and caused you trouble",[["It's not Trouble.",2,2],["I'm used to it.",0,0],["Just think next time.",0,0]])
	]};
	chariot.rank[7] = {
		rank:"Rank 8",
		points:5,
		notes:"",
		dialog:[
			new Dialog("Chie: I feel like I missed the point...",[["There's still time.",2,3],["That's the first step.",3,3],["It's hard to face yourself.",2,3]])
	]};
	chariot.rank[8] = {
		rank:"Rank 9",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Things aren't looking good...",[["Let Chie do her thing.",0,0],["Shield Chie.",0,0],["Fight with Chie.",0,0]]),
			new Dialog("Chie: ...Was that stupid of me?",[["It all turned out okay.",2,3],["You protected that kid.",3,3],["That was reckless.",0,0]]),
			new Dialog("What to do?",[["Will you be my girlfriend? (Lovers Relationship)",0,0],["I'm counting on you.",0,0]])
	]};
	chariot.rank[9] = {
		rank:"Rank 10 (lovers)",
		points:10,
		notes:"",
		dialog:[
			new Dialog("Chie: Oh w-well, how did the room you had back home look?",[["It was cleaner.",0,0],["It was messier.",3,3],[" It was about the same.",2,3]]),
			new Dialog("Chie: I was thinking... maybe both of us together...",[["That sounds good.",3,3],["You're on your own.",0,0]]),
			new Dialog("What should you do?",[["Embrace.",0,0],["Do nothing.",0,0]]),
			new Dialog("Chie: Wh-What am I saying...?",[["Don't worry.",0,0],["That just like you Chie.",0,0]])
	]};
	chariot.rank[10] = {
		rank:"Rank 10 (friends)",
		points:10,
		notes:"",
		dialog:[
			new Dialog("Chie: We are always teammates, that's it!",[["Certainly",0,0],["We can be more than that.",0,0]])
	]}
// VIII. Justice Arcana
  var justice = new Slink("Justice", "Nanako Dojima", "Automatic on May 3rd.", "Nanako's schedule is determined on whether you finish the dungeon or not. Whenever you have Dojima around, you cannot access Nanako's Social link")
	justice.rank[1] = {
	  rank:"Rank 2",
	  points: 3,
	  notes:"",
	  dialog:[
		  new Dialog("Nanako is fidgeting.", [["What's wrong?",1,2],["Go ahead and ask.",2,3]]),
		  new Dialog("Nanako: Are you an only child?", [["That's right",3,3],["Nope  (Prompts you to Question 3)",0,0]]),
		  new Dialog("Nanako: Hmmm... Then do you have a little sister? (If you pick the 2nd choice from the last question)", [["I do.",0,0],["I don't.",0,0],["I have you.",3,3]]),
	]}
	justice.rank[2] = {
	  rank:"Rank 3",
	  points: 6,
	  notes:"",
	  dialog:[
		  new Dialog("Nanako: Dad'll be disappointed.", [["I'll go buy some.",3,3],["Lets go buy some together.",3,3],["He'll live.",0,0]]),
		  new Dialog("Nanako looks sad.", [["I am sorry.",0,0],["Hear her out.",0,0],["It's not Nanako's fault. (Required Lv 3 Expression) +3",3,3]]),
	]}
	justice.rank[3] = {
	  rank:"Rank 4 (Required Lv 3 Expression)",
	  points: 9,
	  notes:"",
	  dialog:[
		  new Dialog("Nanako is nodding her head cheerfully.", [["hy all these questions?",0,0],["s there anything else?",2,3]]),
		  new Dialog("Nanako: What happens to a person when they die?", [["They disappear.",0,0],["They go to heaven.",3,3],["I don't know",1,2]]),
		  new Dialog("Nanako: Why do bad people do bad things?", [["They have no choice.",0,0],["Because they enjoy it.",0,0],["I don't know.",1,2]]),
		  new Dialog("Nanako: Are bad people more important to Dad than I am?", [["That's not true",0,0],["He's protecting everyone.",0,0],["He's protecting you.",1,2]]),
	]}
	justice.rank[4] = {
	  rank:"Rank 5",
	  points: 10,
	  notes:"",
	  dialog:[
		  new Dialog("Nanako: What do they mean by \"real\"?", [["Related to you by Blood.",0,0],["A person you love a lot.",3,3]]),
		  new Dialog("Nanako: Daddy doesn't come home because I'm not his \"real\" daughter?", [["Did he say that?",3,3],["That's not true.",0,0],["You have me.",2,2]]),
		  new Dialog("What should you do?", [["Talk with her.",2,3],["Put her to bed.",0,0],["Listen to her talk.(Requires Lv3 Understanding) +3",3,3]]),
	]}
	justice.rank[5] = {
	  rank:"Rank 6 (Required Lv 5 Expression)",
	  points: 12,
	  notes:"",
	  dialog:[
		  new Dialog("Nanako looks likes she's about to cry...", [["Ask what happened.",0,0],["Swear to it.",1,2]]),
		  new Dialog("Nanako: He can't come, huh?", [["He'll come.",2,3],["I don't know.",0,0],["I'll ask him with you.",3,3]]),
	]}
	justice.rank[6] = {
	  rank:"Rank 7",
	  points: 9,
	  notes:"",
	  dialog:[
		  new Dialog("Ryoutarou: What's gotten into her...?", [["Let's go look for her.",0,2],["Let's leave her alone.",0,0]]),
		  new Dialog("Ryoutarou: She'll listen to you...", [["That's not true.",0,0],["Why?",0,0],["Okay.",0,0]]),
		  new Dialog("Nanako: Big bro...", [["Why'd you come here?",0,0],["Let's go home.",3,3],["Your dad's worried.",0,0]]),
		  new Dialog("Nanako: Is he going to throw me away, too...?", [["He hasn't forgotten.",0,0],["He won't abandon you.",0,0],["Don't worry.",0,0]]),
	]}
	justice.rank[7] = {
	  rank:"Rank 8",
	  points: 6,
	  notes:"",
	  dialog:[
		  new Dialog("Nanako: What should I do...? The Teacher is will yell at me.", [["I'll help you look for it.",3,3],["Nothing you can do now.",0,0]]),
		  new Dialog("Nanako: Why did Dad stop smiling...?", [["He's Lonely too.",3,3],["Because you're lonely.",3,3]]),
	]}
	justice.rank[8] = {
	  rank:"Rank 9",
	  points: 10,
	  notes:"",
	  dialog:[
		  new Dialog("Nanako: Big bro... I love my Dad.", [["I know.",2,2],["He loves you, too.",3,3],["What about me?",0,0]]),
		  new Dialog("Nanako: ...I feel sorry for him, losing someone he loves.", [["He still has you.",2,3],["She's not lost.",2,3],["I feel sorry for you too.",2,3]]),
		  new Dialog("What would you do?", [["Talk to Nanako.",2,3],["Put her to bed.",0,0],["Play with her.",3,3]]),
	]}
	justice.rank[9] = {
	  rank:"Rank 10",
	  points: 12,
	  notes:"",
	  dialog:[
		  new Dialog("Nanako: Big Bro, can you make me a salad?", [["Sure thing.",2,3],["I think...",1,1],["I eat salad for breakfast!",0,0]]),
		  new Dialog("Nanako: You're my family, too, so... Let's work hard together!", [["Don't strain yourself.",1,2],["Let's do it.",3,3],["But I'm not your Mom...",1,2]]),
	]}
// IX.  Hermit Arcana
	var hermit = new Slink("Hermit","Fox"," Cleared Quest 7, Automatic on May 5th", "The Hermit Social Link progresses through the completion of ema requests. Accepting quests takes no time, but turning them in does. The Fox is available any day you can reach the shrine.")
	hermit.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"Cleared Quest 7",
		dialog:[]
	}
	hermit.rank[2] = {
		rank:"Rank 3",
		points:0,
		notes:"Cleared Quest 8",
		dialog:[]
	}
	hermit.rank[3] = {
		rank:"Rank 4",
		points:0,
		notes:"Cleared Quest 9",
		dialog:[]
	}
	hermit.rank[4] = {
		rank:"Rank 5",
		points:0,
		notes:"Cleared Quest 10",
		dialog:[]
	}
	hermit.rank[5] = {
		rank:"Rank 6",
		points:0,
		notes:"Cleared Quest 11",
		dialog:[]
	}
	hermit.rank[6] = {
		rank:"Rank 7",
		points:0,
		notes:"Cleared Quest 12",
		dialog:[]
	}
	hermit.rank[7] = {
		rank:"Rank 8",
		points:0,
		notes:"Cleared Quest 13",
		dialog:[]
	}
	hermit.rank[8] = {
		rank:"Rank 9",
		points:0,
		notes:"Cleared Quest 14",
		dialog:[]
	}
	hermit.rank[9] = {
		rank:"Rank 10",
		points:0,
		notes:"Cleared Quest 15",
		dialog:[]
	}
// X.   Fortune Arcana
	var fortune = new Slink("Fortune", "Naoto Shirogane", "Starting from October 21, First talk to Naoto, then go to Shopping District , North and find the man in a black (Near Aiya). Talk to him and pick the first choice. (You must have Maxed Knowledge). Go back to the school and find Naoto, you must have maxed courage to start the Social Link.", "")
	fortune.rank[1] = {
	  rank:"Rank 2",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto: I'd chalk it up as a prank.", [["Really?",0,0],["I'm still worried about you.",0,0],["That's no fun.",2,3]]),
		  new Dialog("Naoto: ......", [["What happened?",0,0],["You don't need to go home?",0,0],["A thief in a sleuth's house?",0,0]]),
		  new Dialog("Naoto: I don't know about those, but my belongings aren't of any particular value, so...", [["You should be careful.",2,3],["Who would want your stuff?",0,0],["Remember that card...?",3,3]]),
	]}
	fortune.rank[2] = {
	  rank:"Rank 3",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto is Holding a sealed letter...", [["A challenge for a duel?",3,3],["A love letter?",0,0]]),
		  new Dialog("Naoto: How misleading... A sealed letter at a time like this...", [["You won't read it?",0,0],["What if it's from a guy?",0,0],["What'll you do with it?",0,0]]),
	]}
	fortune.rank[3] = {
	  rank:"Rank 4",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto is holding a card.", [["Another Love Letter?",0,0],["Is it a guy this time?",0,0],["That \"Card\" Again?",3,3]]),
		  new Dialog("Naoto: I haven't the time to waste on this...", [["That's right.",0,0],["Why so uncomfortable?",0,0],["Running from a challenge?",0,0]]),
		  new Dialog("Naoto: But... to ignore it only makes me angry!", [["Good luck.",2,3],["Let's catch him together.",3,3]]),
	]}
	fortune.rank[4] = {
	  rank:"Rank 5",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto: *sigh* What should I do...?", [["Soak it.",0,0],["Burn it.",2,3],["Eat it.",0,0]]),
		  new Dialog("Naoto: \"Eating letters with a red face\"...? This is...", [["A riddle.",0,0],["A mailbox.",2,3],["A goat.",0,0]]),
		  new Dialog("Naoto: Grampa had this? Why did he keep it...?", [["What was that?",0,0],["Good, you got it back.",2,3]]),
		  new Dialog("Naoto: I, er... I think I'll let this play out... And, umm, if possible...", [["I guess I'll help.",2,3],["Lets do it.",3,3],["You're on your own. (Reverse SLink)",0,0]]),
	]}
	fortune.rank[5] = {
	  rank:"Rank 6",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto: Why you, though...?", [["Because I looked reliable.",2,3],["Because we looked 'close.",0,3],["Because I looked useless.",2,3]]),
		  new Dialog("Naoto: When the bank close, the fruit tree grows. By the large seven at the third is the spot I chose...", [["7 and 3 o'clock, maybe...?",0,0],["The phrasing is suspicious.",0,0],["The numbers are important.",3,3]]),
		  new Dialog("Naoto: ......", [["I'm glad you're a girl.(Lovers Flag 1)",0,0],["Your gender doesn't matter.",3,3],["Nothing you can do.",0,0]]),
	]}
	fortune.rank[6] = {
	  rank:"Rank 7",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto: Perhaps the \"minus\" part is important...", [["Maybe it's a math problem.",0,0],["Check the other cards again?",0,0],["Subtract '40' and '4'?",3,3]]),
		  new Dialog("Naoto: I feel that... I'm undergoing a change.", [["You'll still be you.",0,0],["People change.",0,0],["Don't be afraid.",3,3]]),
	]}
	fortune.rank[7] = {
	  rank:"Rank 8",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto: We may be able to catch him in the act.", [["You seem happy.",2,3],["Don't put yourself at risk.",2,3],["I feel kinda sad.",3,3]]),
		  new Dialog("The Man brandished a Knife.", [["Protect Naoto. (Lovers Flag 2)",0,0],["Run with Naoto.",0,0],["Fight back.",0,0]]),
		  new Dialog("Naoto: Why...!? (This Question only will appear if you pick the first choice of the previous question.)", [["Because I love you. (Lovers Relationship)",0,0],["Because we're friends. (Friends)",0,0]]),
	]}
	fortune.rank[8] = {
	  rank:"Rank 9",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto: A place I'd be fond of...?", [["Somewhere bright.",0,0],["Somewhere high.",3,3],["Somewhere quiet.",0,0]]),
		  new Dialog("Naoto: Next, what I \"can't stand\" to do. There are several possibilities,", [["Cooking.",0,0],["Exercising.",0,0],["Throwing things away?",3,3]]),
	]}
	fortune.rank[9] = {
	  rank:"Rank 10 (Lovers Relationship)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto: Judging by the position of your TV, you regularly watch the Midnight", [["Is it that Interesting?",0,0],["Why don't you sit down?",0,0],["I can't relax...",0,0]]),
		  new Dialog("Naoto: D-Do you find the pitch of my voice strange?", [["Whatever you prefer.",0,0],["I like it higher. (Naoto will dress as a girl for Christmas Event.)",0,0]]),
	]}
	fortune.rank[10] = {
	  rank:"Rank 10 (Friends Relationship)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoto: What about you?", [["It was a cinch.",0,0],["It was exciting.",0,0],["I was about to give up.",0,0]]),
		  new Dialog("Naoto: Now you're my assistant!", [["Leave it to me!",0,0],["I want a promotion.",0,0],["You're MY assistant.",0,0]]),
	]}
// XI.  Strength Arcana
	var strength = new Slink("Strength", "Sports Club", "Starting from April 19, visit the head office and speak to King Moron. This will give you the option to join the Basketball Club (Kou) or the Soccer Club (Daisuke).", "")
	strength.rank[1] = {
	  rank:"Rank 2 (Basketball)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Kou: Hey Main Character, Aiya or Junes? You decide.", [["Aiya",2,3],["Junes",3,3],["Let's go home",1,2]]),
		  new Dialog("Kou: Well, I do like me some sweets...", [["I'm jealous.",1,2],["not happy about it?",0,0],["Sounds like a pain...",0,0]]),
		  new Dialog("Kou: You like sweets, Main Character? Want me to get you some, too?", [["Sure.",1,2],["That's okay.",1,2]]),
	]}
	strength.rank[2] = {
	  rank:"Rank 3 (Basketball)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Daisuke: ...I want you to help him out", [["What do you mean?",0,0],["Just tell me how.",3,3]]),
		  new Dialog("Daisuke: She calls it \"barbaric.\"", [["That's sucks.",0,0],["But it's just a sport...",1,2],["I can see that.",1,2]]),
		  new Dialog("Daisuke: So... I want you to help him out.", [["Easier said than done.",0,0],["Leave it to  me.",3,3],["What can I do?",2,2]]),
	]}
	strength.rank[3] = {
	  rank:"Rank 4 (Basketball)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Kou: Just the other day I was greeting people at one of those high society gatherings. Can you imagine? Me at one of those things?", [["It's hard to imagine.",1,2],["I can see that.",1,2]]),
		  new Dialog("Kou tries to sound cheerful...", [["That's good for you.",1,2],["Cheer up, man.",1,2],["......",0,0]]),
	]}
	strength.rank[4] = {
	  rank:"Rank 5 (Basketball)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Kou: Hey. Practive over already?", [["It's been over for hours.",0,0],["You've got some nerve...",3,3],["Something wrong?",2,2]]),
		  new Dialog("Kou: But me, I'm feeling like I've sunk to the bottom of", [["Get a grip, man.",0,0],["You just need a rest.",2,2],["Let's go do something fun.",2,3]]),
	]}
	strength.rank[5] = {
	  rank:"Rank 6 (Basketball)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Daisuke: Hey, Main Character, what's his problem? Is he sick or something?", [["You could say that...",0,0],["It's Something else.",0,0]]),
		  new Dialog("Daisuke: Right?", [["You're right.",3,3],["A real game? Impossible...",1,2],["We gotta save Kou.",2,2]]),
		  new Dialog("Daisuke: I got some dirt on a bunch of other guys too, so we should have no problem getting together a full team.", [["You're quite a strategist.",2,2],["Isn't that blackmail...?",2,2],["What about yourself?",2,2]]),
	]}
	strength.rank[6] = {
	  rank:"Rank 7 (Basketball)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Kou: Should I just leave?", [["You're thinking too much.",0,0],["Did they say anything?",0,0]]),
		  new Dialog("Kou: Yeah, the orphanage.", [["What for?",0,0],["Planning to run away?",0,0]]),
		  new Dialog("Kou: I was thinking maybe I'd ask about my real parents.", [["And once you know?",0,0],["You going to meet them?",0,0],["I'll go with you.",0,0]]),
	]}
	strength.rank[7] = {
	  rank:"Rank 8 (Basketball)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Daisuke: I'm kinda worried...", [["About what?",0,0],["Let's catch up to him.",3,3]]),
		  new Dialog("Kou: What are you two doing here?", [["You alright?",3,3],["Find anything out?",3,3]]),
		  new Dialog("Kou: I have no one...", [["That's not true",0,0],["What do you mean?",0,0]]),
	]}
	strength.rank[8] = {
	  rank:"Rank 9 (Basketball)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Kou: And now that I don't have to wear that mask anymore... I guess", [["You going to leave?",0,0],["What do you mean?",0,0]]),
		  new Dialog("Kou: ...What do you think?", [["It was stored well?",0,0],["The letter was swapped?",0,0],["It Was written recently?",2,3]]),
		  new Dialog("Kou: How 'bout you? Wanna go for a dip?", [["No way.",0,0],["I better get home.",0,0]]),
	]}
	strength.rank[9] = {
	  rank:"Rank 10 (Basketball)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Kou: Studying, lessons, and all that crap... I think I'm gonna keep doing it all.", [["Isn't that a bit much?",0,0],["You can do it man.",0,0]]),
		  new Dialog("Daisuke: D-Dude... We can't take this...!", [["Return it to Kou.",0,0],["Accept it.",0,0]]),
	]}
	strength.rank[10] = {
	  rank:"Rank 2 (Soccer)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Soccer Player: Hey \"Main Character\". Tear down the goals and clean up before you leave, alright?", [["Got it (Understanding UP)",0,0],["Junes",0,0]]),
		  new Dialog("Daisuke: Still, it went pretty fast with three people.", [["Thanks for the help.",1,2],["I didn't ask you to do it.",0,0]]),
	]}
	strength.rank[11] = {
	  rank:"Rank 3 (Soccer)",
	  points: 0,
	  notes:"Automatic",
	  dialog:[
	]}
	strength.rank[12] = {
	  rank:"Rank 4 (Soccer)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Daisuke: Whatever...Girls are a pain in the ass, right, Main Character?", [["Right on.",1,2],["That's not true.",0,0],["Quit showing off.",0,0]]),
	]}
	strength.rank[13] = {
	  rank:"Rank 5 (Soccer)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Kou is also beaming like it's all thanks to him...", [["Thanks guys.",2,2],["I'm just getting warmed up.",2,3]]),
	]}
	strength.rank[14] = {
	  rank:"Rank 6 (Soccer)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Kou: I have to do some family stuff today, though. Would next time be okay?", [["No Problem",1,2],["Anything for you guys. (Requires LV4 Understanding)",3,3],["Long as it's not a hassle.",0,0]]),
	]}
	strength.rank[15] = {
	  rank:"Rank 7 (Soccer)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Daisuke: I have to do the class record today so don't want to wait for me.", [["f you say so.",0,0],["t's okay, I'll wait.",0,0]]),
		  new Dialog("Kou: Tell you what, we'll talk over mapo rice. My treat!", [["ounds good.",2,3],["ou treated last time.",0,0]]),
		  new Dialog("Kou: You think it could be related...?", [["Could be.",2,3],["Maybe not...",0,0],["What are we talking about?",0,0]]),
		  new Dialog("Kou: What do you think?", [["We've got a problem.",2,3],["It's Daisuke's problem",0,0]]),
		  new Dialog("Kou is looking at you expectantly...", [["Count me in.",2,3],["Count me out.",0,0]]),
	]}
	strength.rank[16] = {
	  rank:"Rank 8 (Soccer)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Their quarrel starts to escalate...", [["top them",2,3],["tay quiet and watch.",0,0],["rovoke them.",0,0]]),
		  new Dialog("Daisuke: You got that!? It's MY life! you guys have nothing to do with it.", [["Yes we do!",0,0],["......",0,0]]),
		  new Dialog("Kou: You can be pretty sincere when you want to, Daisuke.", [["That's his charm.",3,3],["You think?",0,0]]),
	]}
	strength.rank[17] = {
	  rank:"Rank 9 (Soccer)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("I wonder if she's as stuck in the past as I am...", [["Could be.",2,3],["Doubt it.",0,0],["I don't know.",2,3]]),
	]}
	strength.rank[18] = {
	  rank:"Rank 10 (Soccer)",
	  points: 0,
	  notes:"All Choices have the same effect.",
	  dialog:[
	]}
// XII.  Hanged Man Arcana
	var hangedman = new Slink("Hangedman", "Naoki Konishi","Starting from June 8th , you'll see a cutscene with Naoki for the first time. After this event , you can find him at the first floor in the learning Building. Speak with Naoki 3 times to activate his Social Link.","")
	hangedman.rank[1] = {
	  rank:"Rank 2",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoki: ", [["Too busy?",2,3],["Tired of the food?",3,3],["Because of the murder?",2,2]]),
		  new Dialog("Naoki: I mean... what exactly is an \"admirable life.\" anyway?", [["Contributing to society.",2,3],["Making your parents happy.",3,3],["Leave something behind.",0,0],["I don't know.",3,3]]),
	]}
	hangedman.rank[2] = {
	  rank:"Rank 3",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoki is laughing like he's having a good time...", [["Ask him to tell another story.",3,3],["Tell your own tale of failure.",2,3],["Tell an American joke.",3,3]]),
		  new Dialog("Naoki is biting his lip...", [["I'll go tell them off.",3,3],["You not saying anything?",3,3],["Let the gossipers gossip.",0,0]]),
	]}
	hangedman.rank[3] = {
	  rank:"Rank 4",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoki looks distressed...", [["Talk back to the lady. (Requires Lv4 Courage)",3,3],["Flatter the lady. (Requires Lv4 Expression)",3,3],["Keep quiet.",0,0]]),
		  new Dialog("Naoki: I'm sorry... It's a little awkward to be around me, huh?", [["Its not your fault.",3,3],["Let's forget about it.",0,0]]),
	]}
	hangedman.rank[4] = {
	  rank:"Rank 5",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoki: ... ...", [["That's a good idea.",3,3],["et's forget about it.",0,0]]),
		  new Dialog("Naoki: ... I have to do it.", [["Good luck Naoki.",0,0],["You got other choices.",0,0],["You should think it over.",0,0]]),
	]}
	hangedman.rank[5] = {
	  rank:"Rank 6",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoki: They got all suspicious of me suddenly. I wasn't expecting", [["I wouldn't have, either.",0,0],["Just forget about them.",0,0],["Don't worry them too much.",0,0]]),
		  new Dialog("Naoki: Am i really that pitiable...?", [["Yeah, you are.",0,0],["You're not the only one.",3,3],["I don't what they mean.",2,3]]),
	]}
	hangedman.rank[6] = {
	  rank:"Rank 7",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoki: I wanted to apologize for that.", [["I don't mind.",3,3],["Last time?",2,3]]),
		  new Dialog("Naoki: How do I get out from that...? What would be best for me, for Sis...? I just don't know.", [["Take your time.",0,0],["Take action.",2,3]]),
	]}
	hangedman.rank[7] = {
	  rank:"Rank 8",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoki: Ironic isn't it...?", [["They're trying to be kind.",0,0],["Charge'em extra.",0,0]]),
		  new Dialog("Naoki: Yosuke-san sure is nosy. Oh wait, so are you...", [["Don't lump me in with him.",2,3],["We can't just ignore you.",3,3]]),
	]}
	hangedman.rank[8] = {
	  rank:"Rank 9",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoki: Because I wasn't able to cry like the actors on TV. I thought", [["That's not true.",2,3],["People are different.",3,3],["You're just inept.",2,3]]),
		  new Dialog("Naoki: She must've wanted to live more, huh?", [["Yeah, I am sure of it.",0,0],["I don't know.",0,0],["Live for her sake.",0,0]]),
		  new Dialog("Naoki: Naoki is biting his lip...", [["It was out of your hand.",0,0],["She can hear you.",2,3],["Just let it all out, Naoki.(Requires LV 5 Understanding)",3,3]]),
	]}
	hangedman.rank[9] = {
	  rank:"Rank 10",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Naoki: Its all thanks to you.", [["I didn't do anything.",3,3],["That's right. Be grateful.",2,3]]),
	]}
// XIII. Death Arcana
	var death = new Slink("Death", "Hisano Kuroda", "When you reach Devil's Social Link up to rank 4, you'll see an event with Hisano. After this, you can find her at the Flood Plain on Sundays (Or Holidays) talk to her to start the Social Link." )
	death.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"",
		dialog:[
		new Dialog("Hisano: Haha, he was a handsome man.",[["Who are you talking about?", 3,3],["So he didn't look like me?",3,3],["Stop staring at me.",3,3]]),
		new Dialog("Hisano:Do i look like Death to you?",[["Yes you can.",0,0],["No, you don't.",0,0],["This is stupid.",0,0]])
		]}
	death.rank[2] = {
		rank:"Rank 3",
		points:0,
		notes:"",
		dialog:[
		new Dialog("Hisano: Watching the river here with you, like this brings back memories...",[["Of What?",3,3],["What about the river?",3,3]]),
		new Dialog("Hisano: ...I was happy back then.",[["I'm Jealous.",3,3],["What about now?",1,2]]),
		new Dialog("Hisano: He went to Heaven... and i will surely go to Hell.",[["That's not true.",3,3],["Don't torture yourself.",3,3]])

		]}
	death.rank[3] = {
		rank:"Rank 4",
		points:0,
		notes:"",
		dialog:[
		new Dialog("Hisano: My husband's tsuki meinichi is today, and I've just come back from visiting his grave.",[["Tsuki Menichi?",1,2],["That must have been tough.",1,2],["Don't be depressed.",1,2]]),
		new Dialog("Hisano: For those trying to reach the gods, and to the families of those people, death can be an ally.",[["That may be true.",0,0],["I don't think so.",0,0],["I don't really know.",0,0]]),
		new Dialog("Hisano: You don't quite understand it yet, do you?",[["I don't get it.",0,0],["I think I understand.",0,0]])
		]}
	death.rank[4] = {
		rank:"Rank 5",
		points:0,
		notes:"",
		dialog:[
		new Dialog("Hisano: It must be boring, listening to this old bag's stories...",[[" It's actually interesting.",3,3],["I'm just killing time.",3,3]]),
		new Dialog("Hisano: Enough about me. I want to hear something from you. Tell me anything.",[["Talk about school.",3,3],["Talk about the murders.",0,0],["Talk about girls.",3,3]]),
		new Dialog("Hisano: But... I do not want to see you anymore.",[["Why not?",0,0],["I'm hurt. ",0,0],["But I want to see you.",0,0]])
		]}
	death.rank[5] = {
		rank:"Rank 6",
		points:0,
		notes:"",
		dialog:[
		new Dialog("Hisano: Being noncommittal... floating around, never deciding to be one thing nor another. Can a man understand that?",[["I get it.",3,3],["I don't get it.",3,3]]),
		new Dialog("Hisano: But I wanted to write my reply so badly, so I would grow impatient and read it carefully, over and over.",[[" What were they about?",0,0],["Letters? How inconvenient.",1,2]])

		]}
	death.rank[6] = {
		rank:"Rank 7",
		points:0,
		notes:"If you want to trigger the next rank in the Social Link, you have to talk to the Old Man Daidara (Weapon Shop) (Select the Talk command) and get Husband's Letter.",
		dialog:[
		new Dialog("What should you do?",[["Read them.",0,0],["Wait for Hisano.",0,0]]),
		new Dialog("Hisano: I'm sure he never imagined that the 'Hisa-san' he loved would some day wish to see him dead...",[["What does it mean? ",0,0],["You didn't like it.",0,0]]),
		new Dialog("Hisano: That was his punishment. Punishment for forgetting me...",[["That's a cruel tale",0,0],["That must've been tough",0,0],["......",0,0]])
		]}
	death.rank[7] = {
		rank:"Rank 8",
		points:0,
		notes:"",
		dialog:[
		new Dialog("Hisano: I must accept that...",[["Take your time.",3,3],["Hang in there.",3,3]])
		]}
	death.rank[8] = {
		rank:"Rank 9",
		points:0,
		notes:"",
		dialog:[
		new Dialog("Hisano: I didn't want to accept that he had died all by himself, not remembering me, leaving me behind...",[["I understand the feeling.",3,3],["That's selfish.",3,3],["I don't understand",3,3]]),
		new Dialog("Hisano: Haha... But it's too late now, isn't it?",[["I guess so.",3,3],["No, it isn't",3,3]])
		]}
	death.rank[9] = {
		rank:"Rank 10",
		points:0,
		notes:"",
		dialog:[
		new Dialog("Hisano: At first, I turned them down because I didn't want to leave the place I was born in, but...",[["They kept insisting?",3,3],["What about your husband?",3,3]]),
		new Dialog("Hisano: I'd feel that... our story hasn't truly ended...",[["Hasn't it?",0,0],["I'll treasure it.",0,0]]),
		new Dialog("Hisano: ...Do you have someone you love?",[["I do.",0,0],["I don't.",0,0],["I'm not too sure.",0,0]])
	]}
// XIV. Temperance Arcana
	var temperance = new Slink("Temperance", "Eri Minami", "Starting from May 2nd, go to Shopping District North and look for the bulletin board. Apply for the Assistant daycare caretaker Job. When the Job is available, go to Shopping District South and examine the Bus Stop to reach to the Daycare Job. You must take the job twice before the Social Link starts." )

	temperance.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"",
		dialog:[
			new Dialog("Eri: E..Do you like children",[["Yeah, i like kids.",0,0],["I am on the fence.", 1, 2],["I hate kids.",3,3]]),
			new Dialog("Eri: I don't hate him, but...",[["Do you like him?", 0,0],["You have problems with him?", 0,0]])
	]}
	temperance.rank[2] = {
		rank:"Rank 3",
		points:2,
		notes:"",
		dialog:[
			new Dialog("Eri: I guess he wants to see his father.",[["Probably.", 1,2],["I don't know.", 2,2]]),
		new Dialog("Eri: *sigh* He's so inconsiderate...",[["Do you love Yuuta?", 0, 0],[" Do you love your husband?",0,0]])
	]}
	temperance.rank[3] = {
		rank:"Rank 4",
		points:2,
		notes:"",
		dialog:[
			new Dialog("Eri: I should have known better than to try. We're not related, so there's nothing I can do about it",[["So, Yuuta can't love you?", 0, 0],["So, you can't love Yuuta? ", 0,0]]),
			new Dialog("Eri: Doesn't that make you feel better? Isn't that a wonderful idea?",[["You're right... ", 3,3],["It's a boring idea.",0,0],["It's not a good idea ", 0, 0]]),
			new Dialog("Eri: Honestly, though... I just want to go back to the city.",[["Why don't you go back?", 0, 0],["Why don't you take Yuuta? ", 0,0],["Just let it go.",1,2]]),
			new Dialog("Eri: Please, don't tell Yuu-kun... Or the other mothers.",[["I won't.", 0,0],["Why would I?", 0,0]])
	]}
	temperance.rank[4] = {
		rank:"Rank 5",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Yuuta: ...Is she mad at me?",[["She's angry.", 0,0],["She's not angry.",0,0],[" Just apologize, Yuuta.",0,0]]),
			new Dialog("Yuuta: ......",[["She doesn't hate you.", 0,0],["Just give it time.", 0,0],["Be a better kid, then.", 0,0]])
	]}
	temperance.rank[5] = {
		rank:"Rank 6",
		points:3,
		notes:"",
		dialog:[
			new Dialog("Yuuta: ...I've never seen Phoenix Ranger Featherman R.",[["Why not?", 0,0],["You should watch it. ",0,0]]),
			new Dialog("Yuuta: ...She's always watching TV.",[["She won't let you watch it? ", 0,0],["Have you asked to watch it?",0,0]]),
			new Dialog("Eri: *huff* *huff* I'm sorry I'm late...",[["No problem.",0,0],["Yuuta was lonely.",0,0],["Apologize to Yuuta, not me.",0,0]]),
			new Dialog("Eri: I don't know what a child wants...",[["Featherman R.", 1,3],["Money.      ",0,0],["A loving mother.",0,0]])
	]}
	temperance.rank[6] = {
		rank:"Rank 7",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Yuuta: You told her I liked Phoenix Ranger Featherman R, huh?",[["I might have.",0,0],["I didn't.",0,0],["Tell who?",0,0]]),
				new Dialog("Yuuta: I-In return for her gift!?",[["Anything would.",0,0],["Just be a good boy.",0,0],["Think of it yourself.",0,0]]),
				new Dialog("Eri: I wonder if he's afraid of me.",[["Maybe.",0,0],["He's not afraid of you.",0,2],["You're both afraid.",2,3]]),
				new Dialog("Eri: He must hate the fact I'm here.",[["You can't help it.", 0,0],["That's not true.",2,3]])
	]}
	temperance.rank[7] = {
		rank:"Rank 8",
		points:6,
		notes:"",
		dialog:[
			new Dialog("Ms. Nakamura: Oh, who is this? He seems a bit young to be your husband.",[["I'm a day care assistant. ",0,0],["I'm (Main Character's name).",0,0],["Actually, I am her husband.",0,0]]),
			new Dialog("Eri: If only... If only he was a more studious child...",[["It's not his fault. ",0,0],["Grades aren't a factor.",0,0],["It's your own fault",0,0]])
	]}
	temperance.rank[8] = {
		rank:"Rank 9",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Eri: I'm sorry about the other day. Were you hurt?",[["I'm fine.",1,3],[" I'm not that weak.",1,3]]),
			new Dialog("Yuuta: ...Sor...ry...",[["Don't sweat it.", 0,0],["I can't hear you.",0,0],["Hitting is bad okay? ",0,0]]),
			new Dialog("Eri: He's actually a sweet boy...",[["Yeah he is.   ", 1,3],["You're a doting parent now",1,3]]),
			new Dialog("Eri: ...What took me so long, huh?",[["Yeah.",1,3],["It never too late.",3,3]])
		]}
	temperance.rank[9] = {
		rank:"Rank 10",
		points:13,
		notes:"",
		dialog:[
			new Dialog("Eri: So, today's the last day he'll be here. When Yuuta's done with school, we'll spend time together at the house.",[["Its for the best.",1,3],["I'll be lonely here.",3,3]])
	]}
// XV.  Devil Arcana
	var devil = new Slink ("Devil", "Sayoko Uehara", "Starting from May 25, Apply for the Hospital Janitor Job. Go to the Cleaning part time job twice. (Requires Lv3 Diligence)","")
	/* Ranking level 0 to 1                                                         Points Needed :  0
	Sayoko: Don't worry, no one'll see...
	                                              W/O     W
	1.Stop it!                                     -      -
	2.I'm not interested                           -      -
	3.If you insist.                               -      -
	*/
	devil.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"",
		dialog:[
			new Dialog("Sayoko: Would you like to study with me? Perhaps a subject that they don't teach in school, if you catch my drift...?",[["What do you mean?", 1, 2],["I'm not interested.", 1, 2],["Please, by all means.", 0, 0]])
		]}
	devil.rank[2] = {
		rank:"Rank 3",
		points:0,
		notes:"",
		dialog:[
		 new Dialog("Sayoko: ... So why are you working at a job like this?",[["For the money.", 2, 3],["To be closer to you.", 1, 2],["To have something to do.", 1, 2]]),
	 	new Dialog("Sayoko: Speaking of which... Say, do you have a girlfriend?",[["I do.", 1, 2],["I don't.", 0, 0],["Right in front of me.", 1, 2],["Why do you ask?",0, 0]]),
		new Dialog("Sayoko: ... Do you see what i'm getting at?",[["Oh, yes.", 0, 0],["No... ", 1, 2],["Stop it!", 2, 3]])
		]}
	devil.rank[3] = {
		rank:"Rank 4",
		points:3,
		notes:"",
		dialog:[
	 		new Dialog("Old lady in black: Do you work here?",[["Only part time...", 0, 0],["I'm a high school student.", 0, 0]]),
	 		new Dialog("Old lady in black: But i won't be coming back here anymore...",[[" What were you here for?", 0, 0],["Why are you wearing black?", 0, 0],["We should meet again.", 0, 0]]),
	 		new Dialog("Sayoko: ... Don't ask what happened here.",[["...Okay.", 1, 2],["I'd rather not know.", 1, 2],["...I can't stay in here.", 1, 2]]),
	 		new Dialog("Sayoko: They only need me when they're my patients... in the end, they all leave me.",[["That's just how it is.", 0, 0],["It's good they get better.", 0, 0],["Why don't you switch jobs?", 0, 0]])
		]}
	devil.rank[4] = {
		rank:"Rank 5",
		points:3,
		notes:"",
		dialog:[
			new Dialog("Sayoko: That was the first time anyone ever called me a 'Slutty bitch'",[["What happened?", 0, 0],["Its like a soap opera.", 1, 2]]),
			new Dialog("Sayoko: *sigh* The other nurse were just watching with these stupid smirks on their faces.",[["That can't be helped", 0, 0],["I wish I'd seen it.", 0, 0]]),
			new Dialog("Sayoko: What am I living for...?",[["Comfort her. (Requires Lv 5 Understanding)", 3, 3],["Cheer her up.", 1, 2],["Keep quiet.", 0, 0]])
		]}
	devil.rank[5] = {
		rank:"Rank 6",
		points:4,
		notes:"",
		dialog:[
			new Dialog("Sayoko isn't saying anything...",[["Did something happen?", 0, 0],["Are you not feeling well?", 0, 0],["Are you done here?", 0, 0]]),
			new Dialog("Sayoko: What am I doing...?",[["Don't blame yourself.", 0, 0],["It couldn't be helped.", 0, 0],["Think about what you did.", 0, 0]]),
			 new Dialog("Sayoko seems to be tormenting herself.",[["Watch her sliently.", 0, 0],["Say something to her.", 0, 0]])
			]}
	devil.rank[6] = {
		rank:"Rank 7",
		points:2,
		notes:"",
		dialog:[
			new Dialog("Sayoko looks a bit pale. She also seems to be very tired.",[["You should get some rest...", 1, 2],["Hang in there.", 2, 3]])
		]}
	devil.rank[7] = {
		rank:"Rank 8",
		points:6,
		notes:"",
		dialog:[
	]}
	devil.rank[8] = {
		rank:"Rank 9",
		points:6,
		notes:"",
		dialog:[
		 new Dialog("Middle-aged nurse: We're going to be needing this room, so can you get all your cleaning supplies out of here?",[["Is there an emergency?", 0, 0],["At this time of night?", 0, 0]]),
		 new Dialog("Sayoko: I was just a little wobbly...",[["Overworking, I hear?", 0, 0],["It's important to rest.", 0, 0]]),
		 new Dialog("What should you do...?",[["Physician, heal thyself.", 0, 0],["Can you help anyone now?", 0, 0],[" Don't do it all yourself.", 0, 0]]),
		 new Dialog("Sayoko: Otherwise... I'd never be able to face him again...",[["Would 'he' want that?", 0, 0],["You're doing it for yourself.", 0, 0],["You're just running away.", 0, 0]])
	]}
	devil.rank[9] = {
		rank:"Rank 10",
		points:3,
		notes:"",
		dialog:[
			new Dialog("Sayoko: I wanted to say goodbye.",[["Goodbye?", 0, 0],["Take care...", 0, 0]])
	]}
// XVI. Tower Arcana
	var tower = new Slink("Tower", "Shu Nakajima", "Starting from May 25, Apply for the Tutor Job. (Requires Lv5 Understanding)", "");
	tower.rank[1] = {
		rank:"Rank 2",
		points: 0,
		notes:"",
		dialog:[
			new Dialog("Shu: ...If I get into a good college... Am i really 'Set'?",[["Of course.", 0, 0],["I don't know.", 0,0],["don't think so.",0, 0]]), 
			new Dialog("Shu: ...Do you know what that means?",[[" Sure I do.", 1, 2],["No, What?", 0, 0]]),
			new Dialog("Shu: Huh... Time's already up. We were still in the middle of that last question...",[["Wait until next time.",0,0],["I'll stay and help you. (Requires LV 5 Diligence)", 1, 2]])
	]}
	tower.rank[2] = {
		rank:"Rank 3",
		points: 2,
		notes:"",
		dialog:[
			new Dialog("Shu: What do you think of your school?",[["It's fun.", 0, 0],["It's Strict.", 1, 2],["it's boring.", 2,3]]),
			  new Dialog("Shu: ... ...",[["I'm a transferred student too.",0,0],["Well, it is the countryside.",2,3],["Well, it is the countryside.", 0,0]])
	]}
	tower.rank[3] = {
		rank:"Rank 4",
		points: 6,
		notes:"",
		dialog:[
		new Dialog("Shu: ... They don't get what it means to learn at all.",[["That's just how it is.", 1,2],[" That's not true.",0,0]]),
			new Dialog("Shu: That Place...",[["It's the law. ",0,0],["You don't have to go.",0,0],["You're not the only one. (Courage UP)",2,3]])

	]}
	tower.rank[4] = {
		rank:"Rank 5",
		points: 3,
		notes:"",
		dialog:[
		new Dialog("Shu: Is there any bullying at your school?",[["Yes, there is.", 0,0],["No, there isn't.",1,2],[" Not that I know of... ",0,0]]),
		new Dialog("Shu: Maybe that's not the same thing as bullying.",[["Just ignore them.", 0,0],["Put some effort into it.", 2,3],["Leave it to me.", 0,0]]),
		new Dialog("Shu: It seems that I've been talking to you about things that really aren't relevant to my studies...",[["It not like you. ", 1,2],["I don't mind. (Understanding UP)",1,2]])

	]}
	tower.rank[5] = {
		rank:"Rank 6",
		points: 5,
		notes:"",
		dialog:[
		new Dialog("Shu: *Sigh*",[["Were they a pain in the ass?", 0,0],["Didn't you join in?",0,0]]),
		new Dialog("Shu: ... They're all stupid.",[["You're just at that age.", 0, 0],[" That's not true.", 0,0]]),
		new Dialog("Shu: Um... You only come here because you're being paid to, right?",[["Of course.",0,0],["That's just one reason.",1,2],["That's not it.", 3,3]])
	]}
	tower.rank[6] = {
		rank:"Rank 7",
		points: 5,
		notes:"",
		dialog:[
		new Dialog("Shu: ... I wish I was a genius.",[["Work hard, and you can be.", 0,0],["You're already are one.",0,0],["Just Give up now.",0,0]]),
		new Dialog("Shu: Let's change the subject to something else, What's up?",[["The other day at school...(Expression UP)", 0,0],["The other day at school...(Expression UP)", 1, 2],["What I like in a girl is...(Courage UP)", 2,3]])
	]}
	tower.rank[7] = {
		rank:"Rank 8",
		points: 4,
		notes:"The next time you visit Tower, you automatically will go home instead.",
		dialog:[
		new Dialog("Shu: Is it possible for anyone to be all those things? Do you know anyone like that?",[["I do.", 0,0],["Nope.", 0,0],["This guy.", 2,3]]), 
		new Dialog("Shu: ...Every time I have that dream, the person gets one car closer to me",[["You must be tired.", 0,0],["You must be possessed.", 0,0]]),
		new Dialog("Shu suddenly looks tormented",[["Ask him, what he's worried about.", 1,2],["Cheer him up.", 2,3],["Leave him alone", 0,0]])
	]}
	tower.rank[8] = {
		rank:"Rank 9",
		points: 4,
		notes:"",
		dialog:[
		new Dialog("Shu: Today...is my birthday, I forgot...",[["Happy birthday.",0,0],["Don't forget next time.",0,0]]),
		new Dialog("Shuu looks sad...",[["Have a grand celebration.", 0, 0],["Have a modest celebration. ", 0, 0]]),
		new Dialog("First, you need...",[["Cake.", 0, 0],["Presents.", 0,0],["Guests.", 0,0]]),
		new Dialog("Shuu begins to sob...",[["Soothe him.", 0,0],["Wait for him to calm down." ,0, 0]]),
		new Dialog("Shu begins to cry again.",[["Comfort him.", 0, 0],["Kindly reason with him.", 0,0],["Sternly scold him.",0,0]])
	]}
	tower.rank[9] = {
		rank:"Rank 10",
		points: 0,
		notes:"",
		dialog:[
		new Dialog("Thank you for recognizing... 'me.'' I wouldn't have been able to talk to Mom if you hadn't.",[["I am proud of you.", 1,3],["No, it's all you.", 3, 3]])
	]}
// XVII. Star Arcana
	var star = new Slink("Star","Teddie","Automatic on June 24th", "The Star Social Link levels up automatically as you progress through the story")
	star.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"Clear Marukyu Striptease",
		dialog:[]
	}
	star.rank[2] = {
		rank:"Rank 3",
		points:0,
		notes:"Automatic on July 26th",
		dialog:[]
	}
	star.rank[3] = {
		rank:"Rank 4",
		points:0,
		notes:"Clear Void Quest",
		dialog:[]
	}
	star.rank[4] = {
		rank:"Rank 5",
		points:0,
		notes:"Automatic on September 8th",
		dialog:[]
	}
	star.rank[5] = {
		rank:"Rank 6",
		points:0,
		notes:"Automatic on October 7th",
		dialog:[]
	}
	star.rank[6] = {
		rank:"Rank 7",
		points:0,
		notes:"Automatic on October 11th",
		dialog:[]
	}
	star.rank[7] = {
		rank:"Rank 8",
		points:0,
		notes:"Automatic on October 30th",
		dialog:[]
	}
	star.rank[8] = {
		rank:"Rank 9",
		points:0,
		notes:"Clear Heaven",
		dialog:[]
	}
	star.rank[9] = {
		rank:"Rank 10",
		points:0,
		notes:"Automatic on December 5th",
		dialog:[]
	}
// XVIII. Moon Arcana
	var moon = new Slink("Moon", "Ai Ebihara", "Attend the Strength Social Link, until it reaches Rank 4. You'll see a cutscene involving Ai. From now on you can find Ai at the School Lobby, talk to her, she'll ask you if wanted to skip class with her. (You need a LV 3 Courage in order to skip classes). Accept her request on the next day, she'll ask you to skip classes on lunch break.", "You`ll have to be careful with Ai, because picking the wrong choices can instantly bring her to Reverse.")
	moon.rank[1] = {
	  rank:"Rank 2",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai: Hmmm, doesn't look like they've gotten anything new in. I already have all of this...", [["why do you buy so much?",0,0],["We'll have to come back.",2,3],["Stop complaining",0,0]]),
		  new Dialog("Ai: Buy me an ice latte.",[["Sure",0,0],["Buy it yourself.",3,3],["Let's split one.",1,1]]),
		  new Dialog("Ai: They should get rid of all salespeople and put in vending machines. Press a button, and out comes your clothes.", [["Sounds like a good idea.",0,0],["That'd be kind of boring.",0,0]]),
	]}
	moon.rank[2] = {
	  rank:"Rank 3",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai: What should we do instead", [[" Come shopping with me.",2,2],[" Let's just chill.",2,3],[" Why are we here again...?",0,0]]),
		  new Dialog("Ai: Looking at it from your perspective, I'd say you got pretty lucky.", [[" I appreciate it",3,3],[" Not exactly...",0,0]]),
		  new Dialog("Ai rejected him without a second thought...", [[" Can't you be nice?",0,0],[" You coulda talked to him...",0,0],[" That was downright cruel... (Reverse)",0,0],[" Are looks everything?",0,0]]),
		  new Dialog("Ranking level 3 to 4", [[" Stop them.",2,3],[" Ignore them.",2,2]]),
	]}
	moon.rank[3] = {
	  rank:"Rank 4",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("The Conversation is getting more and more vulgar...", [[" Stop them.",2,3],[" Ignore them.",2,2]]),
		  new Dialog("Ai: .......", [[" Did you Hear them?",0,3],[" Hey, Let's go.",3,3]]),
	]}
	moon.rank[4] = {
	  rank:"Rank 5",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai: Th-thank you for that, last time...", [[" What are you talking about?",2,2],[" You're welcome.",2,2],[" I didn't do much.",2,2]]),
		  new Dialog("Ai: Do you think maybe I'm his type? O-Or do you think he hates...", [[" He probably does.",0,0],[" Have a little confidence.",2,2],[" I wouldn't know",0,0]]),
		  new Dialog("Ai: All I need you to do is... ask him what's his type. That's it.", [[" No problem.",0,0],[" Not gonna happen! (Reverse)",0,0]]),
	]}
	moon.rank[5] = {
	  rank:"Rank 6",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai: But if I can't be loved, Then what's the point!?", [[" Try to calm down.",0,0],[" Come over here...",0,0],[" I'll Hear you out.",0,0]]),
		  new Dialog("Ai: It's not like I have any other redeeming qualities...", [[" You're still young.",0,0],[" He just doesn't know you.",0,0],[" I'll yell at him later.",0,0]]),
		  new Dialog("Ai: Haha, just kidding", [[" I'll be your boyfriend. (Temporary lovers)",0,0],[" ......",0,0]]),
		  new Dialog("Ai: Hmm, do you think we can be a good match? (Only if you chose the second choice)", [["I don't really care.  (Temporary lovers)",0,0],["Should think about it. (Lover's Flag)",0,0]]),
	]}
	moon.rank[6] = {
	  rank:"Rank 7 (Lover's Flag)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai: I'm sorry. I don't mean to keep making you hang out with me...", [[" I don't mind.",3,3],[" About time you said it.",2,2]]),
		  new Dialog("Ai: I wonder Why...?", [[" Because we're friends.",3,3],[" You have a crush on me.",3,3],[" Because I'm special to you.",2,3]]),
	]}
	moon.rank[7] = {
	  rank:"Rank 8 (Lover's Flag)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai: He was just... a normal, good guy. I guess What I felt was a kind of a fleeting thing.", [[" Happens all the time.",3,3],[" You can be so cruel.",2,3],[" Are you okay with that?",0,0]]),
	]}
	moon.rank[8] = {
	  rank:"Rank 9 (Lover's Flag)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Things don't look good... You feel Ai is in danger.", [[" Help Her.",0,0],[" See what Happens.",0,0]]),
		  new Dialog("Ai: Uh... Sorry, was that unnecessary?", [[" Thanks you.",3,3],[" Are you all right?",3,3],[" That was reckless of you.",3,3]]),
	]}
	moon.rank[9] = {
	  rank:"Rank 10 (Lovers Flag)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("What will you do?", [[" Accept it. (Lovers Relationship)",0,0],[" Reject her.",0,0]]),
	]}
	moon.rank[10] = {
	  rank:"Rank 7 (Temporary Lovers)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai: Hey, why don't you pick out some clothes for me? What do you think I'd look good in?", [[" Cute Clothes",2,3],[" Sexy Clothes.",2,3],[" Casual Clothes.",0,0]]),
		  new Dialog("Ai: Isn't that right, Main Character?", [[" Yep.",2,3],[" We are?",0,0]]),
		  new Dialog("Ai: ...Do you think I'm pretty?", [[" Of course you are.",3,3],[" Not really.",0,0],[" What's wrong.",0,0]]),
	]}
	moon.rank[11] = {
	  rank:"Rank 8 (Temporary Lovers)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai:  Main Character... Do you love me?", [[" Of course.",3,3],[" What's wrong?  (Repeat Question)",0,0]]),
		  new Dialog("Ai:  You need me, right?", [[" Naturally...",3,3],[" Do I really have to say it? (Repeat Question)",0,0]]),
	]}
	moon.rank[12] = {
	  rank:"Rank 9 (Temporary Lovers)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai: I think we need to... break up.", [[" Why?",0,0],[" I don't want that.",0,0],[" You're being selfish.",0,0]]),
		  new Dialog("Ai: I'm so worthless...", [[" That's not true.",2,3],[" Then let's find your value.",1,2],[" You decide your own worth.",2,3]]),
		  new Dialog("Ai: I'm sure you'll eventually hate me... and then you'll leave me.", [[" I'm not going anywhere.",0,0],[" Well, that could happen...",0,0],[" You can't live in fear.",0,0]]),
		  new Dialog("Ai: Is there any way... that we could just be friends?", [[" Sure.",3,3],[" I knew the whole time.",2,3],[" We need time apart. (Broken)",0,0]]),
	]}
	moon.rank[13] = {
	  rank:"Rank 10 (Temporary Lovers)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ai: Still... I'm not good at being alone. I know it's a lot to ask, but... will you stay by my side?", [[" Of course I will.",0,0],[" I'll do my best...",0,0],[" You're strong enough now.",0,0]]),
	]}
// XIX. Sun Arcana
	var sun = new Slink("Sun","Cultural Club","Starting from April 25, You can join either the Drama club or the Music Club. If you join the Drama Club, Yumi Ozawa will be your official Sun Arcana Social Link and if you join the Music Club then its Ayane Matsugana.","The Sun Social Link, is one of the few Social Links that is available on raining days, so take advantage of that time period to rank it up.")

	sun.rank[1] = {
	  rank:"Rank 2 (Drama)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("The line began...", [["What tempts me is not... (Goes to Question 3)",0,0],["What craze me is not...  (Goes to Question 2)",0,0],["What taunts me is not... (Goes to Question 3)",0,0]]),
		  new Dialog("Then it went...", [["The light of the moon...",0,0],["The light of the star...",0,0],["The light in the sea...",0,0]]),
		  new Dialog("Yumi: ...But i do want us to take it seriously, so give it a shot okay?", [["I'll give it my all!",3,3],["I'm not in the mood.",0,0]]),
	]}
	sun.rank[2] = {
	  rank:"Rank 3 (Drama)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Yumi: Huh...? Oh, er...what should i do? We're Still..", [[" Hurry, go see her.",0,0],[" Want me to come with you?",0,0]]),
		  new Dialog("Yumi: Wh-When did you get here!? Were you listening to me?", [[" Yeah, I heard.",0,0],[" What are you talking about?",0,0]]),
		  new Dialog("Yumi is trembling with anger...", [[" Comfort her.",0,0],[" Don't say anything.",0,0]]),
	]}
	sun.rank[3] = {
	  rank:"Rank 4 (Drama)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Yumi: ...Was I wrong when I said that?", [["Yeah.",0,0],["No.",2,3],["It was how you said it.",2,2]]),
		  new Dialog("Yumi: ...Anywhere but at home.", [["Is something wrong?",2,3],["Your family will be worried?",0,0],["I'll help.",2,2]]),
		  new Dialog("Yumi: Just forget about this, okay?", [["Okay.",2,3],["I can't forget.",3,3]]),
	]}
	sun.rank[4] = {
	  rank:"Rank 5 (Drama)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Yumi: Main Character-kun... Why are you...?", [["I was worried about you.",2,2],["Just passing by.",2,3],["I got hurt.",2,2]]),
		  new Dialog("Yumi: She's pushing herself too far. She's so stupid.", [["It must've been tough.",0,0],["She's your parent.",0,0],["You should support her.",0,0]]),
		  new Dialog("Yumi: It's all because of my parents. They're both holding me back.", [["It can't be helped.",0,0],["Stop acting like a child.",0,0],["Take care of yourself, too.",2,2]]),
		  new Dialog("Yumi: It's not like you have anything do with what's happening in my life.", [["Yes I do.",3,3],["That's right i don't.",2,2]]),
	]}
	sun.rank[5] = {
	  rank:"Rank 6  (Drama)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Yumi: ... I just came from Dad's--that man's room...", [["Did you make up with him?",0,0],["Are you taking care of him?",0,0],["How is your mother?",2,2]]),
		  new Dialog("Yumi: ...Why do i have to go through all of this? Why me!?", [["It just bad Luck.",0,0],["Its your fault.",0,0],["You're not the only one.",0,0]]),
	]}
	sun.rank[6] = {
	  rank:"Rank 7 (Drama)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Yumi: ... He's so stupid", [["He's a great father.",0,0],["He's a kind father.",3,3],["He's a stupid father.",0,0]]),
	]}
	sun.rank[7] = {
	  rank:"Rank 8 (Drama)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Yumi: There's.... just somethings i just don't understand.", [["Gently encourage her.",3,3],["Cry together.",2,3],["Remain Silent.",0,0]]),
	]}
	sun.rank[8] = {
	  rank:"Rank 9 (Drama)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Yumi is not doing good.", [["What's wrong?",0,0],["Its already over.",0,0],["Let's leave.",0,0]]),
		  new Dialog("Yumi seems to be enduring the tragedy.", [["Gently say her name.",0,0],["Embrace her.",0,0],["Remain Silent.",0,0]]),
		  new Dialog("Yumi: I am good at something... But what of kind of thing?", [["Think about it slowly.",2,3],["You're always cheerful.",2,3],["The things that can be done.",2,3]]),
	]}
	sun.rank[9] = {
	  rank:"Rank 10 (Drama)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Yumi: I'll turn around, so if you're going to reject me, just leave the room. That way, I won't have to see you go...", [[" Hug her. (Lovers Relationship)",0,0],[" Leave.",0,0]]),
		  new Dialog("Yumi: Picturing it... It's kind of embarrassing, huh? (If you picked the first choice earlier.)", [[" Is it?",0,0],[" What'd you imagine?",0,0],[" I haven't even begun.",0,0]]),
	]}
	sun.rank[10] = {
	  rank:"Rank 2 (Music)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ayane: I wish I had as much talent as you.", [[" Effort is what matters.",1,2],[" You do have talent.(Requires Understanding Lv ?)",2,3],[" Maybe you should give up.",0,0]]),
		  new Dialog("Cleanup looks like a big task for just one person...", [[" Help out. (Understanding UP)",2,3],[" Watch. (Diligence UP)",1,2]]),
	]}
	sun.rank[11] = {
	  rank:"Rank 3 (Music)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ayane: I think I'll stick around and practice. I was out so long , I didn't even touch my trombone.", [[" You want me to help?",2,2],[" Forget about it today.",3,3]]),
		  new Dialog("Ayane: ...Not that I'll be in it, but still...", [[" You don't want to go?",0,0],[" They won't let you go?",0,0]]),
		  new Dialog("Ayane: Because there are lots of other things I can do for the club. Scheduling, accounting, cleaning up...", [[" That's a great attitude.",1,2],[" Is that what you want?",0,0]]),
	]}
	sun.rank[12] = {
	  rank:"Rank 4 (Music)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ayane: Shoot... I still can't play the part I was messing up last time.", [[" Can you practice at home?",0,0],[" Can it wait until tomorrow?",0,0],[" Why don't you give up?(Requires Lv 3 Courage)+3",3,3]]),
		  new Dialog("Ayane: It'd be nice to be able to play outside, but I'd embarrass myself if I went alone...", [[" Outside? (Requires Understanding, Expression UP)",0,0],[" Want me to help out? (Requires Understanding, Expression UP)",3,3],[" Alright, follow me. (Requires Courage, Expression UP)",3,3]]),
		  new Dialog("Ayane: Oh... I'm distracting you from your own practice, aren't I...", [[" Yep.",0,0],[" No, you're not. (Requires Lv 3 Understanding) +3",3,3],[" Just hang in there. (Diligence UP)",2,2]]),
	]}
	sun.rank[13] = {
	  rank:"Rank 5 (Music)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("As the others leave, Ayane stays engrossed in her practice...", [[" Talk to her",0,0],[" Leave her alone.",0,0]]),
		  new Dialog("Ayane: I can't... I can't do it...", [[" Don't worry, you can do it.(Expression Up)",2,3],[" But who else is there?  (Courage UP)",0,0],[" Its okay to mess up. (Requires Lv 3 Understanding)",3,3]]),
	]}
	sun.rank[14] = {
	  rank:"Rank 6 (Music)",
	  points: 0,
	  notes:"Automatic Rank UP.",
	  dialog:[
	]}
	sun.rank[15] = {
	  rank:"Rank 7 (Music)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("The other members are remaining silent...", [[" Stick up for Ayane. (Expression UP)",0,0],[" Keep quiet.",0,0]]),
		  new Dialog("Ayane is weeping...", [[" Comfort her. (Expression UP)",0,0],[" Pat her on the head.",0,0],[" Hold her.",2,3]]),
	]}
	sun.rank[16] = {
	  rank:"Rank 8 (Music)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("What should you do...?", [[" Reveal youir feelings for her. (Lovers Relationship)",0,0],[" Change the subject.",0,0]]),
	]}
	sun.rank[17] = {
	  rank:"Rank 9 (Music) (Lovers Relationship)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Ayane looks at the ground nervously.", [[" Wanna go grab some food?",2,3],[" wanna go out and have fun?",2,3],[" Wanna come to my house? (Requires Courage Lv ?)",3,3]]),
	]}
	sun.rank[18] = {
	  rank:"Rank 10 (Music) (Lovers Relationship)",
	  points: 0,
	  notes:"Automatic Rank UP.",
	  dialog:[
	]}
	sun.rank[19] = {
	  rank:"Rank 9 (Music) (Friends)",
	  points: 0,
	  notes:"Automatic Rank UP.",
	  dialog:[
	]}
	sun.rank[20] = {
	  rank:"Rank 10 (Music) (Friends)",
	  points: 0,
	  notes:"Automatic Rank UP.",
	  dialog:[
	]}
// XX.  Judgement Arcana
	var judgement = new Slink("Judgement","Seekers of Truth","Automatic on December 3rd", "The Judgement Social Link progresses automatically as you complete the Normal Ending Path")
	judgement.rank[1] = {
		rank:"Rank 2",
		points:0,
		notes:"Automatic on December 4th",
		dialog:[]
	}
	judgement.rank[2] = {
		rank:"Rank 3",
		points:0,
		notes:"Automatic on December 4th",
		dialog:[]
	}
	judgement.rank[3] = {
		rank:"Rank 4",
		points:0,
		notes:"Automatic on December 5th",
		dialog:[]
	}
	judgement.rank[4] = {
		rank:"Rank 5",
		points:0,
		notes:"Automatic on December 5th",
		dialog:[]
	}
	judgement.rank[5] = {
		rank:"Rank 6",
		points:0,
		notes:"Automatic on December 6th",
		dialog:[]
	}
	judgement.rank[6] = {
		rank:"Rank 7",
		points:0,
		notes:"Automatic on December 7th",
		dialog:[]
	}
	judgement.rank[7] = {
		rank:"Rank 8",
		points:0,
		notes:"Automatic on December 7th",
		dialog:[]
	}
	judgement.rank[8] = {
		rank:"Rank 9",
		points:0,
		notes:"Automatic on completion of Magatsu Inaba",
		dialog:[]
	}
	judgement.rank[9] = {
		rank:"Rank 10",
		points:0,
		notes:"Automatic on completion of Magatsu Inaba",
		dialog:[]
	}
// XX.  Aeon Arcana
	var aeon = new Slink("Aeon", "Marie", "Starting on April 18th, vist the Velvet Room. If event does not trigger, re-enter the Velvet Room.","")
	aeon.rank[1] = {
	  rank:"Rank 2",
	  points: 0,
	  notes:"All Choices have the same effect.",
	  dialog:[
	]}
	aeon.rank[2] = {
	  rank:"Rank 3",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Marie: Hey, What do you do in the city?", [["Play around.",2,3],["Peoplewatch.",2,3],["There's nothing to do.",2,3]]),
		  new Dialog("Yukiko: Chie, they might already have plans of thier own. Don't just assume", [["I don't mind.",0,0],["If you want to.",0,0]]),
		  new Dialog("Chie is holding a green shirt...", [["I don't know.",0,0],["I think it's good.",0,0],["That's green, you know.",0,0]]),
		  new Dialog("Yukiko has a crimsom skirt in her hands...", [["I don't know.",0,0],["I think it's good.",0,0],["That's an eye-cathcing color.",0,0]]),
		  new Dialog("Chie: Why don't we all go together, then? The four of us.", [["Of course.   ",0,0],["If you want to.",0,0]]),
		  new Dialog("Chie: Well... I don't really know. The meaning of friendship...? Hmmm...", [["There's meaning.   ",0,0],["You'll know once you have one.",0,0]]),
		  new Dialog("Marie: Huh? Me too?", [["Let's hurry.",2,3],["You're not going?",2,3],["It'll sell out.",0,0]]),
	]}
	aeon.rank[3] = {
	  rank:"Rank 4",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Marie: You don't get tired of it?", [["It's fun",2,3],["It's pretty much my duty.",2,3],["I skip it sometimes.",0,0]]),
		  new Dialog("Yosuke: What are you guys doing? Out on a stroll?", [["I'm showing her the school.",0,0],["Come with us.",0,0]]),
		  new Dialog("Marie: I don't get it. Do Green and Red do that, too?", [["Of course.",0,0],["You spend youth with everyone.",0,0]]),
		  new Dialog("Marie: Face yourself...", [["Let it go.",0,0],["Let's spend our youths.",0,0],["Wondering about your 'true self'?",0,0]]),
	]}
	aeon.rank[4] = {
	  rank:"Rank 5 (Cannot Start until Rise is in your party, July 24 and after.) ",
	  points: 0,
	  notes:"All Choices have the same effect.",
	  dialog:[
	]}
	aeon.rank[5] = {
	  rank:"Rank 6",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Marie: So, about my memories... What do you think I should do?", [["Are there any clues?",0,0],["I don't know.",0,0],["First, meditate",0,0]]),
		  new Dialog("Marie: ...Will this help?", [["It's made of bamboo.",3,3],["Is it sold somewhere.",3,3]]),
		  new Dialog("What store around here might deal in old combs like that...?", [["Tatsumi Textiles",0,0],["Marukyu Tofu ",0,0],["Junes",0,0]]),
		  new Dialog("Rise: Huh? Wait... Don't tell me the two of you are on a date...", [["It's not like that.",0,0],["We have business here.",0,0],["Of course it's a date.",0,0]]),
		  new Dialog("Kanji: So, what do you want from me? You need me to figure out where this", [["Can you?",0,0],["Anything will help.",0,0]]),
		  new Dialog("Marie grimaces...", [["Do you remember something?",0,0],["Does your stomach hurt?",0,0]]),
	]}
	aeon.rank[6] = {
	  rank:"Rank 7",
	  points: 0,
	  notes:"All Choices have the same effect.",
	  dialog:[
	]}
	aeon.rank[7] = {
	  rank:"Rank 8",
	  points: 0,
	  notes:"All Choices have the same effect.",
	  dialog:[
	]}
	aeon.rank[8] = {
	  rank:"Rank 9",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Marie: I had fun then. Take me there again sometimes, okay?", [["You remember.",0,0],["I thought you forgot.",0,0],["That's a 'memory'.",0,0]]),
		  new Dialog("Marie: Hey, can we make more? More memories...", [["I'll help,",3,3],["It's up to you.",3,3],["Don't forget 'em.",3,3]]),
		  new Dialog("Marie: ...Why?", [["Because I love you.",0,0],["Because you're my friend.",0,0]]),
		  new Dialog("Marie: ...I won't beleive just words.", [["Hug her.",0,0],["Don't hug her.",0,0]]),
	]}
	aeon.rank[9] = {
	  rank:"Rank 10 (Lovers Relationship)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Marie is looking around your room...", [["What's wrong?",3,3],["Bored?",3,3],["Don't snoop around.",3,3]]),
		  new Dialog("Marie: Memories so fun, I won't care about the past anymore.", [["Leave it to me.",3,3],["Lots of memories won't do it.",3,3]]),
	]}
	aeon.rank[10] = {
	  rank:"Rank 10 (Friends Relationship)",
	  points: 0,
	  notes:"",
	  dialog:[
		  new Dialog("Marie: ...I wouldn't have been able to do that on my own. I only realized that because of you.", [["I'm not hearing a 'Thank you.'",0,0],["It was fun.",3,3]]),
	]}
// 0/XI. Jester Arcana
	var jester = new Slink("Jester","Tohru Adachi","Starting on May 13th, visit Junes and speak to Adachi, then pick the choice\"Hang out with Adachi.\"", "Depending on the rank, Adachi can only be advanced during certain times of the day.")
	jester.rank[1] = {
		rank:"Rank 2 (Day Time)",
		points:0,
		notes:"",
		dialog:[
		 		new Dialog("Adachi: I live alone, so taking care of dinner can be pretty tedious.",[["Why?",0,0],["You don't eat?",0,0]]),
		 		new Dialog("Adachi doesn't seem to lead a nutritionally balanced life...",[["No one makes you dinner?",0,0],["Want me to make you dinner?",0,0]]),
		 		new Dialog("Adachi: And she'll talk your ear off if you let her...It's so annoying.",[["She cares about you.",0,0],["That does sound annoying.",2,3]])
	]}
	jester.rank[2] = {
		rank:"Rank 3 (Night Time)",
		points:0,
		notes:"",
		dialog:[
		 		new Dialog("Adachi: Oh, uh, sorry for using you like that. You were a big help.",[["Why don't you come over for real?",1,2],["You shouldn't like to her.",0,0],["I was a big...kelp?",0,0]]),
		 		new Dialog("Adachi: But Dojima-san's still at work, right? Does that mean it'll be just us? Isn't that weird?",[["I'm a good cook.",2,3],["Nanako will be happy.",1,2]]),
		 		new Dialog("Adachi: When I was in high school, I never gave cooking a single thought.",[["What did you do instead?",0,0],["What kind of student were you?",0,0]]),
		 		new Dialog("Adachi: But that works out when you're a student.",[["Is having a job hard?",0,0],["You don't enjoy yourself now?",0,0]])
	]}
	jester.rank[3] = {
		rank:"Rank 4 (Night Time)",
		points:0,
		notes:"",
		dialog:[
		 		new Dialog("Adachi: I bet Dojima-san tells you all the time what a great help you are!",[["Yeah, he does.",0,0],["Nope.",1,2]]),
		 		new Dialog("Nanako: Wow! you're the best, Adachi-san!",[["That was a surprise.",3,3],["You like magic tricks?",1,2]])
	]}
	jester.rank[4] = {
		rank:"Rank 5 (Night Time)",
		points:0,
		notes:"",
		dialog:[
		 		new Dialog("Adachi: Don't worry about that. We have to be efficient here.",[["You're right.",3,3],["She won't learn anything that way.",0,0],["Is that how you do your job, too?",0,0]]),
		 		new Dialog("Adachi: What about you? Don't you have anything you want me to draw	a flower on?",[["Nope, nothing.",0,0],["I don't want one.",0,0]]),
		 		new Dialog("Adachi: Eeesh. That's certainly going to put a damper on her choices.",[["What do you mean?",0,0],["You take that back.",0,0]])
	]}
	jester.rank[5] = {
		rank:"Rank 6 (Day Time)",
		points:0,
		notes:"",
		dialog:[
		 		new Dialog("Adachi: But I guess that's what it's like for a high schooler. Enjoy it	while you can.",[["You're slacking off again?",0,0],["I'm busying enough, thanks.",0,0]]),
		 		new Dialog("Adachi: But as long as he's here, I don't have to talk to her, so thats a relief.",[["Good for you.",0,0],["Does it make you sad?",0,0],["What a miserable old woman.",0,0]]),
		 		new Dialog("Adachi: I like being alone. It's easy, and it lets me do whatever I want.",[["That's true",3,3],["But doesn't it get lonely?",0,0]])
	]}
	jester.rank[6] = {
		rank:"Rank 7",
		points:0,
		notes:"Clear Heaven",
		dialog:[]
	}
	jester.rank[7] = {
		rank:"Rank 8 (Hunger)",
		points:0,
		notes:"Normal Ending Path",
		dialog:[]
	}
	jester.rank[8] = {
		rank:"Rank 9 (Hunger)",
		points:0,
		notes:"Normal Ending Path, Defeat Ame-no-Sagiri",
		dialog:[]
	}
	jester.rank[9] = {
		rank:"Rank 10 (Hunger)",
		points:0,
		notes:"True Ending Path, read the letter. Jester Arcana transform to Lust.",
		dialog:[]
	}



// emperor.rank = {
// 	rank:"",
// 	points:0,
//	notes:"",
//	dialog:[
// 		new Dialog("",[[""],[""],[""]])
// ]}

var arcana = {
	fool: fool,
	magician: magician,
	priestess: priestess,
	empress: empress,
	emperor: emperor,
	hierophant: hierophant,
	lovers: lovers,
	chariot: chariot,
	justice: justice,
	hermit:hermit,
	fortune: fortune,
	strength:strength,
	hangedman: hangedman,
	death: death,
	temperance: temperance,
	devil: devil,
	tower: tower,
	star: star,
	moon: moon,
	sun:sun,
	judgement: judgement,
	aeon: aeon,
	jester: jester

}
module.exports = arcana;
module.exports.list = list;