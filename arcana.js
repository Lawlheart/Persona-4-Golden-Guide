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
//Fool Arcana
	var fool = new Slink("Fool","Investigation Group","Automatic upon clearing Yukiko's Castle", "The Fool Social Link progresses automatically as you complete the story")
	fool.rank[1] = {
		rank:"Rank 2",
		points:"0",
		notes:"Automatic on April 30th",
		dialog:[]
	}
	fool.rank[2] = {
		rank:"Rank 3",
		points:"0",
		notes:"Automatic on May 18th",
		dialog:[]
	}
	fool.rank[3] = {
		rank:"Rank 4",
		points:"0",
		notes:"Automatic on June 6th",
		dialog:[]
	}
	fool.rank[4] = {
		rank:"Rank 5",
		points:"0",
		notes:"Automatic on July 7th",
		dialog:[]
	}
	fool.rank[5] = {
		rank:"Rank 6",
		points:"0",
		notes:"Automatic on July 7th",
		dialog:[]
	}
	fool.rank[6] = {
		rank:"Rank 7",
		points:"0",
		notes:"Automatic on July 27th",
		dialog:[]
	}
	fool.rank[7] = {
		rank:"Rank 8",
		points:"0",
		notes:"Automatic on October 6th",
		dialog:[]
	}
	fool.rank[8] = {
		rank:"Rank 9",
		points:"0",
		notes:"Automatic on November 6th",
		dialog:[]
	}
	fool.rank[9] = {
		rank:"Rank 10",
		points:"0",
		notes:"Automatic on December 3rd",
		dialog:[]
	}
//Magician Arcana
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
		new Dialog("",[[""],[""],[""]])
]}
magician.rank[3] = {
	rank:"Rank 4",
	points:3,
	notes:"",
	dialog:[
		new Dialog("",[[""],[""],[""]])
]}
magician.rank[4] = {
	rank:"Rank 5",
	points:4,
	notes:"",
	dialog:[
		new Dialog("",[[""],[""],[""]])
]}
magician.rank[5] = {
	rank:"Rank 6",
	points:4,
	notes:"",
	dialog:[
		new Dialog("",[[""],[""],[""]])
]}
magician.rank[6] = {
	rank:"Rank 7",
	points:6,
	notes:"",
	dialog:[
		new Dialog("",[[""],[""],[""]])
]}
magician.rank[7] = {
	rank:"Rank 8",
	points:6,
	notes:"",
	dialog:[
		new Dialog("",[[""],[""],[""]])
]}
magician.rank[8] = {
	rank:"Rank 9",
	points:4,
	notes:"",
	dialog:[
		new Dialog("",[[""],[""],[""]])
]}
magician.rank[9] = {
	rank:"Rank 10",
	points:8,
	notes:"",
	dialog:[
		new Dialog("",[[""],[""],[""]])
]}


//Chariot Arcana
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
//Emperor Arcana
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
//Devil Arcana
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

// emperor.rank = {
// 	rank:"",
// 	points:,
//	notes:"",
//	dialog:[
// 		new Dialog("",[[""],[""],[""]])
// ]}

var arcana = {
	fool:fool,
	magician:magician,
	priestess:{},
	empress:{},
	emperor: emperor,
	hierophant:{},
	lovers:{},
	chariot: chariot,
	justice:{},
	hermit:{},
	fortune:{},
	strength:{},
	hangedman:{},
	death:{},
	temperance:{},
	devil: devil,
	tower:{},
	star:{},
	moon:{},
	sun:{},
	judgement:{},
	aeon:{},
	jester:{}

}
module.exports = arcana;
module.exports.list = list;