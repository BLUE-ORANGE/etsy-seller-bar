let Sequelize = require('sequelize');
let sqlz = new Sequelize('etsy-gowri', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});



const Product = sqlz.define('product', {
  name: Sequelize.TEXT,
  imageUrl: Sequelize.TEXT,
  shopId: Sequelize.INTEGER
},{
  schema: 'public'
})

const Shop = sqlz.define('shop', {
  avatarurl: Sequelize.TEXT,
  name: Sequelize.STRING
},{
  schema: 'public'
});

var puppies = [{
  "name": "Tomorrow is Friday and everyone loves puppies",
  "imageUrl": "https://i.imgur.com/HGt5ifs.jpg",
  "shopId": 32
},
{
  "name": "Senior dogs are often over looked at shelters because they aren't considered as cute or desirable as puppies. Lenny is proof that you can still be adorable as a senior!",
  "imageUrl": "https://i.imgur.com/bLMuKK3.jpg",
  "shopId": 33
},
{
  "name": "Our Chihuahua just had puppies, they are the tiniest cutest things I have ever seen.",
  "imageUrl": "https://i.imgur.com/RDvap0I.jpg",
  "shopId": 59
},
{
  "name": "A couple years ago a coworker of mine said he was going to shoot the puppies his dog just had since he didn't want to deal with the shelter. The best decision I ever made was taking this guy and his brother away. Theo is now my best friend.",
  "imageUrl": "https://i.imgur.com/CGkYwnO.jpg",
  "shopId": 38
},
{
  "name": "Chuggington",
  "imageUrl": "https://i.imgur.com/JJNie2u.jpg",
  "shopId": 11
},
{
  "name": "Cute dry puppies",
  "imageUrl": "https://i.imgur.com/obh7GTF.jpg",
  "shopId": 11
},
{
  "name": "Puppies are cuter in the fall",
  "imageUrl": "https://i.imgur.com/qEFb5CE.jpg",
  "shopId": 53
},
{
  "name": "Heard you guys like puppies!",
  "imageUrl": "https://i.imgur.com/QN5SB83.jpg",
  "shopId": 29
},
{
  "name": "Puppies before  their grooming",
  "imageUrl": "https://i.imgur.com/ZfAjyAg.jpg",
  "shopId": 19
},
{
  "name": "cute litter of puppies",
  "imageUrl": "https://i.imgur.com/Dcanvd8.jpg",
  "shopId": 57
},
{
  "name": "dogs will always be puppies",
  "imageUrl": "https://i.imgur.com/gqb6SfQ.jpg",
  "shopId": 60
},
{
  "name": "When do puppies get their teeth?",
  "imageUrl": "https://i.imgur.com/gH1RnKw.jpg",
  "shopId": 38
},
{
  "name": "My baby Mastador :)",
  "imageUrl": "https://i.imgur.com/XyLUugf.jpg",
  "shopId": 36
},
{
  "name": "To the people with the forever puppies, mine's 5 years old and still baby-faced",
  "imageUrl": "https://i.imgur.com/15jidSh.jpg",
  "shopId": 59
},
{
  "name": "3 cute puppies",
  "imageUrl": "https://i.imgur.com/2MklPWD.jpg",
  "shopId": 24
},
{
  "name": "My Grandma's Friend had Puppies!!",
  "imageUrl": "https://i.imgur.com/PE2gpGE.jpg",
  "shopId": 30
},
{
  "name": "Cute little Puppy",
  "imageUrl": "https://i.imgur.com/V5JwOuS.jpg",
  "shopId": 13
},
{
  "name": "Everyone has cute images of their puppies and I have this derp....",
  "imageUrl": "https://i.imgur.com/LRqBNDM.jpg",
  "shopId": 10
},
{
  "name": "MY FRIEND FOUND PUPPIES TODAY!!!",
  "imageUrl": "https://i.imgur.com/mkY4ud8.jpg",
  "shopId": 4
},
{
  "name": "As far as cute puppies go, my dog Gracie can hang with the best of them",
  "imageUrl": "https://i.imgur.com/c8BHObG.jpg",
  "shopId": 33
},
{
  "name": "Cute Adorable Puppies",
  "imageUrl": "https://i.imgur.com/11FzYTI.jpg",
  "shopId": 51
},
{
  "name": "Malamute Puppies! So many of them!",
  "imageUrl": "https://i.imgur.com/xsCC0MK.jpg",
  "shopId": 19
},
{
  "name": "Stunning blue eyed husky puppies in a conference.",
  "imageUrl": "https://i.imgur.com/3Tk9zMC.jpg",
  "shopId": 41
},
{
  "name": "Guy was giving away puppies in front of my local Safeway last night. Meet my beagle/ dachshund Ruben",
  "imageUrl": "https://i.imgur.com/p7Sb7ai.jpg",
  "shopId": 42
},
{
  "name": "Her first litter of puppies! I have never seen her so exhausted.",
  "imageUrl": "https://i.imgur.com/5CSWrCa.jpg",
  "shopId": 35
},
{
  "name": "My dogs",
  "imageUrl": "https://i.imgur.com/10JcGaP.jpg",
  "shopId": 40
},
{
  "name": "Both lovely puppies hugging, looking so cute",
  "imageUrl": "https://i.imgur.com/IcjGfpx.jpg",
  "shopId": 25
},
{
  "name": "Cute puppies help work day blues",
  "imageUrl": "https://i.imgur.com/Cyg9ucL.jpg",
  "shopId": 6
},
{
  "name": "Puppies make my heart happy!",
  "imageUrl": "https://i.imgur.com/cavtYZK.jpg",
  "shopId": 2
},
{
  "name": "Puppies dog smile 1920*1080",
  "imageUrl": "https://i.imgur.com/hRgyzLE.jpg",
  "shopId": 27
},
{
  "name": "Find the Puppy, by Maxine",
  "imageUrl": "https://i.imgur.com/l3SiPiq.jpg",
  "shopId": 12
},
{
  "name": "Cute American Bulldog Puppies",
  "imageUrl": "https://i.imgur.com/M7RwleI.jpg",
  "shopId": 7
},
{
  "name": "Puppies love leaves",
  "imageUrl": "https://i.imgur.com/oJsd5QN.jpg",
  "shopId": 20
},
{
  "name": "All six puppies.",
  "imageUrl": "https://i.imgur.com/Na4ZewN.jpg",
  "shopId": 39
},
{
  "name": "My Puppies, Tinkerbell and Baxter after being groomed",
  "imageUrl": "https://i.imgur.com/9dqw5IV.jpg",
  "shopId": 24
},
{
  "name": "Arms full of Basset Hound puppies",
  "imageUrl": "https://i.imgur.com/LVNPd1o.jpg",
  "shopId": 31
},
{
  "name": "Just my puppies.",
  "imageUrl": "https://i.imgur.com/AeKrdfa.jpg",
  "shopId": 25
},
{
  "name": "i want these cute puppies",
  "imageUrl": "https://i.imgur.com/dSOBfYP.jpg",
  "shopId": 20
},
{
  "name": "Deez mai puppehs",
  "imageUrl": "https://i.imgur.com/ImqprvJ.jpg",
  "shopId": 60
},
{
  "name": "Cutness Overloaded.. :')",
  "imageUrl": "https://i.imgur.com/tvwih6Q.jpg",
  "shopId": 13
},
{
  "name": "This little guy just wanted to explore",
  "imageUrl": "https://i.imgur.com/CJ0qoDr.jpg",
  "shopId": 8
},
{
  "name": "Ridgeback puppies are special kind of cute!",
  "imageUrl": "https://i.imgur.com/oIjEjwj.jpg",
  "shopId": 45
},
{
  "name": "I fostered a litter of newborn puppies for two months until they were adopted. It was a bit overwhelming at times, but I think my dog will miss them.",
  "imageUrl": "https://i.imgur.com/EWMgj7B.jpg",
  "shopId": 31
},
{
  "name": "Beautiful Couples - puppies",
  "imageUrl": "https://i.imgur.com/x9xq86d.jpg",
  "shopId": 39
},
{
  "name": "MRW reading dead spider posts",
  "imageUrl": "https://i.imgur.com/H77AxyZ.jpg",
  "shopId": 12
},
{
  "name": "puppies at my home today",
  "imageUrl": "https://i.imgur.com/XYUIQVT.jpg",
  "shopId": 54
},
{
  "name": "The cute and lonely coydog on Wisdom Panel's dog community",
  "imageUrl": "https://i.imgur.com/ui2rL9Z.jpg",
  "shopId": 52
},
{
  "name": "My friend's white german shepard had puppies :D",
  "imageUrl": "https://i.imgur.com/uk8elhd.jpg",
  "shopId": 5
},
{
  "name": "It's all you, kid",
  "imageUrl": "https://i.imgur.com/4cSeS7a.jpg",
  "shopId": 52
},
{
  "name": "Cute Puppies In Snow",
  "imageUrl": "https://i.imgur.com/1zZ4zgf.jpg",
  "shopId": 2
},
{
  "name": "It's my cake day, have some puppies in a tea cup!",
  "imageUrl": "https://i.imgur.com/PUe9uvJ.jpg",
  "shopId": 6
},
{
  "name": "Cute Puppies sleeping together",
  "imageUrl": "https://i.imgur.com/9auSzVW.jpg",
  "shopId": 32
},
{
  "name": "Googled \"buried in puppies\", got what I asked for",
  "imageUrl": "https://i.imgur.com/ATn3kAo.jpg",
  "shopId": 38
},
{
  "name": "Hmm, wonder what else I can shred in this vicinity...",
  "imageUrl": "https://i.imgur.com/FFSeXfw.jpg",
  "shopId": 59
},
{
  "name": "Hush Puppies, Oh Really!!!",
  "imageUrl": "https://i.imgur.com/S1LeKeb.jpg",
  "shopId": 45
},
{
  "name": "Look at our cute puppies... LOOK AT THEM!",
  "imageUrl": "https://i.imgur.com/PHNSm2h.jpg",
  "shopId": 28
},
{
  "name": "I see cats getting love, but what about cute puppies?!",
  "imageUrl": "https://i.imgur.com/WKVQj37.jpg",
  "shopId": 15
},
{
  "name": "Look at these puppies looking all cute and shit in socks",
  "imageUrl": "https://i.imgur.com/VFX69I2.jpg",
  "shopId": 29
},
{
  "name": "Jackson gets headgear...no puppies for you!",
  "imageUrl": "https://i.imgur.com/cKh8XMB.jpg",
  "shopId": 45
},
{
  "name": "My favorite chiropractor (plus cute puppies!)",
  "imageUrl": "https://i.imgur.com/npH0K.jpg",
  "shopId": 57
},
{
  "name": "Pudgy puppies are cute puppies.",
  "imageUrl": "https://i.imgur.com/9Q8jIc8.jpg",
  "shopId": 44
},
{
  "name": "I heard you guys like cute puppies...",
  "imageUrl": "https://i.imgur.com/q5lktG2.jpg",
  "shopId": 6
},
{
  "name": "Just a normal day at work, working with cute little puppies!",
  "imageUrl": "https://i.imgur.com/JM3M09M.jpg",
  "shopId": 38
},
{
  "name": "Ear kisses (12 week corgi puppies)",
  "imageUrl": "https://i.imgur.com/3Ebr3W0.jpg",
  "shopId": 49
},
{
  "name": "Here are Lucy and Leo, some cute puppies for you!",
  "imageUrl": "https://i.imgur.com/koQOGvj.jpg",
  "shopId": 37
},
{
  "name": "I too put a bowtie on my schnauzer. Lazy one would not wake up though...",
  "imageUrl": "https://i.imgur.com/r7WZEem.jpg",
  "shopId": 44
},
{
  "name": "Cute Puppies Playing Friendship",
  "imageUrl": "https://i.imgur.com/0fEC6Mg.jpg",
  "shopId": 1
},
{
  "name": "Everyone else has cute puppies... *sigh*",
  "imageUrl": "https://i.imgur.com/YJNfMio.jpg",
  "shopId": 23
},
{
  "name": "Imgur help us name our new foster puppy!",
  "imageUrl": "https://i.imgur.com/6515enN.jpg",
  "shopId": 31
},
{
  "name": "Puppies for adoption",
  "imageUrl": "https://i.imgur.com/CWVFWeX.jpg",
  "shopId": 42
},
{
  "name": "Just a couple of puppies napping",
  "imageUrl": "https://i.imgur.com/2oYliYc.jpg",
  "shopId": 57
},
{
  "name": "The rescue where I got my puppy has a new group of puppies for adoption.. This is Joseph, a lab/husky mix.",
  "imageUrl": "https://i.imgur.com/whrEcKl.jpg",
  "shopId": 32
},
{
  "name": "My campus is filled with guide dog puppies and I can't get any work done ever",
  "imageUrl": "https://i.imgur.com/GQ5fqsK.jpg",
  "shopId": 28
},
{
  "name": "Cute White & Golden Labrador Puppies",
  "imageUrl": "https://i.imgur.com/Ic66r6u.jpg",
  "shopId": 35
},
{
  "name": "Attempted to take a cute pic of my puppies...",
  "imageUrl": "https://i.imgur.com/oL5Y1eN.jpg",
  "shopId": 40
},
{
  "name": "2 puppies double cuteness",
  "imageUrl": "https://i.imgur.com/kTO35Pj.jpg",
  "shopId": 2
},
{
  "name": "puppies are hard work. My older dog agrees. catching a nap between play rounds.",
  "imageUrl": "https://i.imgur.com/1SA9B9U.jpg",
  "shopId": 12
},
{
  "name": "Didn't know it was possible to be more bored at work than me",
  "imageUrl": "https://i.imgur.com/dEhfN5T.jpg",
  "shopId": 48
},
{
  "name": "My puppies eyes just opened. Look at this cute face!",
  "imageUrl": "https://i.imgur.com/76iXONn.jpg",
  "shopId": 14
},
{
  "name": "For my second cakeday, I googled the most boring picture ever. This was the third result.",
  "imageUrl": "https://i.imgur.com/QdbPWyM.jpg",
  "shopId": 26
},
{
  "name": "you are what you eat",
  "imageUrl": "https://i.imgur.com/HFJ9Ldf.jpg",
  "shopId": 53
},
{
  "name": "Cute Dogs And Puppies",
  "imageUrl": "https://i.imgur.com/9Z9CXiV.jpg",
  "shopId": 14
},
{
  "name": "You gotta be cold hearted to not love puppies.",
  "imageUrl": "https://i.imgur.com/p50NRFu.jpg",
  "shopId": 40
},
{
  "name": "Life goal: Be this picture.",
  "imageUrl": "https://i.imgur.com/WxPitsx.jpg",
  "shopId": 33
},
{
  "name": "Corgi puppies, now fun-sized",
  "imageUrl": "https://i.imgur.com/07q4ZMZ.jpg",
  "shopId": 32
},
{
  "name": "Probably my favorite pic I've taken of my pups yet.",
  "imageUrl": "https://i.imgur.com/oUnnvyH.jpg",
  "shopId": 57
},
{
  "name": "New foster puppies 6 weeks so cute I'm dying of cuteness",
  "imageUrl": "https://i.imgur.com/pa44JVU.jpg",
  "shopId": 6
},
{
  "name": "Two Cute puppies",
  "imageUrl": "https://i.imgur.com/cAuzrvS.jpg",
  "shopId": 9
},
{
  "name": "cute puppies",
  "imageUrl": "https://i.imgur.com/l0JDbH0.jpg",
  "shopId": 55
},
{
  "name": "Cute Dogs Puppies",
  "imageUrl": "https://i.imgur.com/ZeWONdI.jpg",
  "shopId": 22
},
{
  "name": "Cute Siberian Husky Puppies",
  "imageUrl": "https://i.imgur.com/ZjC8Bua.jpg",
  "shopId": 34
},
{
  "name": "Beautiful Puppies",
  "imageUrl": "https://i.imgur.com/V4M4eBV.jpg",
  "shopId": 45
},
{
  "name": "For 8 years now I've been raising and training puppies through an organization that provides service dogs free of charge to recipients. Yesterday I picked up puppy, Estee.",
  "imageUrl": "https://i.imgur.com/n2DxkhZ.jpg",
  "shopId": 56
},
{
  "name": "Cute Chocolate Labrador Puppies Looking At Camera",
  "imageUrl": "https://i.imgur.com/t2hpSjg.jpg",
  "shopId": 52
},
{
  "name": "Nothing to see here but a new born Malamute",
  "imageUrl": "https://i.imgur.com/QebTEVA.jpg",
  "shopId": 51
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/2IU603f.jpg",
  "shopId": 7
},
{
  "name": "Pomeranian puppies are so stinking cute!",
  "imageUrl": "https://i.imgur.com/KPgXmaY.jpg",
  "shopId": 17
},
{
  "name": "Nom nom nom",
  "imageUrl": "https://i.imgur.com/AOMZpj7.jpg",
  "shopId": 10
},
{
  "name": "Cutest Puppies Altogether To Make You Say",
  "imageUrl": "https://i.imgur.com/LOFnelt.jpg",
  "shopId": 53
},
{
  "name": "cute 3 puppies",
  "imageUrl": "https://i.imgur.com/odTFwaY.jpg",
  "shopId": 50
},
{
  "name": "In a desperate attempt to make fp, I give you a great pair of sweater puppies.",
  "imageUrl": "https://i.imgur.com/bkeZOK3.jpg",
  "shopId": 58
},
{
  "name": "Cash for cute puppies? check!",
  "imageUrl": "https://i.imgur.com/b21zL.jpg",
  "shopId": 26
},
{
  "name": "Cute puppies make fun in office",
  "imageUrl": "https://i.imgur.com/3aIcOUl.jpg",
  "shopId": 29
},
{
  "name": "My dogs cute puppies are playing and they are awesome but they don't eat",
  "imageUrl": "https://i.imgur.com/JpYVfmC.jpg",
  "shopId": 32
},
{
  "name": "My 13 year old Christmas puppies.",
  "imageUrl": "https://i.imgur.com/jtr7LvP.jpg",
  "shopId": 36
},
{
  "name": "Uber Puppies Ready for Drawing",
  "imageUrl": "https://i.imgur.com/VVaOF0L.jpg",
  "shopId": 21
},
{
  "name": "in India, you can see these adorable cute roadside puppies...",
  "imageUrl": "https://i.imgur.com/T3DOrIP.jpg",
  "shopId": 50
},
{
  "name": "Bloodhound puppies have the cutest sad face look!",
  "imageUrl": "https://i.imgur.com/NRzezjq.jpg",
  "shopId": 35
},
{
  "name": "Cute Bulldog Puppies",
  "imageUrl": "https://i.imgur.com/n7R3Kj1.jpg",
  "shopId": 37
},
{
  "name": "Saw this stroller full of fur",
  "imageUrl": "https://i.imgur.com/HUDrSUI.jpg",
  "shopId": 32
},
{
  "name": "The stray I adopted recently had puppies. I was pretty stressed about having puppies to look after, and then I saw this face...",
  "imageUrl": "https://i.imgur.com/5v9ukZB.jpg",
  "shopId": 41
},
{
  "name": "Cute Labrador retriever puppies",
  "imageUrl": "https://i.imgur.com/Y5pgk5o.jpg",
  "shopId": 55
},
{
  "name": "Cute Shih Tzu puppies",
  "imageUrl": "https://i.imgur.com/Cc7Wseh.jpg",
  "shopId": 14
},
{
  "name": "puppies with cute kids",
  "imageUrl": "https://i.imgur.com/UZ64Eaw.jpg",
  "shopId": 37
},
{
  "name": "Cuddle Puppies",
  "imageUrl": "https://i.imgur.com/aOQdITx.jpg",
  "shopId": 16
},
{
  "name": "A group of puppies were dumped in the middle of nowhere. I got to save one of them:) (the others found forever homes too!)",
  "imageUrl": "https://i.imgur.com/xL2MR3c.jpg",
  "shopId": 37
},
{
  "name": "Five puppies were rescued from a house fire this morning. Here are some of them.",
  "imageUrl": "https://i.imgur.com/bqAFyoA.jpg",
  "shopId": 20
},
{
  "name": "While the rest of imgur finds cute puppies and kitties... All I find is this nope.",
  "imageUrl": "https://i.imgur.com/ZyLyUuS.jpg",
  "shopId": 53
},
{
  "name": "One of my new puppies! Less than a day old.",
  "imageUrl": "https://i.imgur.com/49klTyr.jpg",
  "shopId": 10
},
{
  "name": "German shepherd puppies broke out of jail",
  "imageUrl": "https://i.imgur.com/g4atn0y.jpg",
  "shopId": 43
},
{
  "name": "thx mammy for this beautiful neckerchief",
  "imageUrl": "https://i.imgur.com/5X1DlSR.jpg",
  "shopId": 29
},
{
  "name": "Kayda-pants",
  "imageUrl": "https://i.imgur.com/xlqmjKX.jpg",
  "shopId": 1
},
{
  "name": "ADD CUTE PUPPIES OR DOGS OR CATS OR WHATEVER!!!!!!!!!!!",
  "imageUrl": "https://i.imgur.com/JaEvZ.jpg",
  "shopId": 59
},
{
  "name": "Crazy Beard and Big Paws",
  "imageUrl": "https://i.imgur.com/6dBb9mx.jpg",
  "shopId": 34
},
{
  "name": "3 puppies and a capybara",
  "imageUrl": "https://i.imgur.com/DeWPQNc.jpg",
  "shopId": 3
},
{
  "name": "I heard you like cute puppies...",
  "imageUrl": "https://i.imgur.com/V9fVXMt.jpg",
  "shopId": 48
},
{
  "name": "Cute Beautiful Puppies",
  "imageUrl": "https://i.imgur.com/RsibkvN.jpg",
  "shopId": 30
},
{
  "name": "Dogs cute puppies in basket",
  "imageUrl": "https://i.imgur.com/2isjvym.jpg",
  "shopId": 18
},
{
  "name": "My two Miniature Schnauzers at 8 weeks old. Ralphy and George. I'm probably biased but holy shit Schnauzers make cute puppies.",
  "imageUrl": "https://i.imgur.com/QYEUPsz.jpg",
  "shopId": 17
},
{
  "name": "sleep time",
  "imageUrl": "https://i.imgur.com/3mHS7gM.jpg",
  "shopId": 15
},
{
  "name": "Awww cute puppies sleeping",
  "imageUrl": "https://i.imgur.com/p7cda3I.jpg",
  "shopId": 19
},
{
  "name": "The nearby shelter is looking for a foster home for this pregnant doggy so she doesn't have her puppies in a shelter",
  "imageUrl": "https://i.imgur.com/5AZGwp9.jpg",
  "shopId": 30
},
{
  "name": "Cute Dalmatian Puppies",
  "imageUrl": "https://i.imgur.com/Sn99wf8.jpg",
  "shopId": 12
},
{
  "name": "I love puppies, they do such adorable things.",
  "imageUrl": "https://i.imgur.com/BxI926w.jpg",
  "shopId": 58
},
{
  "name": "Little White Cute Puppy",
  "imageUrl": "https://i.imgur.com/MA7JZpj.jpg",
  "shopId": 8
},
{
  "name": "my puppies looking all professional",
  "imageUrl": "https://i.imgur.com/MW2fIEI.jpg",
  "shopId": 4
},
{
  "name": "cute puppies",
  "imageUrl": "https://i.imgur.com/PTviz6Q.jpg",
  "shopId": 6
},
{
  "name": "puppies!",
  "imageUrl": "https://i.imgur.com/a1QZmFS.jpg",
  "shopId": 25
},
{
  "name": "Cute German Shefard Puppies.",
  "imageUrl": "https://i.imgur.com/StjbWtw.jpg",
  "shopId": 30
},
{
  "name": "Our Chihuahua had puppies.",
  "imageUrl": "https://i.imgur.com/HdDwDdy.jpg",
  "shopId": 2
},
{
  "name": "Used to volunteer at a dog rescue, a girl came in to play with the puppies and they fell asleep in her lap within 5 minutes",
  "imageUrl": "https://i.imgur.com/ii8hI3A.jpg",
  "shopId": 28
},
{
  "name": "Cute Puppies :)",
  "imageUrl": "https://i.imgur.com/jg0pdYv.jpg",
  "shopId": 51
},
{
  "name": "I feel like this would be the same as wrapping kryptonite and slapping a cute picture of Superman on it.",
  "imageUrl": "https://i.imgur.com/lmK4MUO.jpg",
  "shopId": 14
},
{
  "name": "I was assistant midwife to a litter of Miniature Schnauzer puppies today.",
  "imageUrl": "https://i.imgur.com/ppsZh9q.jpg",
  "shopId": 11
},
{
  "name": "Everyone is always posting cute pictures of puppies but I think he is just as adorable. Reddit meet Aries",
  "imageUrl": "https://i.imgur.com/JmrwEl9.jpg",
  "shopId": 10
},
{
  "name": "Alaskan Malamute puppies on 4th of July",
  "imageUrl": "https://i.imgur.com/rfeay70.jpg",
  "shopId": 10
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/WtrubeK.jpg",
  "shopId": 15
},
{
  "name": "Cute Husky Puppies",
  "imageUrl": "https://i.imgur.com/RRvKxHt.jpg",
  "shopId": 35
},
{
  "name": "My Yorkie Just Had 3 Puppies, This is One of Them.",
  "imageUrl": "https://i.imgur.com/mQhoIMB.jpg",
  "shopId": 42
},
{
  "name": "My dog just had puppies, took the best picture of her ever.",
  "imageUrl": "https://i.imgur.com/ULsvr5L.jpg",
  "shopId": 15
},
{
  "name": "very cute white puppies playing on the beach",
  "imageUrl": "https://i.imgur.com/1cUWpHd.jpg",
  "shopId": 51
},
{
  "name": "I have 5 black puppies and 2 yellow this is how they sleep",
  "imageUrl": "https://i.imgur.com/xgYX9lc.jpg",
  "shopId": 6
},
{
  "name": "Half puppies, half tiny otters!",
  "imageUrl": "https://i.imgur.com/hdDehnN.jpg",
  "shopId": 35
},
{
  "name": "Cute Puppy",
  "imageUrl": "https://i.imgur.com/jkewaZW.jpg",
  "shopId": 12
},
{
  "name": "So cute! I also have a puppy named Nala, but she is about 6 months now. She is a corgi mix. High-five for awesome puppies",
  "imageUrl": "https://i.imgur.com/e1NMl7p.jpg",
  "shopId": 51
},
{
  "name": "Brother and sister about to pounce",
  "imageUrl": "https://i.imgur.com/yTJo7vx.jpg",
  "shopId": 26
},
{
  "name": "Happy Mom with cute puppies",
  "imageUrl": "https://i.imgur.com/dnw3w6d.jpg",
  "shopId": 26
},
{
  "name": "Aren't they all cute as puppies?",
  "imageUrl": "https://i.imgur.com/xkPqgAI.jpg",
  "shopId": 51
},
{
  "name": "Labradoodle/German Shepherd puppies just arrived, those little claws!",
  "imageUrl": "https://i.imgur.com/dFrcwPW.jpg",
  "shopId": 13
},
{
  "name": "A trunkful of puppies",
  "imageUrl": "https://i.imgur.com/yWbyjQY.jpg",
  "shopId": 36
},
{
  "name": "Why are puppies so cute?",
  "imageUrl": "https://i.imgur.com/nJVgnhd.jpg",
  "shopId": 2
},
{
  "name": "Who even needs a boyfriend when you have puppies to cuddle with?",
  "imageUrl": "https://i.imgur.com/BU6xiy5.jpg",
  "shopId": 2
},
{
  "name": "aww cute",
  "imageUrl": "https://i.imgur.com/w2xG7OC.jpg",
  "shopId": 14
},
{
  "name": "My friend fosters puppies with no mama's. This belongs here.",
  "imageUrl": "https://i.imgur.com/Ktzmtx2.jpg",
  "shopId": 36
},
{
  "name": "My wife and I fostered a litter of 6 puppies. This was our last one, Brisket, on her way to her new family.",
  "imageUrl": "https://i.imgur.com/d7ndBHe.jpg",
  "shopId": 4
},
{
  "name": "Lovely cute little puppies...",
  "imageUrl": "https://i.imgur.com/BFS3H0m.jpg",
  "shopId": 39
},
{
  "name": "christmas kittens and puppies",
  "imageUrl": "https://i.imgur.com/mPX8ip3.jpg",
  "shopId": 31
},
{
  "name": "Puggle WIP",
  "imageUrl": "https://i.imgur.com/1ZkrZ3k.jpg",
  "shopId": 2
},
{
  "name": "Booger Bear is the derpiest of the puppies I'm bottle feeding.",
  "imageUrl": "https://i.imgur.com/uffo20y.jpg",
  "shopId": 29
},
{
  "name": "Fluffy Capybara and Puppies",
  "imageUrl": "https://i.imgur.com/FGceE50.jpg",
  "shopId": 34
},
{
  "name": "Puppies sleeping butt to face",
  "imageUrl": "https://i.imgur.com/TXafG3A.jpg",
  "shopId": 25
},
{
  "name": "Jackie Chan with some puppies.",
  "imageUrl": "https://i.imgur.com/j2nJS74.jpg",
  "shopId": 45
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/AOQZlZt.jpg",
  "shopId": 28
},
{
  "name": "My puppies made a new friend in Seaside, Florida",
  "imageUrl": "https://i.imgur.com/WPm53QN.jpg",
  "shopId": 41
},
{
  "name": "Shih Tzu Puppies",
  "imageUrl": "https://i.imgur.com/NlqgIFt.jpg",
  "shopId": 7
},
{
  "name": "I was looking for cute puppies when I stumbled upon this monstrosity",
  "imageUrl": "https://i.imgur.com/ldydEYR.jpg",
  "shopId": 4
},
{
  "name": "Cute Cairn Terrier Puppies",
  "imageUrl": "https://i.imgur.com/GvcO3ug.jpg",
  "shopId": 17
},
{
  "name": "Puppies!!",
  "imageUrl": "https://i.imgur.com/bwrgrd7.jpg",
  "shopId": 12
},
{
  "name": "Cute puppies",
  "imageUrl": "https://i.imgur.com/wekVz4L.jpg",
  "shopId": 32
},
{
  "name": "Cute and nice puppies",
  "imageUrl": "https://i.imgur.com/1nJilHe.jpg",
  "shopId": 15
},
{
  "name": "cute puppies..",
  "imageUrl": "https://i.imgur.com/uPBSOFZ.jpg",
  "shopId": 44
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/9RK2pa5.jpg",
  "shopId": 4
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/iILZPQn.jpg",
  "shopId": 4
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/MxXjbD0.jpg",
  "shopId": 29
},
{
  "name": "Cute Pomsky Puppies",
  "imageUrl": "https://i.imgur.com/JBaLgbg.jpg",
  "shopId": 20
},
{
  "name": "Cute-Akita-Puppies",
  "imageUrl": "https://i.imgur.com/ZLiPUG3.jpg",
  "shopId": 2
},
{
  "name": "Cute puppies",
  "imageUrl": "https://i.imgur.com/14yPRCj.jpg",
  "shopId": 5
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/cjASJxX.jpg",
  "shopId": 55
},
{
  "name": "I heart puppies",
  "imageUrl": "https://i.imgur.com/cPWii3q.jpg",
  "shopId": 25
},
{
  "name": "cute puppies",
  "imageUrl": "https://i.imgur.com/UHXFaKV.jpg",
  "shopId": 18
},
{
  "name": "Sooo cute puppies",
  "imageUrl": "https://i.imgur.com/HYFaTpc.jpg",
  "shopId": 50
},
{
  "name": "Two bulldog puppies!",
  "imageUrl": "https://i.imgur.com/hAlACCh.jpg",
  "shopId": 32
},
{
  "name": "Cute bowls for those that don't like sports ball",
  "imageUrl": "https://i.imgur.com/y28yo5g.jpg",
  "shopId": 30
},
{
  "name": "My niece got a new puppy.",
  "imageUrl": "https://i.imgur.com/uhT6mcu.jpg",
  "shopId": 57
},
{
  "name": "I heard you guys liked puppies",
  "imageUrl": "https://i.imgur.com/7N6bvAR.jpg",
  "shopId": 21
},
{
  "name": "I heard you guys like cute puppies.",
  "imageUrl": "https://i.imgur.com/6vHXb.jpg",
  "shopId": 22
},
{
  "name": "I just turned 1-imgur-year-old ! Post cute puppies! Or kittens! Or penguins!",
  "imageUrl": "https://i.imgur.com/XgLinhG.jpg",
  "shopId": 16
},
{
  "name": "Puppies",
  "imageUrl": "https://i.imgur.com/ORoJfDe.jpg",
  "shopId": 39
},
{
  "name": "Because Imgur needs more cute pictures of puppies",
  "imageUrl": "https://i.imgur.com/mth6qrp.jpg",
  "shopId": 2
},
{
  "name": "Sooooooo Cute Puppies",
  "imageUrl": "https://i.imgur.com/A7jk5ta.jpg",
  "shopId": 52
},
{
  "name": "If we're still showing puppies...",
  "imageUrl": "https://i.imgur.com/Tm7TM1j.jpg",
  "shopId": 46
},
{
  "name": "My cute puppies Jerry and Rock, thinking which ball is suitable for our playing?",
  "imageUrl": "https://i.imgur.com/qGULqjH.jpg",
  "shopId": 37
},
{
  "name": "more cute puppies",
  "imageUrl": "https://i.imgur.com/Z999EqH.jpg",
  "shopId": 23
},
{
  "name": "It's a puppy. Puppies are cute.",
  "imageUrl": "https://i.imgur.com/3GTOAhV.jpg",
  "shopId": 18
},
{
  "name": "Francis and his playmate/girlfriend Lulu",
  "imageUrl": "https://i.imgur.com/FrFH47E.jpg",
  "shopId": 12
},
{
  "name": "Weiner Love",
  "imageUrl": "https://i.imgur.com/QlAY5I1.jpg",
  "shopId": 19
},
{
  "name": "Cute puppies is the only show she will watch.",
  "imageUrl": "https://i.imgur.com/R21Tjjv.jpg",
  "shopId": 17
},
{
  "name": "Oh I just want to snuggle his face.",
  "imageUrl": "https://i.imgur.com/AkK32zz.jpg",
  "shopId": 6
},
{
  "name": "Shoo cute Samoyed Puppies",
  "imageUrl": "https://i.imgur.com/KfssvRr.jpg",
  "shopId": 39
},
{
  "name": "So many puppies!",
  "imageUrl": "https://i.imgur.com/AlUn5B4.jpg",
  "shopId": 9
},
{
  "name": "A Definitive Ranking Of The Cutest Puppies",
  "imageUrl": "https://i.imgur.com/uHttJtS.jpg",
  "shopId": 24
},
{
  "name": "Meet Roland, our new rescue pup.",
  "imageUrl": "https://i.imgur.com/3xBsTjI.jpg",
  "shopId": 21
},
{
  "name": "Imgur, meet Magnum and Drogo.",
  "imageUrl": "https://i.imgur.com/aj46lyz.jpg",
  "shopId": 48
},
{
  "name": "I smell like puppies",
  "imageUrl": "https://i.imgur.com/8EsAZTc.jpg",
  "shopId": 1
},
{
  "name": "Playing Puppies together",
  "imageUrl": "https://i.imgur.com/VCmuMf1.jpg",
  "shopId": 41
},
{
  "name": "It's my cake day today and I am unprepared:( I don't have cute pitctures of puppies or kittens, so I leave you with this (not mine)",
  "imageUrl": "https://i.imgur.com/14ssZaz.jpg",
  "shopId": 13
},
{
  "name": "Our shiba just had puppies. Such cute. Many doge. Wow.",
  "imageUrl": "https://i.imgur.com/c1WrE4i.jpg",
  "shopId": 14
},
{
  "name": "Because puppies shouldn't have to get their fur wet",
  "imageUrl": "https://i.imgur.com/F2RDzJH.jpg",
  "shopId": 26
},
{
  "name": "looking my cute retriever puppies.",
  "imageUrl": "https://i.imgur.com/l2GpBlT.jpg",
  "shopId": 58
},
{
  "name": "They are so cute!!",
  "imageUrl": "https://i.imgur.com/JB1OH6w.jpg",
  "shopId": 14
},
{
  "name": "Bushel 'O Puppies",
  "imageUrl": "https://i.imgur.com/5dHpf2m.jpg",
  "shopId": 39
},
{
  "name": "Chow chow puppies are basically a ball of fluff",
  "imageUrl": "https://i.imgur.com/CPP59cL.jpg",
  "shopId": 10
},
{
  "name": "Everybody loves puppies!",
  "imageUrl": "https://i.imgur.com/bVhLrER.jpg",
  "shopId": 50
},
{
  "name": "Sleepy Puppies",
  "imageUrl": "https://i.imgur.com/kTUu1gF.jpg",
  "shopId": 27
},
{
  "name": "Wheaten terrier puppies, under two weeks old.",
  "imageUrl": "https://i.imgur.com/TdF77fJ.jpg",
  "shopId": 52
},
{
  "name": "Check out her puppies. Her bulldogs are cute too.",
  "imageUrl": "https://i.imgur.com/AucykyO.jpg",
  "shopId": 47
},
{
  "name": "Ok, so they aren't cute little puppies, but they are sweet old ladies",
  "imageUrl": "https://i.imgur.com/Q5CznNv.jpg",
  "shopId": 60
},
{
  "name": "He's so cute when he's sleeping :')",
  "imageUrl": "https://i.imgur.com/qHe8Wos.jpg",
  "shopId": 42
},
{
  "name": "cute puppies ever",
  "imageUrl": "https://i.imgur.com/yAMlUf6.jpg",
  "shopId": 14
},
{
  "name": "Cute pomeranian puppies. They couldn’t care less about you and when you get home…",
  "imageUrl": "https://i.imgur.com/Yxl9IvR.jpg",
  "shopId": 51
},
{
  "name": "She Got Puppies.",
  "imageUrl": "https://i.imgur.com/kZJcB6z.jpg",
  "shopId": 44
},
{
  "name": "Cute Labrador Retriever with their precious puppies",
  "imageUrl": "https://i.imgur.com/CaCvMyf.jpg",
  "shopId": 20
},
{
  "name": "They're migrating south for the winter.",
  "imageUrl": "https://i.imgur.com/xMFctjc.jpg",
  "shopId": 51
},
{
  "name": "Cake day = cute puppies",
  "imageUrl": "https://i.imgur.com/YdxHq9l.jpg",
  "shopId": 11
},
{
  "name": "I see your cute puppies and raise you Jax, my sister's new American tree feist",
  "imageUrl": "https://i.imgur.com/BymgU83.jpg",
  "shopId": 52
},
{
  "name": "Cute Cat & Puppies",
  "imageUrl": "https://i.imgur.com/fruI3ig.jpg",
  "shopId": 6
},
{
  "name": "Cute & sleepy puppies",
  "imageUrl": "https://i.imgur.com/1NqLiSi.jpg",
  "shopId": 10
},
{
  "name": "What about puppies? Puppies are cute, right?",
  "imageUrl": "https://i.imgur.com/f1JvHZt.jpg",
  "shopId": 20
},
{
  "name": "Cute English Bulldog Puppies For Rehome",
  "imageUrl": "https://i.imgur.com/xehIEX2.jpg",
  "shopId": 18
},
{
  "name": "I heard you guys like cute puppies. First submission, how'd I do?",
  "imageUrl": "https://i.imgur.com/Nyhf6NH.jpg",
  "shopId": 30
},
{
  "name": "She got me cute adorable dalmatian puppies",
  "imageUrl": "https://i.imgur.com/zpzTET9.jpg",
  "shopId": 38
},
{
  "name": "Pesky birds!",
  "imageUrl": "https://i.imgur.com/zEEs6PA.jpg",
  "shopId": 24
},
{
  "name": "Puppies from the last adoption drive",
  "imageUrl": "https://i.imgur.com/tOnuESc.jpg",
  "shopId": 40
},
{
  "name": "Cute ROTTWEILER puppies",
  "imageUrl": "https://i.imgur.com/cgu8rwk.jpg",
  "shopId": 43
},
{
  "name": "Cute Puppies!",
  "imageUrl": "https://i.imgur.com/EtnvUhK.jpg",
  "shopId": 51
},
{
  "name": "I needed a little smile today. Imgur helped. So here is a picture of cute puppies as a thank you.",
  "imageUrl": "https://i.imgur.com/jL1tZ1J.jpg",
  "shopId": 10
},
{
  "name": "Saint Bernard puppies are so cute.",
  "imageUrl": "https://i.imgur.com/LoEYtbg.jpg",
  "shopId": 18
},
{
  "name": "So many puppies in the snow. Well Dylan is 15 and he is just as cute in the snow as your puppies!",
  "imageUrl": "https://i.imgur.com/8a8HwE7.jpg",
  "shopId": 33
},
{
  "name": "Having a bad day? Well, puppies.",
  "imageUrl": "https://i.imgur.com/568rBH0.jpg",
  "shopId": 50
},
{
  "name": "So apparently otters, although cute, are some tough puppies.",
  "imageUrl": "https://i.imgur.com/FZHud53.jpg",
  "shopId": 3
},
{
  "name": "Cute Pomsky Puppies",
  "imageUrl": "https://i.imgur.com/YvCfwZi.jpg",
  "shopId": 4
},
{
  "name": "I hate it when people bring their cute puppies to work. All work stops, that's not what I hate. Now I require a puppy. That's what I hate.",
  "imageUrl": "https://i.imgur.com/ICraCtF.jpg",
  "shopId": 47
},
{
  "name": "Sheltie siblings taking a nap",
  "imageUrl": "https://i.imgur.com/ZCWxjMc.jpg",
  "shopId": 25
},
{
  "name": "Stilllll drunk. Can't stop lookaing at cute puppies. Hope you enjoy",
  "imageUrl": "https://i.imgur.com/07gock7.jpg",
  "shopId": 36
},
{
  "name": "Puppies have SUCH hard lives!!",
  "imageUrl": "https://i.imgur.com/AKkIefR.jpg",
  "shopId": 6
},
{
  "name": "Desktop Puppy",
  "imageUrl": "https://i.imgur.com/lE5oRo5.jpg",
  "shopId": 6
},
{
  "name": "Lulu and Niko",
  "imageUrl": "https://i.imgur.com/vdQD12R.jpg",
  "shopId": 54
},
{
  "name": "Puppies and Baby",
  "imageUrl": "https://i.imgur.com/Red8LmJ.jpg",
  "shopId": 25
},
{
  "name": "Puppies Who Are Too Cute To Be Real",
  "imageUrl": "https://i.imgur.com/2CXL6T3.jpg",
  "shopId": 27
},
{
  "name": "\"Your cage will not hold us, human!\"",
  "imageUrl": "https://i.imgur.com/hlMAvBW.jpg",
  "shopId": 33
},
{
  "name": "Cute Christmas Puppies",
  "imageUrl": "https://i.imgur.com/621BGSA.jpg",
  "shopId": 56
},
{
  "name": "Rescue Puppies!",
  "imageUrl": "https://i.imgur.com/StsuyXS.jpg",
  "shopId": 24
},
{
  "name": "I don't have any cute puppies for my cakeday, so heres a wallpaper for you",
  "imageUrl": "https://i.imgur.com/v5j2GIb.jpg",
  "shopId": 5
},
{
  "name": "More of my puppies because f**k you, they're cute",
  "imageUrl": "https://i.imgur.com/TipOESM.jpg",
  "shopId": 39
},
{
  "name": "So i tried to take a cute photo of our puppies...",
  "imageUrl": "https://i.imgur.com/ZDD1eHk.jpg",
  "shopId": 10
},
{
  "name": "German Shepard Puppies",
  "imageUrl": "https://i.imgur.com/afEjW67.jpg",
  "shopId": 50
},
{
  "name": "Because Sometimes You Just Need a Pic of a Cute Puppy",
  "imageUrl": "https://i.imgur.com/Pjnb0Yc.jpg",
  "shopId": 19
},
{
  "name": "Derp ball of fur <3",
  "imageUrl": "https://i.imgur.com/DeL9Vy8.jpg",
  "shopId": 11
},
{
  "name": "Puppies that look like teddy bears",
  "imageUrl": "https://i.imgur.com/U9ivOCf.jpg",
  "shopId": 37
},
{
  "name": "Life behind bars",
  "imageUrl": "https://i.imgur.com/Ax2CjM1.jpg",
  "shopId": 1
},
{
  "name": "Happiest doggie ever.",
  "imageUrl": "https://i.imgur.com/F1MERSO.jpg",
  "shopId": 22
},
{
  "name": "1st of 8 puppies in my awesome dog's litter!",
  "imageUrl": "https://i.imgur.com/YRzv74s.jpg",
  "shopId": 47
},
{
  "name": "Puppies are cute.",
  "imageUrl": "https://i.imgur.com/YA5mxkm.jpg",
  "shopId": 26
},
{
  "name": "I see a lot of cute puppies, so here is a sexy puppy :)",
  "imageUrl": "https://i.imgur.com/7zD5Boq.jpg",
  "shopId": 59
},
{
  "name": "Who wants to see a video of cute puppies playing with ice cubes?",
  "imageUrl": "https://i.imgur.com/Dg9Dl08.jpg",
  "shopId": 10
},
{
  "name": "My puppies begging for their food and being ridiculously cute",
  "imageUrl": "https://i.imgur.com/nBOW1Bn.jpg",
  "shopId": 43
},
{
  "name": "New batch of super cute baby animals | Awesomely Cute, Cute Kittens, Cute Puppies, Cute Animals, Cute Babies and Cute",
  "imageUrl": "https://i.imgur.com/5NU4qRx.jpg",
  "shopId": 50
},
{
  "name": "I was told cute puppies are a thing here...",
  "imageUrl": "https://i.imgur.com/XrfdFL1.jpg",
  "shopId": 23
},
{
  "name": "This is when puppies are cute...",
  "imageUrl": "https://i.imgur.com/0u7ivgT.jpg",
  "shopId": 36
},
{
  "name": "Old english sheepdog puppies are too cute",
  "imageUrl": "https://i.imgur.com/03utI48.jpg",
  "shopId": 34
},
{
  "name": "I see cute puppies on here all the time, this is mine.  Her name is Peaches!",
  "imageUrl": "https://i.imgur.com/0pnOD7s.jpg",
  "shopId": 46
},
{
  "name": "Cute Corgi Puppies ever",
  "imageUrl": "https://i.imgur.com/iSrdbZe.jpg",
  "shopId": 22
},
{
  "name": "Richie and Minx are ready for Christmas!",
  "imageUrl": "https://i.imgur.com/C8cCYzX.jpg",
  "shopId": 10
},
{
  "name": "My friends dogs had the most adorable puppies",
  "imageUrl": "https://i.imgur.com/yJfT7cd.jpg",
  "shopId": 37
},
{
  "name": "I find that old dogs can be just as cute as puppies.",
  "imageUrl": "https://i.imgur.com/FhDpsHD.jpg",
  "shopId": 51
},
{
  "name": "I hope this wont happen to anybodies Christmas puppies.",
  "imageUrl": "https://i.imgur.com/RvEi8Lr.jpg",
  "shopId": 18
},
{
  "name": "Lots of cute kitties on Imgur and not enough puppies",
  "imageUrl": "https://i.imgur.com/6Pad32S.jpg",
  "shopId": 2
},
{
  "name": "Aww mom, do I hafta wear a tie?",
  "imageUrl": "https://i.imgur.com/Kv5oT2i.jpg",
  "shopId": 1
},
{
  "name": "sheepdog puppies are too cute",
  "imageUrl": "https://i.imgur.com/diLvAQQ.jpg",
  "shopId": 9
},
{
  "name": "Well, just found out today is my cake day. Imgur, I am about to bribe you with an HD picture of cute German shepherd puppies. Thank you all for being with me this whole year.",
  "imageUrl": "https://i.imgur.com/HnQpwhC.jpg",
  "shopId": 9
},
{
  "name": "I've got puppies out the yin-yang.",
  "imageUrl": "https://i.imgur.com/0beuhgB.jpg",
  "shopId": 2
},
{
  "name": "Such cute puppies!",
  "imageUrl": "https://i.imgur.com/dn0dd9e.jpg",
  "shopId": 17
},
{
  "name": "Lil puppies first snow",
  "imageUrl": "https://i.imgur.com/85yxbll.jpg",
  "shopId": 22
},
{
  "name": "I caught her enjoying some toe beans",
  "imageUrl": "https://i.imgur.com/UNcrck3.jpg",
  "shopId": 17
},
{
  "name": "Cute Adorable Puppies",
  "imageUrl": "https://i.imgur.com/voH9N72.jpg",
  "shopId": 47
},
{
  "name": "The I-just-peed-on-the-floor-but-I-know-you-won't-get-mad-at-a-face-like-this look",
  "imageUrl": "https://i.imgur.com/N6hmyZS.jpg",
  "shopId": 3
},
{
  "name": "Cute puppies or fired chicken ?",
  "imageUrl": "https://i.imgur.com/kAzGPe1.jpg",
  "shopId": 36
},
{
  "name": "Puppies had a long day with their dad today!",
  "imageUrl": "https://i.imgur.com/FyTL5nf.jpg",
  "shopId": 27
},
{
  "name": "FREAKING CUTE PUPPY",
  "imageUrl": "https://i.imgur.com/eyLNNQz.jpg",
  "shopId": 25
},
{
  "name": "Sleeping Puppies",
  "imageUrl": "https://i.imgur.com/E0Md8Tc.jpg",
  "shopId": 28
},
{
  "name": "Puppies",
  "imageUrl": "https://i.imgur.com/FWuUbEy.jpg",
  "shopId": 34
},
{
  "name": "If puppies and kittens could have babies they would look like Fennec Foxes.",
  "imageUrl": "https://i.imgur.com/vzkOjvI.jpg",
  "shopId": 9
},
{
  "name": "My sisters puppies being cute!",
  "imageUrl": "https://i.imgur.com/JsWwhdy.jpg",
  "shopId": 11
},
{
  "name": "Pile of Puppies!!!",
  "imageUrl": "https://i.imgur.com/wJs0I1Z.jpg",
  "shopId": 18
},
{
  "name": "Cute font made out of puppies.",
  "imageUrl": "https://i.imgur.com/gfwdV.jpg",
  "shopId": 44
},
{
  "name": "I KNOW y'all like cute puppies. This is Kip, I just wanted to show him off :3",
  "imageUrl": "https://i.imgur.com/yb6O2Uj.jpg",
  "shopId": 25
},
{
  "name": "Cute White Husky Puppies",
  "imageUrl": "https://i.imgur.com/VSXIEsE.jpg",
  "shopId": 8
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/gihymKK.jpg",
  "shopId": 26
},
{
  "name": "Met some puppies doing their thing this weekend.",
  "imageUrl": "https://i.imgur.com/yRXRjHU.jpg",
  "shopId": 16
},
{
  "name": "We were worried about our new Husky puppies being rough with our 9lb Bichon",
  "imageUrl": "https://i.imgur.com/Zwjv8hZ.jpg",
  "shopId": 56
},
{
  "name": "I can also search Cute Puppies",
  "imageUrl": "https://i.imgur.com/UXZmhze.jpg",
  "shopId": 18
},
{
  "name": "GUYS, LOOK AT THE CUTE PUPPIES",
  "imageUrl": "https://i.imgur.com/p4Zzc3w.jpg",
  "shopId": 45
},
{
  "name": "I heard you like puppies?",
  "imageUrl": "https://i.imgur.com/MkF5T9x.jpg",
  "shopId": 59
},
{
  "name": "My wife was mad at me so I turned on the Animal Planet show Too Cute! Puppies. She's now happy and rubbing my shoulders",
  "imageUrl": "https://i.imgur.com/tQUQw0m.jpg",
  "shopId": 36
},
{
  "name": "Am I cute?",
  "imageUrl": "https://i.imgur.com/qGkxWHC.jpg",
  "shopId": 57
},
{
  "name": "Lucy Liu covered in puppies. What else could you want?",
  "imageUrl": "https://i.imgur.com/ImxKa5O.jpg",
  "shopId": 41
},
{
  "name": "Stop looking up here and focus on the cute ass puppies!",
  "imageUrl": "https://i.imgur.com/8leNKwB.jpg",
  "shopId": 47
},
{
  "name": "Two puppies",
  "imageUrl": "https://i.imgur.com/VOfVmD1.jpg",
  "shopId": 16
},
{
  "name": "Hey. I heard you guys like cute puppies.  This one's mine.",
  "imageUrl": "https://i.imgur.com/Fs3TI.jpg",
  "shopId": 57
},
{
  "name": "A cart full of dogs",
  "imageUrl": "https://i.imgur.com/5YqcTaH.jpg",
  "shopId": 5
},
{
  "name": "My 2 puppies had a bath.",
  "imageUrl": "https://i.imgur.com/hyaYWfy.jpg",
  "shopId": 21
},
{
  "name": "Rub a Dub Dub, Three Puppies in the Tub",
  "imageUrl": "https://i.imgur.com/PWht4Lp.jpg",
  "shopId": 35
},
{
  "name": "Puppies first day at the beach!",
  "imageUrl": "https://i.imgur.com/Kibb1dv.jpg",
  "shopId": 22
},
{
  "name": "everybody say hi to my new puppers, Frank and Beans",
  "imageUrl": "https://i.imgur.com/tHhy4UN.jpg",
  "shopId": 53
},
{
  "name": "I heard you like puppies",
  "imageUrl": "https://i.imgur.com/xl5U5mr.jpg",
  "shopId": 37
},
{
  "name": "Albus rests after a rumble",
  "imageUrl": "https://i.imgur.com/zH0V967.jpg",
  "shopId": 38
},
{
  "name": "hihi....",
  "imageUrl": "https://i.imgur.com/KwY9C8W.jpg",
  "shopId": 20
},
{
  "name": "Hi Imgur, this is Mufasa",
  "imageUrl": "https://i.imgur.com/v3g9f.jpg",
  "shopId": 48
},
{
  "name": "someone sent me pictures of some kavkazskaja ovtjarka puppies for sale and i am dying of the cute",
  "imageUrl": "https://i.imgur.com/CVnMRcy.jpg",
  "shopId": 57
},
{
  "name": "Bucket full of puppies.",
  "imageUrl": "https://i.imgur.com/LIUCWbu.jpg",
  "shopId": 4
},
{
  "name": "Enjoy these cute puppies from Japan",
  "imageUrl": "https://i.imgur.com/OzvLekS.jpg",
  "shopId": 60
},
{
  "name": "Superbly cute black beauty in puppies",
  "imageUrl": "https://i.imgur.com/oCTfWdP.jpg",
  "shopId": 13
},
{
  "name": "Dashing Puppies Grass Walk",
  "imageUrl": "https://i.imgur.com/DGl7mW5.jpg",
  "shopId": 5
},
{
  "name": "Brought this little girl home. Shes been living only in a cage and we bought her this right away amd she wont get out.",
  "imageUrl": "https://i.imgur.com/a4DTKVr.jpg",
  "shopId": 20
},
{
  "name": "Here are some guide puppies playing in the snow to kickstart your Tuesday!",
  "imageUrl": "https://i.imgur.com/vzVBT61.jpg",
  "shopId": 43
},
{
  "name": "Kittens and puppies aren't the only cute baby animals!",
  "imageUrl": "https://i.imgur.com/YJMsOrS.jpg",
  "shopId": 24
},
{
  "name": "Old dogs can be just as cute as puppies.",
  "imageUrl": "https://i.imgur.com/M1m9f4Z.jpg",
  "shopId": 35
},
{
  "name": "Cute puppies + the Rock",
  "imageUrl": "https://i.imgur.com/rtY5jpZ.jpg",
  "shopId": 12
},
{
  "name": "Ivan & Olga",
  "imageUrl": "https://i.imgur.com/R0sV962.jpg",
  "shopId": 25
},
{
  "name": "One Of Five Puppies Living In My Backyard.",
  "imageUrl": "https://i.imgur.com/jTpgvL0.jpg",
  "shopId": 58
},
{
  "name": "Cute puppies keep baby warm",
  "imageUrl": "https://i.imgur.com/gcDxXjM.jpg",
  "shopId": 12
},
{
  "name": "All this LNI, feels, and cute puppies but",
  "imageUrl": "https://i.imgur.com/DhiivhC.jpg",
  "shopId": 27
},
{
  "name": "My newborn son has acquired two guard puppies.",
  "imageUrl": "https://i.imgur.com/Lbk6sdc.jpg",
  "shopId": 28
},
{
  "name": "Adorable husky puppies.",
  "imageUrl": "https://i.imgur.com/7T54u3f.jpg",
  "shopId": 23
},
{
  "name": "Such a handsome pup..",
  "imageUrl": "https://i.imgur.com/9pXxwkO.jpg",
  "shopId": 46
},
{
  "name": "I heard y'all like puppies and foxes...",
  "imageUrl": "https://i.imgur.com/aGRGbyV.jpg",
  "shopId": 52
},
{
  "name": "My friend just got two new puppies!",
  "imageUrl": "https://i.imgur.com/LNYYQMd.jpg",
  "shopId": 32
},
{
  "name": "Dirt & puppies.  The original vaccine.",
  "imageUrl": "https://i.imgur.com/Im86HjR.jpg",
  "shopId": 20
},
{
  "name": "A bag of puppies",
  "imageUrl": "https://i.imgur.com/7163x8T.jpg",
  "shopId": 52
},
{
  "name": "Puppies are cute, right?",
  "imageUrl": "https://i.imgur.com/wGstHQP.jpg",
  "shopId": 51
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/MsM7S0Z.jpg",
  "shopId": 53
},
{
  "name": "I heard imgur likes puppies.",
  "imageUrl": "https://i.imgur.com/CZw9VW2.jpg",
  "shopId": 28
},
{
  "name": "Cute Puppies",
  "imageUrl": "https://i.imgur.com/9w619mx.jpg",
  "shopId": 56
},
{
  "name": "My coworker's lab recently had puppies. Here's one taking a stroll with his buddy.",
  "imageUrl": "https://i.imgur.com/eILDWhC.jpg",
  "shopId": 10
},
{
  "name": "Aren't those puppies adorable?",
  "imageUrl": "https://i.imgur.com/k12K58Y.jpg",
  "shopId": 14
},
{
  "name": "Puppies and kittens are cute, but elder dogs need homes too",
  "imageUrl": "https://i.imgur.com/YB8ixAG.jpg",
  "shopId": 1
},
{
  "name": "Just my puppies.",
  "imageUrl": "https://i.imgur.com/NQ5k0Oh.jpg",
  "shopId": 18
},
{
  "name": "three borks",
  "imageUrl": "https://i.imgur.com/kVruv4X.jpg",
  "shopId": 12
},
{
  "name": "Imgurians don't seem to enjoy my rescue Pomeranians",
  "imageUrl": "https://i.imgur.com/n4SAQuS.jpg",
  "shopId": 17
},
{
  "name": "go to viking-event..end up with pictures of cute puppies instead!",
  "imageUrl": "https://i.imgur.com/oBSUJZ5.jpg",
  "shopId": 15
},
{
  "name": "2 puppies 1 brick",
  "imageUrl": "https://i.imgur.com/0wbrrHN.jpg",
  "shopId": 13
},
{
  "name": "New Puppies",
  "imageUrl": "https://i.imgur.com/UUfAmCp.jpg",
  "shopId": 47
},
{
  "name": "Puppies first snow",
  "imageUrl": "https://i.imgur.com/P0ULLH6.jpg",
  "shopId": 7
},
{
  "name": "I work at a vet clinic and someone brought in a basket of puppies today.",
  "imageUrl": "https://i.imgur.com/F7NS8bT.jpg",
  "shopId": 36
},
{
  "name": "Puppies are cute and all, but the old guys don't get enough credit.",
  "imageUrl": "https://i.imgur.com/Ecplt7k.jpg",
  "shopId": 49
},
{
  "name": "Just some cute puppies",
  "imageUrl": "https://i.imgur.com/1362hWv.jpg",
  "shopId": 18
},
{
  "name": "My Great Dane Puppies At Only 8 Months Old",
  "imageUrl": "https://i.imgur.com/kJpnqL6.jpg",
  "shopId": 19
},
{
  "name": "TIL bull terrier puppies have eggs for heads.",
  "imageUrl": "https://i.imgur.com/G9Zzujw.jpg",
  "shopId": 42
},
{
  "name": "Looking cute is so darn exhausting",
  "imageUrl": "https://i.imgur.com/WDPsbVJ.jpg",
  "shopId": 29
},
{
  "name": "My parents' farm dog had puppies yesterday.",
  "imageUrl": "https://i.imgur.com/71TcBUt.jpg",
  "shopId": 51
},
{
  "name": "Googled cute Indian puppies and found this...",
  "imageUrl": "https://i.imgur.com/caeNbhN.jpg",
  "shopId": 27
}]

var labradoodles = [{
  "name": "LIttle Millie in the Country",
  "avatarurl": "https://i.imgur.com/k4XkULG.jpg"
},
{
  "name": "Henri - Chocolate Australian Labradoodle",
  "avatarurl": "https://i.imgur.com/3Z5aduj.jpg"
},
{
  "name": "Labradoodle are the BEST!",
  "avatarurl": "https://i.imgur.com/iDHM4wj.jpg"
},
{
  "name": "Our Labradoodle: Chewie",
  "avatarurl": "https://i.imgur.com/aTOusKm.jpg"
},
{
  "name": "My labradoodle puppy getting a sink bath",
  "avatarurl": "https://i.imgur.com/Ft1aFYJ.jpg"
},
{
  "name": "Ellie the special needs labradoodle",
  "avatarurl": "https://i.imgur.com/aHvU0RA.jpg"
},
{
  "name": "Brodie Man!",
  "avatarurl": "https://i.imgur.com/4fLSCh9.jpg"
},
{
  "name": "Jackson - Miniature Australian Labradoodle",
  "avatarurl": "https://i.imgur.com/Rm1KV36.jpg"
},
{
  "name": "Please help me, my muzzle is frozen",
  "avatarurl": "https://i.imgur.com/Ow1VVXV.jpg"
},
{
  "name": "Timber the Labradoodle",
  "avatarurl": "https://i.imgur.com/ReUQMno.jpg"
},
{
  "name": "this is how my labradoodle saddie sits on the couch",
  "avatarurl": "https://i.imgur.com/FiDTFN5.jpg"
},
{
  "name": "Our new Australian Labradoodle, Murphy!",
  "avatarurl": "https://i.imgur.com/KGFpvTy.jpg"
},
{
  "name": "My cousin has labradoodle puppies, this guy was a little tired",
  "avatarurl": "https://i.imgur.com/o2GMVu1.jpg"
},
{
  "name": "Life is ruff",
  "avatarurl": "https://i.imgur.com/Ui1ho5x.jpg"
},
{
  "name": "Dog Portraits from Photos",
  "avatarurl": "https://i.imgur.com/aM7hKp9.jpg"
},
{
  "name": "Found this image it made me laugh. So here I am dropping it at your feet like an unreasonably proud labradoodle w/ a dead rat.",
  "avatarurl": "https://i.imgur.com/F2VNpyV.jpg"
},
{
  "name": "Meet Maggie - My 10 week old Labradoodle",
  "avatarurl": "https://i.imgur.com/p1TQLlB.jpg"
},
{
  "name": "Frozen Beach",
  "avatarurl": "https://i.imgur.com/SLNMcka.jpg"
},
{
  "name": "Cooper the Labradoodle",
  "avatarurl": "https://i.imgur.com/S4P72b0.jpg"
},
{
  "name": "My mom's adorable labradoodle on Halloween. :3 sorry late post, deployed.",
  "avatarurl": "https://i.imgur.com/Z3rIFRl.jpg"
},
{
  "name": "Our labradoodle puppy",
  "avatarurl": "https://i.imgur.com/LtJyb9j.jpg"
},
{
  "name": "75 pounds of pure pissed off majesticness, Sir Mumford Salvatore.",
  "avatarurl": "https://i.imgur.com/LjY5R7U.jpg"
},
{
  "name": "Just A Pup With His Pup - Meet Samson, 10 month old Labradoodle.",
  "avatarurl": "https://i.imgur.com/3or5tf9.jpg"
},
{
  "name": "My friend has a new labradoodle puppy!",
  "avatarurl": "https://i.imgur.com/MpzckFc.jpg"
},
{
  "name": "She always does this when I work out.",
  "avatarurl": "https://i.imgur.com/4bsEOSz.jpg"
},
{
  "name": "thought i would upload a picture of my dog",
  "avatarurl": "https://i.imgur.com/Ibpm085.jpg"
},
{
  "name": "Missing Apple",
  "avatarurl": "https://i.imgur.com/A68iZas.jpg"
},
{
  "name": "Thought you guys would enjoy this pic of my 1 year old labradoodle Obi! My the fourth be with you!",
  "avatarurl": "https://i.imgur.com/aOwN0Dn.jpg"
},
{
  "name": "My girl and me.",
  "avatarurl": "https://i.imgur.com/XSiz1bT.jpg"
},
{
  "name": "Miniature Australian Labradoodle",
  "avatarurl": "https://i.imgur.com/zquhpJB.jpg"
},
{
  "name": "Biscuit - Mini Australian Labradoodle",
  "avatarurl": "https://i.imgur.com/eeD2CfN.jpg"
},
{
  "name": "Meet Scruff, my fabulous labradoodle",
  "avatarurl": "https://i.imgur.com/oEGNzEa.jpg"
},
{
  "name": "My SO snapped this picture of my brother's labradoodle",
  "avatarurl": "https://i.imgur.com/ZCrnUek.jpg"
},
{
  "name": "New labradoodle puppy - Moose",
  "avatarurl": "https://i.imgur.com/ek6K744.jpg"
},
{
  "name": "Meet our new Labradoodle puppy, chillin with his big sister.",
  "avatarurl": "https://i.imgur.com/uO1QGsx.jpg"
},
{
  "name": "Labradoodle <3",
  "avatarurl": "https://i.imgur.com/3JY8Krc.jpg"
},
{
  "name": "Labradoodle puppy just being herself.",
  "avatarurl": "https://i.imgur.com/b0zyrQs.jpg"
},
{
  "name": "Introducing our first family fur baby: Reggie, the miniature Labradoodle.",
  "avatarurl": "https://i.imgur.com/qml9Wqz.jpg"
},
{
  "name": "Labradoodle/German Shepherd puppies just arrived, those little claws!",
  "avatarurl": "https://i.imgur.com/dFrcwPW.jpg"
},
{
  "name": "Kickin' it back with my best labradoodle bud",
  "avatarurl": "https://i.imgur.com/2j3liqn.jpg"
},
{
  "name": "Baris the Labradoodle says Hi!",
  "avatarurl": "https://i.imgur.com/Nc5Jcym.jpg"
},
{
  "name": "Labradoodle Lane",
  "avatarurl": "https://i.imgur.com/vmnUjAh.jpg"
},
{
  "name": "My Doberman and Labradoodle!",
  "avatarurl": "https://i.imgur.com/3aKCbQY.jpg"
},
{
  "name": "Mom's Xmas Labradoodle Puppy",
  "avatarurl": "https://i.imgur.com/qjEFfVu.jpg"
},
{
  "name": "My Little Mischievous Labradoodle, Biba.",
  "avatarurl": "https://i.imgur.com/KgGRjgE.jpg"
},
{
  "name": "the labradoodle got a haircut",
  "avatarurl": "https://i.imgur.com/HnJf7dL.jpg"
},
{
  "name": "Meet our new Husky Labradoodle Zoey!",
  "avatarurl": "https://i.imgur.com/M07MVKL.jpg"
},
{
  "name": "Meet Skipper, the giant labradoodle puppy!",
  "avatarurl": "https://i.imgur.com/YL390xe.jpg"
},
{
  "name": "Our new little guy, Benjamin the labradoodle",
  "avatarurl": "https://i.imgur.com/n8TES4u.jpg"
},
{
  "name": "Hey its my first cakeday! Heres my labradoodle, Sam!",
  "avatarurl": "https://i.imgur.com/7t3Jhm2.jpg"
},
{
  "name": "Reddit Meet Summer! 8 Week Old Labradoodle!",
  "avatarurl": "https://i.imgur.com/G0BpXyP.jpg"
},
{
  "name": "My new labradoodle, Winston, is excited for his first day at the park!",
  "avatarurl": "https://i.imgur.com/fFgHrxG.jpg"
},
{
  "name": "Name our little girl labradoodle pup! NOT LAMBCHOP",
  "avatarurl": "https://i.imgur.com/uR2dtvE.jpg"
},
{
  "name": "Groomer found the oodle in my labradoodle.",
  "avatarurl": "https://i.imgur.com/65TOtWB.jpg"
},
{
  "name": "Meet Eviee. My almost 2 year old Labradoodle!",
  "avatarurl": "https://i.imgur.com/YxZnXRd.jpg"
},
{
  "name": "My labradoodle holds his leash in his mouth and directs me where he'd like to go.",
  "avatarurl": "https://i.imgur.com/VV5YEWY.jpg"
},
{
  "name": "Our labradoodle pup curls up in our daughter's toy bin, but only after they go to bed and he can't be near them.",
  "avatarurl": "https://i.imgur.com/kuyQrr0.jpg"
},
{
  "name": "My Australian Labradoodle just turned 14, here is one of my favorite pictures of him for you all!",
  "avatarurl": "https://i.imgur.com/0yHN7EO.jpg"
},
{
  "name": "Labradoodle Pups",
  "avatarurl": "https://i.imgur.com/taxxCin.jpg"
},
{
  "name": "Meet my labradoodle, Scotty!",
  "avatarurl": "https://i.imgur.com/Zc4YFdH.jpg"
},
{
  "name": "Labradoodle and me",
  "avatarurl": "https://i.imgur.com/ajeP5VJ.jpg"
},
{
  "name": "Labradoodle on the Couch",
  "avatarurl": "https://i.imgur.com/329NiLZ.jpg"
}]

Shop.sync(() => {
})
  .then((data) => {
    Shop.bulkCreate(labradoodles)
      .then(success => {
        console.log(`success: ${success}`)
      })
      .catch(error => {
        console.log(`error: ${error}`)
      })
  })
  .catch(error => {
      console.log(`error: ${error}`)
  })

Product.sync(() => {
})
  .then((data) => {
    Product.bulkCreate(puppies)
      .then(success => {
        console.log(`success: ${success}`)
      })
      .catch(error => {
        console.log(`error: ${error}`)
      })
  })
  .catch(error => {
      console.log(`error: ${error}`)
  })


