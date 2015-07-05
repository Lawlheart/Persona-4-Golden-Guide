function Slink(arcana, name, rank1) {
	this.arcana = arcana;
	this.name = name;
	this.rank = [rank1];
}
function Dialog(question, answers) {
	this.question = question;
	this.answers = answers;
}
//Chariot Arcana
var chariot = new Slink("Chariot", "Chie Satonaka", "Automatic on April 18th")
	chariot.rank[1] = {
		rank:"Rank 2",
		points: 0,
		dialog:[
			new Dialog("Chie: Still, now's the time to train right?", [["right",3,3], ["For what?",0,0]]), 
			new Dialog("Chie: ...no?", [["I'm cool with it.",2,3], ["I guess so...",1,2], ["What a pain",0,0]])
	]};
	chariot.rank[2] = {
		rank:"Rank 3",
		points:3,
		dialog:[
			new Dialog("Chie: But me, I totally lose it. kinda funny, huh?", [["It's Cute (Requires LV 3 Courage)",3,3],["It's very feminine",2,3],["What a pain.",0,0]])
	]};
	chariot.rank[3] = {
		rank:"Rank 4",
		points:3,
		dialog:[
			new Dialog("Chie: W-Well...",[["Exactly.",0,0],["None of Your business.",2,2],["Quit bagging on her(Requires LV 3 Courage)",3,3]]),
			new Dialog("What Should you do?",[["Crack a joke",2,3],["Badmouth about Takeshi",2,2],["Hold Chie's hand (Requires Courage)",3,3]])
	]};
	chariot.rank[4] = {
		rank:"Rank 5",
		points:4,
		dialog:[
			new Dialog("Chie: Mmmm... The meat and rice just flow through my veins...",[["Wolfing it down, huh? ",2,3],["Looks delicious.",3,3],["You look so happy.",3,3]]),
			new Dialog("Chie: I hope she's not straining herself. Makes you worry, huh?",[["I'll look out for her.",3,3],["Yukiko isn't that weak.",2,3],["I worry more for you.",3,3]])
	]};
	chariot.rank[5] = {
		rank:"Rank 6",
		points:4,
		dialog:[
			new Dialog("Chie: What cowards, ganging up on the weak like that!",[["Exactly.",3,3],["It's eat or be eaten.",0,0]]),
			new Dialog("Chie: We'll grab'em and make them apologize! Right, Leader?",[["Of course.",3,3],["Let the police handle it.",0,0],["What a pain.",0,0]])
	]};
	chariot.rank[6] = {
		rank:"Rank 7",
		points:6,
		dialog:[
			new Dialog("Things aren't looking good...",[["Hold Chie back.(requires LV 4 Courage)",0,0],["Fight them yourself.",0,0]]),
			new Dialog("Chie: I charged in by myselfc Caused you trouble",[["It's not Trouble.",2,2],["I'm used to it.",0,0],["Just think next time.",0,0]])
	]};
	chariot.rank[7] = {
		rank:"Rank 8",
		points:5,
		dialog:[
			new Dialog("Chie: I feel like I missed the point...",[["There's still time.",2,3],["That's the first step.",3,3],["It's hard to face yourself.",2,3]])
	]};
	chariot.rank[8] = {
		rank:"Rank 9",
		points:6,
		dialog:[
			new Dialog("Things aren't looking good...",[["Let Chie do her thing.",0,0],["Shield Chie.",0,0],["Fight with Chie.",0,0]]),
			new Dialog("Chie: ...Was that stupid of me?",[["It all turned out okay.",2,3],["You protected that kid.",3,3],["That was reckless.",0,0]]),
			new Dialog("What to do?",[["Will you be my girlfriend?",0,0],["I'm counting on you.",0,0]])
	]};
	chariot.rank[9] = {
		rank:"Rank 10 (lovers)",
		points:10,
		dialog:[
			new Dialog("Chie: Oh w-well, how did the room you had back home look?",[["It was cleaner.",0,0],["It was messier.",3,3],[" It was about the same.",2,3]]),
			new Dialog("Chie: I was thinking... maybe both of us together...",[["That sounds good."],["You're on your own.",0,0]]),
			new Dialog("What should you do?",[["Embrace.",0,0],["Do nothing.",0,0]]),
			new Dialog("Chie: Wh-What am I saying...?",[["Don't worry.",0,0],["That just like you Chie.",0,0]])
	]};
	chariot.rank[10] = {
		rank:"Rank 10 (friends)",
		points:10,
		dialog:[
			new Dialog("Chie: We are always teammates, that's it!",[["Certainly",0,0],["We can be more than that.",0,0]])
	]}

// chariot.rank = {
// 	points:,
// 	dialog:[
// 		new Dialog("",[[""],[""],[""]])
// ]}
var slinks = {
	chariot: chariot
}
module.exports = slinks;